import React, { Component } from 'react';

class TeamList extends Component {
    

    render() {
        return (
            
            <ul>
                {
                this.props.roster.map((playerName) =>{
                    return <li>{playerName} {this.props.lastName}</li>
                })
                }
            </ul>
        );
    }
}

export default TeamList;