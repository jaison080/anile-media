import { TextField,InputLabel,Select,MenuItem, FormLabel, RadioGroup, FormControlLabel, Radio, Modal } from "@mui/material";
import { Box } from "@mui/system";

import { useRouter } from "next/router";
import React from'react'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  p: 4,
};

function form()
{
 const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClick = () => router.push('./form');
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
          <div style={{ height: "400px", width:"400px"}}>
      <iframe
        src="https://calendly.com/jaisondennis090/30min"
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
    </div>
        </Box></Modal>
            </div>
            <div className="form">
            <div className="form-title">BASIC INFORMATION</div>
            <TextField className="outlined-basic" label="Name" variant="outlined" />
            <div className="form-1">
                <TextField className="outlined-basic-1" label="Email" variant="outlined" />
            <TextField className="outlined-basic-2" label="Phone No:" variant="outlined" />
            </div>
            <TextField className="outlined-basic-3" label="Company/Organization" variant="outlined" />
            </div>
            <div className="form">
            <div className="form-title">PROJECT DETAILS</div>
             <FormLabel className="radio-label">What's your budget ?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-group-label"
      >
        <FormControlLabel value="female"  control={<Radio />} label="$20k-40k" />
        <FormControlLabel value="male" control={<Radio />} label="$40k-60k" />
        <FormControlLabel value="other" control={<Radio />} label="$60k-80k" />
         <FormControlLabel value="other" control={<Radio />} label="$100k +" />
      </RadioGroup>
      <FormLabel className="radio-label-1">Project Details</FormLabel>
      <TextField
          id="outlined-multiline-static"
          multiline
          sx={{width:"800px",marginTop:"20px"}}
          rows={10}
        />
        <FormLabel className="radio-label-1">Upload RFP</FormLabel>
        <label className="input">SELECT FILES
         <input type="file" className="file-upload" name="filename"></input>
         </label>
         <input type="submit" className="submit" value="SEND"></input>
            </div>
            
         
        </div>
    );
}
export default form