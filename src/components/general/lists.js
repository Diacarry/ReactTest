import React from 'react';

class List extends React.Component {
    render() {
        return (
            <ul>
                {this.props.info.map((character) => {
                    return (
                        <li key={character.id}>
                            <p>{character.name} - {character.image}</p>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default List;