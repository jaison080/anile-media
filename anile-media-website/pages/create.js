import { Box, TextField } from "@mui/material";
import dynamic from "next/dynamic";
import { useRef, useState } from  "react";
import  "react-quill/dist/quill.snow.css";
import axios from 'axios'
const ReactQuill=dynamic(import('react-quill'),{
    ssr:false,
    loading:()=><p>Loading....</p>
})
const  modules  = {
    toolbar: [
        [{ font: [] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script:  "sub" }, { script:  "super" }],
        ["blockquote", "code-block"],
        [{ list:  "ordered" }, { list:  "bullet" }],
        [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
        ["link", "image", "video"],
        ["clean"],
    ],
};

const  create  = () => {
    const titleRef = useRef(null);
    const handleTitleFieldChange=function(e) {
        settitleValue(e.target.value)
    }
    const [value, setValue] =  useState("");
    const [titleValue, settitleValue] =  useState("");
    async function uploadPost(event){
        event.preventDefault();
        let data = {
         title:titleValue,
          content:value
        };
        console.log(data);
        const res = await axios.post('/api/blogs', JSON.stringify(data), {
            headers: {
            // Overwrite Axios's automatically set Content-Type
            'Content-Type': 'application/json'
          }
        });
        console.log(res);
        if(res.status == 200)
        {
          console.log("Success!");
          alert('Blog uploaded succesfully !!')
          window.location.reload()
        }
        else
        {
          console.log("Failed!");
        }
      };

    return  (
        <div className="quill">
        <div className="add-title">Add Blog</div>
          
              <Box component="form" noValidate onSubmit={uploadPost}>
                <TextField className='blog-title'
          name="title"
          type="text"
          value={titleValue} onChange={handleTitleFieldChange}
          ref={titleRef}
          placeholder="Enter a Title.."/>
        <ReactQuill  modules={modules} theme="snow" onChange={setValue} placeholder="Content goes here..." />
        <div className='btn-post'>
          <button className='btn' type="submit" onClick={uploadPost}>POST</button>
          </div>
          </Box>
              </div>);
};

export  default  create;