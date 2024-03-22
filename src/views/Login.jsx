import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/authQueries";
import { success,error } from "../utils/toastify";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/userActions";
const Login = () =>{
    const [formData,setFormData]=useState({
        email:" ",
        password:" ",
    })
    const navigate= useNavigate()
    const dispatch= useDispatch()
    const handleInput= (e) =>{
        const name= e.target.name;
        const value=e.target.value;
        const aux={...formData}
        aux[name]=value;
        setFormData(aux);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const aux={...formData}
        for(const key in aux){
            if(!aux[key]){
                delete aux[key]
            }
        }
        login(aux).then((response)=>{
            if(response.status==200){
                dispatch(loginUser(response.data))
                success("Welcome "+ response.data.first_name)
                navigate("/");
            }
            else{
                error(response.statusMsg);
            }
        })
    }
    return(
        <main className="bg-[#00718F] grow pt-16 flex gap-5 justify-center items-center">
            <div className="bg-white w-11/12 md:w-11/12 flex flex-col my-4 border rounded">
                <div className="border rounded flex flex-col md:flex-row p-3">
                    <div className="bg-[url(/login.png)] border rounded w-full md:w-1/2 flex justify-end md:h-11/12">
                    </div>
                    <div className="w-full md:w-1/2 py-5 flex flex-col items-center">
                        <div className="text-center flex flex-col items-center justify-center mb-10">
                            <Link to="/"><img src="/logo.png" alt="Logo" className="h-8 w-8 justify-center items-center"/></Link>
                            <p className="font-bold text-md md:text-lg lg:text-xl">Welcome back!</p>
                            <p className="text-xs md:text-sm lg:text-md">Enter the field below get started</p>
                        </div>
                        <form className="w-full flex flex-col items-center gap-4 pb-8" onSubmit={handleSubmit} onInput={handleInput}>
                            <input className="w-10/12 h-10 outline-none rounded-lg ps-5" type="email" placeholder="Email" name="email"/>
                            <input className="w-10/12 h-10 outline-none rounded-lg ps-5" type="password" placeholder="Password" name="password"/>
                            <input type="submit" className="cursor-pointer bg-[#00718F] w-60 text-white h-10 rounded-lg font-semibold text-xl hover:bg-[#013F4E]" value="Sign in"/>
                        </form>
                        <div className="text-center">
                            <p className="italic">Don't have an account?</p>
                            <Link className="flex bg-white w-3/4 md:w-60 text-[#00718F] h-10 justify-center items-center rounded-lg font-semibold text-lg md:text-xl hover:text-[#013F4E]" to="/register">Register here</Link>
                        </div>
                    </div>
                </div>
            </div>
    </main>
  );
}
export default Login;