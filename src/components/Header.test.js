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
    screen.logTestingPlaygroundURL();
    const Header = screen.getByRole("link", { name: /celebrity tinder!/i });
    expect(Header).toBeInTheDocument();
    const navbar = getByRole("button", { name: /toggle navigation/i });
    expect(navbar).toBeInTheDocument();
  });
});
