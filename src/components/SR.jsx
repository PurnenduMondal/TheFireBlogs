import React, {useState, lazy} from "react"
import {} from "react-router-dom"
import axios from "./axiosWithBaseURL";
const ItemList = lazy(() => import("./ItemList"))

function SR() 
{
    const [items, setItems] = useState([])
    React.useEffect(() => { axios.get("sr").then(res => {setItems(res.data)}) }, []);
    return (items.length > 0 ?  <ItemList items={items} /> : 
        <div className="spinner-container row h-100">
            <div className="spinner-border text-warning col-sm-12 my-auto" role="status">
                <span className="sr-only"></span>
            </div>
        </div>)
}
export default SR