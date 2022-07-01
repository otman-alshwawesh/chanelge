import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button ,Navbar,Container,Nav,NavDropdown,Form,FormControl,Carousel,Card} from 'react-bootstrap';
import k1 from "./imagd/k1.jpg";
import c1 from "./imagd/c1.jpg";
import b1 from "./imagd/b1.jpg";
import c3 from "./imagd/c3.webp";
import m1 from "./imagd/m1.jpg";
import m3 from "./imagd/m3.jpg";
import m2 from "./imagd/m2.jpeg";
import NavBar from './components/navbar/NavBar';
import Cars from './components/car/Cars';
import Footer from './components/footer/Footer';
function App() {
  var cars=[
    {
      name:"Toyota Shas 2022",
      price: 15000,
      img:m3
    },
    {
      name:"Toyota Land Cruiser 2022",
      price: 20000,
      img:m2
    },
    {
      name:"Toyota Hilux 2022",
      price: 30000,
      img:m1
    }
  ]
  return (
    <div className="App">
    <NavBar/>
<div className='Carousel'>
<Carousel>
  <Carousel.Item>
    <img height="300px"
      className="d-block w-100"
      src={c1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img height="300px"
      className="d-block w-100"
      src={b1}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img height="300px"
      className="d-block w-100"
      src={c3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>

<div className='divcard'>
{cars.map((e, i) => (
        <Cars e={e} key={i} />
      ))}
</div>
<span>total price : {
  cars.reduce((accumulator, cars) => {
    return accumulator + cars.price;
  }, 0)
  }</span>

<div className='footer'>
<Footer/>
      </div>
    </div>
  );
}

export default App;
