import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <section className="footer">
      <div className="max-w-7xl mx-auto ">
        <div className="foot">
          <div className="foot-one">
          <Link to='/'><img src="Polar-logo.svg" alt="Polar logo" width='79' height='79' className='header-img' /></Link>
            <p className="one-text">
              Some food has looked so awful that it's looked like something that
              the dog's brought home.
            </p>
            <h4 className="one-title">Fllow Us</h4>
            <ul className="one-list">
              <li className="one-item">
               <Link to='https://www.facebook.com/jamoldinov.kamoliddin'> <img src="facebook.png" alt="" /></Link>
              </li>
              <li className="one-item">
                <Link to='https://t.me/Jamoldinov_Kamoliddin'><img src="twitter.png" alt="" /></Link>
              </li>
              <li className="one-item">
                <Link to='https://www.instagram.com/jamoldinov_kamoliddin'><img src="instagram.png" alt="" /></Link>
              </li>
              <li className="one-item">
               <Link to='https://youtube.com/@kamoliddinjamoldinov'> <img src="linkedin.png" alt="" /></Link>
              </li>
            </ul>
          </div>
          <div className="foot-two">
            <div className="two-left">
              <ul className="left-list">
                <li className="left-item"><Link>Home</Link></li>
                <li className="left-item"><Link>Product</Link></li>
                <li className="left-item"><Link>Blog</Link></li>
                <li className="left-item"><Link>Pricing</Link></li>
                <li className="left-item"><Link>Testimonials</Link></li>
                <li className="left-item"><Link>Contact Us</Link></li>
              </ul>
            </div>
            <div className="two-right">
              <ul className="right-list">
                <li className="right-item"><Link>Delivery Information</Link></li>
                <li className="right-item"><Link>Privacy Policy</Link></li>
                <li className="right-item"><Link>Terms & Condition</Link></li>
                <li className="right-item"><Link>Search Terms</Link></li>
                <li className="right-item"><Link>Order & Return</Link></li>
              </ul>
            </div>
          </div>
          <div className="foot-three">
            <h4 className="three-title">Newsletter</h4>
            <form action="https://echo.htmlacademy.ru" className="fos">
            <input
                class="inpu"
                type="email"
                placeholder="Your Email"
                id="telefon"
                required
                name="Telefon raqamingiz"
                autocomplete="off"
              />
            <button className="footer-btn" type="submit">Send</button>
            </form>
            <ul className="three-list">
                <li className="three-item">
                    <Link > <img src="paypal.png" alt="" /></Link>
                </li>
                <li className="three-item">
                    <Link> <img src="master.png" alt="" /></Link>
                </li>
                <li className="three-item">
                    <Link> <img src="visa.png" alt="" /></Link>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
