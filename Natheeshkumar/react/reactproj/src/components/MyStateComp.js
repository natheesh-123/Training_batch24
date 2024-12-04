import { Component } from "react";

class MyStateComp extends Component {

    constructor() {
        super();
        this.state = {
            empName: "mahesh",
            empSal: 50000
        }
    }
        changeStateData=()=>{
            this.setState({empName:"mahesh r",empSal:this.state.empSal+5000});
            //this.setState((prevState) => ({ empName: "mahesh r", empSal: prevState.empSal + 5000 }));
        }


    render() {
        return (
            <div>
                <h2>this is MyStateComp</h2>

                <p> <strong>{this.state.empName}</strong> and salary:<strong>{this.state.empSal}</strong></p>

                <button type="button" onClick={() => this.changeStateData()}>change state data</button>

            </div>
        )
    }
}
export default MyStateComp;