import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";

import Course from "./evaluations/Course";
import Instructor from "./evaluations/Instructor";
import Comment from "./evaluations/Comment";

function Reveiw(props) {
  const [key, setKey] = useState("course");

  return (
    <Tabs
      id='controlled-tab-example'
      variant='pills'
      activeKey={key}
      onSelect={(k) => setKey(k)}>
      <Tab eventKey='course' title='Course'>
        <Course data={props.data.course} />
      </Tab>
      <Tab eventKey='instructor' title='Instructor'>
        <Instructor data={props.data.instructor} />
      </Tab>
      <Tab eventKey='comment' title='Comment'>
        <Comment data={props.data.comment} />
      </Tab>
    </Tabs>
  );
}

export default Reveiw;
