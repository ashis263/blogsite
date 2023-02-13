import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const logout = () => {
    console.log('logout run');
    localStorage.clear();
    navigate("/login");
  };

  const [userId, setuserId] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user-info"))) {
      const userId = JSON.parse(localStorage.getItem("user-info")).id;
      setuserId(userId);
    }
  }, []);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Sample Blog Site</Navbar.Brand>
          <Nav className="nav-link">
            <Link to="/blogs">Blogs</Link>
            {localStorage.getItem("user-info") ? (
              <div>
                <Link to="/create">Create</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/premium">Premium</Link>
                <Link onClick={logout}>Logout</Link>
              </div>
            ) : (
              <div>
                <Link to="/register">Sign up</Link>
              </div>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
