import { render } from "@testing-library/react";
import React, {Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = ({copy})=>{
    return(
        <footer className="footer">
            <div className="container">
                <div className="col-lg-12 text-center">
                            <span >{copy}</span>
                </div>
            </div>
        </footer>
    )
} 
export default Footer;