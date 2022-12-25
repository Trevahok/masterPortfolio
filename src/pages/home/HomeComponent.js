import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Carousel } from "react-responsive-carousel";
import Modi from "../../assests/images/toycathon.jpg";
import Teacher from "../../assests/images/teacher.jpg";
import git from "../../assests/images/ginnovation.jpg";
import spot from "../../assests/images/spot.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Container } from "react-bootstrap";
import { Fade } from "react-reveal";
class Home extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <Fade bottom duration={3000} distance="40px">
          <Carousel
            showArrows={true}
            centerMode={true}
            autoPlay={true}
            style={{ margin: "10%" }}
          >
            <div className="container w-90" style={{ paddingLeft: 90 }}>
              <img src={Modi} />
              <p className="legend">
                Appreciation from Prime Minister of India at Toycathon 2021
              </p>
            </div>
            <div className="container w-90" style={{ paddingLeft: 90 }}>
              <img src={Teacher} />
              <p className="legend">Conducted a guest lecture on OOP at VIT</p>
            </div>
            <div className="container w-90" style={{ paddingLeft: 90 }}>
              <img src={git} />
              <p className="legend">
                Appreciation for Global Innovation Tournament@PayPal
              </p>
            </div>
            <div
              className="container w-90"
              style={{ paddingLeft: 90, paddingRight: 290 }}
            >
              <img src={spot} />
              <p className="legend">Spot Award from Director</p>
            </div>
          </Carousel>
        </Fade>
        <Skills theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
