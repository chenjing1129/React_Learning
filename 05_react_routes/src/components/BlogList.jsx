import React, { useState } from "react";
import blogs from "../data/blog";
import { Link } from "react-router-dom";
import { List, Card, Pagination } from "antd"; // 引入 Antd 组件

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(1); // 当前页码
  const pageSize = 4; // 每页显示的博客数量

  // 计算分页后的博客数据
  const getCurrentBlogs = () => {
    const startIndex = (currentPage - 1) * pageSize;
    return blogs.slice(startIndex, startIndex + pageSize);
  };

  // 处理页码改变的事件
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // 截取内容并去掉末尾标点
  const getPreviewContent = (content) => {
    const preview = content.substring(0, 100);
    // 检查末尾是否为标点符号，如果是则去掉它
    const punctuationRegex = /[，。、；：“”‘’（）《》？！、,.;:""''()?!]/;
    if (punctuationRegex.test(preview[preview.length - 1])) {
      return preview.slice(0, -1) + "...";
    }
    return preview + "...";
  };

  return (
    <div style={{ padding: "24px" }}>
      <h2>博客列表</h2>
      <List
        grid={{ gutter: 16, column: 1 }} // 设置网格布局，每行 1 列
        dataSource={getCurrentBlogs()} // 使用分页后的数据源
        renderItem={(blog) => (
          <List.Item>
            <Link to={`/blog/${blog.id}`}>
              <Card
                title={blog.title} // 博客标题
                headStyle={{ fontSize: "18px", fontWeight: "bold" }} // 标题样式
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <p style={{ color: "#555" }}>
                  {getPreviewContent(blog.content)}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "8px 16px",
                    fontSize: "14px",
                  }}
                >
                  <span>
                    By {blog.author} {blog.date}
                  </span>
                  <div>
                    <span>浏览量：{blog.views}</span>
                    <span style={{ marginLeft: "8px" }}>
                      点赞：{blog.likes}
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          </List.Item>
        )}
      />
      <Pagination
        current={currentPage}
        total={blogs.length}
        pageSize={pageSize}
        onChange={handlePageChange}
        style={{ marginTop: "24px", textAlign: "center" }}
      />
    </div>
  );
};

export default BlogList;
