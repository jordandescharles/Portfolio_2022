import DisplayPage from '../display/DisplayPage'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Web extends Component {

        constructor(props) {
            super(props)
            this.state = { filter: '' }
            this.updateState = this.updateState.bind(this)
          }
        
          updateState(filterValue) {
            if (this.state.filter === filterValue) {
              this.setState({ filter: '' })
            }
            else {
              this.setState({ filter: filterValue })
            }
          }
        
        
          render() {
            return (
              <>
                <div className='title-Container'>
                  <div style={{ display: 'flex' }}>
                    <Link to="/"><span className='Cross-Page' >X</span></Link>
                    <div className='title'>
                      <h2>Web front dev</h2>
                    </div>
                  </div>
                  <div className='filter-Btn'>
                    <button className="languageBox" onClick={() => this.updateState('Html')} style={this.state.filter === 'Html' ? { color: 'white', backgroundColor: 'black' } : {}}>Html</button>
                    <button className="languageBox" onClick={() => this.updateState('JS')} style={this.state.filter === 'JS' ? { color: 'white', backgroundColor: 'black' } : {}}>JS</button>
                    <button className="languageBox" onClick={() => this.updateState('React')} style={this.state.filter === 'React' ? { color: 'white', backgroundColor: 'black' } : {}}>React</button>

                  </div>
                </div>
                <div className='main-Container'>
                  <DisplayPage filter={this.state.filter} source="Web"/>
                </div>
              </>
            );
          }
        }
    
