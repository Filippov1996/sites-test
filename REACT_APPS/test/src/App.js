
import React, { Fragment, Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from "./Test";

class App extends Component{
    render(){
      return(
        <main>
          <h1>The Animals</h1>
          <Gallery />
        </main>
      )
    }

}

export default App;
