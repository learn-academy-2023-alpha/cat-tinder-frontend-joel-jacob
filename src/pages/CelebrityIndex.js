import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle} from "reactstrap";
import { NavLink } from "react-router-dom";

const CelebrityIndex = ({ celebrities }) => {
  console.log(celebrities)
  return (
    <>
      <div className="celebrity-index-cards">
        {celebrities?.map((celebrity, index) => {
          return (
            <Card
              style={{
                width: "18rem",
              }}
              key={index}
            >
              <img
              alt={celebrity.name} 
              src={celebrity.image} />
              <CardBody>
                <CardTitle tag="h5">{celebrity.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                 Age: {celebrity.age}
                </CardSubtitle>
                <NavLink
                  to={`/celebrityshow/${celebrity.id}`}
                  className="nav-link"
                >
                  See more
                </NavLink>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default CelebrityIndex;
