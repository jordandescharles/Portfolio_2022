import React from 'react';
import './intro.css';

const Intro = () => {
    return (
        <div className='intro'>
            <span>Hello My name is </span>
            <h1 className='name'> Jordan Descharles</h1>
            <span>and here is <span className='semiBold'>my portfolio</span> </span>
            
            <p className='bigSpacer'>what do you <span className='semiBold'>want to see ?</span> </p>

            <div className='btn'><span className='rotate-180'>&#62;</span><span className='btnIntro'> Graphic Design</span> </div>
            <div className='btn'><span className='rotate-180'>&#62;</span><span className='btnIntro'>Front end Development</span></div>
        </div>
    );
};

export default Intro;