import SingIn from "../SignIn/SignIn";
// import Navbar from "../Navbar/navbar";
import Footer from "../Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Men from "../Mens/Men";
import Join from "../Join/Join";
import Home from "../Home/Home";

 const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/SignIn" element={<SingIn />} />
                <Route path="/Men" element={<Men />} />
                <Route path="/Join" element={<Join />} />
                {/* <Route path="/Navbar" element={<Navbar />} />
                <Route path="/Footer" element={<Footer />} /> */}
                 <Route path="/" element={<Home/>} />


            </Routes >
        </div>
    )


}

export default AllRoutes