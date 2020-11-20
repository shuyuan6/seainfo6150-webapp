import { render } from "@testing-library/react";
import React from "react";
import ArticleImage from "./ArticleImage";

describe("ArticleImage test", () => {
    it("renders correctly", () => {
        const {container} = render(<ArticleImage url = "https://cdn.cnn.com/cnnnext/dam/assets/181122102925-statue-of-liberty-crown-super-169.jpg" title = "status" />);
        expect(container).toMatchSnapshot();
    });
});