import axios from "axios";

const TIANAPI_KEY = "73cc2df513ef9bad40bcc55b9e8c68c3";
const TIANAPI_URL = "https://apis.tianapi.com/film/index";

// 获取电影列表
export const getFilmList = async (page = 1, pageSize = 10) => {
  try {
    const response = await axios.get(TIANAPI_URL, {
      params: {
        key: TIANAPI_KEY,
        num: pageSize,
        page: page,
      },
    });

    if (response.data.code === 200) {
      return response.data.result.newslist;
    } else {
      throw new Error(response.data.msg || "获取电影数据失败");
    }
  } catch (error) {
    console.error("获取电影列表失败:", error);
    throw error;
  }
};
