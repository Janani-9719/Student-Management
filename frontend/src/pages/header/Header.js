import { Container, Navbar, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () =>{
    return(
        <>
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand to="/">                    
                    <Nav.Link as={Link} to="/" ><strong>Student Registration</strong></Nav.Link>
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/register" className="nav-link">Register Student</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default Header;