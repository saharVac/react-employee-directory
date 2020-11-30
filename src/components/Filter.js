import React, { Component } from "react";

const options = ["First Name", "Last Name", "Department", "Role", "Salary"];
const optionTags = []
// options.forEach(option => {
//     optionTags.push
// })

class Selections extends Component {

    render() {
        return (
            <form>
                <label>Filter By:</label>
                <select>
                    
                </select>
                <button id="apply-changes" type="submit">Apply</button>
            </form>
        )
    }
}

export default Selections;