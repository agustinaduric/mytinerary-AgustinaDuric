import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCountries } from "../services/countriesQueries";
import { register } from "../services/authQueries";
import { success,error } from "../utils/toastify";
const Register = ()=>{
    const [formData,setFormData]=useState({
        first_name:" ",
        last_name:" ",
        email:" ",
        password:" ",
        country:" ",
    })
    const [countries,setCountries]=useState([])
    const navigate= useNavigate()
    useEffect(()=>{
        getCountries().then((data)=>{setCountries(data)});
    },[])
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
        register(aux).then((response)=>{
            if(response.status==201){
                success("Account created successfully");
                navigate("/login")
            }
            else{
                error(response.statusMsg)
            }
        })
    }
    return(
        <main className="bg-[#00718F] grow pt-16 flex gap-5 justify-center items-center">
            <div className="bg-white w-11/12 md:w-11/12 flex flex-col my-2 border rounded">
                <div className="border rounded flex flex-col md:flex-row p-3">
                    <div className="w-full md:w-1/2 py-5 flex flex-col items-center h-fit">
                        <form className="w-full flex flex-col items-center gap-4 pb-4" onSubmit={handleSubmit} onInput={handleInput}>
                            <input className="w-10/12 h-10 outline-none rounded-lg ps-5" type="text" placeholder="Name" name="first_name"/>
                            <input className="w-10/12 h-10 outline-none rounded-lg ps-5" type="text" placeholder="Surname" name="last_name"/>
                            <input className="w-10/12 h-10 outline-none rounded-lg ps-5" type="email" placeholder="Email" name="email"/>
                            <input className="w-10/12 h-10 outline-none rounded-lg ps-5" type="password" placeholder="Password" name="password" />
                            <select className="w-10/12 h-10 outline-none rounded-lg ps-5" name="country" defaultValue="Country">
                                <option value=" ">Select a Country</option>
                                {countries.length > 0 && countries.map(country => (<option value={country} key={country}>{country}</option>))}
                            </select>
                            <input className="w-10/12 h-10 outline-none rounded-lg ps-5" type="text" name="URL" placeholder="Image URL"/>
                            <input className="cursor-pointer bg-[#00718F] w-full md:w-60 text-white h-10 rounded-lg font-semibold text-lg md:text-xl hover:bg-[#013F4E]" type="submit" value="Sign up"/>
                        </form>
                        <div className="text-center">
                            <p className="italic">Do you have an account?</p>
                            <Link className="flex bg-white w-full md:w-60 text-[#00718F] h-10 justify-center items-center rounded-lg font-semibold text-lg md:text-xl hover:text-[#013F4E]" to="/login">Sign in</Link>
                        </div>
                    </div>
                    <div className="bg-[url(/register.jpeg)] border rounded w-full md:w-1/2 flex justify-start md:h-11/12 bg-cover bg-center">
                        <p className="flex italic text-lg md:text-xl lg:text-2xl md:text-white lg:text-white text-black font-bold self-start p-6">Start your journey with us!</p>
                    </div>
                </div>
            </div>
    </main>
    )
}
export default Register;