import React from 'react';
import './intro.css';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';


const Intro = () => {
    const { t } = useTranslation();

    return (

        <div className='intro'>
            <span>{t('HomePage.part1')} </span>

            <Link to="/Bio">
                <h1 className='name'> Jordan Descharles</h1>
            </Link>
            <span>{t('HomePage.part2')} </span>

            <p className='bigSpacer'>{t('HomePage.part3')} </p>

            <Link to="/Print">
                <div className='btn'><span className='rotate-180'>&#62;</span><span className='btnIntro'> {t('HomePage.part4')}</span> </div>
            </Link>
            <Link to="/Web">
            <div className='btn'><span className='rotate-180'>&#62;</span><span className='btnIntro'>{t('HomePage.part5')}</span></div>
            </Link>
        </div>

    );
};

export default Intro;