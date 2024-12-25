import { useState } from "react";

const UseStateHooksComp = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("natheesh");

    const incrementCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>this is use state hooks component</h2>
            <p>conter value:<strong>{count}</strong></p>

            <button type="button" onClick={() => incrementCount()}
                className="btn btn-primary me-2">change count</button>

            <button type="button" onClick={() => setCount(count + 2)}
                className="btn btn-primary me-2">change count+2</button>

            <hr />
            <p>my name:{name}</p>
            <button type="button" onClick={() => setName("natheesh kumar")}
                className="btn btn-primary">change name</button>

        </div>
    )
}
export default UseStateHooksComp;