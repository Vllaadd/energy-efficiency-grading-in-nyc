import React, { useState, useEffect } from "react";
import axios from "axios";

function DataAPI(){
    const [buildings, setBuildings] = useState("");

    useEffect(() => {
        axios
        .get("https://data.cityofnewyork.us/resource/7x5e-2fxh.json")
        .then(res => {
            const buildingData = building.data;
             setBuildings(buildingData)
            })
        .catch((err) =>{
            console.error(err);
        });
    }, []);
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Property Name</th>
                        <th>Borough</th>
                        <th>Address</th>
                        <th>Energy Efficiancy Score</th>
                    </tr>
                </thead>
                <tbody>
                    {buildings.map((building) => (
                        <tr key={building.id}>
                            <td>{building.property_name}</td>
                            <td>{building.borough}</td>
                            <td>{building.address}</td>
                            <td>{building.energy_star_score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataAPI;