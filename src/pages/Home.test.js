import { screen, render } from "@testing-library/react";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";

describe("<Home />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
      div
    );

    screen.logTestingPlaygroundURL();
    const home = screen.getByRole("heading", {
      name: /welcome everyone to the greatest show you never saw, yet!/i,
    });
    expect(home).toBeInTheDocument();
  });
});
