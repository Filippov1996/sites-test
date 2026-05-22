import React, {Fragment,Component } from "react";
class Posts extends Component {
    render(){
        return(
        <>
        {this.props.posts.map(({title,description})=>(
            <div className="post__item">
                <span>{title}</span>
                <span>{description}</span>
            </div>
        ))}
        </>
        )
    } 
}
export default Posts;