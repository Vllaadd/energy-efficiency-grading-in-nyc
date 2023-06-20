import React, { useEffect } from "react";
import axios from "axios";

function DataAPI(){
    useEffect(()=>{
        axios
        .get("https://data.cityofnewyork.us/resource/7x5e-2fxh.json")
        .then(res =>{
            const data = res.data.results;
            console.log(data);
        })
    })
    return(
        <div>
            <h1>Hello, this is the page where we get data from the NYC.</h1>
            <div className="data-list"></div>
        </div>
    )
}

export default DataAPI;