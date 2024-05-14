import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="mt-6 text-center">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="font-bold hover:text-[#FF444A] hover:underline"><NavLink to="/">Home</NavLink></li>
                            <li className="font-bold hover:text-[#FF444A] hover:underline"><NavLink to="/donations">Donation</NavLink></li>
                            <li className="font-bold hover:text-[#FF444A] hover:underline"><a>Statistics</a></li>
                        </ul>
                    </div>
                    <div><img src="https://i.postimg.cc/5tMm0G03/Logo.png" alt="" /></div>
                </div>

                <div className="navbar-end">
                    <div className="hidden navbar-center lg:flex">
                        <ul className="px-1 menu menu-horizontal">
                            <li className="font-bold hover:text-[#FF444A] hover:underline"><NavLink to="/">Home</NavLink></li>
                            <li className="font-bold hover:text-[#FF444A] hover:underline"><NavLink to="/donations">Donation</NavLink></li>
                            <li className="font-bold hover:text-[#FF444A] hover:underline"><a>Statistics</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;