import styled from 'styled-components';

export const Button = styled.button`
    border: none;
    border-radius: 10px;
    background: ${({primary}) => (primary ? "#FF4040" : "#0467FB")};
    white-space: nowrap;
    padding: ${({big}) => (big ? "1rem 5rem" : "1rem 2rem")};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? "20px" : "16px")};
    outline: none;
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
    transition: all 0.3s linear;
    box-shadow: 7px 6px 28px 1px rgba(0,0,0,0.50);

    &:hover {
        transition: all 0.3s linear;
        background: ${({primary}) => (primary ? "#0467FB" : "#FF4040")};
    }

    &:active {
        transform: scale(0.98);
        box-shadow: 3px 2px 28px 1px rgba(0,0,0,0.24);
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`