import React from 'react';
import { Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 컴포넌트로 생성(재사용) : styld-components = > js파일과 css파일 관리
const StyledHeadButtonDiv = styled.div`
  border: 1px solid black;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
`;
const StyledHeadLink = styled(Link)`
  border: 1px solid black;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
`;
const Header = () => {
  return (
    <div>
      <StyledHeadButtonDiv backgroundColor={'blue'}>
        <ul>
          <li>
            <StyledHeadLink to="/">홈</StyledHeadLink>
          </li>
          <li>
            <StyledHeadLink to="/login/10">로그인</StyledHeadLink>
          </li>
        </ul>
      </StyledHeadButtonDiv>

      <>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">
              홈
            </Link>
            <Nav.Link href="/">홈</Nav.Link>
            <Nav.Link href="/login">로그인</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <br />
      </>
    </div>
  );
};

export default Header;
