import React from 'react'

const FormValComp = () => {

    const [user,setUser]=useState({
        fname:"",
        term:false
    });

    const changeInput=(event)=>{
        // console.log(event.target.type);
        // console.log(event.target.name);
        // console.log(event.target.value);

        const {type,name,value,checked}=event.target;
        setUser({...user,[name]:type==="checkbox"?checked:value});
    }
    const checkData=(event)=>{
        event.preventDefault();
        if(user.fname.trim()===""){
            window.alert("fname is reqiuired");
            return false;
        }
        if(!user.fname.trim().match("^[a-zA-Z ]{3,20}$")){

            window.alert{""}

        }

    }

    return (
        <div>
            <p>this is my form val component</p>
            <form onSubmit={checkData}>

            </form>
        </div>
    )
}

export default FormValComp


// import React, { useState } from 'react'

// function FormValComp() {

//     const [user, changeUser] = useState(
//         {
//             fname : "",
//             terms : false
//         }
//     );

//     const changeInput = (event) => {
//         const {type, name, value} = event.target;
//         changeUser({...user,[name]:value});
//         console.log(name);
//         console.log(value);
//         console.log(event.target);        
//     }


//     const checkForm = (event) => {
//         event.preventDefault();

//         window.alert(JSON.stringify(user));
//     }
    
//     return (
//         <div>
//             {/* <h2>Form Validation</h2>    */}

//             <form onSubmit={checkForm}>
//                 <div>
//                 <label>Full Name : </label>
//                 <input type='text' name="fname" value={user.fname} onChange={changeInput}></input>
//                 </div>

//                 <div>
//                 <input type='checkbox' name="terms" value={user.terms} onChange={changeInput}></input>
//                 </div>

//                 <button type='submit'>submit form</button>
//             </form>
//         </div>
//     )
// }

// export default FormValComp
