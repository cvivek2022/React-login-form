import React, { useState } from 'react';
import { Table } from 'react-bootstrap';


function Home() {
    let data = localStorage.getItem('myData');
    data = JSON.parse(data);
     
         
    return (
        <>
           <div className="users">
           <div className="title-user-list">
               <h3>User Details</h3>
             </div>    
           <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>User Name</th>
                    <th>user phone</th>
                    <th>user Email</th>
                    <th>user Password</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((user) => (
                   
                   <tr>
                   <td>{user.userName}</td>
                   <td>{user.userPhone}</td>
                   <td>{user.userEmail}</td>
                   <td>{user.userPassword}</td>
                   </tr>

               ))}
                </tbody>
            </Table>
               
            </div>
           
        </>
    )
}

export default Home
