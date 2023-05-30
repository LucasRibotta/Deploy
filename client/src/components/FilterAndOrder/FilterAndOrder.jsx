import React from "react";
import FilterActivity from "./FilterActivity";
import FilterContinents from "./FilterContinents";
import OrderNameAlpha from "./OrderAlfa";
import OrderPopulation from "./OrderPopulation";
import ClearFilter from "./ClearFilter";


export default function FilterAndOrder(){

    return(
        <div>
            <FilterActivity />
            <FilterContinents />
            <OrderNameAlpha />
            <OrderPopulation />
            <ClearFilter />
        </div>
    )
}