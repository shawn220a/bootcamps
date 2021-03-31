import React, { useContext } from "react";
import ArticleContext from "../../utils/ArticleContext";
import "./style.css";

function SearchResults() {
  const article = useContext(ArticleContext);

  return (
    <ul className="list-group search-results">
      <li className="list-group-item">
        <h2>{article.title}</h2>
        <a href={article.url}>{article.url}</a>
      </li>
    </ul>
  );
}

export default SearchResults;
