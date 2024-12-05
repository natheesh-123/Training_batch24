import { Component } from "react";

class Counttask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increment = () => {
        //this.setState({ count: this.state.count + 1 });
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }


    decrement = () => {
        // this.setState({ count: this.state.count - 1 });
        this.setState((prevState) => ({ count: prevState.count - 1 }));
    }

    reset = () => {
        this.setState({ count: 0 });
       // this.setState({ count: 0 });
    }


    render() {
        return (
            <div>
                <h2>Counter </h2>
                <p>count:{this.state.count}</p>
                <div style={{display:"flex",justifyContent:"center",gap:"20px"}}>

                    <button type="button" className="btn btn-warning" onClick={this.increment}>count++</button>
                    <button type="button" className="btn btn-info" onClick={this.decrement}>count--</button>
                    <button type="button" className="btn btn-primary" onClick={this.reset}>reset</button>

                </div>

            </div>
        )
    }
}


export default Counttask;