import React, { useState, useEffect } from "react";
import axios from "axios";
import SignIn from "./SignIn";
import MovieList from "./MovieList";

function Home(props) {
    const [userIsAuthenticated, setUserIsAuthenticated] = useState(0);
    
    useEffect(() => {
        axios.get("https://zm-movies-assignment.herokuapp.com/api/movies?populate=*",{
            headers: {
              "Authorization": `Bearer ${props.jwt}` 
            }}).then((res)=>setUserIsAuthenticated(1))
            .catch((err) => {
                if(err){
                console.log(err);
                setUserIsAuthenticated(0);
                }
            },[])
    })
    function submitUserInfo(input){
        axios.post("https://zm-movies-assignment.herokuapp.com/api/auth/local",input)
        .then((res)=>{
            console.log(res);
            props.recieveToken(res.data.jwt);
        })
        .catch((err)=>console.log(err));
    }
    return (
        <div className="home-div">
            {userIsAuthenticated ? 
            <MovieList /> 
            :<SignIn submitUserInfo={submitUserInfo} />}
        </div>

    );

}
export default Home;