  
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleImage.module.css'

const ArticleImage = ({url, title}) => {
    return (
    <img src = {url} alt = {title} className = {styles.image}/>
    );
}

ArticleImage.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }
  
  export default ArticleImage