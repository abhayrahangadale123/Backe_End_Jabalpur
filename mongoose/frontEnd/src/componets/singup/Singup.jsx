import React, { useState } from 'react';
import axios from "axios";
import "./Singup.css"
import { Link } from 'react-router-dom'
const Signup = () => {
    // State to manage form data
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    // const [msg, setMsg] = useState("");

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await axios.post("http://localhost:7000/create", formData);
        console.log(res, "singnformmm dataaaa");

    };

    return (
        <>
            <div>

                <fieldset>
                    <legend>Signup</legend>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Enter your first name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                             required
                        />
                        <br />
                        <br />
                        <input
                            type="text"
                            placeholder="Enter your last name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="text-3xl font-bold underline"
                            required
                        />
                        <br />
                        <br />
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
                                                                   
                        <button type="submit">Ragistration</button>
                        
                    </form>
                    {/* <p>{msg}</p> */}
                    <div className='log'>Terms & conditions &
                        <span>
                            <Link to="/login">
                         login
                            </Link>
                        </span>
                         </div>
                </fieldset>
            </div>
        </>
    );
};

export default Signup;
