import React from "react";

function Table({ userData, sortUsers }) {
    
    return (
        <table border="1">
            <thead>
                <tr>
                    <th onClick={() => { console.log("sorting by name"); sortUsers("name")}}>Name</th>
                    <th onClick={() => { console.log("sorting by Date of Birth"); sortUsers("dob")}}>DOB</th>
                    <th onClick={() => { console.log("sorting by Phone"); sortUsers("phone")}}>Phone</th>
                    <th onClick={() => { console.log("sorting by Email"); sortUsers("email")}}>Email</th>
                </tr>
                
            </thead>
            <tbody>
                {
                    userData.map(user => {
                        return(
                            <tr> 
                                <td>{user.name.first + " " + user.name.last}</td>
                                <td>{user.dob.date.substring(0,10)}</td>
                                <td>{user.phone}</td>
                                <td>{user.email.split("@")[0]}</td>
                            </tr>  
                        )
                    })
                } 
            </tbody>
            
        </table>
    )
}

export default Table