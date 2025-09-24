// import { cloneElement } from 'react';
// import './CSS/Nav.css';
// export default function Nav() {
//     return (
//         <div>
//             <nav className='d-flex bg-dark p-4'>
//                     <div className='ps-5' style={{ color: 'white' }}>
//                         <h3>Eat & Meet</h3>
//                     </div>
//                     <div class="n" style={{ paddingLeft: 240 }}>
//                         <li> <a href="/">HOME</a></li>
//                         <li> <a href="/Menu">MENU</a></li>
//                         <li> <a href="/About">ABOUT</a></li>
//                         <li> <a href="/Book">BOOK TABLE</a></li>

//                         <div style={{ paddingLeft: 150,color:'white'}}>
//                             <a href='#'><i class="fa-solid fa-user"></i></a>
//                             <a href='#' className='ps-2'><i class="fa-solid fa-cart-shopping"></i></a>
//                             <a href='#' className='ps-2'><i class="fa-solid fa-magnifying-glass"></i></a>
//                         </div>

//                         <form class="d-flex" role="search">
//                             <button className="btn btn-warning ps-4 pe-4" type="submit" style={{ borderRadius: 20,color:'white' }}>Order Online</button>
//                         </form>
//                     </div>
//             </nav>
//         </div>
//     )
// }


import { useState } from 'react';
import './CSS/Nav.css';

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
            <div className="container-fluid">
                {/* Logo */}
                <a className="navbar-brand ps-3" href="/" style={{ fontSize: '1.5rem' }}>
                    Eat & Meet
                </a>

                {/* Hamburger toggle for mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-controls="navbarNav"
                    aria-expanded={menuOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Nav items */}
                <div
                    className={`collapse navbar-collapse justify-content-between ${menuOpen ? 'show' : ''}`}
                    id="navbarNav"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Menu">MENU</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/About">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Book">BOOK TABLE</a>
                        </li>
                    </ul>

                    <div className="d-flex align-items-center gap-3 mb-2 mb-lg-0">
                        <a href="#" className="text-white"><i className="fa-solid fa-user"></i></a>
                        <a href="#" className="text-white"><i className="fa-solid fa-cart-shopping"></i></a>
                        <a href="#" className="text-white"><i className="fa-solid fa-magnifying-glass"></i></a>

                        <button
                            className="btn btn-warning ms-3"
                            type="button"
                            style={{ borderRadius: 20, color: 'white' }}
                        >
                            Order Online
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
