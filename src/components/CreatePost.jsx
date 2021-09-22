import React, { Component,useState } from "react";
import axios from "./axiosWithBaseURL";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
//import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import sanitizeHtml from "sanitize-html";
import MyCustomUploadAdapterPlugin from "./MyUploadAdapter"
import db from "./firebase";
function CreatePost() {

    const [title, setTitle] = useState('Give a the Title');
    const [auther, setAuther] = useState('Enter the Auther name')
    const [body, setBody] = useState('Start writing your blog');
    const [imgsrc, setImgsrc] = useState('https://www.google.com');

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
            // let formData = new FormData();
            // formData.append('name', title);
            // formData.append('auther', auther);
            // formData.append("Img", imgsrc);
            // formData.append('body', body);
            // axios.post('upload',{
            //     'name': title,
            //     'auther': auther,
            //     "img": imgsrc,
            //     'body': body
            // })
            console.log(new Date(new Date().toUTCString() +(3600000*+5.5)).toLocaleString().replace(/\s+/g, ''))
            db.collection('blogs').doc(new Date(new Date().toUTCString() +(3600000*+5.5)).toLocaleString().replace(/\s+/g, '').replace(/[/]/g, "D").replace(/[,]/g, "comma").replace(/[:]/g, "T")).set(
                {
                    'name': title,
                    'auther': auther,
                    'img': imgsrc,
                    'body': body,
                    'timestamp': new Date(new Date().toUTCString() +(3600000*+5.5)).toLocaleString()
                }
            )
        }
    }

    const editorConfiguration = {
        toolbar: [ 'bold', 'italic', 'imageInsert','heading', 'mediaEmbed','insertTable','indent','link', 'fontfamily','alignment','blockquote','fontsize','numberedlist','bulletedlist','undo','redo','fontcolor']
    };

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
                        placeholder={title}
                        onChange={e => {setTitle(e.target.value)}}
                        required
                    />
                </div>

                <br/>
                <div>
				<label >Auther Name:</label>
				<input type="text" id="auther" placeholder={auther} name="auther" onChange={e => {setAuther(e.target.value)}} required/>
			    </div>
                <br/>

                <div>
				<label >Image Link:</label>
				<input type="text" name="imgsrc" onChange={e => {setImgsrc(e.target.value)}}/>
			    </div>

                <br/>

                <div>
                    <CKEditor
                        onReady={ editor => {
                        console.log( 'Editor is ready to use!', editor );

                        // Insert the toolbar before the editable area.
                        editor.ui.getEditableElement().parentElement.insertBefore(
                            editor.ui.view.toolbar.element,
                            editor.ui.getEditableElement()
                            );
                        } }
                        editor={Editor}
                        placeholder={body}
                        onChange={(e, editor) => {
                            setBody(editor.getData())
                            }}
                        config={ editorConfiguration }
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
  