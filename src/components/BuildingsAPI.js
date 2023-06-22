import React, { useState, useEffect } from "react";
import axios from "axios";
import "./buildingsAPI.css";

function BuildingsAPI(){
    const [buildings, setBuildings] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios
        .get("https://data.cityofnewyork.us/resource/355w-xvp2.json")
        .then(building => {
            const buildingData = building.data;
             setBuildings(buildingData)
            })
        .catch((err) =>{
            console.error(err);
        });
    }, []);

// GIVE VALUE TO USERS INPUT
    const handleInput = (event) =>{
        setSearch(event.target.value);
    }

// FILTER BUILDINGS AS USERS TYPE 
    const filterBuildingSearch = buildings.filter((building) => {
        return Object.values(building)
        .join(" ")
        .toLowerCase()
        .includes(search.toLocaleLowerCase())
    })

// SORT BUILDINGS IN ORDER BY ENERGY EFFICIENCY SCORE 
const sortedBuildings = buildings.sort((a, b) => {
    if (a.energy_star_score === "Not Available" && b.energy_star_score !== "not available") {
      return -1; // "not available" comes before other scores
    } else if (a.energy_star_score !== "Not Available" && b.energy_star_score === "not available") {
      return 1; // "not available" comes after other scores
    } else {
      // Sort based on numeric score if both scores are available
      return a.energy_star_score - b.energy_star_score;
    }
  });
    
    return (
    <>
{/* INTRODUCTION */}
        <div>

        </div>
{/* SEARCH FOR BUILDINGS */}
        <div className="search-bar">
            <label>Serch</label>
            <input value={search} onChange={handleInput} />
        </div>
{/* TABLE WITH DATA */}
            <div>
                <table>
                    <thead className="table-header">
                        <tr>
                            <th>Building Class</th>
                            <th>Square Footage</th>
                            <th>Address</th>
                            <th>Borough</th>
                            <th>Energy Star Score</th>
                            <th>Letter Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterBuildingSearch.map((building) => (
                            <tr key={building.id}>
                                <td>{building.building_class}</td>
                                <td>{building.dof_gross_square_footage}</td>
                                <td>{building.address}</td>
                                <td>{building.boroughname}</td>
                                <td>{building.energy_star_score}</td>
                                <td>{building.letterscore}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default BuildingsAPI;