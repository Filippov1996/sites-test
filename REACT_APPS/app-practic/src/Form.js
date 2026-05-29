import { render } from "@testing-library/react";
import React, {Component,Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const Form = ({form})=>{
    const css ={color:form.color};
    return(
        <div style={css} className="form">
            <div className="container">
                        <div className="row">
                            <h1>{form.title}</h1>
                        </div>
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Введите имя</label>
                                <input type={`${form.type[0]}`} placeholder={`${form.placeholder[0]}`} value={`${form.value[0]}`} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">Мы никогда никому не передадим вашу электронную почту.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Пароль</label>
                                <input type={`${form.type[1]}`} placeholder={`${form.placeholder[0]}`}  value={`${form.value[1]}`} className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1">Проверить меня</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Отправить</button>
                            </form>
             </div>
        </div>
    )
}
export default Form;