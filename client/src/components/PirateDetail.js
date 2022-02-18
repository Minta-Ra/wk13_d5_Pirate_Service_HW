import React from "react";

const PirateDetail = ({pirate}) => {
    return (
        <>
            <p>Name: {pirate.firstName} {pirate.lastName}</p>
            <p>Age: {pirate.age}</p>
            <p>Ship: {pirate.ship.name}</p>
            <p>Raid: {pirate.raids[0].location}</p>
            <p>Loot: {pirate.raids[0].loot}</p>
        </>
    );
};

export default PirateDetail;