import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";
import { BrowserRouter } from "react-router-dom";

describe("<NotFound />", () => {
  it("displays text telling my user the page is not found", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    screen.logTestingPlaygroundURL();
    const notFound = screen.getByRole("heading", {
      name: /Celebrity Death Match is on, experience this error\./i,
    });
    expect(notFound).toBeInTheDocument();
    const image = screen.getByRole("img", {
      name: /celebrity death match is on, experience this error\./i,
    });
    expect(image).toBeInTheDocument();
  });
});
