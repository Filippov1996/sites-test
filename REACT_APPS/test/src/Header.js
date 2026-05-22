import React, {Component } from "react";
class Header extends Component {
    render(){
        
        return(
            <header className="header">
                <img src={this.props.logo} className="header__logo"/>
                <span className="header__name">{this.props.name}</span>
            </header>
        )
    } 
}
export default Header;