import React, { useState } from 'react';
import axios from "axios";
import "./login.css"
import { useNavigate } from 'react-router-dom';
const Login = () => {

    // function clickHandler(id) {
    //     navigate(`/movies/Home`);
    // }
    // State to manage form data
    const [formData, setFormData] = useState({
        
        email: "",
        password: ""
    });

    // const [msg, setMsg] = useState("");
    let navigat = useNavigate();

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await  axios.post("http://localhost:7000/login",formData);
    //    console.log(res,"singnformmm dataaaa");

    //    console.log(res.data.token);
       localStorage.setItem("token",res.data.token)
       if(res.data.token){
           navigat("/Home")
        }
        else{
            alert("Email or password Wronggg")
        }

         


       // hame jis page me needi hogi wha ham eska use krenge
      
       
    };

    return (
        <>
            <fieldset>
                <legend>Login</legend>
                <form className='bg-red-500' onSubmit={handleSubmit}>
                   
                    <input
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <br />
                    <br />
                    <input
                        type="text"
                        placeholder="Enter your password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <br />
                    <br />
                
                    <button  type="submit">Submit</button>
                   
                </form>
                {/* <p>{msg}</p> */}
            </fieldset>
        </>
    );
};

export default Login;
