import React, {useState} from 'react';
import { FaBars, Fatimes } from "react-icons/fa";
import {IconContent} from "react-icons/lib";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [scroll, setScroll] = useState(false);
    return (
        <>
        <IconContext.Provider value={{ color: "#141414"}}>
            <Nav active={scroll} click={click}>

            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;