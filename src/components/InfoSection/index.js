import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { Button } from '../ButtonElement';


export const InfoContainer = styled.section`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    margin: 5rem auto;
    padding: 3rem;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        padding: 2rem;
    }
`

export const InfoCombo = styled.div`
    display: grid;
    grid-template-rows: auto;
    justify-content: center;
    padding-bottom: 1rem;
`

export const InfoPhoto = styled.div`
    /* background-color: salmon; */
    display: grid;
    width: auto;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
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
                    <StaticImage
      src={"../../images/keys.jpg"}
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="replace with a better description of the photo"
      style={{ marginBottom: `1.45rem` }}
    />
    <Button primary fontBig big as="button" onClick={() => alert('It works!')}>Get Started</Button>
                </InfoPhoto>
            </InfoContainer>
        </>
    )
}

export default InfoSection;