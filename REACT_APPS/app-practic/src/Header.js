import { render } from "@testing-library/react";
import React, {Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = ({logo,alt})=>{
    const menu = [
                  {link:"/home",name:"Home"},
                  {link:"/about",name:"About"},
                  {link:"/gallery",name:"Gallery"},  
                  {link:"/contact",name:"Contact"},  
        ];
    return(
    
        <nav className="navbar navbar-expand-lg navbar-light bg-ligh">
            <div className="container">
                 
                        <div className="col-lg-2">
                            <a href="/" className="nav__logo"><img src={logo} alt={alt}/></a>
                        </div>
                        <div className="col-lg-10 ">
                            <Nav menu_data={menu}></Nav>
                        </div>
                 
            </div>
        </nav>
    )
}
const Nav = ({menu_data})=>{
    return(
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
                {menu_data.map(({link,name})=>(
                    <li key={name}  className="nav-item"><a className="nav-link" href={link}>{name}</a></li>
                ))}
            </ul>
    )
}

export default Header;