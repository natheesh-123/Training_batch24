const ChildComp=(props)=>{
   const{name,sal,managestate}=props;
    return(
        <div>
       <h2>this is child component</h2>
       <p>Name:{name}and salary:{sal}</p>
       <h2 onMouseOver={managestate}>change data</h2>
        </div>
 
    )
}
export default ChildComp;