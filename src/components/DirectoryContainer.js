import React, { Component } from "react";
import Filter from "./Filter"
import Table from "./Table"
import $ from "jquery"

// TODO: have users filter as typing occurs rather than when form submits

class DirectoryContainer extends Component {

    state = {
        users: [],
        filteredUsers: []
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
                this.setState({filteredUsers: fetchedUsers})
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

    showFilter = () => {
        $("#filter-form").css("display", "block")
        $("#show-filter").css("display", "none")
    }

    filterUsers = (event) => {
        event.preventDefault()

        // filter by first name
        if ($("#first-name").val()) {
            this.setState({ filteredUsers: this.state.users.filter(user => user.name.first.includes($("#first-name").val()))})
        } 
        // filter by last name
        if ($("#last-name").val()) {
            this.setState({ filteredUsers: this.state.users.filter(user => user.name.last.includes($("#last-name").val()))})
        }
        // filter by phone
        if ($("#phone").val()) {
            this.setState({ filteredUsers: this.state.users.filter(user => user.phone.includes($("#phone").val()))})
        }
        // filter by email
        if ($("#email").val()) {
            this.setState({ filteredUsers: this.state.users.filter(user => user.email.includes($("#email").val()))})
        }

        // Take away filter form
        $("#filter-form").css("display", "none")
        // Add show filter button
        $("#show-filter").css("display", "block")
    }

    render() {
        return (
            <div>
                <button id="show-filter" onClick={this.showFilter}>Filter</button>
                <Filter 
                    filteredFirstName={this.state.firstName} 
                    filteredLastName={this.state.firstName} 
                    filteredPhone={this.state.firstName} 
                    filteredEmail={this.state.firstName} 
                    filterUsers={this.filterUsers} 
                />
                <h4 id="directions">Click column to sort by</h4>
                <Table sortUsers={this.sortUsers} userData={this.state.filteredUsers} />
            </div>
        )
    }
}

export default DirectoryContainer;