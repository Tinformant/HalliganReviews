import React from "react";
import "./QuerySheet.css";
import { MDBContainer, MDBRating } from "mdbreact";

function StarRating() {
    // TODO: optimize the rating stars effect: start from the empty stars and hover on filled stars 
    const [basic] = React.useState([
      { tooltip: "Terrible" },
      { tooltip: "Fair" },
      { tooltip: "Good" },
      { tooltip: "Excellent" },
      { tooltip: "Perfect" },
    ]);
  
    return (
      <MDBContainer>
        <MDBRating
          iconClassName='rating-star'
          fillClassName='rating-star-filled'
          data={basic}
        />
      </MDBContainer>
    );
  }
  
  export default StarRating;
  