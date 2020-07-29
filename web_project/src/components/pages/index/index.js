import React from "react";
import NavigationBar from "../../navigation";
import Body from "./Body";
// import { useState } from "react";
// import {Button} from "react-bootstrap";



function IndexPage() {
  //   const [error, setError] = useState(null);
  //   const [isLoaded, setIsLoaded] = useState(false);
  // const [items, setItems] = useState({h1: "None", h2: "no"});

  // const data = {
  //   department: "EE",
  //   number: "0150",
  //   subnumber: "01",
  //   semester: "Spring",
  //   year: "2020"
  // };

  // const data = { "name": "parallel computing" };

  return (
    <div>
      <NavigationBar />
      <Body />
      {/* <h1>{items.h1}</h1>
      <Button
        onClick={async () => {
          let response = await fetch("/detail", {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              return data;
            });
          console.log(response);
          setItems({...items, h1:response.info.title});
        }}
      >Change None</Button>
      <h2>{items.h2}</h2>
      <Button
        onClick={async () => {
          let response = await fetch("/courses/parallel computing" 
          )
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              return data;
            });
          console.log(response);
          setItems({...items, h2: response.result[0].department});
        }}
      >Change no</Button> */}
    </div>
  );
}

export default IndexPage;
