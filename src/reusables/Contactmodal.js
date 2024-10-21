import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

function Contactmodal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState(''); // State to store the email
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    // Add your email submission logic here
    console.log('Email submitted:', email); // Example submission log
    handleClose(); // Close the modal after submission
  };

  return (
    <div>
      <Button className="text-black" onClick={handleOpen}>submit </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2" className="text-center mb-4 font-semibold">
            FeedBack submitted <DoneIcon style={{color:"green",fontSize:"2rem" ,textAlign:"center"}}/>
          </Typography>
          
        </Box>
      </Modal>
    </div>
  );
}

export default Contactmodal;
