
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button ,Navbar,Container,Nav,NavDropdown,Form,FormControl,Carousel,Card} from 'react-bootstrap';
import k1 from "../../imagd/k1.jpg";
function Footer() {
  return (
   
<div className='Footer'>
<footer className="page-footer font-small blue pt-4 footer1">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
            <img className='imgg' src={k1}></img>
              <p>
                Our site translates and publishes the latest versions of the
                Manhwa comics, and we maintain the privacy of our subscribers
                and the arrival of everything new to them We also welcome your
                contact with us...
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Contact Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Email address : alshwaweshalsharidi@gmail.com</a>
                </li>
                <li>
                  <a href="#!">Phone Number : 00218925547007</a>
                </li>
                <li>
                  <a href="#!">Other Ph Num : 00218915547007</a>
                </li>
                <li>
                  <a href="#!">Address : Aluwaina-tunes</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <i class="fa-brands fa-instagram-square"></i>
                </li>
                <li>
                  <a href="#!">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2022 Copyright:
          <a href="#"> Mangateam.com</a>
        </div>
      </footer>
      </div>
    
  );
}

export default Footer;
