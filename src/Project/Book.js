import './CSS/Home.css'
import React, { useState } from 'react';
import axios from 'axios';
export default function Book() {

    const [data, setdata] = useState({
        Name: "",
        Ph_Number: "",
        Email: "",
        Person: "",
        Date: ""
    });

    const form = (e) => {
        setdata({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const submit = (e) => {
        e.preventDefault();
        axios.post("https://6888a259adf0e59551bac01f.mockapi.io/api/intern/Contact", data)

        setdata({
            Name: "",
            Ph_Number: "",
            Email: "",
            Person: "",
            Date: ""
        })
    }
    return (
        <div>
            <div className='container pt-5 mt-5 pb-5'>
                <h1>Book your Table</h1>
                <div className='row pt-4'>
                    <div className='col-lg-6'>
                        <form onSubmit={submit}>
                            <input type="text" placeholder='Your Name' name="Name" value={data.Name} onChange={form} style={{ width: '500px', height: '50px', borderRadius: '10px' }}></input><br></br><br></br>
                            <input type="number" placeholder='Phone Number' name='Ph_Number' value={data.Ph_Number} onChange={form} style={{ width: '500px', height: '50px', borderRadius: '10px' }}></input><br></br><br></br>
                            <input type="email" placeholder='Your Email' name='Email' value={data.Email} onChange={form} style={{ width: '500px', height: '50px', borderRadius: '10px' }}></input><br></br><br></br>
                            <select style={{ width: '500px', height: '50px', borderRadius: '10px' }} name='Person' value={data.Person} onChange={form}>
                                <option value="How many persons?">How many persons?</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select><br></br><br></br>
                            <input type="date" name='Date' value={data.Date} onChange={form} style={{ width: '500px', height: '50px', borderRadius: '10px' }}></input>
                            <div className='pt-3'>
                                <button className='btn btn-warning ps-5 pe-5' type="submit" value='submit' style={{ borderRadius: '20px', padding: '10px' }}>Book Now</button>
                            </div>
                        </form>
                    </div>
                    <div className='col-lg-6'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15703.579908186117!2d76.39161387062377!3d10.270045393129344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0801fada2d85d7%3A0xb2c66280cc7f3e67!2sEat%20%26%20Meet%20Bakery!5e0!3m2!1sen!2sin!4v1755691793968!5m2!1sen!2sin" width="550" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{ borderRadius: '20px' }}></iframe>
                    </div>
                </div>
            </div>

        </div>
    )
}