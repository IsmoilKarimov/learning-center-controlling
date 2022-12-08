import React from "react";
import {Link} from "react-router-dom"
import './header.scss'
import Search  from "../search/Search";

const Header = () => {
    return(
        <header>
            {/* <Search/> */}
            <div className="header">
                <Link to='/' className="header__logo">
                    <span className="header__logo--icon">
                        <i className="fas fa-book"></i>
                    </span>
                    Support IT Academy
                </Link>
                <Link to='/' className="header__profile">
                    <span className="header__profile--img" style={{
                        backgroundImage: `url(${require("../../assets/img/i.webp")})`
                    }}></span>
                    <span className="header__profile--info">
                        <span className="header__profile--name">Support IT Academy</span>
                        <span className="header__profile--email">support@gmail.com</span>
                    </span>
                </Link>
            </div>
        </header>
    )
}

export default Header