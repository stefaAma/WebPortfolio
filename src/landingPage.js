import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { LoremIpsum } from 'react-lorem-ipsum'
import { logoList } from './logoList';

const LOGO_NUM = logoList.length - 1; 
const LOGO_OFFSET = 2;

const LandingPage = () => {
    return (
        <>
            <Title/>
            <Quote/>
            <SkillSet/>
        </>
    );
}

const Title = () => {
    return (
        <header className = "main-title">
            <h1 className = "name">Stefan</h1>
            <h1 className = "surname">Amariei</h1>
        </header>
    );
}

const Quote = () => {
    return (
        <div className = "quote-wrapper">
            <div className = "quote-left">
                <FaQuoteLeft/>
            </div>
            <p className = "quote-text"><LoremIpsum></LoremIpsum></p>
            <div className = "quote-right">
                <FaQuoteRight/>
            </div>
        </div>
    );
}

const SkillSet = () => {
    //const []
    return (
        <div>
            <h3 className = "skill-title"> ~ Skills ~ </h3>
            <div>
                {}
            </div>
        </div>
    );
}

const Logo = (props) => {
    const {className, src, alt} = props;
    return (
        <img className = {className} src = {src} alt = {alt}></img>
    );
}

export default LandingPage;
