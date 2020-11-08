import React from "react";
import ArticleTextToggleButton from "./ArticleTextToggleButton";
import { fireEvent } from "@testing-library/react";

describe("ArticleTextToggleButton tests", () => {
  it("renders correctly", () => {
    const onClickFunc = function(){console.log("Hi")}
    const {container} = render(<ArticleTextToggleButton buttonText= "Show more" onClick={onClickFunc}/>);
    expect(container).toMatchSnapshot();
  });
});
