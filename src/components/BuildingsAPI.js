import React, { useState, useEffect } from "react";
import axios from "axios";
import "./buildingsAPI.css";

function BuildingsAPI(){
    const [buildings, setBuildings] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios
        .get("https://data.cityofnewyork.us/resource/355w-xvp2.json", {
            params: {
                $limit: 500,
            },
        })
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
        <h3>New York City Building Efficiency Grades: Promoting Sustainability and Transparency</h3>
        <p>As part of the city's commitment to sustainability and environmental awareness, all buildings are required to disclose their energy efficiency scores. These scores are represented by a letter grade, ranging from A to D, with A being the most energy-efficient and D indicating lower energy efficiency. These grades reflect the building's overall energy performance and serve as an important indicator of its environmental impact. By making these grades publicly available, New York City aims to promote transparency, encourage energy-conscious practices, and empower individuals and communities to make informed choices for a greener future.</p>
        <p>As per <strong>Local Law 95 of 2019</strong> grades based on Energy Star energy efficiency scores will be assigned as follows:<br/>
            <strong>A</strong> - score is equal to or greater than 85<br/>
            <string>B</string> - score is equal to or greater than 70 but lesst han 85<br/>
            <strong>C</strong> - score is equal to or greater than 55 but less than 70<br/>
            <strong>D</strong> - score is less than 55<br/>
            <strong>F</strong> - for buildings that didn't submit required benchmarking information<br/>
            <strong>N</strong> - for buildings exempted from benchmarking or not covered by the Energy Star program<br/>
        </p>
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