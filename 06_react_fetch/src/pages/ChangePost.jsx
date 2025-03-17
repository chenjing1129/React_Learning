import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostById, updatePost } from "../api/posts";

const ChangePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await getPostById(id);
        setTitle(response.title);
        setContent(response.body);
        setLoading(false);
      } catch (err) {
        setError("获取文章失败：" + err.message);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("标题和内容不能为空！");
      return;
    }

    setSubmitting(true);
    try {
      await updatePost(id, {
        title: title.trim(),
        body: content.trim(),
      });
      navigate("/");
    } catch (err) {
      alert("更新失败：" + err.message);
      setSubmitting(false);
    }
  };

  if (loading) return <div>加载中...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>修改文章</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">标题：</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">内容：</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit" disabled={submitting}>
          {submitting ? "更新中..." : "更新文章"}
        </button>
      </form>
    </div>
  );
};

export default ChangePost;
