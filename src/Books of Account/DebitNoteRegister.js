// import React, { useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   Button,
//   Grid,
//   Stack
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import PrintIcon from "@mui/icons-material/Print";
// import CloseIcon from "@mui/icons-material/Close";

// export default function DebitNoteRegister() {
//   const navigate = useNavigate();

//   const [startDate, setStartDate] = useState("2026-04-01");
//   const [endDate, setEndDate] = useState("2026-03-31");

//   const handlePrint = () => {
//     navigate("/debit-note-register-print", {
//       state: { startDate, endDate }
//     });
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         background: "#eef2f6",
//         display: "flex",
//         justifyContent: "center",
//         pt: 7
//       }}
//     >
//       <Box width={480}>

//         {/* TITLE */}

//         <Typography
//           variant="h5"
//           fontWeight={600}
//           textAlign="center"
//           mb={2.5}
//         >
//           Debit Note Register
//         </Typography>

//         {/* PERIOD CARD */}

//         <Paper sx={{ p: 2.5, borderRadius: 3, mb: 3 }}>
//           <Typography fontWeight={600} mb={1.5}>
//             Period
//           </Typography>

//           <Grid container spacing={2}>
//             <Grid item xs={6}>
//               <TextField
//                 label="Start Date"
//                 type="date"
//                 size="small"
//                 fullWidth
//                 InputLabelProps={{ shrink: true }}
//                 value={startDate}
//                 onChange={(e) => setStartDate(e.target.value)}
//               />
//             </Grid>

//             <Grid item xs={6}>
//               <TextField
//                 label="End Date"
//                 type="date"
//                 size="small"
//                 fullWidth
//                 InputLabelProps={{ shrink: true }}
//                 value={endDate}
//                 onChange={(e) => setEndDate(e.target.value)}
//               />
//             </Grid>
//           </Grid>
//         </Paper>

//         {/* BUTTONS */}

//         <Stack direction="row" spacing={2.5} justifyContent="center">
//           <Button
//             variant="contained"
//             size="medium"
//             startIcon={<PrintIcon />}
//             onClick={handlePrint}
//             sx={{ px: 3.5, fontWeight: 600 }}
//           >
//             Print
//           </Button>

//           <Button
//             variant="contained"
//             size="medium"
//             color="error"
//             startIcon={<CloseIcon />}
//             onClick={() => navigate(-1)}
//             sx={{ px: 3.5, fontWeight: 600 }}
//           >
//             Close
//           </Button>
//         </Stack>

//       </Box>
//     </Box>
//   );
// }





















































































import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Stack
} from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import CloseIcon from "@mui/icons-material/Close";
import dayjs from "dayjs";

export default function DebitNoteRegister() {

  /* ===============================
     FINANCIAL YEAR DEFAULT LOGIC
  =============================== */

  const today = dayjs();
  const year = today.year();
  const month = today.month(); // 0 = Jan, 3 = April

  let fyStart, fyEnd;

  if (month < 3) {
    // If Jan–Mar → Previous FY
    fyStart = dayjs(`${year - 1}-04-01`);
    fyEnd = dayjs(`${year}-03-31`);
  } else {
    // If Apr–Dec → Current FY
    fyStart = dayjs(`${year}-04-01`);
    fyEnd = dayjs(`${year + 1}-03-31`);
  }

  const [startDate, setStartDate] = useState(fyStart.format("YYYY-MM-DD"));
  const [endDate, setEndDate] = useState(fyEnd.format("YYYY-MM-DD"));

  /* ===============================
     PRINT IN NEW TAB
  =============================== */

  const handlePrint = () => {
    const url =
      `/debit-note-register-print?start=${startDate}&end=${endDate}`;

    window.open(url, "_blank");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#eef2f6",
        display: "flex",
        justifyContent: "center",
        pt: 7
      }}
    >
      <Box width={480}>

        <Typography
          variant="h5"
          fontWeight={600}
          textAlign="center"
          mb={2.5}
        >
          Debit Note Register
        </Typography>

        <Paper sx={{ p: 2.5, borderRadius: 3, mb: 3 }}>
          <Typography fontWeight={600} mb={1.5}>
            Period
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Start Date"
                type="date"
                size="small"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="End Date"
                type="date"
                size="small"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Grid>
          </Grid>
        </Paper>

        <Stack direction="row" spacing={2.5} justifyContent="center">
          <Button
            variant="contained"
            startIcon={<PrintIcon />}
            onClick={handlePrint}
          >
            Print
          </Button>

          <Button
            variant="contained"
            color="error"
            startIcon={<CloseIcon />}
            onClick={() => window.history.back()}
          >
            Close
          </Button>
        </Stack>

      </Box>
    </Box>
  );
}
