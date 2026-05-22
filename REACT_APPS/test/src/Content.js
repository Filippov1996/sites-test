import React, {Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
class Message extends Component {
    render(){
        return(
          <div className={this.props.status ? "alert alert-success" : "alert"} role="alert">
          {this.props.msg}
          </div>
        )
    } 
}
export default Message;