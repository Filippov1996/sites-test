import { render } from "@testing-library/react";
import React, {Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const Content=({datamsgs,status})=>{
        
        return(
            <div className={`alert ${!status? datamsgs[0].status : datamsgs[1].status}`} role='alert'>
                    {!status? datamsgs[0].title: datamsgs[1].title}
            </div>
        );
}
export default Content;