import React, { useEffect } from "react";
import jQuery from "jquery";
import axios from "axios";

function DataAPI(){
    useEffect(()=>{
        axios
        .get("https://data.cityofnewyork.us/resource/7x5e-2fxh.json")
        .then(res =>{
            const building = res.data.city;
            console.log(building);
        })
        .catch((err) =>{
            console.error(err);
        }, []);
        const renderData = (buildings) => {
            const buildingList = buildings.map((building) => {
                return `<div key="{building.id}">${building}</div>`
            });
            const buildingContainer = $("<div>").addClass("building-list").html(buildingList);
            $(".data-list").append(buildingContainer);
        }

    })
    return(
        <div>
            <h1>Hello, this is the page where we get data from the NYC.</h1>
            <div className="data-list"></div>
        </div>
    )
}

export default DataAPI;