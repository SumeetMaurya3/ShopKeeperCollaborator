import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useNavigate } from "react-router-dom";


import "./Home.css";

function Home() {
    // VANTA.GLOBE({
    //     el: "#page",
    //     mouseControls: true,
    //     touchControls: true,
    //     gyroControls: false,
    //     minHeight: 200.00,
    //     minWidth: 200.00,
    //     scale: 1.00,
    //     scaleMobile: 1.00
    //   })
    //   var ml4 = {};
    // ml4.opacityIn = [0,1];
    // ml4.scaleIn = [0.2, 1];
    // ml4.scaleOut = 3;
    // ml4.durationIn = 800;
    // ml4.durationOut = 600;
    // ml4.delay = 500;
    // var ml4 = document.querySelectorAll(".ml4")
    // anime.timeline({loop: true})
    // .add({
    //   targets: '.ml4 .letters-1',
    //   opacity: ml4.opacityIn,
    //   scale: ml4.scaleIn,
    //   duration: ml4.durationIn
    // }).add({
    //   targets: '.ml4 .letters-1',
    //   opacity: 0,
    //   scale: ml4.scaleOut,
    //   duration: ml4.durationOut,
    //   easing: "easeInExpo",
    //   delay: ml4.delay
    // }).add({
    //   targets: '.ml4 .letters-2',
    //   opacity: ml4.opacityIn,
    //   scale: ml4.scaleIn,
    //   duration: ml4.durationIn
    // }).add({
    //   targets: '.ml4 .letters-2',
    //   opacity: 0,
    //   scale: ml4.scaleOut,
    //   duration: ml4.durationOut,
    //   easing: "easeInExpo",
    //   delay: ml4.delay
    // }).add({
    //   targets: '.ml4 .letters-3',
    //   opacity: ml4.opacityIn,
    //   scale: ml4.scaleIn,
    //   duration: ml4.durationIn
    // }).add({
    //   targets: '.ml4 .letters-3',
    //   opacity: 0,
    //   scale: ml4.scaleOut,
    //   duration: ml4.durationOut,
    //   easing: "easeInExpo",
    //   delay: ml4.delay
    // }).add({
    //   targets: '.ml4',
    //   opacity: 0,
    //   duration: 500,
    //   delay: 500
    // });
    return (
        <>
        {/* <Row>
            <Col md={6} className="d-flex flex-direction-column align-items-center justify-content-center">
                <div>
                    <h1>Share the world with your friends</h1>
                    <p>Chat App lets you connect with the world</p>
                    <LinkContainer to="/chat">
                        <Button variant="success">
                            Get Started <i className="fas fa-comments home-message-icon"></i>
                        </Button>
                    </LinkContainer>
                </div>
            </Col>
            <Col md={6} className="home__bg"></Col>
            </Row> */}
        <div className="backgroundgif"><img src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80" alt="" width={1400}/></div>
        {/* <div className="backgroundgif"><iframe src='//gifs.com/embed/4k-blue-geometry-forms-space-flight-2160p-motion-background-X6GDpo' frameborder='0' scrolling='no' width='640px' height='360px' style='-webkit-backface-visibility: hidden;-webkit-transform: scale(1);' ></iframe></div> */}

        <div id="page">
        <section>
            <div class="content">
              <img src="https://s9.gifyu.com/images/E-dukan-5.gif" alt="E-dukan" width={250} />
            </div>
          </section>
    </div>
    <button class="glow-on-hover" type="button">ADMIN</button>
    <Link to="/chat"><button class="glow-on-hover" type="button">USER</button>Signup</Link>
    <div id="container">
        <span id="text1"></span>
        <span id="text2"></span>
    </div>
    <div className="textanimationnew">
    <div class="words word-1">
  <span>L</span>
  <span>O</span>
  <span>C</span>
  <span>A</span>
  <span>L</span>
  <span>S</span>
  {/* <span>N</span> */}
</div>

<div class="words word-2">
  <span>A</span>
  <span>R</span>
  <span>E</span>
</div>

<div class="words word-3">
  <span>V</span>
  <span>O</span>
  <span>C</span>
  <span>A</span>
  <span>L</span>
</div>
    </div>
      </>
    );
}

export default Home;
