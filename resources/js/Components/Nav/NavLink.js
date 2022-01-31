import React from "react";
import { Link } from "@inertiajs/inertia-react";

function NavLink({ href, children }) {
    return (
        <Link href={href} className="cursor-pointer">
            {children}
        </Link>
    );
}

export default NavLink;
