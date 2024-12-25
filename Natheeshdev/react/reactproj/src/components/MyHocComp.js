import { Component } from "react";
const MyHocComp=(Wrappercomp)=>{

class Hoc extends Component{
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    changecount = () => {
        this.setState({ count: this.state.count + 1 });
    }


render(){
    return <Wrappercomp count={this.state.count} changecount={this.changecount}></Wrappercomp>
}
    
}

return Hoc;
}
export default MyHocComp