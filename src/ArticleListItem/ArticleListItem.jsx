import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton.jsx";
import styles  from "./ArticleListItem.module.css";

const ArticleListItem = (props) => {
  const [expand, setExpand] = useState(false);


  function handleButtonClicked() {
    setExpand(prev => !prev)
    console.log("In articleListItem I felt that button is clicked")
  }
  
  function Display(state) {
    if (state.expand) {
      return (
        <>
        <time className={styles.timeStamp} dateTime={props.article.timeStamp}>
          {props.article.displayDate}
        </time>
        <p>{props.article.shortText}</p>
        </>
      )
    } else {
      return "";
    }
  }

  return (
    <>
      <article className={styles.item}>
        <h2 className={styles.title}>{props.article.title}</h2>
        <Display expand={expand} />
      </article>
      <ArticleTextToggleButton buttonClickedNotify = {handleButtonClicked} />
    </>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired,
};
export default ArticleListItem;
