import { Box, Modal } from '@mui/material';
import React from 'react';
import styles from './Contact.module.css'
function Contact()
{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      height: 400,
      p: 4,
    };
    return(
        <div>
<div className={styles.contact_main}>
            <div className={styles.contact_2}>Want to collaborate on a future-forward project?</div>
            <div className={styles.contact_1} onClick={handleOpen}>Let's Talk</div>
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
        </div>
        
    );
}
export default Contact