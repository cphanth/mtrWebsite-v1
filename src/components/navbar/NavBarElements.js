import {BsHouseFill} from 'react-icons/bs';
import styled from "styled-components";
import {Link} from 'gatsby';


export const Nav = styled.nav`
    background:${({active}) => active ? "#fff" : "linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100%)"};
    height: 5rem;
    display:flex;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 999;

    @media screen and (max-width:960px) {
        background: ${({click}) => (click ? "#fff" : "transparent")};
        transition: 0.8s all ease;
    }
`

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1000px;
    margin-top: 1rem;
`

export const NavIcon = styled(BsHouseFill)`
    margin: 0 0.5rem 0 2rem
`

export const NavLogo = styled(Link)`
    color: #141414;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        font-size: 30px;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8 rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 90vh;
        margin: 0;
        position: absolute;
        top: ${({click}) => (click ? "100%" : "-1000px")};
        opacity: 1;
        transition: all 1s ease;
        background: #fff;
    }
    `
export const NavItem = styled.li`
    height: 80px;

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`
export const NavLinks = styled(Link)`
    color: #141414;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #ff4040;
            transition: all 0.3s ease;
        }
    }
`

