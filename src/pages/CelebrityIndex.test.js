import { render } from "@testing-library/react";
import CelebrityIndex from "./CelebrityIndex";

describe("<CelebrityIndex />", () => {
  it("renders without crashing", () => {});
  it("renders  cards", () => {});
});
it("renders celebrity cards", () => {
  const div = document.createElement("div");
  render(<CelebrityIndex celebrities={mockcelebrities} />, div);
  mockCelebrities.forEach((celebrity) => {
    const celebrityName = screen.getByText(celebrity.name);
    expect(celebrityName).toBeInTheDocument();
  });
});
