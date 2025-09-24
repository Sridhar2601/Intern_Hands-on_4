// import './CSS/Home.css'
// export default function About(){
//     return(
//         <div>
//             <div style={{ backgroundColor: 'black' }}>
//                 <div className='container pt-5'>
//                     <div className='row mt-5 pb-5'>
//                         <div className='col-lg-6 ps-5'>
//                             <img src="https://themewagon.github.io/feane/images/about-img.png" height={600}></img>
//                         </div>
//                         <div className='col-lg-6' style={{ color: 'white', paddingTop: '160px' }}>
//                             <h1>We Are Eat&Meet</h1>
//                             <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
//                             <button className='btn btn-warning ps-5 pe-5 p-2' style={{ borderRadius: '20px' }}>Read More</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


import './CSS/Home.css';

export default function About() {
    return (
        <div style={{ backgroundColor: 'black' }}>
            <div className='container py-5'>
                <div className='row align-items-center'>
                    {/* Image Section */}
                    <div className='col-lg-6 mb-4 mb-lg-0 text-center'>
                        <img 
                            src="https://themewagon.github.io/feane/images/about-img.png" 
                            className="img-fluid rounded" 
                            alt="About Eat&Meet" 
                        />
                    </div>

                    {/* Text Section */}
                    <div className='col-lg-6 text-white'>
                        <h1 className='mb-4'>We Are Eat&Meet</h1>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                        </p>
                        <button className='btn btn-warning mt-3 px-5 py-2 rounded-3'>
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
