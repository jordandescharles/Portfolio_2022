import React from 'react';
import './intro.css';

const Intro = () => {
    return (
        <div className='intro'>
            <span>Hello My name is </span>
            <h1>Jordan Descharles</h1>
            <span>and here is <span className='semiBold'>my portfolio</span> </span>

            <p>what do you <span className='semiBold'>want to see ?</span> </p>

            <span className='btnIntro'> Graphic Design</span> <br />
            <span className='btnIntro'>Front end Development</span>
        </div>
    );
};

export default Intro;