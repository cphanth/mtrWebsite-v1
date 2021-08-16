import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { InfoPhoto } from '../InfoSection';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: auto;

    @media screen and (max-width: 960px) {
        padding: 1rem 0;
    }
`

const CardText = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Card = (props) => {
    return(
        <>
            <CardContainer>
                <InfoPhoto>
                    <StaticImage src='../../images/keys.jpg'></StaticImage>
                </InfoPhoto>
                <CardText>
                    <h4>{props.headerTitle}</h4>
                    <ol>
                        <li>{props.listItem1}</li>
                        <li>{props.listItem2}</li>
                        <li>{props.listItem3}</li>
                        <li>{props.listItem4}</li>
                    </ol>
                </CardText>
            </CardContainer>

        </>
    )
}

export default Card;