import SingIn from "../SignIn/SignIn";
// import Navbar from "../Navbar/navbar";
import Footer from "../Footer/Footer";
import { Routes, Route } from "react-router-dom";

 const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/SignIn" element={<SingIn />} />
            </Routes >
        </div>
    )


}

export default AllRoutes