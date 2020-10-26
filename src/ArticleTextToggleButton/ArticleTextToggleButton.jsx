import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react';
import styles  from "./ArticleTextToggleButton.module.css";

const ArticleTextToggleButton = (props) => {
  //const [expand, setExpand] = useState(false);
  const [buttonText, setButtonText] = useState("Show more");

  function buttonClicked() {
    if (buttonText === "Show more") {
        setButtonText(prev => "Show less");
        console.log("Show less");
    } else {
        setButtonText(prev => "Show more");
        console.log("Show more");
    }

    props.buttonClickedNotify()
    //console.log("expand: " + expand);
    
  }
  
    return (
      <div>
          <button className={styles.button} onClick={buttonClicked}>{buttonText}</button>
      </div>
  )
}

export default ArticleTextToggleButton;