import { TextField,InputLabel,Select,MenuItem, FormLabel, RadioGroup, FormControlLabel, Radio, Modal, FormControl, OutlinedInput, Grid, Typography, Button } from "@mui/material";
import { Box} from "@mui/system";
import CssBaseline from '@mui/material/CssBaseline';
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import React from'react'
import  "react-quill/dist/quill.snow.css";
import axios from 'axios';
import Head from "next/head";
import Navbar from '../src/components/Navbar/Navbar'
import styles from '../src/components/css/forms.module.css'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height:400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};




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

export default function form()
{
  
  
   async function submitForm(event){
     
    event.preventDefault();
    let data = new FormData(event.currentTarget);
    let userData={
      name:data.get('name'),
      email:data.get('email'),
      phone:data.get('phone'),
      company:data.get('company'),
      hear:data.get('hear'),
      work:data.get('work'),
      budget:data.get('budget'),
      content:value,

    };
    
    console.log(JSON.stringify(userData));
    const res = await axios.post('/api/form', JSON.stringify(userData), {
        headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
      }
    });
    console.log(res);
    if(res.status == 200)
    {
      console.log("Success!");
      alert('Form submitted succesfully !!')
      window.location.reload()
    }
    else
    {
      console.log("Failed!");
    }
  };
 const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClick = () => router.push('./form');
    const [age, setAge] = React.useState('');
const [age1, setAge1] = React.useState('');
const [value, setValue] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChange1 = (event) => {
    setAge1(event.target.value);
  };

    return(
      <div>
      <Head>
        <title>Anile Media | Form</title>
      </Head>
      <Navbar/>
      <main>
        <div className={styles.container}>
            <div className={styles.title}>Let's Work Together</div>
            <div className={styles.description}>By leveraging our full spectrum strategy, design, and technology capabilities, we deliver game-changing outcomes for our clients around the world.</div>
            <br/>
            <div className={styles.description1}>How Can We Help?</div>
            <div className={styles.tabs}>
            <button className={styles.button_active} onClick={handleClick}>START A PROJECT</button>
            <span className={styles.or}>OR</span>
            <button className={styles.button} onClick={handleOpen}>SCHEDULE A CALL</button>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      ><Box sx={style}>
      <iframe
        src="https://calendly.com/jaisondennis090/30min"
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
        </Box></Modal>
            </div>
            <CssBaseline />
            <Box component="form" noValidate onSubmit={submitForm} sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily:'Raleway', mt: 3 }}>
          <Typography  className={styles.form_title}>
            BASIC INFORMATION
          </Typography>
            <Grid container spacing={3} sx={{display:'flex',justifyContent:'center'}}>
              <Grid item xs={10}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={10} sm={5}>
                <TextField
                  autoComplete="email"
                  name="email"
                  required
                  fullWidth
                  id="email"
                  type="email"
                  label="Email"
                />
              </Grid>
              <Grid item xs={10} sm={5}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  name="phone"
                  label="Phone No:"
                  type="number"
                  autoComplete="phone"
                />
              </Grid>
              
              <Grid item xs={10}>
                <TextField
                  required
                  fullWidth
                  name="company"
                  type="text"
                  label="Company / Organization"
                  id="company"
                  autoComplete="company"
                />
              </Grid>
              <Grid item xs={10}>
                <FormControl fullWidth>
                <InputLabel id="demo-multiple-name-label" >How did you hear about us?</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="hear"
          value={age}
          name="hear"
          onChange={handleChange}
          input={<OutlinedInput label="How did you hear about us?" />}
        >
            
            <MenuItem
              key='1'
              value='Google'
            >
              Google
            </MenuItem>

            <MenuItem
              key='2'
              value='Referral'
            >
              Referral
            </MenuItem>

            <MenuItem
              key='3'
              value='Billboard'
            >
              Billboard
            </MenuItem>
            <MenuItem
              key='0'
              value='None'
            >
              None
            </MenuItem>
        </Select>
        </FormControl>
              </Grid>
            </Grid>
          <Typography  className={styles.form_title_1}>
            PROJECT DETAILS
          </Typography>
            <Grid container spacing={3} sx={{display:'flex',justifyContent:'center'}}>
               <Grid item xs={10} >
                <FormControl fullWidth>
                <InputLabel id="demo-multiple-name-label">How do you like to work with us?</InputLabel>
         <Select
          labelId="demo-multiple-name-label"
          id="work"
          name="work"
          value={age1}
          onChange={handleChange1}
          input={<OutlinedInput label="How do you like to work with us?" />}
        >
            
            <MenuItem
              key='1'
              value=' Web Design & Development'
            >
              Web Design & Development

            </MenuItem>

            <MenuItem
              key='2'
              value='Branding & Identity'
            >
              Branding & Identity

            </MenuItem>

            <MenuItem
              key='3'
              value='Digital Marketing'
            >
              Digital Marketing

            </MenuItem>
            <MenuItem
              key='4'
              value='Custom Web/Mobile App Development'
            >
              Custom Web/Mobile App Development


            </MenuItem>
            <MenuItem
              key='5'
              value='Strategy & Consulting'
            >
              Strategy & Consulting

            </MenuItem>
            <MenuItem
              key='6'
              value='Ongoing Support'
            >
              Ongoing Support


            </MenuItem>

            <MenuItem
              key='0'
              value='None'
            >
              None
            </MenuItem>
        </Select>
        </FormControl>
              </Grid>
              <Grid item xs={10}>
                <FormLabel sx={{display:'flex',justifyContent:'center'}}>What's your budget ?</FormLabel>
      <RadioGroup
      sx={{display:'flex',justifyContent:'center'}}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="budget"
        id="budget"
        type="text"
      >
        <FormControlLabel  value="20k-40k"  control={<Radio />} label="$20k-40k" />
        <FormControlLabel  value="40k-60k" control={<Radio />} label="$40k-60k" />
        <FormControlLabel  value="60k-80k" control={<Radio />} label="$60k-80k" />
         <FormControlLabel  value="$100k +" control={<Radio />} label="$100k +" />
      </RadioGroup>
              </Grid>
            <Grid item xs={10}>
              <FormLabel sx={{display:'flex',justifyContent:'center',marginBottom:'10px'}}>Project Details</FormLabel>
              <ReactQuill  modules={modules} theme="snow" onChange={setValue} placeholder="Content goes here..." />
            </Grid>
             
            </Grid>
            
         <button 
              type="submit"
              className={styles.submit}
            >SEND</button>
            </Box>
          </div>
            </main>
            </div>
              
    );
        }