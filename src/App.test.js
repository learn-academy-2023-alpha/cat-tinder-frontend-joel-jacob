import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
describe("<App />", () => {
  it("renders a greeting", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    screen.logTestingPlaygroundURL();
    const greeting = screen.getByRole("heading", {
      name: /welcome everyone to the greatest show you never saw, yet!/i,
    });

    expect(greeting).toBeInTheDocument();
  });

  it("renders a heading", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const heading = screen.getByRole("link", { name: /celebrity tinder!/i });
    expect(heading).toBeInTheDocument();
  });
});
