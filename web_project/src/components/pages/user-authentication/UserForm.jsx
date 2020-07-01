import React from "react";
import { Tab, Nav } from "react-bootstrap";


export default function UserForm(props) {
  const [key, setKey] = React.useState("props.key");
  return (
    <Tab.Container id="user-form-tab" activeKey={key} onSelect={(k) => setKey(k)}>
      <Nav variant="none" bg="none" className="rev-nav">
        <Nav.Item className="user-form-item">
          <Nav.Link className="user-form-link" eventKey="login">
            LOG IN
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="user-form-item">
          <Nav.Link className="user-form-link" eventKey="signup">
            SIGN UP
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="course">
          <LogInForm data={props.data.course} />
        </Tab.Pane>
        <Tab.Pane eventKey="instructor">
          <SignUpForm data={props.data.instructor} />
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
}