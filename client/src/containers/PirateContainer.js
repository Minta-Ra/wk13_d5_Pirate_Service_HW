import React from "react";
import {useEffect, useState} from "react";
import PirateList from "../components/PirateList";

const PirateContainer = () => {

    const [pirates, setPirates] = useState([]);

    useEffect(() => {
        getPirates();
    }, []);

    const getPirates = function() {
        fetch('pirates')
        .then(res => res.json())
        .then(pirates => setPirates(pirates))
    };

    return (
        <PirateList pirates={pirates}/>
    );

};

export default PirateContainer;