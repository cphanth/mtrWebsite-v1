import styled from 'styled-components';

export const BuyerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem auto;
    padding: 2rem;
`

export const BuyerContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1rem;

    @media screen and (max-width:960px) {
        margin-top: 2rem;
    }
`