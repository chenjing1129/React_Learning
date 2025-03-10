import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../../data/blog";

const BlogDetails = () => {
  const { blogIndex } = useParams();
  const blogIndexNum = parseInt(blogIndex, 10) - 1; // 将字符串索引转换为数字，并减去1以匹配数组索引
  const blog = blogs[blogIndexNum]; // 获取对应的博客对象

  if (!blog) {
    return <div>博客不存在</div>;
  }

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          color: "#333",
          fontSize: "28px",
          margin: "20px 0 10px",
          textAlign: "center",
        }}
      >
        博客详情
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ color: "#666", fontSize: "24px", margin: 0 }}>
          {blog.title}
        </h3>
        <div style={{ fontSize: "14px", color: "#999" }}>
          <span style={{ marginRight: "10px" }}>作者：{blog.author}</span>
          <span>日期：{blog.date}</span>
        </div>
      </div>
      <div
        style={{
          color: "#333",
          fontSize: "16px",
          lineHeight: "1.6",
          textAlign: "justify",
        }}
      >
        {blog.content}
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "14px", color: "#999" }}>
          <span style={{ marginRight: "10px" }}>浏览量：{blog.views}</span>
          <span>点赞：{blog.likes}</span>
        </div>
        <div
          style={{
            fontSize: "14px",
            color: "#007bff",
            cursor: "pointer",
          }}
        >
          <a href="#" style={{ textDecoration: "underline" }}>
            留言板
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
