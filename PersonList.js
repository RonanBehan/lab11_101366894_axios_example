import React, { Component } from 'react';
import axios from 'axios';

class PersonList extends Component {
    state = {
        persons: []
    };

    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then(res => {
                console.log(res.data);
                const persons = res.data.results;
                this.setState({ persons });
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }

    render() {
        return (
            <div>
                <h2>Person List</h2>
                <ul>
                    {this.state.persons.map((person, index) => (
                        <li key={index}>{person.name.first} {person.name.last}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default PersonList;
