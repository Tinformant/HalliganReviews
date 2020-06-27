import React from "react";
import "./QuerySheet.css";
import { MDBContainer, MDBRating } from "mdbreact";

function StarRating(props) {
    // TODO: optimize the rating stars effect: start from the empty stars and hover on filled stars 
    return (
      <MDBContainer>
        <MDBRating
          iconClassName='rating-star'
          fillClassName='rating-star-filled'
          data={props.basic}
          getValue={props.handleRating}
        />
      </MDBContainer>
    );
  }
  
  export default StarRating;
  