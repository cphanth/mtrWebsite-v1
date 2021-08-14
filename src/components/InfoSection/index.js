import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
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

export const InfoPhoto = styled.div`
    background-color: salmon;
    display: grid;
    justify-content: center;
    align-items: center;
`

function InfoSection(props) {
    return(
        <>
            <InfoContainer>
                <InfoCombo>
                    <h1>{props.headerTitle}</h1>
                    <p>{props.sectionText}</p>
                    <p>{props.text2}</p>
                </InfoCombo>
                <InfoPhoto>
                    <h1>This is a header: place photo here!</h1>
                    <StaticImage
      src={"../../images/keys.jpg"}
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <Button primary fontBig big as="button" onClick={() => alert('It works!')}>Get Started</Button>
                </InfoPhoto>
            </InfoContainer>
        </>
    )
}

export default InfoSection;