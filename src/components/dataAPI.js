import React, { useState, useEffect } from "react";
import axios from "axios";

function DataAPI(){
    const [building, setBuilding] = useState("");

    useEffect(() => {
        axios
        .get("https://data.cityofnewyork.us/resource/7x5e-2fxh.json")
        .then(res =>{
            const buildingInfo = res.data[0].property_name + " : " + res.data[0].energy_star_score;
            setBuilding(buildingInfo)
            console.log(buildingInfo);
        })
        .catch((err) =>{
            console.error(err);
        });
    }, []);
    
    return(
        <div>
            <div className="data-list">
                <div>
                    {building}
                </div>
            </div>
        </div>
    )
}

export default DataAPI;