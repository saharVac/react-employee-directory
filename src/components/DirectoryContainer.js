import React, { Component } from "react";
import Filter from "./Filter"
import Table from "./Table"
import $ from "jquery"

class DirectoryContainer extends Component {

    state = {
        sortedBy: "Department",
        filteredBy: "",
        users: []
    }

    componentDidMount() {
        // Fetch info and populate state.users
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function(data) {
              console.log(data);
            }
          });
    }

    render() {
        return (
            <div>
                <Filter />
                <Table />
            </div>
        )
    }
}

export default DirectoryContainer;