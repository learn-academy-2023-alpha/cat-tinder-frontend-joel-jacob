import Header from "./Header";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("<Header />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    );
    screen.logTestingPlaygroundURL();
    const header = screen.getByRole("link", { name: /celebrity tinder!/i });
    expect(header).toBeInTheDocument();
  });
});
