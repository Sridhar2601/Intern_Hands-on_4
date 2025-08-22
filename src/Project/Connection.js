import { BrowserRouter, Routes,Route } from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import Menu from './Menu';
import About from './About';
import Book from './Book';
import Footer from "./Footer";
import Bookings from "./Bookings";
export default function Connection(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={[<Nav/>,<Home/>,<Footer/>]}></Route>
                    <Route path="/menu" element={[<Nav/>,<Menu/>,<Footer/>]}></Route>
                    <Route path="/about" element={[<Nav/>,<About/>,<Footer/>]}></Route>
                    <Route path="/book" element={[<Nav/>,<Book/>,<Footer/>]}></Route>
                    <Route path="/Bookings" element={[<Bookings/>]}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}