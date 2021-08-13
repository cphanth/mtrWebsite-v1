import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.section`
    margin: 2rem auto;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
`

const InfoCombo = styled.div`
    display: grid;
    grid-template-rows: auto;
    justify-content: center;
`

const InfoPhoto = styled.div`
    background-color: salmon;
    display: grid;
    justify-content: center;
    align-items: center;
`

function InfoSection() {
    return(
        <>
            <InfoContainer>
                <InfoCombo>
                    <h1>This is a header1!</h1>
                    <h1>This is a header2!</h1>
                </InfoCombo>
                <InfoPhoto>
                    <h1>This is a header3!</h1>
                </InfoPhoto>
            </InfoContainer>
        </>
    )
}

export default InfoSection;