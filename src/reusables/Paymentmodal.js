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

function Paymentmodal() {
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
      <Button className="text-black" onClick={handleOpen}>Pay Now </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2" className="text-center mb-4 font-semibold">
            Payment Done <DoneIcon style={{color:"green",fontSize:"2rem" ,textAlign:"center"}}/>
          </Typography>
          {/* <form onSubmit={handleSubmit}> 
            <div className="form-floating mb-3">
              <input 
                type="email" 
                className="form-control rounded-md border-gray-300 focus:border-[#8ecae6] focus:ring focus:ring-[#8ecae6] transition duration-200"
                id="floatingInput" 
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <Button 
              className="w-full py-2 mb-2 bg-[#8ecae6] text-white rounded-md hover:bg-[#66b0db] transition duration-200" 
              type="submit" 
            >
              Send Reset Link
            </Button>
          </form> */}
        </Box>
      </Modal>
    </div>
  );
}

export default Paymentmodal;
