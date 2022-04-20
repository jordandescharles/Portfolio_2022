import React from 'react';
import Monogram from '../../img/monogram.png'


const Footer = () => {
    return (
        <div id='footer' className='footer'>
            <img className='monogram' src={Monogram} alt="monogramme jordan descharles" />
        </div>
    );
};

export default Footer;