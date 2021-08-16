import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { InfoPhoto } from '../InfoSection';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: auto;
    border: 1px solid lightgrey;
    border-radius: 15px;
    margin-top: 2rem;
    box-shadow: 10px 10px 25px;
`

const CardText = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
`

const Card = (props) => {
    return(
        <>
            <CardContainer>
                <InfoPhoto style={{padding:'1rem'}}>
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