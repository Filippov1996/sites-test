
import React, { Fragment, Component } from "react";
import "./App.css";
import Header from "./Header";
//import Nav from "./Nav";
import Footer from "./Footer";
import Content from "./Content";
import Form from "./Form";
import { Placeholder } from "react-bootstrap";
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
        const posts = [
                      {title:"Post 1",
                       src:"http://site-portfolio.online/netkanika/wp-content/uploads/2026/01/unnamed-file.png",
                       rating:3,
                       description:"Some quick example text to build on the card title and make up the bulk of the card’s content.",
                       href:"/post1"
                      },
                      {title:"Post 2", 
                       src:"http://site-portfolio.online/netkanika/wp-content/uploads/2026/01/photo_52178776257354.jpg",
                       rating:4,
                       description:"Some card title and make up the bulk of the card’s content.",
                       href:"/post2"
                      }
        ]; 
        let today = new Date();
        let year = today.getFullYear();
        const copy = `${year}|@copyright все права защищены `;
        const stars = [1,2,3,4,5];
        const form =  {title:"Callback",
                       color:"red",
                       type:['text','password'],
                       placeholder:['Enter name','Enter password'],
                       value:['Enter name','Enter password']
                      };
        return(
          <Fragment>
            <Header logo={header_data.logo} alt={header_data.alt}></Header>
             <Content datamsgs={msgs} status posts={posts} stars={stars}></Content>
             <Form form={form}></Form>
            <Footer copy={copy}></Footer>
          </Fragment>
        )
    } 
}

export default App;
