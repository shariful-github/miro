
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";
import ButtonArrow from "./ButtonArrow";

const NavBar = () => {
    return (
        <nav className="navbar justify-between font-inter border-b py-3">
            <div>
                {/* small device */}
                <div className="">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a>Product</a>
                                <ul className="p-2">
                                    <li><a>Product 1</a></li>
                                    <li><a>Product 2</a></li>
                                </ul>
                            </li>
                            <li>
                                <a>Solutions</a>
                                <ul className="p-2">
                                    <li><a>Solution 1</a></li>
                                    <li><a>Solution 2</a></li>
                                </ul>
                            </li>
                            <li>
                                <a>Resources</a>
                                <ul className="p-2">
                                    <li><a>Resource 1</a></li>
                                    <li><a>Resource 2</a></li>
                                </ul>
                            </li>
                            <li><a>Enterprise</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Login</a></li>
                            <li><a>Sign Up</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-4xl font-bold">miro</a>
                </div>
                {/* large device */}
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li>
                            <details>
                                <summary>Product</summary>
                                <ul className="p-2">
                                    <li><a>Product 1</a></li>
                                    <li><a>Product 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Solutions</summary>
                                <ul className="p-2">
                                    <li><a>Solution 1</a></li>
                                    <li><a>Solution 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Resources</summary>
                                <ul className="p-2">
                                    <li><a>Resource 1</a></li>
                                    <li><a>Resource 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Enterprise</a></li>
                        <li><a>Pricing</a></li>
                    </ul>
                </div>
            </div>
            <div className="hidden lg:flex items-center text-sm font-semibold">
                <Link className="active:bg-gray-700 active:text-white flex items-center p-2 hover:rounded-lg hover:bg-[#e8e9eb]">
                    <span className="mr-1 text-xl">
                        <TbWorld />
                    </span>
                    <span>EN</span>
                </Link>
                <Link className="active:bg-gray-700 active:text-white p-2 hover:rounded-lg hover:bg-[#e8e9eb]">Contact Sales</Link>
                <Link className="active:bg-gray-700 active:text-white p-2 mr-2 hover:rounded-lg hover:bg-[#e8e9eb]">Login</Link>
                <ButtonArrow
                    title='Sign up free'
                    type='filled'
                ></ButtonArrow>
            </div>
        </nav>
    );
};

export default NavBar;