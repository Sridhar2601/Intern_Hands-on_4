import './CSS/Home.css';
import Book from './Book';
export default function Home() {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://themewagon.github.io/feane/images/hero-bg.jpg" class="d-block w-100" alt="..."></img>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Fast Food Restaurant</h5>
                            <p>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
                            <a className='btn btn-warning ps-4 pe-4' style={{ borderRadius: 15 }}>Order Now</a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://themewagon.github.io/feane/images/hero-bg.jpg" class="d-block w-100" alt="..."></img>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Fast Food Restaurant</h5>
                            <p>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
                            <a className='btn btn-warning ps-4 pe-4' style={{ borderRadius: 15 }}>Order Now</a>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://themewagon.github.io/feane/images/hero-bg.jpg" class="d-block w-100" alt="..."></img>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Fast Food Restaurant</h5>
                            <p>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
                            <a className='btn btn-warning ps-4 pe-4' style={{ borderRadius: 15 }}>Order Now</a>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


            <div className='container'>
                <div className='row pt-5 mt-5'>
                    <div className='col-lg-6 discount d-flex p-5'>
                        <div>
                            <img src="https://themewagon.github.io/feane/images/o1.jpg" height={150} width={150} style={{ border: '2px solid orange', borderRadius: 50 }}></img>
                        </div>
                        <div className='pt-2 ps-5'>
                            <h5>Tasty Thursdays</h5>
                            <h1>20% off</h1>
                            <button className='btn btn-warning' style={{ color: 'white', borderRadius: 15 }}>Order Now <i class="fa-solid fa-cart-shopping"></i></button>
                        </div>
                    </div>
                    <div className='col-lg-6 discount d-flex p-5'>
                        <div>
                            <img src="https://themewagon.github.io/feane/images/o2.jpg" height={150} width={150} style={{ border: '2px solid orange', borderRadius: 50 }}></img>
                        </div>
                        <div className='pt-2 ps-5'>
                            <h5>Pizza Days</h5>
                            <h1>15% off</h1>
                            <button className='btn btn-warning' style={{ color: 'white', borderRadius: 15 }}>Order Now <i class="fa-solid fa-cart-shopping"></i></button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='pt-5 mt-5'>
                <center><h1>Our Menu</h1>
                    <div className='pt-5'>
                        <button className='btn btn-light'>All</button>
                        <button className='btn btn-light'>Burger</button>
                        <button className='btn btn-light'>Pizza</button>
                        <button className='btn btn-light'>Pasta</button>
                        <button className='btn btn-light'>Fries</button>
                    </div>
                </center>
                <div className='container pt-5 mt-5'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div class="card">
                                <div class="card-image">
                                    <img src="https://themewagon.github.io/feane/images/f1.png" alt="Delicious Pizza"></img>
                                </div>
                                <div class="card-content">
                                    <h3>Delicious Pizza</h3>
                                    <p>
                                        Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
                                        magnam voluptatem repellendus sed eaque
                                    </p>
                                    <div class="card-footer d-flex" style={{ gap: '170px' }}>
                                        <p className='pt-2'>Rs.299</p>
                                        <button className='btn btn-warning' style={{ borderRadius: 50 }}><i class="fa-solid fa-cart-shopping"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div class="card">
                                <div class="card-image">
                                    <img src="https://themewagon.github.io/feane/images/f2.png" alt="Delicious Pizza"></img>
                                </div>
                                <div class="card-content">
                                    <h3>Delicious Burger</h3>
                                    <p>
                                        Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
                                        magnam voluptatem repellendus sed eaque
                                    </p>
                                    <div class="card-footer d-flex" style={{ gap: '170px' }}>
                                        <p className='pt-2'>Rs.249</p>
                                        <button className='btn btn-warning' style={{ borderRadius: 50 }}><i class="fa-solid fa-cart-shopping"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div class="card">
                                <div class="card-image">
                                    <img src="https://themewagon.github.io/feane/images/f3.png" alt="Delicious Pizza"></img>
                                </div>
                                <div class="card-content">
                                    <h3>Delicious Pizza</h3>
                                    <p>
                                        Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
                                        magnam voluptatem repellendus sed eaque
                                    </p>
                                    <div class="card-footer d-flex" style={{ gap: '170px' }}>
                                        <p className='pt-2'>Rs.299</p>
                                        <button className='btn btn-warning' style={{ borderRadius: 50 }}><i class="fa-solid fa-cart-shopping"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row pt-5'>
                        <div className='col-lg-4'>
                            <div class="card">
                                <div class="card-image">
                                    <img src="https://themewagon.github.io/feane/images/f4.png" alt="Delicious Pizza"></img>
                                </div>
                                <div class="card-content">
                                    <h3>Delicious Pasta</h3>
                                    <p>
                                        Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
                                        magnam voluptatem repellendus sed eaque
                                    </p>
                                    <div class="card-footer d-flex" style={{ gap: '170px' }}>
                                        <p className='pt-2'>Rs.199</p>
                                        <button className='btn btn-warning' style={{ borderRadius: 50 }}><i class="fa-solid fa-cart-shopping"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div class="card">
                                <div class="card-image">
                                    <img src="https://themewagon.github.io/feane/images/f5.png" alt="Delicious Pizza"></img>
                                </div>
                                <div class="card-content">
                                    <h3>French Fries</h3>
                                    <p>
                                        Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
                                        magnam voluptatem repellendus sed eaque
                                    </p>
                                    <div class="card-footer d-flex" style={{ gap: '170px' }}>
                                        <p className='pt-2'>Rs.99</p>
                                        <button className='btn btn-warning' style={{ borderRadius: 50 }}><i class="fa-solid fa-cart-shopping"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div class="card">
                                <div class="card-image">
                                    <img src="https://themewagon.github.io/feane/images/f6.png" alt="Delicious Pizza"></img>
                                </div>
                                <div class="card-content">
                                    <h3>Delicious Pizza</h3>
                                    <p>
                                        Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
                                        magnam voluptatem repellendus sed eaque
                                    </p>
                                    <div class="card-footer d-flex" style={{ gap: '170px' }}>
                                        <p className='pt-2'>Rs.299</p>
                                        <button className='btn btn-warning' style={{ borderRadius: 50 }}><i class="fa-solid fa-cart-shopping"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row pt-5'>
                        <div className='col-lg-4'>
                            <div class="card">
                                <div class="card-image">
                                    <img src="https://themewagon.github.io/feane/images/f7.png" alt="Delicious Pizza"></img>
                                </div>
                                <div class="card-content">
                                    <h3>Tasty Burger</h3>
                                    <p>
                                        Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
                                        magnam voluptatem repellendus sed eaque
                                    </p>
                                    <div class="card-footer d-flex" style={{ gap: '170px' }}>
                                        <p className='pt-2'>Rs.399</p>
                                        <button className='btn btn-warning' style={{ borderRadius: 50 }}><i class="fa-solid fa-cart-shopping"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div class="card">
                                <div class="card-image">
                                    <img src="https://themewagon.github.io/feane/images/f8.png" alt="Delicious Pizza"></img>
                                </div>
                                <div class="card-content">
                                    <h3>Tasty Burger</h3>
                                    <p>
                                        Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
                                        magnam voluptatem repellendus sed eaque
                                    </p>
                                    <div class="card-footer d-flex" style={{ gap: '170px' }}>
                                        <p className='pt-2'>Rs.399</p>
                                        <button className='btn btn-warning' style={{ borderRadius: 50 }}><i class="fa-solid fa-cart-shopping"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div class="card">
                                <div class="card-image">
                                    <img src="https://themewagon.github.io/feane/images/f9.png" alt="Delicious Pizza"></img>
                                </div>
                                <div class="card-content">
                                    <h3>Delicious Pasta</h3>
                                    <p>
                                        Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
                                        magnam voluptatem repellendus sed eaque
                                    </p>
                                    <div class="card-footer d-flex" style={{ gap: '170px' }}>
                                        <p className='pt-2'>Rs.199</p>
                                        <button className='btn btn-warning' style={{ borderRadius: 50 }}><i class="fa-solid fa-cart-shopping"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <center>
                    <div className='pt-5 pb-5 mb-5'>
                        <button className='btn btn-warning ps-4 pe-4' style={{ borderRadius: 10 }}>View More</button>
                    </div>
                </center>
            </div>


            <div style={{ backgroundColor: 'black' }}>
                <div className='container pt-5'>
                    <div className='row mt-5 pb-5'>
                        <div className='col-lg-6 ps-5'>
                            <img src="https://themewagon.github.io/feane/images/about-img.png" height={600}></img>
                        </div>
                        <div className='col-lg-6' style={{ color: 'white', paddingTop: '160px' }}>
                            <h1>We Are Eat&Meet</h1>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                            <button className='btn btn-warning ps-5 pe-5 p-2' style={{ borderRadius: '20px' }}>Read More</button>
                        </div>
                    </div>
                </div>
            </div>

            <Book/>

            <div className='pt-5 mt-5 pb-5 mb-5'>
                <center>
                    <h1>What Says Our Customers</h1>
                </center>

                <div className='container mt-5 pt-5'>
                    <div className='row'>
                        <div className="col-md-6 d-flex gap-3 ">
                            <img src="https://themewagon.github.io/feane/images/client1.jpg" height={100} width={100} style={{ borderRadius: '50px', border: '2px solid orange' }} className='mt-2'></img>
                            <div className='line'>
                                <p>Far far away, behind the word  mountains, far from the  countries Vokalia and  Consonantia, there live the  blind texts.
                                <br/><br/>Rina John
                                <br/>Magna alique</p>
                            </div>
                        </div>

                        <div className="col-md-6 d-flex gap-3 ">
                            <img src="https://themewagon.github.io/feane/images/client2.jpg" height={100} width={100} style={{ borderRadius: '50px', border: '2px solid orange' }} className='mt-2'></img>
                            <div className='line'>
                                <p>Far far away, behind the word  mountains, far from the  countries Vokalia and  Consonantia, there live the  blind texts.
                                <br/><br/>Mark Smith
                                <br/>Magna alique</p>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className="col-md-6 d-flex gap-3 ">
                            <img src="https://themewagon.github.io/feane/images/client2.jpg" height={100} width={100} style={{ borderRadius: '50px', border: '2px solid orange' }} className='mt-2'></img>
                            <div className='line'>
                                <p>Far far away, behind the word  mountains, far from the  countries Vokalia and  Consonantia, there live the  blind texts.
                                <br/><br/>Mark Smith
                                <br/>Magna alique</p>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex gap-3 ">
                            <img src="https://themewagon.github.io/feane/images/client1.jpg" height={100} width={100} style={{ borderRadius: '50px', border: '2px solid orange' }} className='mt-2'></img>
                            <div className='line'>
                                <p>Far far away, behind the word  mountains, far from the  countries Vokalia and  Consonantia, there live the  blind texts.
                                <br/><br/>Rina John
                                <br/>Magna alique</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}