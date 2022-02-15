import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { NavLink,Navigate ,useNavigate} from "react-router-dom";
import axios from "axios";

function CreateMovie(props) {
    const [upload, setUpload] = useState({
        title: "",
        publicationYear: "",
        imageFile: ""
    });
    function handleDrop(acceptedFiles) {
        console.log(acceptedFiles);
        setUpload((prevValue)=>{
            return{
                ...prevValue,
                imageFile:acceptedFiles
            };
        })
    }
    function handleChange(event){
        const {name,value}=event.target;
        setUpload((prevValue)=>{
            return{
                ...prevValue,
                [name]:value
            };
        })
    }
    function handleClick(event){
        event.preventDefault();
        console.log("clicked");
        axios.post("https://zm-movies-assignment.herokuapp.com/api/movies",{upload},{
            headers: {
                "Authorization": `Bearer ${props.jwt}`
        }}).then((res)=>{
            console.log(res);
            <Navigate to="/" />
        }).catch(err=>{
            console.log(err);
            if(err){
            <Navigate to="/"/>
            }
        });
    }
    return (
        <div className="create-movie">
            <div className="create-movie-header">
                <h2>Create new movie</h2>
            </div>
            <div className="create-movie-menu">
                <div className="drop-zone">
                    <Dropzone onDrop={acceptedFiles => handleDrop(acceptedFiles)}>
                        {({ getRootProps, getInputProps }) => (
                            <section>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <p>Upload image here</p>
                                </div>
                            </section>
                        )}
                    </Dropzone>
                </div>

                <form>
                    <input onChange={handleChange} value={upload.name} type="text" name="title" placeholder="Title" className="create-movie-title" />
                    <input onChange={handleChange} value={upload.publicationYear} type="text" name="publicationYear" placeholder="Publishing year" className="create-movie-year" />
                    <div className="create-buttons">
                        <NavLink to="/">
                            <button type="button" className="create-movie-cancel">Cancel</button>
                        </NavLink>
                        
                        <button onClick={(event)=>handleClick(event)}  className="create-movie-submit">Submit</button>
                        
                    </div>

                </form>
            </div>
        </div>
    );
}
export default CreateMovie;