

// import React, { useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   Checkbox,
//   FormControlLabel,
//   Button,
//   TextField,
//   Stack,
//   Grid
// } from "@mui/material";

// import { useNavigate } from "react-router-dom";
// import PrintIcon from "@mui/icons-material/Print";
// import CloseIcon from "@mui/icons-material/Close";

// import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// export default function CashBankBook() {
//   const navigate = useNavigate();

//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [bookType, setBookType] = useState("");
//   const [printDaily, setPrintDaily] = useState(false);

//   const handlePrint = () => {
//     navigate("/bank-book-print", {
//       state: { startDate, endDate, bookType, printDaily }
//     });
//   };

//   const handleClose = () => navigate(-1);

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Box
//         sx={{
//           minHeight: "100vh",
//           background: "linear-gradient(135deg,#eef2f7,#e3e8f0)",
//           display: "flex",
//           justifyContent: "center",
//           pt: 5
//         }}
//       >
//         <Box width={560}>

//           {/* TITLE */}

//           <Typography
//             variant="h5"
//             fontWeight={600}
//             textAlign="center"
//             mb={2.5}
//           >
//             Cash / Bank Book
//           </Typography>

//           {/* PERIOD CARD */}

//           <Paper sx={{ p: 2.5, borderRadius: 3, mb: 3 }}>
//             <Typography fontWeight={600} fontSize={15} mb={2}>
//               Period
//             </Typography>

//             <Grid container spacing={2}>
//               <Grid item xs={6}>
//                 <DatePicker
//                   label="Start Date"
//                   value={startDate}
//                   onChange={setStartDate}
//                   slotProps={{ textField: { size: "small", fullWidth: true } }}
//                 />
//               </Grid>

//               <Grid item xs={6}>
//                 <DatePicker
//                   label="End Date"
//                   value={endDate}
//                   onChange={setEndDate}
//                   slotProps={{ textField: { size: "small", fullWidth: true } }}
//                 />
//               </Grid>
//             </Grid>
//           </Paper>

//           {/* BOOK OPTIONS CARD */}

//           <Paper sx={{ p: 2.5, borderRadius: 3, mb: 3 }}>
//             <Typography fontWeight={600} fontSize={15} mb={2}>
//               Book Options
//             </Typography>

//             <Stack spacing={2}>
//               <TextField
//                 select
//                 size="small"
//                 label="Book Type"
//                 value={bookType}
//                 onChange={(e) => setBookType(e.target.value)}
//                 fullWidth
//               >
//                 <option value="">Select</option>
//                 <option value="cash">Cash Book</option>
//                 <option value="bank">Bank Book</option>
//               </TextField>

//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     size="small"
//                     checked={printDaily}
//                     onChange={(e) => setPrintDaily(e.target.checked)}
//                   />
//                 }
//                 label="Print Daily Totals"
//               />
//             </Stack>
//           </Paper>

//           {/* BUTTONS */}

//           <Stack direction="row" spacing={2.5} justifyContent="center">
//             <Button
//               variant="contained"
//               size="medium"
//               startIcon={<PrintIcon />}
//               onClick={handlePrint}
//               sx={{
//                 px: 3.5,
//                 fontWeight: 600,
//                 borderRadius: 2,
//                 minWidth: 170
//               }}
//             >
//               Print Report
//             </Button>

//             <Button
//               variant="contained"
//               color="error"
//               size="medium"
//               startIcon={<CloseIcon />}
//               onClick={handleClose}
//               sx={{
//                 px: 3.5,
//                 fontWeight: 600,
//                 borderRadius: 2,
//                 minWidth: 120
//               }}
//             >
//               Close
//             </Button>
//           </Stack>

//         </Box>
//       </Box>
//     </LocalizationProvider>
//   );
// }




































































import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  Stack,
  Grid
} from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export default function BankBookCashBook() {

  const navigate = useNavigate();

  /* ===============================
     Financial Year Default
  =============================== */

  const today = dayjs();
  const currentYear = today.year();
  const currentMonth = today.month();

  let fyStart, fyEnd;

  if (currentMonth < 3) {
    fyStart = dayjs(`${currentYear - 1}-04-01`);
    fyEnd = dayjs(`${currentYear}-03-31`);
  } else {
    fyStart = dayjs(`${currentYear}-04-01`);
    fyEnd = dayjs(`${currentYear + 1}-03-31`);
  }

  const [startDate, setStartDate] = useState(fyStart);
  const [endDate, setEndDate] = useState(fyEnd);
  const [printDaily, setPrintDaily] = useState(false);

  /* ===============================
     OPEN PRINT PAGE IN NEW TAB
  =============================== */

  const handlePrint = () => {

    // Save data in localStorage temporarily
    localStorage.setItem(
      "bankBookFormData",
      JSON.stringify({
        startDate: startDate.format("DD-MM-YYYY"),
        endDate: endDate.format("DD-MM-YYYY"),
        printDaily
      })
    );

    // Open new tab
    window.open("/bank-book-print", "_blank");
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ minHeight: "100vh", bgcolor: "#f4f6f9", p: 4 }}>

        <Box maxWidth={600} mx="auto">

          <Typography variant="h5" fontWeight={700} textAlign="center" mb={3}>
            Cash / Bank Book
          </Typography>

          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography fontWeight={600} mb={2}>Period</Typography>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <DatePicker
                  label="Start Date"
                  value={startDate}
                  onChange={setStartDate}
                  slotProps={{ textField: { size: "small", fullWidth: true } }}
                />
              </Grid>

              <Grid item xs={6}>
                <DatePicker
                  label="End Date"
                  value={endDate}
                  onChange={setEndDate}
                  slotProps={{ textField: { size: "small", fullWidth: true } }}
                />
              </Grid>
            </Grid>
          </Paper>

          <Paper sx={{ p: 3, mb: 3 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={printDaily}
                  onChange={(e) => setPrintDaily(e.target.checked)}
                />
              }
              label="Print Daily Totals"
            />
          </Paper>

          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              startIcon={<PrintIcon />}
              onClick={handlePrint}
            >
              Print Report
            </Button>

            <Button
              variant="contained"
              color="error"
              startIcon={<CloseIcon />}
              onClick={() => navigate(-1)}
            >
              Close
            </Button>
          </Stack>

        </Box>

      </Box>
    </LocalizationProvider>
  );
}










































