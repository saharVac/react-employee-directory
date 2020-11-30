import React, { Component } from "react";
import Selections from "./Selections"
import Table from "./Table"

class DirectoryContainer extends Component {

    state = {
        sortedBy: "Department",
        filteredBy: ""
    }

    componentDidMount() {
        // TODO: Define
    }

    render() {
        return (
            <div>
                <Selections />
                <Table />
            </div>
        )
    }
}

export default DirectoryContainer;