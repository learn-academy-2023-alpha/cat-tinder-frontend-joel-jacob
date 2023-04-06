import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { screen, render } from "@testing-library/react";

describe("<Footer />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });
});
