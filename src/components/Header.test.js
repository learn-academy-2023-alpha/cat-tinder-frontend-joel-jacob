import Header from "./Header";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("<Header />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });
});
