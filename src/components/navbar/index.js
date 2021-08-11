import React, {useState, useEffect} from 'react';
import { FaBars, Fatimes } from "react-icons/fa";
import {IconContext} from "react-icons/lib";
import { Nav, NavBarContainer, NavLogo, NavIcon, MobileIcon } from './NavBarElements';


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
                    <NavLogo to="/">
                        <NavIcon />
                        My True Realty
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <Fatimes/> : <FaBars/>}
                    </MobileIcon>
                </NavBarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;