import React, {Component } from "react";
class Nav extends Component {
    render(){
        return(
            <nav class="nav">
                <ul>
                    {this.props.menu.map((item) => ( 
                            <li  key={item.title}>{item.title}</li>
                    ))} 
                </ul>
            </nav>
        )
    } 
}
export default Nav;