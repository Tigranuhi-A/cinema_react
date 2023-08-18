import { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import logo from "../img/movielogy.png";


export function Header() {

    const [user, setUser] = useState(false);

    return (
        <div>
            <nav className=" fixed w-full flex justify-between items-center bg-black/40 p-6 sm:px-24 z-10">
                <Link className=" cursor-pointer w-[150px] sm:w-[180px]" to='/'>
                    <img src={logo} alt="logoImage" />
                </Link>
                <div className=" cursor-pointer text-orange-700 text-2xl" onClick={() => setUser(!user)}>
                    <BsFillPeopleFill />
                </div>
            </nav>

            {
                user &&
                <div className=" top-0 left-0 bottom-0 right-0 bg-black/70 fixed w-full
                flex justify-center items-center z-20">

                    <form className=" text-center bg-white p-8 m-4" >
                        <div className=" text-gray-900 font-bold text-[30px]">Login</div>
                        <input type="email" placeholder="Enter Your Email" className=" w-[100%] rounded border-2
                     border-orange-700 my-1 p-1" />
                        <input type="password" placeholder="Enter Your Password" className=" w-[100%] rounded border-2
                     border-orange-700 my-1 p-1" />
                        <input type="submit" value="Login Now" className=" w-[100%] rounded cursor-pointer bg-orange-700
                     text-white my-1 p-2" />
                        <input type="checkbox" /> <span>Remember me</span>
                        <div>
                            Forgot Password? <a href="#" className=" text-orange-700">Click Here</a>
                        </div>
                        <div>
                            Dont Have An Account? <a href="#" className=" text-orange-700">Register Now</a>
                        </div>
                    </form>

                    <div>
                        <AiFillCloseCircle className=" absolute top-4 right-6 text-white text-3xl cursor-pointer"
                            onClick={() => setUser(false)} />
                    </div>

                </div>
            }
        </div>
    )
}
