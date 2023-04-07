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

    screen.logTestingPlaygroundURL();
    const Footer = screen.expect(Footer).toBeInTheDocument();
    const image = screen.getByRole("img", {
      name: /celebrity death match is on, experience this error\./i,
    });
    expect(image).toBeInTheDocument();
  });
});
