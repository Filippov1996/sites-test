import { render } from "@testing-library/react";
import React, {Component,Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const Content=({datamsgs,status,posts})=>{
        
       return(
           <>
            <div className="container">
           <div className="row">
            <div className={`alert ${!status? datamsgs[0].status : datamsgs[1].status}`} role='alert'>
                    {!status? datamsgs[0].title: datamsgs[1].title}
            </div>
            </div>
            </div>
            <div className="posts">
                <div className="container">
                        <div className="row">
                                {posts.map(({title,src,description})=>(
                                        <div className="col-lg-4">
                                        <div lassName="card" >
                                                <img src={src} className="card-img-top" alt="..."></img>
                                                <div className="card-body">
                                                        <h5 className="card-title">{title}</h5>
                                                        <p className="card-text">{description}</p>
                                                 </div>
                                        </div>
                                </div>
                                ))}

                        </div>
                </div>
            </div>
            </>
        )
}
export default Content;