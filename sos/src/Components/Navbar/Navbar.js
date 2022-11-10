import React from "react";
import { IoPersonSharp, FcLike, BiShoppingBag } from "@react-icons/all-files";
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

                <div className="n-right">
                    <ul className="nl-right">
                        <li>
                            <a href="" target="">
                                <IoPersonSharp />
                            </a>
                        </li>

                        <li>
                            <a href="" target="">
                                <FcLike />
                            </a>
                        </li>

                        <li>
                            <a href="" target="">
                                <BiShoppingBag />
                                <h2>tele</h2>
                                <h2>tel</h2>
                            </a>
                        </li>
                    </ul>

                </div>


            </nav>
        </>
    );
};
export default Navbar;