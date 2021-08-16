import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Button } from '../ButtonElement';

import {InfoContainer, InfoPhoto, InfoCombo} from '../InfoSection/index';
import { BuyerContainer, BuyerContent } from './BuyerSectionElements';

const BuyerSection = () => {
    return(
        <>
        <BuyerContainer>
            <h1>Let's get you the keys to your new home</h1>
            <h2>We provide unparalleled service on your journey to purchasing a new home</h2>
            <InfoContainer>
                <BuyerContent>
                    <InfoCombo>
                        <h3>It's personal</h3>
                        <p>We customize the home buying process to fit your wants and needs</p>
                    </InfoCombo>
                    <InfoCombo>
                        <h3>Let's talk it out</h3>
                        <p>We price ourselves on clear communication and transparency</p>
                    </InfoCombo>
                    <InfoCombo>
                        <h3>We work better together</h3>
                        <p>We have a teamwork mindset and collaborate closely with your lender
                        <br/><br/>
                        Unsure about the loan process? Click below to start here!
                        </p>
                        <Button>Get me pre-approved!</Button>
                    </InfoCombo>
                </BuyerContent>
                <InfoPhoto>
                    <StaticImage src="../../images/keys.jpg"></StaticImage>
                </InfoPhoto>
            </InfoContainer>
        </BuyerContainer>
        </>
    )
}

export default BuyerSection;