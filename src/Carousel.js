import React from "react";
import { Carousel } from "react-responsive-carousel";

import './custom.css';

export default () => (
  <Carousel autoPlay>
    <div>
      <img className="project-img" alt="herbal-antidote" src={require('./images/herbal-antidote.png')} />
      <h3 className="legend">Herbal Antidote  <a href="https://herbal-antidote.herokuapp.com/">Demo</a></h3>
    </div>
    <div>
      <img alt="react-graph" src={require('./images/react-graph.png')} />
      <h3 className="legend">React Graph  <a href="https://south-american-forests.herokuapp.com/">Demo</a></h3>
    </div>
    <div>
      <img alt="the-scratchpost" src={require('./images/the-scratchpost.png')} />
      <h3 className="legend">The ScratchPost  <a href="http://the-scratchpost.herokuapp.com/projects/">Demo</a></h3>
    </div>
  </Carousel>
);