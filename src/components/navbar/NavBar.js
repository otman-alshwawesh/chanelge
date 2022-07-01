import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button ,Navbar,Container,Nav,NavDropdown,Form,FormControl,Carousel,Card} from 'react-bootstrap';
import k1 from "../../imagd/k1.jpg";

function NavBar() {
  return (
    <div className="App">
    <Navbar bg="light" expand="lg">
  <Container fluid>
    <img className='imgg' src={k1}></img>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px'  }}
        navbarScroll
      >
        <Nav.Link href="#action1" className='nav-link'>Home</Nav.Link>
        <Nav.Link href="#action2" className='nav-link'>Link</Nav.Link>
        <NavDropdown title="Link"  id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        {/* <Nav.Link href="#" disabled>
          Link
        </Nav.Link> */}
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success" className='nav-link'>Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </div>
  );
}

export default NavBar;
