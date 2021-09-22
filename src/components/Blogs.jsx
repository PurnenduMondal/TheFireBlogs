import React, {useState, lazy} from "react"
import {Link} from "react-router-dom"
import axios from "./axiosWithBaseURL";
import './Blogs.css'
import db from './firebase.js'
const Header = lazy(() => import("./Header"));

function Blogs() 
{
    const [items, setItems] = useState([])
    React.useEffect(() => { 
        //axios.get("blogs").then(res => {setItems(res.data)})
        db.collection("blogs").orderBy('timestamp','asc').onSnapshot(snapshot =>{
            setItems(snapshot.docs.map(doc =>(
                {
                    _id: doc.id,
                    name: doc.data().name,
                    img: doc.data().img
                }
            )))
        })
}, []);

    const renderLoader = () => (
        <div className="spinner-container">
            <div className="spinner-border text-warning" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    );
    return (
    <div>
        <Header/>
        <div className="blog">
        {items.length > 0 ? (items.reverse().map((item, index) => {
            return (
                
                <Link to={"/blogs/"+item._id}>
                    <div className="responsive">
                        <div className="gallery">
                        <img width="100%" height="100%" src={item.img} 
                            className="img-fluid" 
                            alt="Responsive image"/>
                        </div> 
                        <div  className="blog__title">{item.name}</div>
                    </div>
                </Link>
            );
        })) :  renderLoader()}
        </div>
    </div>
    )
}
export default Blogs