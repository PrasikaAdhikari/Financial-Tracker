import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LuLogOut, LuNotebookPen } from "react-icons/lu";
import { FaHouseUser } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { useUser } from "../../context/userContext";

const Header = () => {
  const { user, setUser } = useUser();
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      variant="dark"
      data-bs-theme="dark"
      bg="dark"
    >
      <Container>
        <Navbar.Brand href="#home">FT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user && user?._id ? (
              <>
                <Nav.Link as={Link} to="/dashboard">
                  <MdSpaceDashboard />
                  Dashboard
                </Nav.Link>
                <Nav.Link as={Link} to="/transaction">
                  <AiOutlineTransaction />
                  Transaction
                </Nav.Link>
                <Button
                  onClick={() => {
                    //remove user data from context
                    setUser({});
                    localStorage.removeItem("accessToken");
                  }}
                >
                  <LuLogOut />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/signup">
                  <LuNotebookPen />
                  Signup
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  <FaHouseUser />
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
