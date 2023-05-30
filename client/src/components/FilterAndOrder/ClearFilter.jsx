import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { clearFilter } from "../../redux/actions/actions";

export default function ClearFilter({setCurrentPage}){
    const dispatch = useDispatch()
    const [order, setOrder] = useState("")

    

    function handleDefault(evt){
        dispatch(clearFilter())
        setCurrentPage(1)
        setOrder(evt.target.value)
    }

    return(
        <div>
            <button onClick={handleDefault}>
                Clear Filter
            </button>
        </div>
    )
}