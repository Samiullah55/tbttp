import img from "../assets/bodi.jpg";
import a from "../assets/1.jpg";
import b from "../assets/2.jpg";
import c from "../assets/3.jpg";
import sec41 from "../assets/sec41.jpg";
import sec43 from "../assets/sec43.jpg";
import sec44 from "../assets/sec44.jpg";
import React from "react";

import "../styles/Boddy.css";

const Body = () => {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <div className="d-none d-lg-block d-md-block">
        <div className="body">
          <div className="image">
            <img src={img} alt="img"/>
            <div className="bgtext">
              <h2 className="welcome">WELCOME TO</h2>
              <h1 className="titlebody p-2 animated-bar">
                TEN BILLION TREES TSUNAMI
              </h1>
              <p className="welcome">Pakistan largest ever plantation drive</p>
            </div>
          </div>

          {/* 2nd section */}
          <div className="container mt-5">
            <div className="col-md-6 ">
              <h4>About The TBTTP Project</h4>
              <br />
              <p>
                The "Ten Billion Tree Tsunami" Programme is a government of
                Pakistan initiative which is being implemented by the Ministry
                of Climate Change with the support of Provincial classests and
                wildlife units. The Ministry of Climate Change is overseeing the
                program coordination, execution, supervision, and overall
                delivery of the program outputs and activities.
                <br />
                Reports suggest that Pakistan is among the most vulnerable
                countries on the Global Climate Index which has been recurrently
                impacted by catastrophes, made worse by the deteriorating
                climate conditions.
              </p>
            </div>
            <div className="container col-md-6">
              <div className="about col-md-4 mt-5">
                <img src={b} alt="img"/>
              </div>
              <div className="about col-md-4">
                <img src={c} alt="img"/>
              </div>
              <div className="about col-md-4 mt-3">
                <img src={a} alt="img"/>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="stat container-fluid mt-5">
            <div className="container mt-5">
              <div className="col-md-3 mt-5">
                <h1>3.29B</h1>
                <p>Planation target 2019-23</p>
              </div>

              <div className="col-md-3 mt-5">
                <h1>3.29B</h1>
                <p>Planation target 2019-23</p>
              </div>

              <div className="col-md-3 mt-5">
                <h1>3.29B</h1>
                <p>Planation target 2019-23</p>
              </div>

              <div className="col-md-3 mt-5">
                <h1 mt-5>3.29B</h1>
                <p>Planation target 2019-23</p>
              </div>
            </div>
          </div>
          {/* section 4 */}
          <div className="sec4 mt-5">
            <h1 className="mt-4">
              THE PRIME MINISTER'S ECO SYSTEM RESTORATION PROGRAM
            </h1>
            <p>Let's make Pakistan Green</p>
            <div className=" container subsec4">
              <div className="col-md-3" data-aos="fade-right">
                <img className="imgs" src={sec41} alt="img"/>
                <h3>
                  Enhancement of Forest
                  <br /> Cover
                </h3>
              </div>

              <div className="col-md-3">
                <img className="imgs" src={sec44} alt="img"/>
                <h3>
                  Biodiversity <br />
                  Conservation
                </h3>
              </div>

              <div className="col-md-3">
                <img className="imgs" src={sec43} alt="img"/>
                <h3>
                  Protected Areas <br />
                  Initiative
                </h3>
              </div>

              <div className="col-md-3">
                <img className="imgs" src={sec44} alt="img"/>
                <h3>
                  Zoological Survey of
                  <br /> Pakistan
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="d-lg-none d-xl-none d-lg-none d-md-none">
        Anything inside this will display on mobile screen
      </div>
    </div>
  );
};

export default Body;
