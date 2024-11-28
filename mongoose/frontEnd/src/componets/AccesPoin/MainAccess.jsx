import React from 'react'
import axios from "axios";
 
const MainAccess = () => {
  
    async function fun(){
        let token = localStorage.getItem("token");
        let res = await  axios.get("http://localhost:7000/user",{headers:{
            Authorization :`${token}`
        }
        
    });
    alert(res.data);
    console.log(res);
  
     }
  return (
     <>
      <button onClick={fun}>Admin</button>
      <button>User</button>
     </>
  )
}

export default MainAccess