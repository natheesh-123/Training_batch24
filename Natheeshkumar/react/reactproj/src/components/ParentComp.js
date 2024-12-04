import { Component } from "react";
import ChildComp from "./ChildComp";
class ParentComp extends Component {
    constructor(props) {
        super();
        this.state = {
            empName: "natheesh",
            empSal: 50000
        }
    }
    changeDetails = () => {
        this.setState({ empName: "natheeshkumar", empSal: this.state.empSal + 5000 });
    }

    render() {

        const { empName, empSal } = this.state;
        const { gender, contact } = this.props;
        console.log(this.props);
        return (

            <>
                {/* <p>Name:{this.state.empName} and sal:{this.state.empSal}</p> */}
                <p>Name:<strong>{empName}</strong> ,salary:<strong>{empSal}</strong></p>
                <p>gender:<strong>{gender}</strong> ,contact:<strong>{contact}</strong></p>

                <button type="button" onClick={() => this.changeDetails()} >change state data</button>

                {/* <ChildComp empName="kumar" esal={70000}></ChildComp> */}
                <ChildComp name={empName} sal={empSal} managestate={this.changeDetails}></ChildComp>
            </>



        )
    }
}
export default ParentComp;