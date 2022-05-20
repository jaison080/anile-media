import { TextField,InputLabel,Select,MenuItem, FormLabel, RadioGroup, FormControlLabel, Radio, Modal, FormControl, OutlinedInput, Grid, Typography } from "@mui/material";
import { Box, flexbox } from "@mui/system";
import CssBaseline from '@mui/material/CssBaseline';
import { useRouter } from "next/router";
import React from'react'
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
function form()
{
 const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClick = () => router.push('./form');
    const [age, setAge] = React.useState('');
const [age1, setAge1] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChange1 = (event) => {
    setAge1(event.target.value);
  };
  function handleSubmit(){

  }

    return(
        <div className='container'>
            <div className="title">Let's Work Together</div>
            <div className="description">By leveraging our full spectrum strategy, design, and technology capabilities, we deliver game-changing outcomes for our clients around the world.</div>
            <br/>
            <div className="description1">How Can We Help?</div>
            <div className="tabs">
            <button className="button_active" onClick={handleClick}>START A PROJECT</button>
            <span className="or">OR</span>
            <button className="button" onClick={handleOpen}>SCHEDULE A CALL</button>
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
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily:'Raleway',
          }}
        >
          <Typography  className="form-title">
            BASIC INFORMATION
          </Typography>
          <Box component="form1" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                  autoFocus
                />
              </Grid>
              <Grid item xs={10} sm={5}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone No:"
                  autoComplete="phone"
                />
              </Grid>
              
              <Grid item xs={10}>
                <TextField
                  required
                  fullWidth
                  name="company"
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
          id="demo-multiple-name"
          value={age}
          onChange={handleChange}
          input={<OutlinedInput label="How did you hear about us?" />}
        >
            
            <MenuItem
              key='1'
              value='1'
            >
              Google
            </MenuItem>

            <MenuItem
              key='2'
              value='2'
            >
              Referral
            </MenuItem>

            <MenuItem
              key='3'
              value='3'
            >
              Billboard
            </MenuItem>
            <MenuItem
              key='0'
              value='0'
            >
              None
            </MenuItem>
        </Select>
        </FormControl>
              </Grid>
            </Grid>
            </Box>
            </Box>
             <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            fontFamily:'Raleway',
            alignItems: 'center',
          }}
        >
          <Typography  className="form-title">
            PROJECT DETAILS
          </Typography>
          <Box component="form2" noValidate onSubmit={handleSubmit} sx={{ fontFamily:'Raleway',mt: 3 }}>
            <Grid container spacing={3} sx={{display:'flex',justifyContent:'center'}}>
               <Grid item xs={10} >
                <FormControl fullWidth>
                <InputLabel sx={{ fontFamily:'Raleway'}} id="demo-multiple-name-label">How would you like to work with us?</InputLabel>
         <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={age1}
          sx={{ fontFamily:'Raleway'}}
          onChange={handleChange1}
          input={<OutlinedInput label="How would you like to work with us?" />}
        >
            
            <MenuItem
              key='1'
              value='1'
              sx={{ fontFamily:'Raleway'}}
            >
              Web Design & Development

            </MenuItem>

            <MenuItem
              key='2'
              sx={{ fontFamily:'Raleway'}}
              value='2'
            >
              Branding & Identity

            </MenuItem>

            <MenuItem
              key='3'
              value='3'
              sx={{ fontFamily:'Raleway'}}
            >
              Digital Marketing

            </MenuItem>
            <MenuItem
              key='4'
              sx={{ fontFamily:'Raleway'}}
              value='4'
            >
              Custom Web/Mobile App Development


            </MenuItem>
            <MenuItem
              key='5'
              sx={{ fontFamily:'Raleway'}}
              value='5'
            >
              Strategy & Consulting

            </MenuItem>
            <MenuItem
              key='6'
              value='6'
              sx={{ fontFamily:'Raleway'}}
            >
              Ongoing Support


            </MenuItem>

            <MenuItem
              key='0'
              sx={{ fontFamily:'Raleway'}}
              value='0'
            >
              None
            </MenuItem>
        </Select>
        </FormControl>
              </Grid>
              <Grid item xs={10}>
                <FormLabel sx={{display:'flex',fontFamily:'Raleway',justifyContent:'center'}}>What's your budget ?</FormLabel>
      <RadioGroup
      sx={{display:'flex',justifyContent:'center'}}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-group-label"
      >
        <FormControlLabel sx={{ fontFamily:'Raleway'}} value="female"  control={<Radio />} label="$20k-40k" />
        <FormControlLabel sx={{ fontFamily:'Raleway'}} value="male" control={<Radio />} label="$40k-60k" />
        <FormControlLabel sx={{ fontFamily:'Raleway'}} value="other" control={<Radio />} label="$60k-80k" />
         <FormControlLabel sx={{ fontFamily:'Raleway'}} value="other1" control={<Radio />} label="$100k +" />
      </RadioGroup>
              </Grid>
            <Grid item xs={10}>
              <FormLabel sx={{display:'flex',justifyContent:'center', fontFamily:'Raleway'}}>Project Details</FormLabel>
      <TextField
          id="outlined-multiline-static"
          multiline
          sx={{ fontFamily:'Raleway'}}
          fullWidth
          rows={10}
        />
            </Grid>
             
            </Grid>
            </Box>
            </Box>
        <FormLabel className="input-label">Upload RFP</FormLabel>
        <label className="input">SELECT FILES
         <input type="file" className="file-upload" name="filename"></input>
         </label>
         <input type="submit" className="submit" value="SEND"></input>
            </div>
    );
}
export default form