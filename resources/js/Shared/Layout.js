import React from "react";
import Nav from "../Components/Nav/Nav";

function Layout(props) {
    return (
        <div>
            <Nav />

            {props.children}
        </div>
    );
}

export default Layout;
