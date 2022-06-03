import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Display.css';


const Title = (title) => {


    return (
        <div className='title-Container'>
        <Link to="/"><span className='Cross-Page' >X</span></Link>
        <div className='title'>
            <h2>{title.title}</h2>
        </div>
        </div>
    );
};

export default Title;