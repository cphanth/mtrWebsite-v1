import React, {useState, useEffect} from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import {IconContext} from "react-icons/lib";
import { Nav, NavBarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks } from './NavBarElements';


const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scroll, setScroll] = useState(false);

    const handleClick = () => setClick(!click);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        changeNav()
        window.addEventListener("scroll", changeNav)
    }, [])

    return (
        <>
        <IconContext.Provider value={{ color: "#141414"}}>
            <Nav active={scroll} click={click}>
                <NavBarContainer>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/">Buy</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/">Sell</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/">Property Management</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavLogo to="/">
                        <NavIcon />
                        <h2>My True Realty Inc.</h2>
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/> }
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to="/">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/agents/">Agents</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/about/">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/contact/">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavBarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;