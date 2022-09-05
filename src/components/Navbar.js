import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <a className="main_li" href="/">
                  Kingslay Lawyer's
                </a>
              </li>

              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Practice Areas</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <button className="right_text" href="/">
                  Free Consultation
                </button>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div>
        <div>
          <div className="text_settle">
            <h1>Unbelievable Solution </h1>
            <h1>For All Legal Cases</h1>
            <br />
            <div className="paragraph_text">
              <p>We Support businesses through period of expansion ,</p>
              <p>Succession,and all other important tranitions.</p>

              <button className="btn_con" type="button">
                Free Consultation
              </button>
              <div>
                <h5 className="achieve_reward">Our Achieved Awards</h5>
              </div>
            </div>
          </div>

          <img
            className="image_right"
            src="https://images.pexels.com/photos/8036340/pexels-photo-8036340.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
        </div>
      </div>
      <div className="justify_content">
      <div className="headline_one">
        <h1>We Earn Your Trust And Are</h1>
        <h1> Diligent In Your Case .</h1>
      </div>
      <div className="para_two">
        <p>we Support businesses through period of expasion.</p>
        <p> Succession and all other important transitions. our</p>
        <p>job is to help.Create the conditions for you</p>
      </div>
      </div>
      <div>
      <div >
</div>
      </div>
    </div>
  );
};

export default Navbar;
