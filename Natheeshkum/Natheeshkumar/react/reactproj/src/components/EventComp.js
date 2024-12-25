import { Component } from "react";

class Eventcomp extends Component {

    greeting = () => {
        window.alert("hello everyone");

    };

    welcome = (...std) => {
        window.alert(`welcome you ${std}`);
    };
    render() {
        return (
            <div>
                <h2>this is event component</h2>
                <button type="button" onClick={() => this.greeting()}>call greeting</button>
                <button type="button"class="btn btn-primary" onClick={() => this.welcome("natheesh", "ravi", "ram")}>call welcome</button>


            </div>
        )
    }
}

export default Eventcomp;