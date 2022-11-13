import Navbar from "../Navbar/Navbar";
import CarouselsM from "../carousel/CarouselM";
import Footer from "../Footer/Footer";
import Join from "../Join/Join";
import Men from "../Mens/Men";
import SignIn from "../SignIn/SignIn";
// import AllRoutes from "../Components/Routes/AllRoutes";

function Home() {
    return (
        <div>
            <Navbar />
            {/* <AllRoutes /> */}
            <CarouselsM />
            {/* <Route path={'/men'} element={<Men></Men>}></Route>/ */}
            <img src='asos.jpg' className='image'></img>
            <div className='rat'>
                {/* after the image start */}
                <ul>
                    <li>
                        <a>EASY WORLDWIDE DELIVERY</a>
                        <h4>*minimum spend apply</h4>
                    </li>
                    <li>
                        <a >ASOS DESIGN and 850+</a>
                        <h3>brands</h3>
                    </li>

                </ul>
            </div>

            <Footer />
        </div>
    );
};
export default Home;




