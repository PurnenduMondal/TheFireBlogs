import React, { useState, lazy } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "./axiosWithBaseURL";
import db from "./firebase";
import './Landing.css'
const Header = lazy(() => import("./Header"));
const CategoryList = lazy(() => import("./CategoryList"));


function Landing()
{
    const [items, setItems] = useState([]);
    React.useEffect(() => {
    //axios.get("images").then(res => {setItems(res.data)});
    db.collection('category').onSnapshot(snapshot => {setItems(snapshot.docs.map(doc => doc.data()))});
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
          <Header />
        <div className="Landing__cat">
          {items.length > 0 ? (items.map((item, index) => {
            return (

                <Link to={"/landing/"+item.name}>
                    <CategoryList
                        key={index}
                        id={index}
                        title={item.name}
                        imgsrc={item.img}
                        content={null}
                    />
                </Link>
                
            );
        })) :  renderLoader()
        }
        </div>
        </div>
      );  
}
export default Landing;