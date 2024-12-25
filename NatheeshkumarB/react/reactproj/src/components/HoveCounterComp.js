import { Component } from "react";
import MyHocComp from "./MyHocComp";

class HoverCounterComp extends Component {
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

                <p>counter value is :{this.state.count}</p>
                <h2 onMouseOver={this.changecount}>onclick</h2>

                <p>counter value is :{this.props.count}</p>
                <h2 onMouseOver={()=>this.props.changecount()}>onclick</h2>
            </div>
        )


    }
}
//export default HoverCounterComp;
export default MyHocComp(HoverCounterComp)