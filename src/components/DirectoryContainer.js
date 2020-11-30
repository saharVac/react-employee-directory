import React, { Component } from "react";
import Filter from "./Filter"
import Table from "./Table"
import $ from "jquery"

class DirectoryContainer extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        const fetchedUsers = [];
        // Fetch info and populate state.users
        $.ajax({
            url: 'https://randomuser.me/api/?results=20',
            dataType: 'json',
            success: function(data) {
                fetchedUsers.push(...data.results)
            }
          }).then(() => {
                this.setState({users: fetchedUsers})
          });
        
    }

    sortUsers = (category) => {
        switch(category) {
            case "name":
                this.setState({ users: this.state.users.sort((a, b) => {
                    return a.name.first > b.name.first ? 1 : -1
                })})
                break;
            case "dob":
                this.setState({ users: this.state.users.sort((a, b) => {
                    return a.dob.date > b.dob.date ? 1 : -1
                })})
                break;
            case "phone":
                this.setState({ users: this.state.users.sort((a, b) => {
                    return a.phone > b.phone ? 1 : -1
                })})
                break;
            default:
                this.setState({ users: this.state.users.sort((a, b) => {
                    return a.email > b.email ? 1 : -1
                })})
        }
        
    }

    render() {
        return (
            <div>
                <Filter />
                <Table sortUsers={this.sortUsers} userData={this.state.users} />
            </div>
        )
    }
}

export default DirectoryContainer;