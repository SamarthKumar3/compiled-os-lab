import React from "react";
import "./Header.css";
import Link from "next/link";

const Header = () => {
    return (
        <nav className="nav">
            <div className="nav-child" />
            <div className="frame-set" />
            <img className="logo-icon" loading="eager" alt="" src="/SRM-logo.png" />
            <div className="nav-tab-frame">
                <div className="home"><Link href={'/'} className="no-decoration">Home</Link></div>
            </div>
            <div className="nav-tab-frame">
                <div className="simulations"><Link href={'/Simulations'} className="no-decoration">Simulations</Link></div>
            </div>
            <div className="nav-tab-frame">
                <div className="about-us"><Link href={'/About-Us'} className="no-decoration">About-Us</Link></div>
            </div>
            <div className="nav-tab-frame">
                <div className="contact"><Link href={'/Contact'} className="no-decoration">Contact</Link></div>
            </div>
        </nav>
    )
}

export default Header;