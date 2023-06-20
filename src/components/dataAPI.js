import React from "react";
import axios from "axios";

function DataAPI(){
        axios
        .get("https://data.cityofnewyork.us/resource/7x5e-2fxh.json")
        .then(res =>{
            const building = res.data[0].property_name;
            const grade = res.data[0].energy_star_score;
            console.log(building + grade);
        })
        .catch((err) =>{
            console.error(err);
        });

        

    return(
        <div>
            <h1>Hello, this is the page where we get data from the NYC.</h1>
            <div className="data-list"></div>
        </div>
    )
}

export default DataAPI;