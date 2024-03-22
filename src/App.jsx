import Cities from "./views/cities";
import Home from "./views/home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LayoutMain from "./views/layout";
import CityInfo from "./views/cityInfo";
import { useDispatch } from "react-redux";
import Register from "./views/Register";
import Login from "./views/Login";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginToken } from "./services/authQueries";
import { useEffect } from "react";
import { loginUser } from "./redux/actions/userActions";

function App() {
    const dispatch=useDispatch()
    useEffect(()=>{
        loginToken().then((response)=>{
            if(response.status==200){
                dispatch(loginUser(response.data))
            }
        })
    })
  return (
    <BrowserRouter>
    <LayoutMain>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cities" element={<Cities/>}></Route>
        <Route path="/cities/:id" element={<CityInfo/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
    </Routes>
    </LayoutMain>
    <ToastContainer/>
    </BrowserRouter>
  )
}

export default App;