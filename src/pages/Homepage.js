import React , { Component } from 'react'
import Darkmode from "../component/intro/Darkmode";
import Footer from "../component/intro/Footer";
import Intro from "../component/intro/Intro";
import Language from "../component/intro/Language";

/**  Content translate with i18next */

class Homepage extends Component {
  render() {
    return (
      <>
      <Language />
      <Intro />
      <Footer />
      <Darkmode />
      </>
    )
  }
}

export default Homepage;

