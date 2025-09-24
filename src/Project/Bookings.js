// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function Bookings() {
//     const [userData, setUserData] = useState([]);

//     useEffect(() => {
//         axios.get("https://6888a259adf0e59551bac01f.mockapi.io/api/intern/Contact")
//             .then(res => setUserData(res.data));
//     }, []);

//     const Delete = (id) => {
//     if (window.confirm("Are you sure you want to delete this contact?")) {
//         axios.delete(`https://6888a259adf0e59551bac01f.mockapi.io/api/intern/Contact/${id}`)
//             .then(() => {
//                 setUserData(prevData => prevData.filter(user => user.id !== id));
//             })
//     }
// };


//     return (
//         <div style={{ padding: '20px' }}>
//             <center>
//                 <h2 className='pb-4'>Contact Details</h2>
//                 {userData.length > 0 ? (
//                     <table border="1" cellPadding="10" style={{ width: '80%', backgroundColor: 'white', boxShadow: '0 0 10px black' }}>
//                         <thead>
//                             <tr style={{ backgroundColor: 'green', color: 'white' }}>
//                                 <th style={{ border: '2px solid black' }}>S.No</th>
//                                 <th style={{ border: '2px solid black' }}>Name</th>
//                                 <th style={{ border: '2px solid black' }}>Phone Number</th>
//                                 <th style={{ border: '2px solid black' }}>Email</th>
//                                 <th style={{ border: '2px solid black' }}>Person</th>
//                                 <th style={{ border: '2px solid black' }}>Date</th>
//                                 <th style={{ border: '2px solid black' }}>Delete</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {userData.map((user, index) => (
//                                 <tr key={user.id} style={{ textAlign: 'left' }}>
//                                     <td style={{ border: '2px solid black' }}>{index + 1}</td>
//                                     <td style={{ border: '2px solid black' }}>{user.Name}</td>
//                                     <td style={{ border: '2px solid black' }}>{user.Ph_Number}</td>
//                                     <td style={{ border: '2px solid black' }}>{user.Email}</td>
//                                     <td style={{ border: '2px solid black' }}>{user.Person}</td>
//                                     <td style={{ border: '2px solid black' }}>{user.Date}</td>
//                                     <td style={{ border: '2px solid black' }}><input type='button' className='btn btn-danger' value='Delete' onClick={() => Delete(user.id)}></input></td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 ) : (
//                     <p>Loading data...</p>
//                 )}
//             </center>
//         </div>
//     );
// }


import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Bookings() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get("https://6888a259adf0e59551bac01f.mockapi.io/api/intern/Contact")
      .then(res => setUserData(res.data));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      axios.delete(`https://6888a259adf0e59551bac01f.mockapi.io/api/intern/Contact/${id}`)
        .then(() => {
          setUserData(prevData => prevData.filter(user => user.id !== id));
        });
    }
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Contact Details</h2>
      {userData.length > 0 ? (
        <div className="table-responsive shadow-sm bg-white p-3 rounded">
          <table className="table table-bordered table-hover">
            <thead className="table-success text-center">
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Person</th>
                <th>Date</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <tr key={user.id}>
                  <td className="text-center">{index + 1}</td>
                  <td>{user.Name}</td>
                  <td>{user.Ph_Number}</td>
                  <td>{user.Email}</td>
                  <td>{user.Person}</td>
                  <td>{user.Date}</td>
                  <td className="text-center">
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center">Loading data...</p>
      )}
    </div>
  );
}
