import { cloneElement } from 'react';
import './CSS/Nav.css';
export default function Nav() {
    return (
        <div>
            <nav className='d-flex bg-dark p-4'>
                    <div className='ps-5' style={{ color: 'white' }}>
                        <h3>Eat & Meet</h3>
                    </div>
                    <div class="n" style={{ paddingLeft: 240 }}>
                        <li> <a href="/">HOME</a></li>
                        <li> <a href="/Menu">MENU</a></li>
                        <li> <a href="/About">ABOUT</a></li>
                        <li> <a href="/Book">BOOK TABLE</a></li>

                        <div style={{ paddingLeft: 150,color:'white'}}>
                            <a href='#'><i class="fa-solid fa-user"></i></a>
                            <a href='#' className='ps-2'><i class="fa-solid fa-cart-shopping"></i></a>
                            <a href='#' className='ps-2'><i class="fa-solid fa-magnifying-glass"></i></a>
                        </div>

                        <form class="d-flex" role="search">
                            <button className="btn btn-warning ps-4 pe-4" type="submit" style={{ borderRadius: 20,color:'white' }}>Order Online</button>
                        </form>
                    </div>
            
            </nav>
        </div>
    )
}