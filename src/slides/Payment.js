import React, { useState } from "react";
import Footer from "../reusables/Footer";
import NavBar from "../reusables/NavBar";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import Input from "@mui/joy/Input";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Stack from "@mui/joy/Stack";
import LocationOn from "@mui/icons-material/LocationOn";
import Autocomplete from '@mui/joy/Autocomplete';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TextField from '@mui/material/TextField';
import Fab from "@mui/material/Fab";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paymentmodal from "../reusables/Paymentmodal";

function Payment() {
  const [hours, setHours] = useState(); // State to manage the number of hours
  const hourlyRate = 80; // Example hourly rate
  const totalCharge = 200.58 || hourlyRate * hours; // Calculate total charge

  // State to manage selected payment method
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [currency, setCurrency] = useState("dollar");

  const paymentOptions = [
    { label: 'Credit Card' },
    { label: 'QR Code' },
    { label: 'UPI Payment' },
    { label: 'Net Banking' },
    { label: 'Pay on Delivery' },
  ];

  return (
    <div>
      <NavBar />
      <div className="p-4 flex justify-center items-center">

        <form className="p-4 md:p-6 lg:w-1/2 lg:p-7 xl:p-8 flex flex-col gap-3  justify-center items-start loginbox rounded-md border-2 ">
          
          {/* Name */}
        <div className="w-full">
        <Input
            placeholder="Name"
            style={{ width: "100%" }}
          />
        </div>
          
          {/* Time in hours */}
          <div className="w-full">
          {/* {!hours && (<span className="inline-block">Time in hrs</span>)} */}
          <Input
            placeholder="Time in hrs"
            type="number"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            sx={{ width: 300 }}
            style={{width:"100%"}}
          />
          </div>

          {/* Timings Section with Outline */}
          <div className="flex flex-col p-2 gap-2 border-1 bg-slate-50 border-slate-300 rounded-lg w-full">
            
            <div className="flex items-center gap-4">
              {/* <Button
                variant="soft"
                color="neutral"
                startDecorator={<AccessTimeIcon />}
              >
                Timings
              </Button> */}
              <TextField
                id="from-time"
                label="From"
                variant="filled"  // Added outline style
                type="time"
                style={{backgroundColor:"white",color:"white"}}
                sx={{ width: 150 }}
              />
              <TextField
                id="to-time"
                label="To"
                variant="filled"  // Added outline style
                type="time"
                style={{backgroundColor:"white",color:"white"}}
                sx={{ width: 150 }}
              />
            </div>
          </div>
          
          {/* Amount */}
          <div className="w-full">
          <Input
            placeholder="200"
            value={totalCharge}
            startDecorator={{ dollar: "$", baht: "฿", yen: "¥" }[currency]}
            endDecorator={
              <React.Fragment>
                <Divider orientation="vertical" />
                <Select
                  variant="plain"
                  value={currency}
                  onChange={(_, value) => setCurrency(value)}
                  sx={{ mr: -1.5, "&:hover": { bgcolor: "transparent" } }}
                >
                  <Option value="dollar">US Dollar</Option>
                  <Option value="rupee">INR Rupee</Option>
                  <Option value="baht">Thai Baht</Option>
                  <Option value="yen">Japanese Yen</Option>
                </Select>
              </React.Fragment>
            }
            sx={{ width: 300 }}
          />
          </div>
          
          {/* Location */}
          <div className="w-full">
          <Input
            placeholder="Your Location"
            value=""            
            startDecorator={
              <Button
                variant="soft"
                color="neutral"
                startDecorator={<LocationOn />}
              >
                Locate
              </Button>
            }
            sx={{ width: 300 }}
          />
          </div>
          
          {/* Payment Options */}
          <div className="w-full">
          <Autocomplete
            options={paymentOptions}
            placeholder="credit card"
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <Input
                {...params}
                placeholder="Select Payment Option"
                sx={{ width: 300 }}
              />
            )}
            value={paymentMethod}
            onChange={(_, value) => setPaymentMethod(value)}
          />
          

          {/* Conditional Inputs based on Payment Option */}
          {paymentMethod && paymentMethod.label === 'Credit Card' && (
            <Stack spacing={2} sx={{ width: 300 }}>
              <Input placeholder="Card Number" required />
              <Input placeholder="Cardholder Name" required />
              <Input placeholder="Expiration Date" required type="date" />
              <Input placeholder="CVV" required type="number" />
            </Stack>
          )}

          {paymentMethod && paymentMethod.label === 'QR Code' && (
            <Stack spacing={2} sx={{ width: 300 }}>
              <Input placeholder="Scan QR Code to Pay" readOnly />
            </Stack>
          )}

          {paymentMethod && paymentMethod.label === 'UPI Payment' && (
            <Stack spacing={2} sx={{ width: 300 }}>
              <Input placeholder="Enter UPI ID" required />
            </Stack>
          )}

          {paymentMethod && paymentMethod.label === 'Net Banking' && (
            <Stack spacing={2} sx={{ width: 300 }}>
              <Input placeholder="Bank Account Number" required />
              <Input placeholder="IFSC Code" required />
            </Stack>
          )}

          {paymentMethod && paymentMethod.label === 'Pay on Delivery' && (
            <Stack spacing={2} sx={{ width: 300 }}>
              <p>Cash will be collected upon delivery of service.</p>
            </Stack>
          )}
          </div>
          
          <div className="m-4 flex justify-center items-center w-full -z-2">
            <Fab variant="extended">
              <Paymentmodal style={{ color: "grey" }} />
              <ArrowForwardIcon sx={{ ml: 1 }} />
            </Fab>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Payment;
