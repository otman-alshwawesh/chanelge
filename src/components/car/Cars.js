
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button ,Navbar,Container,Nav,NavDropdown,Form,FormControl,Carousel,Card} from 'react-bootstrap';

import m1 from "../../imagd/m1.jpg";
import m3 from "../../imagd/m3.jpg";
import m2 from "../../imagd/m2.jpeg";
function Cars(props) {
const fun =(x,y)=>{
    alert(` You have to pay
    ${x} to buy ${y} !`)
}
  return (
    <div className="Cars">
    
    <Card style={{ width: '18rem' }}>
  <Card.Img height="300px" variant="top" src={props.e.img} />
  <Card.Body>
    <Card.Title className='rad'>{props.e.name}</Card.Title>
    <Card.Text className='rad'>
    {props.e.price}
    </Card.Text>
    <Button  variant="primary" onClick={()=>fun(props.e.price,props.e.name)}>Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
  );
}

export default Cars;