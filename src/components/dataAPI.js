import React from "react";
import axios from "axios";

function DataAPI(){
        axios
        .get("https://data.cityofnewyork.us/resource/7x5e-2fxh.json")
        .then(res =>{
            const buildings = res.data[0].city;
            console.log(buildings);
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