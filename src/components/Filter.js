import React from "react";

function Selections({ filteredFirstName, filteredLastName, filteredPhone, filteredEmail, filterUsers }) {

    return (
        <form id="filter-form">
            <h4>Filter By</h4>
            <label>First Name: </label>
            <input placeholder={filteredFirstName} id="first-name"></input>
            <label>Last Name: </label>
            <input placeholder={filteredLastName} id="last-name"></input>

            <label>Phone: </label>
            <input placeholder={filteredPhone} id="phone"></input>
            <label>Email: </label>
            <input placeholder={filteredEmail} id="email"></input>

            <button onClick={filterUsers} id="apply-changes" type="submit">Apply</button>
        </form>
    )
    
}

export default Selections;