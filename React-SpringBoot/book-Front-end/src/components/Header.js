import React from 'react';
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Link to="/" className="navbar-brand">
          홈
        </Link>
        <Link to="/joinForm" className="navbar-link">
          회원가입
        </Link>{' '}
        <Link to="/LoginForm" className="navbar-link">
          로그인
        </Link>
        <Nav className="mr-auto">
          <Link to="/saveForm" className="navbar-link">
            글쓰기
          </Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>

      <br />
    </>
  );
};

export default Header;
