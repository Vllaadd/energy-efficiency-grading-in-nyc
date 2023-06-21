import React, { useState, useEffect } from "react";
import axios from "axios";

function TestData(){
    const [buildings, setBuildings] = useState([]);

    useEffect(() =>{
        axios
        .get("https://data.cityofnewyork.us/resource/7x5e-2fxh.json")
        .then((building) => {
            const buildingData = building.data;
          
            setBuildings(buildingData);
        })
    })

    return(
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
                {buildings.map((building) =>{
                    return(
                        <tr key={building.id}>
                        <td>{building.property_name}</td>
                        <td>{building.borough}</td>
                        <td>{building.address_1}</td>
                        <th>{building.energy_star_score}</th>
                       </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default TestData;

//get data using axios and .get method 
//after we fetch data with get method, we use then to do with data what we want 
//we create an objet only with data we need 
//we finally return the page with data presented 
//set state so we can render it 