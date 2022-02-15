import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import React,{useState} from "react";
import SignIn from "./SignIn";
import EmptyState from "./EmptyState";
import MovieList from "./MovieList";
import CreateMovie from "./CreateMovie";
import Home from "./Home";

function App() {
  const [jwt,setJwt]=useState("");
  function recieveToken(token){
    setJwt(token);
  }
  return (
    <Router>
      <Main jwt={jwt} recieveToken={recieveToken}/>
    </Router>
  
  );
}

function Main(props) {
  return(
    <Routes>
      <Route path="/" element={<Home jwt={props.jwt} recieveToken={props.recieveToken}/>} />
      <Route path="/create" element={<CreateMovie  jwt={props.jwt} />} />

    </Routes>
  );
}
export default App;
