import {useState, useEffect} from 'react';
import UserData from "./usercontext";
import axios from "axios";

const UserState=(props)=>
{
   
    
    let [data,setData]= useState([])
    useEffect(()=>{
        async function getAllData(){
          try{
            let mydata=await axios.get("http://127.0.0.1:8000/get-user/04729ee3-1e19-4f69-87a2-9e99711bf677")
    
            setData(mydata.data)
          }
          catch(error){
            console.log(error);
          }
        }
        getAllData()
      },[])


    return(
      <UserData.Provider value={data}>
          {props.children}
      </UserData.Provider>
    )
}


export default UserState;