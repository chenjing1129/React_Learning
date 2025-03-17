import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../api/posts";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("标题和内容不能为空！");
      return;
    }

    setSubmitting(true);
    try {
      await createPost({
        title: title.trim(),
        body: content.trim(),
      });
      navigate("/");
    } catch (err) {
      alert("发布失败：" + err.message);
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>新建文章</h2>
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
          {submitting ? "发布中..." : "发布文章"}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
