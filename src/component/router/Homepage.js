import React from 'react'
import Darkmode from "../intro/Darkmode";
import Footer from "../intro/Footer";
import Intro from "../intro/Intro";
import Language from "../intro/Language";

/**  Content translate with i18next */

export default function Homepage() {
  return (
    <>
    <Language />
    <Intro />
    <Footer />
    <Darkmode />
    </>
  )
}
