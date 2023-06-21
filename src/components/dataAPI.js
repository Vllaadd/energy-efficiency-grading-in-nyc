import React, { useState, useEffect } from "react";
import axios from "axios";

function DataAPI(){
    const [buildings, setBuildings] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios
        .get("https://data.cityofnewyork.us/resource/7x5e-2fxh.json")
        .then(building => {
            const buildingData = building.data;
             setBuildings(buildingData)
            })
        .catch((err) =>{
            console.error(err);
        });
    }, []);

    const handleInput = (event) =>{
        setSearch(event.target.value);
    }

    const filterBuildingSearch = buildings.filter((building) => {
        return Object.values(building)
        .join(" ")
        .toLowerCase()
        .includes(search.toLocaleLowerCase())
    })
    
    return (
    <>
{/* SEARCH FOR BUILDINGS */}
        <div>
            <label>Serch</label>
            <input value={search} onChange={handleInput} />
        </div>
{/* TABLE WITH DATA */}
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
                        {filterBuildingSearch.map((building) => (
                            <tr key={building.id}>
                                <td>{building.property_name}</td>
                                <td>{building.borough}</td>
                                <td>{building.address_1}</td>
                                <td>{building.energy_star_score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default DataAPI;