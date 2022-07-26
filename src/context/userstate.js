import {useState, useEffect} from 'react';
import UserData from "./usercontext";
import axios from "axios";

const UserState=(props)=>
{
   
    
    let [data,setData]= useState([])
    useEffect(()=>{
        async function getAllData(){
          try{
            let mydata=await axios.get("http://127.0.0.1:8000/get-user/97c43505-04a0-42f1-be6c-7bc160c6adb2")
    
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