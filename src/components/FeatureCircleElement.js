import styled from 'styled-components';

export const FeatureCircle = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: burlywood;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem;

    @media screen and (max-width: 960px) {
        margin-bottom: 1rem;
        width: 200px;
        height: 200px;

    }
`

export const FeatureContainer = styled.div`
    display: flex;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
    }
`