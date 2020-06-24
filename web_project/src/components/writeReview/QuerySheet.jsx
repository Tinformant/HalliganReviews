import React from "react";
import "./QuerySheet.css";
import { MDBContainer, MDBRating } from "mdbreact";

function QuerySheet() {
  const [basic] = React.useState([
    {
      tooltip: "Terrible",
    },
    {
      tooltip: "Fair",
    },
    {
      tooltip: "Good",
    },
    {
      tooltip: "Excellent",
    },
    {
      tooltip: "Perfect",
    },
  ]);
  const colors = ['orange-text',
  'orange-text',
  'orange-text',
  'orange-text',
  'orange-text'];
  return (
    <MDBContainer>
      <MDBRating
        fillClassName="star-empty"
        data={basic}
        fillColors={colors}
      />
    </MDBContainer>
  );
}

export default QuerySheet;
