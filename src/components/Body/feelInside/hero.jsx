import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section >
      <div className="max-w-7xl mx-auto ">
        <div className="hero">
          <div className="hero-left">
            <p className="left-text">Sweet fun, full of milk.</p>
            <h1 className="left-title">
              Feel inside cold with our delicious <span>ice-cream.</span>
            </h1>
            <p className="left-desc">
              Some food has looked so awful that it's looked like something that
              the dog's brought home, yet after one mouthful I've been left
              eating my thoughts, my words.
            </p>
            <button className="hero-btn">Buy Now</button>
          </div>
          <div className="hero-right">
            <img src="hero-img.png" alt="" className="right-img" />
          </div>
        </div>
        <div id="desc" className="desc">
          <ul className="desc-list">
            <li className="desc-item">
              <img src="car-img.png" alt="" className="desc-img" />
              <h3 className="desc-title">Free Shipping</h3>
              <p className="desc-text">
                Last Chance! Free shipping on all orders ends today.
              </p>
            </li>
            <li className="desc-item">
              <img src="cap-img.png" alt="" className="desc-img" />
              <h3 className="desc-title">Quick Packaging</h3>
              <p className="desc-text">
                Last Chance! Free shipping on all orders ends today.
              </p>
            </li>
            <li className="desc-item">
              <img src="cash-back.png" alt="" className="desc-img" />
              <h3 className="desc-title">100% Money Back</h3>
              <p className="desc-text">
                Last Chance! Free shipping on all orders ends today.
              </p>
            </li>
            <li className="desc-item">
              <img src="fast-delivery.png" alt="" className="desc-img" />
              <h3 className="desc-title">Fast Delivery</h3>
              <p className="desc-text">
                Last Chance! Free shipping on all orders ends today.
              </p>
            </li>
          </ul>
        </div>
        <div id="promo" className="promo">
          <div>
            <h2 className="promo-title">Brown Sugar Oatmea</h2>
            <p className="promo-text">
              Together with McDonald’s, Burger King has grown to become
              synonymous with burgers in the US.Together with McDonald’s, Burger
              King has grown to become synonymous.
            </p>
            <button className="promo-btn">See Details</button>
          </div>
          <img src="promo-img.png" alt="" width="600" height="600" className="mr" />
        </div>
        <div id="prodact" className="prodact">
          <h1 className="prodact-title">Our Product</h1>
          <nav className="pro">
            <ul className="pro-list">
              <li className="pro-item">
                <Link className="pro-link">CAKE BETTER</Link>
              </li>
              <li className="pro-item">
                <Link className="pro-link">CAYENNE CHOCOLATE</Link>
              </li>
              <li className="pro-item">
                <Link className="pro-link">BROWN BREAD</Link>
              </li>
              <li className="pro-item">
                <Link className="pro-link">CANDY CANE</Link>
              </li>
            </ul>
          </nav>
          <ul className="prom-list">
            <li className="prom-item">
              <img src="item.svg" alt="" className="prom-img" />
              <div>
                <h2 className="prom-title">Cake better</h2>
                <p className="prom-text">
                  Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au
                  Pain is a pioneer in the healthy fast food scene.Bon Au Pain
                  is a pioneer in the healthy fast food scene.
                </p>
                <div className="nom">
                  <p className="nommi">$19.55</p>
                  <del className="no">$22.55</del>
                </div>
                <button className="prom-btn">Buy Now</button>
              </div>
            </li>
            <li className="prom-item item-bn">
              <div>
                <h2 className="prom-title">Cayenne chocolate</h2>
                <p className="prom-text">
                  Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au
                  Pain is a pioneer in the healthy fast food scene.Bon Au Pain
                  is a pioneer in the healthy fast food scene.
                </p>
                <div className="nom">
                  <p className="nommi">$19.55</p>
                  <del className="no">$22.55</del>
                </div>
                <button className="prom-btn">Buy Now</button>
              </div>
              <img src="item1.png" alt="" className="prom-img" />
            </li>
            <li className="prom-item">
              <img src="item2.png" alt="" className="prom-img" />
              <div>
                <h2 className="prom-title">Brown bread</h2>
                <p className="prom-text">
                  Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au
                  Pain is a pioneer in the healthy fast food scene.Bon Au Pain
                  is a pioneer in the healthy fast food scene.
                </p>
                <div className="nom">
                  <p className="nommi">$19.55</p>
                  <del className="no">$22.55</del>
                </div>
                <button className="prom-btn">Buy Now</button>
              </div>
            </li>
            <li className="prom-item item-bn">
              <div>
                <h2 className="prom-title">Cake better</h2>
                <p className="prom-text">
                  Bon Au Pain is a pioneer in the healthy fast food scene.Bon Au
                  Pain is a pioneer in the healthy fast food scene.Bon Au Pain
                  is a pioneer in the healthy fast food scene.
                </p>
                <div className="nom">
                  <p className="nommi">$19.55</p>
                  <del className="no">$22.55</del>
                </div>
                <button className="prom-btn">Buy Now</button>
              </div>
              <img src="item3.png" alt="" className="prom-img" />
            </li>
          </ul>
          <ul className="po-list">
            <li className="po-item">
              <div className="pod">
                <img
                  src="img1.png"
                  alt=""
                  className="pog-img"
                  width="59"
                  height="58"
                
                />
                <div className="hs">
                  <h1 className="pod-title">Tom A.Bect</h1>
                  <p className="pod-text">AMIRICAN</p>
                </div>
              </div>
              <p className="po-text">
                Thanks a lot for the prompt service. Really appreciate.
                Excellence taste in Every Bite.Add a joy of best Taste. Foodie
                Moments.
              </p>
              <div className="pos">
                <img src="Vector-l.png" alt="" width="8" height="14" className="pl" />
                <img src="img.png" className='we' alt="" width="35" height="35" />
                <img src="img1.png"  className="pog-img" alt="" width="57" height="57" />
                <img src="img.png" className='we' alt="" width="35" height="35" />
                <img src="Vector-r.png" alt="" width="8" height="14" className="pr" />
              </div>
            </li>
            <li className="po-item">
              <div className="pod">
                <img
                  src="img.png"
                  alt=""
                  className="pog-img"
                  width="59"
                  height="58"
                />
                <div className="hs">
                  <h1 className="pod-title">Adele A. McNeill</h1>
                  <p className="pod-text">BRITISH</p>
                </div>
              </div>
              <p className="po-text">
                Thanks a lot for the prompt service. Really appreciate.
                Excellence taste in Every Bite.Add a joy of best Taste. Foodie
                Moments.
              </p>
              <div className="pos">
                <img src="Vector-l.png" alt="" width="8" height="14" />
                <img src="img1.png" className='we' alt="" width="35" height="35" />
                <img src="img.png"  className="pog-img" alt="" width="57" height="57" />
                <img src="img1.png" className='we' alt="" width="35" height="35" />
                <img src="Vector-r.png" alt="" width="8" height="14" />
              </div>
            </li>
            <li className="po-item">
              <div className="pod">
                <img
                  src="img1.png"
                  alt=""
                  className="pog-img"
                  width="59"
                  height="58"
                />
                <div className="hs">
                  <h1 className="pod-title">Chim O.Kim</h1>
                  <p className="pod-text">CHINA</p>
                </div>
              </div>
              <p className="po-text">
                Thanks a lot for the prompt service. Really appreciate.
                Excellence taste in Every Bite.Add a joy of best Taste. Foodie
                Moments.
              </p>
              <div className="pos">
                <img src="Vector-l.png" alt="" width="8" height="14" />
                <img src="img.png" className='we' alt="" width="35" height="35" />
                <img src="img1.png"  className="pog-img" alt="" width="57" height="57" />
                <img src="img.png" className='we' alt="" width="35" height="35" />
                <img src="Vector-r.png" alt="" width="8" height="14" />
              </div>
            </li>
          </ul>
        </div>
        <div id="future" className="future">
          <img src="phone.png" alt="" className="future-img" />
          <div className="fut">
            <h1 className="fut-title">Simple Way To Order Your Food</h1>
            <p className="fut-text">
              Some food has looked so awful that it's looked like something that
              the dog's brought home, yet after one mouthful I've been left
              eating my thoughts.
            </p>
            <div className="fu">
              <Link to="https://www.instagram.com/jamoldinov_kamoliddin">
                <img src="play.png" alt="" className="duf" />
              </Link>
              <Link to="https://t.me/Jamoldinov_Kamoliddin">
                <img src="store.png" alt="" className="duf" />
              </Link>
            </div>
          </div>
        </div>
        <div id="contact" className="contact">
          <h1 className="contact-title">
            Have Question in Mind? Let us help you...
          </h1>
          <form action="https://echo.htmlacademy.ru">
            <div className="order">
              <div className="order-one">
                <input
                  class="order-input"
                  type="number"
                  placeholder="Your phone number"
                  id="ism"
                  required
                  name="Ism"
                  autocomplete="off"
                />
              </div>
              <div className="order-two">
              <select
                class="order-select"
                name="Xizmat turi"
                id="xizmat-turi"
                autocomplete="off"
              >
                <option class="order-option" value="Question type">
                  Xizmat turi
                </option>
                <option class="order-option" value="Vebsayt tuzish">
                Cake better
                </option>
                <option class="order-option" value="Telegram bot">
                Cayenne chocolate
                </option>
                <option class="order-option" value="Grafik dizayn">
                Brown bread
                </option>
                <option class="order-option" value="Grafik dizayn">
                Candy cane
                </option>
              </select>
              </div>

            </div>
            <div className="oo">
            <input
                class="order-inputs"
                type="text"
                placeholder="Enter your question"
                id="telefon"
                required
                name="Telefon raqamingiz"
                autocomplete="off"
              />
            <button className="orde-btn" type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Hero;
