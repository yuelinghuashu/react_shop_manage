import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

// 懒加载
const Login = lazy(() => import('../views/Login'))
const Home = lazy(() => import('../views/Home/'))


export default [
    { path: '/', element: <Navigate to="/login" /> },
    { path: '/login', element: <Login /> },
    { path: '/home', element: <Home /> },
]

