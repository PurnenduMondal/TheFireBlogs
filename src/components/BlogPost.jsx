import React, {useState} from "react"
import { useParams } from "react-router-dom"
import axios from "./axiosWithBaseURL";
import Parser from 'html-react-parser';
import "./BlogPost.css"
import "./style.css"
import { set, get } from './myidb';
import { openDB } from 'idb';
import db from "./firebase";

function BlogPost() 
{
    const [blog, setBlog] = useState(null)
    const {id} = useParams();
    React.useEffect(() => {
        // axios.post('/blogpost', {blogid : id})
        // .then(res => { 
        //   setItems(res.data);
        //     // openDB(id, 1, {
        //     // upgrade(db) {
        //     //     const dbPromise = db.createObjectStore(id);
        //     //     dbPromise.put(JSON.stringify(res.data),id,id)
        //     // },
        //     // });
        //     set(id,JSON.stringify(res.data));

        //     })
        //     .catch(err =>{
        //     get(id).then((data) => {
        //         var x = JSON.parse(data)
        //         setItems(x)
        //         });
        //     })
        db.collection('blogs').doc(id).onSnapshot(snapshot =>{
            setBlog(snapshot.data())
        })
    }, [id])

    const renderLoader = () => (
        <div className="loader d-flex justify-content-center spinner-container">
            <div className="spinner-border text-warning" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    );

    return (
    <div className="blogpost">
        {blog ? 
             (
                
                <div className="">     
                    <div className = "responsive"> <img width="100%" height="100%" src={blog.img} alt="Responsive image"/></div>
                <div className="blog__text">    
                    <div  className="blogpost__title"><h2>{blog.name}</h2></div>
                    
                    <div  className="blogpost__auther"><h6>Auther:{" "+blog.auther}</h6>
                    {/* <button className="blogpost__followbtn">
                        FOLLOW
                    </button> */}
                    </div>
                    
                    <div  className="blogpost__blog">{Parser(blog.body)}</div>
                </div>
                </div>
            )
         :  renderLoader()}
    </div>
    )
}
export default BlogPost