import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const AuthContext = createContext();



export default AuthContext;

export const AuthProvider =({children})=>{
    

  

    let [userdata,setData]= useState([])


    function GetUser(){
        let token= localStorage.getItem('token')

        const config = {

            headers: {"Authorization" : `Bearer ${token}`} 
        }
  
        try{
            let mydata=axios.get("http://127.0.0.1:8000/user-profile",config)
    
            setData(mydata.data)
            console.log(mydata.data)
           
            
          }
          catch(error){
            console.log(error);
          }
}
      


    const loginUse= async (e)=>{
        e.preventDefault()
        
        let response= await fetch('http://127.0.0.1:8000/user-login',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({'email_phone':e.target.email_phone.value,'password':e.target.password.value})
        })

        let data = await response.json()
        console.log(data);
        if(response.status===200){
        
            localStorage.setItem('token',data.access)

            const config = {
    
                headers: {"Authorization" : `Bearer ${data.access}`} 
            }
      
            try{
                let mydata=await axios.get("http://127.0.0.1:8000/user-profile",config)
        
                setData(mydata.data)
                console.log(mydata.data)
               
                
              }
              catch(error){
                console.log(error);
              }

        }
        else{
            alert("wrong");
        }
    }


    let contextData ={
        userdata:userdata,
        loginUser:loginUse,
        GetUser:GetUser

    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

