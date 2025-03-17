import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getPosts, deletePost } from "../api/posts";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts();
        setPosts(response);
        setLoading(false);
      } catch (err) {
        setError("获取数据失败：" + err.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (id, e) => {
    e.stopPropagation();
    if (window.confirm("确定要删除这篇帖子吗？")) {
      try {
        await deletePost(id);
        setPosts(posts.filter((post) => post.id !== id));
      } catch (err) {
        alert("删除失败：" + err.message);
      }
    }
  };

  if (loading) return <div>加载中...</div>;
  if (error) return <div>{error}</div>;
  if (!posts || posts.length === 0) return <div>暂无帖子</div>;

  return (
    <div>
      <h2>帖子列表</h2>
      <div className="post-list">
        {posts.map((post) => (
          <div
            key={post.id}
            className="post-item"
            onClick={() => navigate(`/posts/${post.id}`)}
          >
            <h3>{post.title}</h3>
            <div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/posts/${post.id}/edit`);
                }}
              >
                编辑
              </button>
              <button onClick={(e) => handleDelete(post.id, e)}>删除</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
