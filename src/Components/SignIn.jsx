import React,{useState} from "react";


function SignIn(props){
    const [input,setInput]=useState({
        identifier:"",
        password:""
    })
    function handleChange(event){
        const {name,value}=event.target;
        setInput((prevValue)=>{
            return{
                ...prevValue,
                [name]:value
            };
        })

     }
    return (
        <div className="signin-container">
         
            <form>
                <h1>Sign In</h1>
                <input onChange={handleChange} name="identifier" value={input.identifier} className="control control-text" type="email" placeholder="Email" />
                <input onChange={handleChange} name="password" value={input.password} className="control control-text" type="password" placeholder="Password" />
                <div className="control-checkbox-wrapper">
                    <input className="contro control-checkboxl" name="rememberMe"  type="checkbox" />
                    <label for="rememberMe">Remember me</label>
                </div>
                <button onClick={()=>props.submitUserInfo(input)} type="button">
                 Login
                </button>

                
            </form>
        </div>
    )
}
export default SignIn;