import React from "react";
import ListItem from './ListItem';

const PirateList = ({pirates}) => {

    const piratesItems = pirates.map((pirate, index) => {
        return <ListItem pirate={pirate} key={index}/>
    });

    return (
        <div>
            <ul>
                {piratesItems}
            </ul>
        </div>
    );

};

export default PirateList;