import React from "react";

const PirateSelector = ({pirates, onPirateSelected}) => {

    const handleChange = function(event) {
        const chosenPirate = pirates[event.target.value]
        onPirateSelected(chosenPirate)
    };

    const pirateOptions = pirates.map((pirate, index) => {
        return <option value={index} key={index}>{pirate.firstName} {pirate.lastName}</option>
    });

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="">Choose a Pirate</option>
            {pirateOptions}
        </select>
    );

}

export default PirateSelector;