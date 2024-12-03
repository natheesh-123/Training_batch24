import { Component } from "react";

class ConditionalRenComp extends Component{
    constructor(){
        super();
        this.state={
            isCond:true
        }
    }
    render(){
        let msg="";
        if(!this.state.isCond){
           // return <h2>admin login successfully</h2>
           msg="admin login successfully";
        }
        else{
            //return <h2>user login successfully</h2>
            msg="user login successfully";
        }
//2.use of element as variable 
        return <h2>{msg}</h2>
//3.use of ternary operator
       // return (this.state.isCond)?<h2>admin login successfully</h2> :<h2>user 
        //    login successfully</h2>

        //4.use of short-circuit
       // return !this.state.isCond && <h2>Admin Login Succesfully</h2>


    }
}
export default ConditionalRenComp;