import React from 'react';
import { BuyerContainer } from '../BuyerSection/BuyerSectionElements';
import { FeatureContainer, FeatureCircle } from '../FeatureCircleElement';

const FeatureSection = () => {
    return(
        <>
        <BuyerContainer>
            <h2>We're here to help!</h2>
            <h3>We promise to provide</h3>
            <FeatureContainer>
                <FeatureCircle>Professional Service</FeatureCircle>
                <FeatureCircle>Care</FeatureCircle>
                <FeatureCircle>Expertise</FeatureCircle>
            </FeatureContainer>
        </BuyerContainer>
        </>
    )
}

export default FeatureSection;