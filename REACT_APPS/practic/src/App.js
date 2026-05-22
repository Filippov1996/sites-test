
import React, { Fragment, Component } from "react";
import "./App.css";
import Header from "./Header";
//import Nav from "./Nav";
import Footer from "./Footer";
import Content from "./Content";

class App extends Component {
    render(){
        const header_data = {
              logo:"logo.png",
              alt:"test react"
        }
        const msgs =[
                        {title:"Error not found data",status:"alert-danger"},
                        {title:"Success log in to your account",status:"alert-success"}
                    ];
        let today = new Date();
        let year = today.getFullYear();
        const copy = `${year}|@copyright все права защищены `;
        return(
          <Fragment>
            <Header logo={header_data.logo} alt={header_data.alt}></Header>
            <Content datamsgs={msgs} status></Content>
            <Footer copy={copy}></Footer>
          </Fragment>
        )
    } 
}

export default App;
