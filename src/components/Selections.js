import React, { Component } from "react";
import Selection from "./Selection"

const options = ["First Name", "Last Name", "Department", "Role", "Salary"];

class Selections extends Component {

    render() {
        return (
            <form>
                <Selection innerText="Sort By" options={options} />
                <label>Filter By:</label>
                <select></select>
                <button id="apply-changes" type="submit">Apply</button>
            </form>
        )
    }
}

export default Selections;