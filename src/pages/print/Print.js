
import PrintPage from './PrintPage'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Print extends Component {

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
          <div style={{display:'flex'}}>
          <Link to="/"><span className='Cross-Page' >X</span></Link>
          <div className='title'>
            <h2>Graphic Design</h2>
          </div>
</div>
          <div className='filter-Btn'>
            <button className="languageBox" onClick={() => this.updateState('web')} style={this.state.filter === 'web' ? { color: 'white', backgroundColor: 'black' } : {}}>web</button>
            <button className="languageBox" onClick={() => this.updateState('print')} style={this.state.filter === 'print' ? { color: 'white', backgroundColor: 'black' } : {}}>print</button>
          </div>
        </div>
        <div className='main-Container'>
          <PrintPage filter={this.state.filter} />
        </div>
      </>
    );
  }
}

export default Print;

