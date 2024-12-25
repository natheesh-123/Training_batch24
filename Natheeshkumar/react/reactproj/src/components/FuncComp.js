// function FuncComp(){
//     return <h2>this is Function component</h2>
// }

//let FuncComp =()=><h2>this is Function component</h2>;

const FuncComp=(props)=>{
    return(
        <div>

            <h2>this is function component</h2>
            <p>this is paragraph</p>

            <p>my name is <strong>{props.fname}</strong>,i am : {props.post}</p>
        </div>
    )
}

export default FuncComp;