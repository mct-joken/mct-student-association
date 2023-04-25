import React from 'react';
import { Link } from 'react-router-dom';
import notfound from "../assets/notfound.png";

export function Notfound() {
    return (
        <Link to={"/"}>
            <img src={notfound} alt="404" style={{width: "100%"}}/>
        </Link>
    );
}
