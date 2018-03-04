import $ from "jquery";
import React from "react";
import {Link} from "react-router-dom";


import Slideshow from "../components/home/Slideshow.jsx";
import SingleQuote from "../components/home/GetSingleQuote.jsx";
import HolaCode from "../components/home/HolaCode.jsx";
import HeaderBar from "../components/home/HeaderBar.jsx";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
          <HeaderBar />
        <div>
          <HolaCode />
        </div>
        <div>
          <SingleQuote />
        </div>
        <div>
          <Slideshow />
        </div>
      </div>
    );
  }
}
