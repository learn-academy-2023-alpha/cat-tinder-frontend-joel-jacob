import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";
import { screen, render } from "@testing-library/react";

describe("<Footer />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
      div
    );

    screen.logTestingPlaygroundURL();
    const footer = screen.getByText(/© joel carr & jacob ross/i);
    expect(footer).toBeInTheDocument();
  });
});
