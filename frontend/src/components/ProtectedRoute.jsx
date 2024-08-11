import {Navigate} from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import api from "../api"
function ProtectedRoute({children}){
    const [inAuthorized, setIsAuthorized] = useState(null)
    const refreshToken = async () => {

    }

    const auth = async () => {

    }

    if (isAuthorized === null) {
        return <>Loading...</>
    } 
    return isAuthorized ? children : <Navigate to='/login'/>
}

export default ProtectedRoute