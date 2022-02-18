import React from 'react';
import PirateContainer from '../containers/PirateContainer';


const ListItem = ({pirate}) => {
    
    return <li>{pirate.firstName}</li>

};

export default ListItem;