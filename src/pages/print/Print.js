
import Footer from '../../component/intro/Footer';
import PrintPage from './PrintPage'
import React, { Component } from 'react';


class Print extends Component {
  render() {
    return (
      <div id='main'>
        <PrintPage />
        <Footer/>
      </div>
    );
  }
}

export default Print;

