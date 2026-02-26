import {createBrowserRouter} from 'react-router'
import Signup from '../components/Auth/signup/Signup'
import Login from '../components/Auth/login/Login'

const router = createBrowserRouter([
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/",
        element: <Signup/>
    }
])

export default router;