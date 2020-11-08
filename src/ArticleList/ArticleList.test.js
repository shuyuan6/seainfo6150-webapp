import React from "react";
import ArticleList from "./ArticleList";

describe("ArticleList tests", () => {
  it("renders correctly", () => {
    const articles1 = [
       {
            title : "A title",
            timeStamp: "1919-01-01",
            displayDate: "1919-01-02",
            slug: "slug1",
            
        },
        {
            title : "A title",
            timeStamp: "1919-01-01",
            displayDate: "1919-01-02",
            slug: "slug2",
            
        }
    ]
    const { container } = render(<ArticleList articles={articles1}/>);
    expect(container).toMatchSnapshot();
  });
});
