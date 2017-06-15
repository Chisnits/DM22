import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <div>
                {this.props.items};      
            </div>
        );
    }
}

export default List;        