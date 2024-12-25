// import React, { Component } from 'react'
//  class MyFavColorComp extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              color:"red"
//         }
//     }

//     // static getDerivedStateFromProps(props){
//     //     return {
//     //         color:props.newcolor
//     //     }
//     // }

//     // componentDidMount(){
//     //     setTimeout(()=>{
//     //         this.setState({color:"pink"})
//     //     },200)
//     // }

//     shouldComponentUpdate(){
//         return false;
//     }

//     getSnapshotBeforeUpdate(prevProps,prevState){
//         document.getElementById("beforeupdate").innerHTML=`before update my favourite 
//         color was:${prevState.color}`;
//     }

//     changeColor=()=>{
//         this.setState({color:"blue"});
//         //console.log("httt");
//     }
//     componentDidUpdate(){
//         document.getElementById("afterupdate").innerHTML=`after update my favourite
//          color is :${this.state.color}`;
//     }

//     render() {
//         return (
//             <div>
//                 <p>this is my fav color component</p>
//                 <p>color is:<strong>{this.state.color}</strong></p>
//                 <div id="beforeupdate"></div>
//                 <div id="afterupdate"></div>
//                 <button type="button" onClick={()=>this.changeColor()} 
//                 className='btn btn-primary '>change color</button>
//             </div>
//         )
//     }
// }

// export default MyFavColorComp

import React, { Component } from 'react'

export class MyFavColorComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             color:"blue",
        }
    }
    

    // static getDerivedStateFromProps(props){
    //     return{
    //         color: props.newColor
    //     }
    // }
    
    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({color:"tomato"})
    //     }, 2000)
    // }

    
    shouldComponentUpdate(){
        return true;
    }

    changeColor = () => {
        this.setState({color:"yellow"});
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById("beforeupdate").innerHTML = `Before update ${prevState.color}`;
    }
    
    componentDidUpdate(){
        document.getElementById("afterupdate").innerHTML = `after update ${this.state.color}`;        
    }

    render() {
        return (
            <div style={{width:"200px", height:"200px", backgroundColor:`${this.state.color}`}}>
                <button type='button' onClick={()=>this.changeColor()}>Change</button>

                <div id='beforeupdate'></div>
                <div id='afterupdate'></div>
            </div>
        )
    }
}

export default MyFavColorComp


