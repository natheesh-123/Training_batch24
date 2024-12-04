import { Component } from "react";

class Counttask extends Component {
    constructor() {
        super();
        this.initial = {
            count: 0
        }
    }

    increment = () => {
        this.setState({ count: this.initial.count + 1 });
        //this.setState((prevState) => ({count: this.prevState.count + 1 }));
        }
    

    decrement = () => {
        this.setState({ count: this.initial.count - 1 });
    }

    reset = () => {
        this.setState({ count: this.initial.count=0 });
    }


render() {
    return (
        <div>
            <h2>Counter </h2>
            <p>count:{this.initial.count}</p>

            <button type="button" class="btn btn-warning" onClick={() => this.increment()}>count++</button>
            <button type="button" class="btn btn-info" onClick={() => this.decrement()}>count--</button>
            <button type="button" class="btn btn-primary" onClick={() => this.decrement()}>reset</button>

        </div>
    )
}
}


export default Counttask;