import React, { useState, useEffect } from "react";
import { getFilmList } from "../api/film";
import "../styles/components/FilmList.css";

const FilmList = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        setLoading(true);
        const data = await getFilmList(currentPage, pageSize);
        setFilms(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchFilms();
  }, [currentPage, pageSize]);

  if (loading) return <div className="loading">加载中...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="film-container">
      <h2>电影列表</h2>
      <div className="film-grid">
        {films.map((film) => (
          <div key={film.id} className="film-card">
            <div className="film-card-inner">
              <img src={film.picUrl} alt={film.title} className="film-image" />
              <div className="film-content">
                <h3>{film.title}</h3>
                <p className="film-description">{film.description}</p>
                <div className="film-footer">
                  <span className="film-time">{film.ctime}</span>
                  <button className="view-details">查看详情</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          className="pagination-button"
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          disabled={currentPage === 1 || loading}
        >
          上一页
        </button>
        <span className="page-info">第 {currentPage} 页</span>
        <button
          className="pagination-button"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={loading}
        >
          下一页
        </button>
      </div>
    </div>
  );
};

export default FilmList;
