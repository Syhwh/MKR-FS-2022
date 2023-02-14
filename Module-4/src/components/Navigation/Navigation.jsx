import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useAuth } from '../Hooks/useAuth';

export const Navigation = () => {
  const { isAuthenticated, logout } = useAuth();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">My tasks</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          {isAuthenticated ? (
            <>
              <Nav.Link href="#features">Create Task</Nav.Link>
              <Nav.Link href="#pricing">View Tasks</Nav.Link>
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            </>
          ) : (
            <Nav.Link href="#pricing">Login</Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};
