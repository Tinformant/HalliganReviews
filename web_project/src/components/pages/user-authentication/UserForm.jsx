import React from "react";
import {
  Tab,
  Nav,
  Form,
  Col,Row,
  Button,
} from "react-bootstrap";

const LogInForm = (props) => {
  return (
    <Form className='login-form'>
      <Form.Label className='login-email-label' htmlFor='login-email'>
        Email Address
      </Form.Label>
      <Row noGutters className='login-email-row'>
        <Col className='login-email-name-item'>
          <Form.Control
            id='login-email'
            placeholder='First. Last'
          />
        </Col>
        <Col className='login-domain-item'>
          <span className='login-domain-at'>@</span>
          <span className='login-domain-domain'>tufts.edu</span>
        </Col>
      </Row>
      <Form.Label className='login-password-label' htmlFor='login-password'>
        Password
      </Form.Label>
      <Form.Control type='password' id='login-password' />
      <p className='login-forget-password-link'>Can't remember password?</p>
      <Button className='login-submit-button'  block type='submit'>
        Log In
      </Button>
    </Form>
  );
};

const SignUpForm = (props) => {
  return (
    <Form className='signup-form'>
      <div className='signup-username-row'>
        <Form.Label className='signup-username-label' htmlFor='signup-username'>
          Username
        </Form.Label>
        <Form.Control id='signup-username' placeholder='Username' />
      </div>

      <Form.Label className='signup-email-label' htmlFor='signup-email'>
        Email Address
      </Form.Label>
      <Row noGutters className='signup-email-row'>
        <Col className='signup-email-name-item'>
          <Form.Control id='signup-email' placeholder='First. Last' />
        </Col>
        <Col className='signup-domain-item'>
          <span className='signup-domain-at'>@</span>
          <span className='signup-domain-domain'>tufts.edu</span>
        </Col>
      </Row>
      <div className='signup-password-row'>
        <Form.Label className='signup-password-label' htmlFor='signup-password'>
          Password
        </Form.Label>
        <Form.Control type='password' id='signup-password' />
      </div>
      <div className='signup-confirm-password-row'>
        <Form.Label
          className='signup-confirm-password-label'
          htmlFor='signup-confirm-password'>
          Confirm Password
        </Form.Label>
        <Form.Control type='password' id='signup-confirm-password' />
      </div>
      <Button className='signup-submit-button' block type='submit'>
        Sign Up
      </Button>
    </Form>
  );
};

export default function UserForm(props) {
  const [key, setKey] = React.useState(props.activeKey);
  return (
    <Tab.Container
      id='user-form-tab'
      activeKey={key}
      onSelect={(k) => setKey(k)}>
      <Nav variant='none' bg='none' className='user-form-nav'>
        <Nav.Item className='user-form-item'>
          <Nav.Link className='user-form-link' href='/user/login' eventKey='login'>
            LOG IN
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className='user-form-item'>
          <Nav.Link className='user-form-link' href='/user/signup' eventKey='signup'>
            SIGN UP
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content className='user-form-pane'>
        <Tab.Pane eventKey='login'>
          <LogInForm />
        </Tab.Pane>
        <Tab.Pane eventKey='signup'>
          <SignUpForm />
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
}
