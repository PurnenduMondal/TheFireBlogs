import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
function CategoryList(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  function  arrayBufferToBase64(buffer) {
      var binary = '';
      var bytes = [].slice.call(new Uint8Array(buffer));
      bytes.forEach((b) => binary += String.fromCharCode(b));
      return window.btoa(binary);
  }

  

  return (
    <div className="responsive">
    <div class="gallery">
      <img width="314" height="177" src={props.imgsrc} className="img-fluid" alt="Responsive image"/>
      <div  class="desc">{props.title}</div>
    </div>
    </div>
  );
}

export default CategoryList;
