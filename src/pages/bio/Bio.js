import React from 'react'
import './bio.css';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";


function Bio() {
const { t } = useTranslation();
return (

        <div className='BioContainer'>
            <Link to="/"><span className='Cross' >X</span></Link>
            <div className='ProfilePicture'><img src="img/pp.jpg" alt=" profil" /></div>
            <article>
                <h1 className='name'> {t('Bio.part1')}</h1>
                <h3> {t('Bio.part2')}</h3>
                {t('Bio.part3')}
                <br /><br />
                {t('Bio.part4')}
                <br /><br />
                {t('Bio.part5')}
                <br /><br />
                {t('Bio.part6')}
                <br /><br />
                {t('Bio.part7')}
                <br />
                {t('Bio.part8')} <a href='cv.pdf' target='blank'> link</a>
            </article>
        </div>
)
}

export default Bio