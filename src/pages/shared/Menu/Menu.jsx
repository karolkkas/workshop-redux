import React from 'react';
import {Link} from "react-router-dom";

function Menu() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/gallery">Gallery</Link>
        </div>
    );
}

export default Menu;