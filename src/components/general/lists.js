import React from 'react';

class List extends React.Component {
    render() {
        return (
            <ul>
                {this.props.info.map((user) => {
                    return (
                        <li key={user.id}>
                            <p>{user.twitter}</p>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default List;