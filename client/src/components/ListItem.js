import React from 'react';

const ListItem = ({pirate, onPirateClick}) => {

    const handleClick = function() {
        onPirateClick(pirate)
    }
    
    return <li onClick={handleClick}>{pirate.firstName} {pirate.lastName}</li>

};

export default ListItem;