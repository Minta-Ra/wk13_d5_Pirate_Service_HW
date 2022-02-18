import React from "react";
import {useEffect, useState} from "react";
import PirateList from "../components/PirateList";
import PirateDetail from "../components/PirateDetail";
import PirateSelector from "../components/PirateSelector";

const PirateContainer = () => {

    const [pirates, setPirates] = useState([]);
    const [selectedPirate, setSelectedPirate] = useState(null);

    useEffect(() => {
        getPirates();
    }, []);

    const getPirates = function() {
        fetch('pirates')
        .then(res => res.json())
        .then(pirates => setPirates(pirates))
    };

    const onPirateClick = function(pirate) {
        setSelectedPirate(pirate)
    }

    const onPirateSelected = function(pirate) {
        setSelectedPirate(pirate)
    }

    return (
        <div className="main-container">
            <PirateList pirates={pirates} onPirateClick={onPirateClick}/>
            <PirateSelector pirates={pirates} onPirateSelected={onPirateSelected}/>
            {selectedPirate ? <PirateDetail pirate={selectedPirate}/> : null }
        </div>
    );

};

export default PirateContainer;