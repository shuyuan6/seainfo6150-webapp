import React from "react";
import ArticleListItem from "./ArticleListItem";

describe("ArticleListItem tests", () => {
  it("renders correctly", () => {
    const article1 = {
    
            title : "A title",
            timeStamp: "1919-01-01",
            displayDate: "1919-01-02"
        
    }
    const { container } = render(<ArticleListItem article={article1}/>);
    expect(container).toMatchSnapshot();
  });
});
