import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./Homepage2.css";
function Homepage2() {
//     VANTA.GLOBE({
//         el: "#page",
//         mouseControls: true,
//         touchControls: true,
//         gyroControls: false,
//         minHeight: 200.00,
//         minWidth: 200.00,
//         scale: 1.00,
//         scaleMobile: 1.00
//       })
//       var ml4 = {};
//   ml4.opacityIn = [0,1];
//   ml4.scaleIn = [0.2, 1];
//   ml4.scaleOut = 3;
//   ml4.durationIn = 800;
//   ml4.durationOut = 600;
//   ml4.delay = 500;
  
//   anime.timeline({loop: true})
//     .add({
//       targets: '.ml4 .letters-1',
//       opacity: ml4.opacityIn,
//       scale: ml4.scaleIn,
//       duration: ml4.durationIn
//     }).add({
//       targets: '.ml4 .letters-1',
//       opacity: 0,
//       scale: ml4.scaleOut,
//       duration: ml4.durationOut,
//       easing: "easeInExpo",
//       delay: ml4.delay
//     }).add({
//       targets: '.ml4 .letters-2',
//       opacity: ml4.opacityIn,
//       scale: ml4.scaleIn,
//       duration: ml4.durationIn
//     }).add({
//       targets: '.ml4 .letters-2',
//       opacity: 0,
//       scale: ml4.scaleOut,
//       duration: ml4.durationOut,
//       easing: "easeInExpo",
//       delay: ml4.delay
//     }).add({
//       targets: '.ml4 .letters-3',
//       opacity: ml4.opacityIn,
//       scale: ml4.scaleIn,
//       duration: ml4.durationIn
//     }).add({
//       targets: '.ml4 .letters-3',
//       opacity: 0,
//       scale: ml4.scaleOut,
//       duration: ml4.durationOut,
//       easing: "easeInExpo",
//       delay: ml4.delay
//     }).add({
//       targets: '.ml4',
//       opacity: 0,
//       duration: 500,
//       delay: 500
//     });
    
    return (
        <>
            <div id="page">
        <section>
            <div class="content">
              <h2>DUKAAN</h2>
              <h2>DUKAAN</h2>
            </div>
          </section>
    </div>
    <button class="glow-on-hover" type="button">ADMIN</button>
    <button class="glow-on-hover" type="button">USER</button>
    <div id="container">
        <span id="text1"></span>
        <span id="text2"></span>
    </div>
    <h1 class="ml4">
        <span class="letters letters-1">Empowering</span>
        <span class="letters letters-2">Local</span>
        <span class="letters letters-3">Bussinesses</span>
      </h1>
      
        </>
    );
}

export default Homepage2;