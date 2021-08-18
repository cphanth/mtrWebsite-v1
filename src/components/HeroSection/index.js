import React from 'react';
import { Button } from '../ButtonElement';
import "./HeroSection.css";

function HeroSection() {
    return (
        <div className="hero-container">
            <div className="hero-headers">
                <h1>Feel At Home</h1>
                <h2>Love Where You Live in The Central Valley</h2>
            </div>
            <div className="hero-btns">
                <Button primary fontBig big as="button" onClick={() => alert('It works!')}>Get Started</Button>
            </div>
        </div>
    )
}

export default HeroSection;