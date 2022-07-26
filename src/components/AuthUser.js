import axios from 'axios';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';

export default function AuthUser(){


    const http =axios.create({
        baseURL:"http://127.0.0.1:8000",
        headers:{
            "content-type":"application/json"
        }

    });
    return {
        http
              
    }
}