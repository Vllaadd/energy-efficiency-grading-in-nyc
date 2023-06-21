import React, { useState, useEffect } from "react";
import axios from "axios";

function DataAPI(){
    const [building, setBuilding] = useState("");

    useEffect(() => {
        axios
        .get("https://data.cityofnewyork.us/resource/7x5e-2fxh.json")
        .then(res => {
            const buildingData = res.data[0].filter((building)=> ({
                propertyName: building.property_name,
                borough: building.borough,
                city: building.city,
                address: building.address_1,
                energyScore: building.energy_star_score
            }));
            setBuilding(buildingData)
            console.log(buildingData);
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
                        <th>City</th>
                        <th>Address</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {building.map((building, index) => (
                        <tr key={index}>
                            <td>{building.propertyName}</td>
                            <td>{building.borough}</td>
                            <td>{building.city}</td>
                            <td>{building.address}</td>
                            <td>{building.energyScore}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataAPI;