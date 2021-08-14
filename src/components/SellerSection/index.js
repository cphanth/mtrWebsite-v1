import React from 'react';
// try to export styling from InfoSection
// import {InfoContainer, InfoCombo} from "../InfoSection";
import styled from 'styled-components';
import { Button } from '../ButtonElement';


export const InfoContainer = styled.section`
    margin: 2rem auto;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
    }
`

export const InfoCombo = styled.div`
    display: grid;
    grid-template-rows: auto;
    justify-content: center;
`

function SellerSection(props) {
    return(
        <>
        <InfoContainer>
            <InfoCombo>
                <h2>Virtual Tours</h2>
                <p>We use the latest technology to develop a virtual walk-though tour of your home to aid potential buyers in discovering a home in your property.</p>
            </InfoCombo>
            <InfoCombo>
                <h2>Professional Photography</h2>
                <p>We support our local community by contracting home-town professional photographers to accentuate the amazing features of your home that’s sure to get it sold.</p>
            </InfoCombo>
            <InfoCombo>
                <h2>Home Warranty Coverage</h2>
                <p>We provide additional home warranty coverage to take care of unforseen repairs not covered by home-owner’s insurance.</p>
            </InfoCombo>
            <InfoCombo>
                <h2>+ More!!!</h2>
                <p>*****What additional advantages do you offer??? We provide additional home warranty coverage to take care of unforseen repairs not covered by home-owner’s insurance.</p>
                <Button primary fontBig big as="button" onClick={() => alert('It works!')}>View Our Sold Successes!</Button>
            </InfoCombo>
        </InfoContainer>
        </>

    )
}

export default SellerSection;