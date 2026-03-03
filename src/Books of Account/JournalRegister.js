// import React, { useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   Button,
//   Stack,
//   Grid
// } from "@mui/material";

// import { useNavigate } from "react-router-dom";
// import PrintIcon from "@mui/icons-material/Print";
// import CloseIcon from "@mui/icons-material/Close";

// import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// export default function JournalRegister() {
//   const navigate = useNavigate();

//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   const handlePrint = () => {
//     navigate("/journal-register-print", {
//       state: { startDate, endDate }
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
//           pt: 6
//         }}
//       >
//         <Box width={520}>

//           {/* TITLE */}

//           <Typography
//             variant="h5"
//             fontWeight={600}
//             textAlign="center"
//             mb={2.5}
//           >
//             Journal Register 
//           </Typography>

//           {/* CARD */}

//           <Paper sx={{ p: 2.5, borderRadius: 3, mb: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={6}>
//                 <DatePicker
//                   label="Start Date"
//                   value={startDate}
//                   onChange={setStartDate}
//                   slotProps={{
//                     textField: {
//                       size: "small",
//                       fullWidth: true
//                     }
//                   }}
//                 />
//               </Grid>

//               <Grid item xs={6}>
//                 <DatePicker
//                   label="End Date"
//                   value={endDate}
//                   onChange={setEndDate}
//                   slotProps={{
//                     textField: {
//                       size: "small",
//                       fullWidth: true
//                     }
//                   }}
//                 />
//               </Grid>
//             </Grid>
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
  Button,
  Stack,
  Grid
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PrintIcon from "@mui/icons-material/Print";
import CloseIcon from "@mui/icons-material/Close";

import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export default function JournalRegister() {
  const navigate = useNavigate();

  /* ===============================
     Financial Year Default
  =============================== */

  const today = dayjs();
  const year = today.year();
  const month = today.month();

  let fyStart, fyEnd;

  if (month < 3) {
    fyStart = dayjs(`${year - 1}-04-01`);
    fyEnd = dayjs(`${year}-03-31`);
  } else {
    fyStart = dayjs(`${year}-04-01`);
    fyEnd = dayjs(`${year + 1}-03-31`);
  }

  const [startDate, setStartDate] = useState(fyStart);
  const [endDate, setEndDate] = useState(fyEnd);

  /* ===============================
     Open Print Page in New Tab
  =============================== */

  const handlePrint = () => {
    localStorage.setItem(
      "journalRegisterData",
      JSON.stringify({
        startDate: startDate.format("DD-MM-YYYY"),
        endDate: endDate.format("DD-MM-YYYY")
      })
    );

    window.open("/journal-register-print", "_blank");
  };

  const handleClose = () => navigate(-1);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg,#eef2f7,#dbe6f1)",
          display: "flex",
          justifyContent: "center",
          pt: 6
        }}
      >
        <Box width={520}>

          <Typography
            variant="h5"
            fontWeight={700}
            textAlign="center"
            mb={3}
          >
            Journal Register
          </Typography>

          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              mb: 4
            }}
          >
            <Typography fontWeight={600} mb={2}>
              Period
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <DatePicker
                  label="Start Date"
                  value={startDate}
                  onChange={setStartDate}
                  slotProps={{
                    textField: { size: "small", fullWidth: true }
                  }}
                />
              </Grid>

              <Grid item xs={6}>
                <DatePicker
                  label="End Date"
                  value={endDate}
                  onChange={setEndDate}
                  slotProps={{
                    textField: { size: "small", fullWidth: true }
                  }}
                />
              </Grid>
            </Grid>
          </Paper>

          <Stack direction="row" spacing={3} justifyContent="center">
            <Button
              variant="contained"
              startIcon={<PrintIcon />}
              onClick={handlePrint}
              sx={{
                px: 5,
                fontWeight: 600,
                borderRadius: 2,
                background: "linear-gradient(90deg,#1565c0,#1976d2)"
              }}
            >
              Print Report
            </Button>

            <Button
              variant="contained"
              color="error"
              startIcon={<CloseIcon />}
              onClick={handleClose}
              sx={{ px: 5, fontWeight: 600, borderRadius: 2 }}
            >
              Close
            </Button>
          </Stack>

        </Box>
      </Box>
    </LocalizationProvider>
  );
}
