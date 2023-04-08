import { render,screen } from "@testing-library/react";
import CelebrityShow from "./CelebrityShow";
import celebrities from "../mockCelebrity";
import { MemoryRouter,Routes,Route } from "react-router-dom";


const renderShow = () =>{
render(
  <MemoryRouter initialEntries={['celebrityshow/1']}>
   <Routes>
   <Route path="/celebrityshow/:id" element={<CelebrityShow celebrities={celebrities} />}/>
   </Routes>
   </MemoryRouter>
)
}

describe("<CelebrityShow />", () => {
  it("renders celebrity name attribute", () => {
renderShow()
screen.logTestingPlaygroundURL();
const name = screen.getByText(`${celebrities[0].name}`)
expect(name).toBeInTheDocument()
  });
});

