import React, { useRef } from "react"
import "./loginComp.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginComp = () => {

    const nav = useNavigate();
    const uidRef = useRef();
    const upassRef = useRef();


    const checkUser = () => {
        let uid=uidRef.current.value;
        let upass=upassRef.current.value;
        console.log(uid,upass);

        axios.get("http://localhost:8080/user").then((res) => {
            
            //console.log(res);
           let currentUser= res.data.filter((val,index)=>{return val.userid===uid && val.userpass===upass})
            if(currentUser.length>0){
                window.alert("login success");
                sessionStorage.setItem("user",uid);
                nav("/maindashboard");
            }
            else{
                window.alert("wrong crediantials");
                uidRef.current.value="";
                upassRef.current.value="";
            }

        }).catch((error) => { })
    }

    return (

        <div className="loginContainer">

            <h2>this is login</h2><br />

            <form className="loginform">
                <labl className="form-label">enter user id:</labl>
                <input type="text" name="uid" ref={uidRef} className="form-control mb-2 "></input>

                <labl className="form-label">enter user password:</labl>
                <input type="text" name="upass" ref={upassRef} className="form-control mb-2 "></input>
                <button type="button" onClick={() => checkUser()} className="btn btn-primary">Login</button>

            </form>
        </div>
    )
}
export default LoginComp;