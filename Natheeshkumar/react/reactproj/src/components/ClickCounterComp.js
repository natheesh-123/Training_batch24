import { Component } from "react";
import MyHocComp from "./MyHocComp";

class ClickCounterComp extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         count: 0
    //     }
    // }

    // changecount = () => {
    //     this.setState({ count: this.state.count + 1 });
    // }


    render() {
        return (
            <div>
                <h2>im in clickcountcomp</h2>

                {/* <p>counter value is :{this.state.count}</p>
                <button type="button" onClick={() => this.changecount()}>count++</button> */}

                <p>counter value is :{this.props.count}</p>
                <button type="button" onClick={this.props.changecount}>count++</button>


            </div>
        )


    }
}
//export default ClickCounterComp;
export default MyHocComp(ClickCounterComp)