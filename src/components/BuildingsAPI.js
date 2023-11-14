import React, { useState, useEffect } from "react";
import axios from "axios";
import "./buildingsAPI.css";
import { apiToken } from "./.config";

function BuildingsAPI() {
    const [buildings, setBuildings] = useState([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const buildingsPerPage = 100;


    useEffect(() => {
        const fetchData = async () => {
          try {
                const response = await axios.get(
                    "https://data.cityofnewyork.us/resource/355w-xvp2.json?$limit=50000",
                    {
                      headers: {
                        "X-App-Token": apiToken,
                      },
                    }
                  );
              const fetchedData = response.data;
            console.log("Fetched Data:" , fetchedData);
      
            setBuildings(fetchedData);
        }catch (error) {
            console.error(error);
          }
        };
      
        fetchData();
      }, []);
      
// GIVE VALUE TO USERS INPUT
    const handleInput = (event) => {
        setSearch(event.target.value);
    }

// FILTER BUILDINGS AS USERS TYPE 
    const filterBuildings = buildings.filter((building) => {
       return Object.values(building)
            .join(" ")
            .toLowerCase()
            .includes(search.toLowerCase())
     })

// SORT BUILDINGS IN ORDER BY ENERGY EFFICIENCY SCORE 
    const sortedBuildings = [...filterBuildings].sort((a, b) => {
        if (a.energy_star_score === "Not Available" && b.energy_star_score !== "Not Available") {
            return -1; // "not available" comes before other scores
        } else if (a.energy_star_score !== "Not Available" && b.energy_star_score === "Not Available") {
            return 1; // "not available" comes after other scores
        } else {
            // Sort based on numeric score if both scores are available
            return a.energy_star_score - b.energy_star_score;
        }
    });

// SET UP PAGINATION
    const totalPages = Math.ceil(sortedBuildings.length / buildingsPerPage);
    const startIndex = (currentPage - 1) * buildingsPerPage;
    const endIndex = startIndex + buildingsPerPage;
    const currentBuildings = sortedBuildings.slice(startIndex, endIndex);

    const handlePreviousPage = () => {
        if(currentPage > 1){
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const handleNextPage = () => {
        if(currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    return (
        <>
{/* INTRODUCTION */}
            <div>
                <h3>New York City Building Efficiency Grades: Promoting Sustainability and Transparency</h3>
                <p>As part of the city's commitment to sustainability and environmental awareness, all buildings are required to disclose their energy efficiency scores. These scores are represented by a letter grade, ranging from A to D, with A being the most energy-efficient and D indicating lower energy efficiency. These grades reflect the building's overall energy performance and serve as an important indicator of its environmental impact. By making these grades publicly available, New York City aims to promote transparency, encourage energy-conscious practices, and empower individuals and communities to make informed choices for a greener future.</p>
                <p>As per <strong>Local Law 95 of 2019</strong> grades based on Energy Star energy efficiency scores will be assigned as follows:<br />
                    <strong>A</strong> - score is equal to or greater than 85<br />
                    <string>B</string> - score is equal to or greater than 70 but lesst han 85<br />
                    <strong>C</strong> - score is equal to or greater than 55 but less than 70<br />
                    <strong>D</strong> - score is less than 55<br />
                    <strong>F</strong> - for buildings that didn't submit required benchmarking information<br />
                    <strong>N</strong> - for buildings exempted from benchmarking or not covered by the Energy Star program<br />
                </p>
            </div>
{/* SEARCH */}
            <div className="container">
                <div className="search-bar">
                    <label>Search:</label>
                    <input value={search} onChange={handleInput} />
                </div>
{/* TABLE WITH DATA */}
                <table className="table-container">
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
                        {currentBuildings.map((building) => (
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

{/* PAGES BUTTONS */}
                <div className="pages">
                    <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                        Previous Page
                    </button>
                    <span>{currentPage}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        Next Page
                    </button>
                </div>
            </div>
        </>
    );
}

export default BuildingsAPI;