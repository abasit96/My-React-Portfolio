import React from "react"
import profile from "/Users/bootcamp/bootcamp/My-React-Portfolio/my-react-portfolio/src/profile.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"


export const Navbar = ({ setCurrentPage }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand" href="#">
                <span className="name" style={{ fontFamily: 'Impact', color: 'beige', fontSize: '50px' }}>
                    Abdul Basit
                </span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{ color: "lightblue" }} />
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active"
                        onClick={() => setCurrentPage("About")}
                    >
                        <a className="nav-link" href="#">About Me</a>
                    </li>
                    <li className="nav-item"
                        onClick={() => setCurrentPage("Portfolio")}
                    >
                        <a className="nav-link" href="#">Portfolio</a>
                    </li>
                    <li className="nav-item"
                        onClick={() => setCurrentPage("Contact")}
                    >
                        <a className="nav-link" href="#">Contact Me</a>
                    </li>
                    <li className="nav-item"
                        onClick={() => setCurrentPage("Resume")}
                    >
                        <a className="nav-link" href="#">Resume</a>
                    </li>
                </ul>
            </div>

        </nav >
    )
}


export default Navbar