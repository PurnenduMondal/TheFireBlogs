import React, { Component,useState } from "react";
import axios from "axios";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import sanitizeHtml from "sanitize-html";


function CreatePost() {

    const [title, setTitle] = useState('default title');
    const [body, setBody] = useState('default body');

    function handleSubmit(event) {
        event.preventDefault();
        // sanitize data before setting state
        setBody(sanitizeHtml(body.trim()));

        // If the post body is too less, do not submit
        if (body.length < 1) {
            alert("Cannot submit such a short post!");
        } else {
            // // Display a spinner until the post is submitted
            // document.querySelector(".spinner-container").style.display = "flex";

            //setAllValues({...allValues, body: sanitizedData });
            let formData = new FormData();
            var imagefile = document.querySelector('#file');

            formData.append('name', title);
            formData.append("img", imagefile.files[0]);
            formData.append('body', body);

            axios.post('upload_file', formData, {
                headers: {
                'Content-Type': 'multipart/form-data'
                }
            })
            // const Blog = {

            //     title: allValues.title,
            //     body: allValues.body,
            // };

            //axios.post('uplaod', Blog)
                // .then((res) => (window.location = "/posts"))
                // .catch((err) => console.log(err));
        }
    }
  
    return (
        <div className="edit-post">
            <h1>
                Edit Blog Post<span className="full-stop">.</span>
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="edit-title">Title: </label>
                    <input
                        className="form-control edit-title"
                        type="text"
                        name="title"
                        value={title}
                        onChange={e => {setTitle(e.target.value)}}
                        required
                    />
                </div>
                <br />
                 <div>
				<label >Upload Image</label>
				<input type="file" id="file" name="image"/>
			    </div>

                <div>
                    <CKEditor
                        editor={ClassicEditor}
                        onChange={(e, editor) => {
                            setBody(editor.getData())
                            }}
                        config={{
                            toolbar: [
                                "Heading",
                                "|",
                                "Bold",
                                "Italic",
                                "Link",
                                "NumberedList",
                                "BulletedList",
                                "|",
                                "BlockQuote",
                                "MediaEmbed",
                                "Undo",
                                "Redo",
                            ],
                        }}
                    />
                </div>


                <br />
                <div className="form-group">
                    <input
                        type="submit"
                        value="Submit Post"
                        className="btn btn-outline-primary btn-lg"
                    />
                </div> 
            </form>
        </div>
    );
  }
  
  export default CreatePost;
  