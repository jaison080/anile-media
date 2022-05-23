import { Box, TextField } from "@mui/material";
import dynamic from "next/dynamic";
import { useRef, useState } from  "react";
import  "react-quill/dist/quill.snow.css";
import axios from 'axios';
import Router from 'next/router';
const ReactQuill=dynamic(import('react-quill'),{
    ssr:false,
    loading:()=><p>Loading....</p>
})
const  modules  = {
    toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ script:  "sub" }, { script:  "super" }],
        ["code-block"],
        [{ list:  "ordered" }, { list:  "bullet" }],
        [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
        ["link"],
    ],
};

const  create  = () => {
    const titleRef = useRef(null);
    const handleTitleFieldChange=function(e) {
        settitleValue(e.target.value)
    }
    const authorRef = useRef(null);
    const handleAuthorFieldChange=function(e) {
        setauthorValue(e.target.value)
    }
    const d = new Date();
    const [value, setValue] =  useState("");
    const [titleValue, settitleValue] =  useState("");
    const [authorValue, setauthorValue] =  useState("");
    async function uploadPost(event){
        event.preventDefault();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let createdAt = `${d.getHours()}:${d.getMinutes()}  ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
    
        let data = {
          author:authorValue,
          createdAt:createdAt,
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
        const docId = res.data;
        if(res.status == 200)
        {
          console.log("Success!");
          alert('Blog uploaded succesfully !!')
          Router.push(`/posts/${docId}`);
        }
        else
        {
          console.log("Failed!");
        }
      };

    return  (
        <div className="quill">
        <div className="add-title">Add Blog</div>
          
              <Box component="form" className="box-add" noValidate onSubmit={uploadPost}>
                <TextField className='blog-title'
          name="title"
          type="text"
          value={titleValue} onChange={handleTitleFieldChange}
          ref={titleRef}
          placeholder="Enter a Title.."/>
          <TextField className='blog-title'
          name="author"
          type="text"
          value={authorValue} onChange={handleAuthorFieldChange}
          ref={authorRef}
          placeholder="Name of Author"/>
        <ReactQuill  modules={modules} theme="snow" onChange={setValue} placeholder="Content goes here..." />
        <div className='btn-post'>
          <button className='btn' type="submit" onClick={uploadPost}>POST</button>
          </div>
          </Box>
              </div>);
};

export  default  create;