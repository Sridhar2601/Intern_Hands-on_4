export default function Footer(){
    return(
        <div>
            <div style={{backgroundColor:'black',color:'white'}}>
                <div className='container pt-5'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <center>
                            <h3>Contact Us</h3>
                            <p className='pt-4'><i class="fa-solid fa-location-dot"></i> Location</p>
                            <p><i class="fa-solid fa-phone"></i> Call +91-9876543210</p>
                            <p><i class="fa-solid fa-envelope"></i> eatandmeet@gmail.com</p>
                            </center>
                        </div>

                        <div className='col-lg-4'>
                            <center>
                            <h2>Eat&Meet</h2>
                            <p className='pt-4'>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>
                            <div className='d-flex gap-3 ps-5'>
                                    <i class="fa-brands fa-instagram" id='icon'></i>
                                    <i class="fab fa-facebook-f" id='icon'></i>
                                    <i class="fab fa-twitter" id='icon'></i>
                                    <i class="fa-brands fa-linkedin-in" id='icon'></i>
                                    <i class="fa-brands fa-pinterest" id='icon'></i>
                            </div>
                            </center>
                        </div>

                        <div className='col-lg-4'>
                            <center>
                            <h3>Opening Hours</h3>
                            <p className='pt-4'>Everyday</p>
                            <p>10.00 Am -10.00 Pm</p>
                            </center>
                        </div>
                    </div>
                    <div className='pt-5'>
                        <center>
                        <p>© 2025 All Rights Reserved By Eat&Meet</p>
                        </center>
                    </div>
                    <div className='pt-3 pb-5'>
                        <center>
                        <p>© Distributed By Eat&Meet</p>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
}