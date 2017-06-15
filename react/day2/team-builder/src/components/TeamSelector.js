import React, { Component } from 'react';

class TeamSelector extends Component {
    render() {
        return (
            <div>
                <button onClick={ () => this.props.select(1)} disabled={this.props.team === 1 } > Team1</button>
                <button onClick={ () => this.props.select(2)} disabled={this.props.team === 2 } > Team2</button>
            </div>
        );
    }
}

export default TeamSelector;