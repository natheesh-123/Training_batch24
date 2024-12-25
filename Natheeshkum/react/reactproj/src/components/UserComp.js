const UserComp=(props)=>{

    if(props.user==="ravi"){
        throw Error ("Not A user") ;
    }

    return(
        <div>
            <h2>hi</h2>
            <p>{props.user}</p>
        </div>
    )
}
export default UserComp;