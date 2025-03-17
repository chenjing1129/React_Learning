import { get, post, put, del } from "./request";

// 获取文章列表
export const getPosts = () => {
  return get("/posts");
};

// 获取单个文章详情
export const getPostById = (id) => {
  return get(`/posts/${id}`);
};

// 创建新文章
export const createPost = (data) => {
  return post("/posts", data);
};

// 更新文章
export const updatePost = (id, data) => {
  return put(`/posts/${id}`, data);
};

// 删除文章
export const deletePost = (id) => {
  return del(`/posts/${id}`);
};
