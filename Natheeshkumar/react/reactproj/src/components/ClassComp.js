import React,{Component} from "react";

class ClassComp extends Component{

    render(){
        return(
        <div>
   <h2>this is class component</h2>
    <p> my name is <strong>{this.props.fname}</strong>,i am : {this.props.post}</p>
        </div>
        )
     
    }
}

export default ClassComp;