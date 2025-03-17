import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostById } from "../api/posts";
import "../styles/components/PostDetail.css";

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await getPostById(id);
        setPost(response);
        setLoading(false);
      } catch (err) {
        setError("获取文章详情失败：" + err.message);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div className="post-detail-loading">加载中...</div>;
  if (error) return <div className="post-detail-error">{error}</div>;
  if (!post) return <div className="post-detail-not-found">未找到文章</div>;

  return (
    <div className="post-detail-container">
      <button className="back-button" onClick={() => navigate("/")}>
        <span>←</span> 返回列表
      </button>
      <article className="post-detail-card">
        <img className="post-image" src={post.image} alt={post.title} />
        <div className="post-content">
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            <span className="post-author">作者：{post.author}</span>
            <span className="post-date">发布于：{post.date}</span>
          </div>
          <p className="post-body">{post.body}</p>
        </div>
      </article>
    </div>
  );
};

export default PostDetail;
