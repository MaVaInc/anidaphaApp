import { useState } from "react";
import api from "../api"
import { useNavigate } from "react-router-dom";
import {ACCESS_TOKEN, REFRESH_TOKEN} from '../constants'


function Form({route, method}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return <form onSubmit={handleSubmit} className="form-container">
        <h1>{name}</h1>
        <input className='form-input' type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username'/>
        <input className='form-input' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
        
    </form>
}