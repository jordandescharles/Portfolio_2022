import React, { Component } from 'react'
import GetProject from './GetProject';
import { Link } from 'react-router-dom';

const urlcourante = document.location.href;
const url = new URL(urlcourante);
const source = url.searchParams.get("source");
const sourceLink = '/' + source;
const name = url.searchParams.get("name");

export default class ProjectView extends Component {

  render() {
    return ( 
      <>
        <div className='title-Container'>
          <div style={{ display: 'flex' }}>
            <Link to={sourceLink} ><span className='Cross-Page' >X</span></Link>
            <div className='title'>
              <h2>{name}</h2>
            </div>
          </div>
          </div>
          <GetProject name={name} source={source} />
        </>
        );
  }
}
