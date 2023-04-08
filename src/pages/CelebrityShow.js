import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle,NavLink} from "reactstrap";

const CelebrityShow = ({celebrities}) => {
  const { id } = useParams()
  console.log(id)
  let selectedCelebrity = celebrities.find((celebrity) => celebrity.id === +id)
  console.log(selectedCelebrity)

  return (
    <>
     <Card
              style={{
                width: "18rem",
              }}
            >
              <img
               alt={selectedCelebrity.name} 
               src={selectedCelebrity.image} />

              <CardBody>
                <CardTitle tag="h5">{selectedCelebrity.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {selectedCelebrity.age}
                </CardSubtitle>
                <NavLink
                  to={`/celebrityshow/${selectedCelebrity.id}`}
                  className="nav-link"
                >
                  See more
                </NavLink>
              </CardBody>
            </Card>
    </>
  );
};

export default CelebrityShow;
