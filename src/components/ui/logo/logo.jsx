import React from "react";
import logo from "../../../assets/logo.svg";
import "./style.css";

function Logo() {
    return (
        <a href="/" className="logo-link">
            <img className="logo-img" src={logo} alt="логотип сайта" />
            <span className="logo-text">Compressed air calculator</span>
        </a>
    )
}

export default Logo;