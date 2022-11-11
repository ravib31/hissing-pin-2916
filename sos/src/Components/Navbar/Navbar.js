import React from "react";
import "./Navbar.css";
import { Input } from '@chakra-ui/react'
import { IoPersonSharp } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { BiShoppingBag } from "react-icons/bi";
// problem is here icon is not showing
// and also push problem
const Navbar = () => {
    return (
        <>
            <nav className="main-nav">
                <div className="logo"><h1>ASOS</h1>
                </div>

                <div className="menu-link">
                    <ul>
                        <li>
                            <a href="#">WOMEN</a>
                        </li>
                        <li>
                            <a href="#">MEN</a>
                        </li>

                    </ul>

                </div>
                <div className="search" style={{ width: "300px", margin: "auto 0px auto 100px" }}>
                    <Input style={{ background: "white" }} placeholder='search for item and products' />
                </div>

                <div className="n-right">
                    <ul className="nl-right">
                        <li>
                            <a href="" target="">
                                <IoPersonSharp />
                            </a>
                        </li>

                        <li>
                            <a href="" target="">
                                <FcLike />                       </a>
                        </li>
                        <li>
                            <a href="" target="">
                                <BiShoppingBag />
                            </a>
                        </li>
                    </ul>

                </div>
                <div>

                </div>


            </nav>
        </>
    );
};




export default Navbar;