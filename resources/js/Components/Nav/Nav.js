import React from "react";
import NavLink from "./NavLink";

function Nav() {
    return (
        <nav className="space-x-3 text-2xl w-full text-right my-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
        </nav>
    );
}

export default Nav;
