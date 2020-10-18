import React, { useEffect, useState } from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem.jsx"
import { isEmpty } from "lodash";

const ArticleList = (props) => {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://demo1390455.mockable.io/articles"
      );
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  let displayContent;

  console.log(typeof fetchedData);

  let vs = Object.values(fetchedData);
  
  if (!isEmpty(fetchedData)) {
    displayContent = (
      <ul>
        {vs.map((item) => <li key={item.slug}> {ArticleListItem(item)} </li>)}
      </ul>
    );
    
  } else {
    displayContent = <div><h1>You have no data!</h1></div>;
  }
  
  return (
    <section>
      {displayContent}
    </section>
  );
};

export default ArticleList;