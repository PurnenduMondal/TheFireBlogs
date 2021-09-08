import React, { useState, lazy } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "./axiosWithBaseURL";
const Header = lazy(() => import("./Header"));
const Footer = lazy(() => import("./Footer"));
const CategoryList = lazy(() => import("./CategoryList"));
const CreateArea = lazy(() => import("./CreateArea"));

function Landing()
{
    const [items, setItems] = useState([]);
    React.useEffect(() => {
    axios.get("images").then(res => {setItems(res.data)});
    
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
        <div>
          {items.length > 0 ? (items.map((item, index) => {
            return (

                <Link to={"/"+item.name}>
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