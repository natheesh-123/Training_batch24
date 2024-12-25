import { useEffect, useState } from "react";

const UseEffectHooksComp =()=>{

const [age,setAge]=useState(18);
 const [sal,setSal]= useState(10000);

// case 1: no dependency values
// useEffect(()=>{
//     setAge(age+1);
// })

// 2.when we pass dependencies values as blank array
useEffect(()=>{
    setAge(age+1);
},[])

//case3: when we have to execute useEffect hook as we want 
// useEffect(()=>{
//     setAge(age+1);
// },[sal]);

    return (
        <div>
            <h2>yhis is Use Effect hook component</h2>
            <p>Age is :{age}</p>
            <p>Salart is:{sal}</p>
            <button type="button" onClick={()=>setSal(sal+5000)} 
            className="btn btn-primary">incrment salary</button>
            
        </div>
    )
}
export default UseEffectHooksComp;