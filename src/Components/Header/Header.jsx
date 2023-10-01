import { NavLink } from "react-router-dom";


const Header = () => {
    const navLinks = <>
    <li><a><NavLink to={"/"}>Home</NavLink></a></li>
    <li><a><NavLink to={"/login"}>Login</NavLink></a></li>
    <li><a><NavLink to={"/register"}>Register</NavLink></a></li>
    <li><a><NavLink to={"/heroRegister"}>Hero</NavLink></a></li>
   
    </>




    return (
        <div className="navbar bg-base-100 justify-between bg-red-300 text-black rounded-xl p-4 m-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Email_Auth</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navLinks}
                </ul>
            </div>
            
        </div>
    );
};

export default Header;