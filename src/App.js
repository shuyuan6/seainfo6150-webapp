import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import DynamicArticle from "./DynamicArticle/DynamicArticle.jsx";
import { isEmpty } from "lodash";
import ArticleList from "./ArticleList/ArticleList.jsx";

function App() {

  return (
    <div className="App">
      <Switch>
      <Route path = "/ArticleList"><ArticleList/></Route>
        
      </Switch>
    </div>
  );
}

export default App;

