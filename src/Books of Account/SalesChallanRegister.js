


// import React, { useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   Button,
//   Select,
//   MenuItem,
//   Grid
// } from "@mui/material";

// import PrintIcon from "@mui/icons-material/Print";
// import CloseIcon from "@mui/icons-material/Close";
// import DateRangeIcon from "@mui/icons-material/DateRange";
// import PeopleIcon from "@mui/icons-material/People";

// import { useNavigate } from "react-router-dom";

// export default function SalesChallanRegister() {
//   const navigate = useNavigate();

//   const [startDate, setStartDate] = useState("2026-04-01");
//   const [endDate, setEndDate] = useState("2026-03-31");
//   const [showBooks, setShowBooks] = useState("no");
//   const [party, setParty] = useState("");

//   const handlePrint = () => {
//     navigate("/challan-register-print", {
//       state: { startDate, endDate, showBooks, party }
//     });
//   };

//   const handleClose = () => {
//     setParty("");
//     setShowBooks("no");
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         background: "linear-gradient(135deg,#eef2f7,#e3e8f0)",
//         display: "flex",
//         justifyContent: "center",
//         pt: 4
//       }}
//     >
//       <Box width={720}>

//         {/* ===== TITLE ===== */}

//         <Typography
//           variant="h5"
//           fontWeight={600}
//           textAlign="center"
//           mb={2}
//         >
//           Sales Challan Register
//         </Typography>

//         {/* ================= PERIOD ================= */}

//         <Paper
//           elevation={4}
//           sx={{
//             p: 2.2,
//             mb: 2,
//             borderRadius: 2.5
//           }}
//         >
//           <Box display="flex" alignItems="center" gap={1} mb={1.5}>
//             <DateRangeIcon fontSize="small" color="primary" />
//             <Typography fontWeight={600} fontSize={16}>
//               Period
//             </Typography>
//           </Box>

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

//         {/* ================= SHOW BOOKS ================= */}

//         <Paper
//           elevation={4}
//           sx={{
//             p: 2.2,
//             mb: 2,
//             borderRadius: 2.5
//           }}
//         >
//           <Typography fontWeight={600} fontSize={16} mb={0.5}>
//             Show Books ?
//           </Typography>

//           <RadioGroup
//             row
//             value={showBooks}
//             onChange={(e) => setShowBooks(e.target.value)}
//           >
//             <FormControlLabel
//               value="yes"
//               control={<Radio size="small" />}
//               label="Yes"
//             />
//             <FormControlLabel
//               value="no"
//               control={<Radio size="small" />}
//               label="No"
//             />
//           </RadioGroup>
//         </Paper>

//         {/* ================= PARTY ================= */}

//         <Paper
//           elevation={4}
//           sx={{
//             p: 2.2,
//             borderRadius: 2.5
//           }}
//         >
//           <Box display="flex" alignItems="center" gap={1} mb={1}>
//             <PeopleIcon fontSize="small" color="primary" />
//             <Typography fontWeight={600} fontSize={16}>
//               Party
//             </Typography>
//           </Box>

//           <Select
//             value={party}
//             onChange={(e) => setParty(e.target.value)}
//             fullWidth
//             size="small"
//             displayEmpty
//           >
//             <MenuItem value="">Select Party</MenuItem>
//             <MenuItem value="p1">Party 1</MenuItem>
//             <MenuItem value="p2">Party 2</MenuItem>
//           </Select>
//         </Paper>

//         {/* ================= BUTTONS ================= */}

//         <Box
//           display="flex"
//           justifyContent="center"
//           gap={3}
//           mt={3.5}
//         >
//           <Button
//             variant="contained"
//             size="medium"
//             startIcon={<PrintIcon />}
//             onClick={handlePrint}
//             sx={{
//               px: 4,
//               py: 1,
//               fontWeight: 500,
//               fontSize: 14,
//               borderRadius: 2,
//               minWidth: 170
//             }}
//           >
//             Print Report
//           </Button>

//           <Button
//             variant="contained"
//             color="error"
//             size="medium"
//             startIcon={<CloseIcon />}
//             onClick={handleClose}
//             sx={{
//               px: 4,
//               py: 1,
//               fontWeight: 500,
//               fontSize: 14,
//               borderRadius: 2,
//               minWidth: 140
//             }}
//           >
//             Close
//           </Button>
//         </Box>

//       </Box>
//     </Box>
//   );
// }


















































































































import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Select,
  MenuItem,
  Grid,
  CircularProgress
} from "@mui/material";

import PrintIcon from "@mui/icons-material/Print";
import CloseIcon from "@mui/icons-material/Close";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PeopleIcon from "@mui/icons-material/People";

import dayjs from "dayjs";

export default function SalesChallanRegister() {

  /* ===============================
     FINANCIAL YEAR DEFAULT
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

  const [startDate, setStartDate] = useState(fyStart.format("YYYY-MM-DD"));
  const [endDate, setEndDate] = useState(fyEnd.format("YYYY-MM-DD"));
  const [showBooks, setShowBooks] = useState("no");
  const [party, setParty] = useState("");
  const [partyList, setPartyList] = useState([]);
  const [loading, setLoading] = useState(false);

  /* ===============================
     FETCH PARTY API
  =============================== */

  useEffect(() => {
    setLoading(true);

    fetch("https://publication.microtechsolutions.net.in/php/Accountget.php")
      .then(res => res.json())
      .then(data => {
        setPartyList(data || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Party Fetch Error:", err);
        setLoading(false);
      });

  }, []);

  /* ===============================
     OPEN PRINT PAGE IN NEW TAB
  =============================== */

  const handlePrint = () => {
    const url =
      `/challan-register-print?start=${startDate}&end=${endDate}&show=${showBooks}&party=${party}`;

    window.open(url, "_blank");
  };

  const handleClose = () => {
    setParty("");
    setShowBooks("no");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#eef2f7,#e3e8f0)",
        display: "flex",
        justifyContent: "center",
        pt: 4
      }}
    >
      <Box width={720}>

        <Typography variant="h5" fontWeight={600} textAlign="center" mb={2}>
          Sales Challan Register
        </Typography>

        {/* ================= PERIOD ================= */}

        <Paper elevation={4} sx={{ p: 2.2, mb: 2, borderRadius: 2.5 }}>
          <Box display="flex" alignItems="center" gap={1} mb={1.5}>
            <DateRangeIcon fontSize="small" color="primary" />
            <Typography fontWeight={600}>Period</Typography>
          </Box>

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

        {/* ================= SHOW BOOKS ================= */}

        <Paper elevation={4} sx={{ p: 2.2, mb: 2, borderRadius: 2.5 }}>
          <Typography fontWeight={600} mb={1}>
            Show Books ?
          </Typography>

          <RadioGroup
            row
            value={showBooks}
            onChange={(e) => setShowBooks(e.target.value)}
          >
            <FormControlLabel value="yes" control={<Radio size="small" />} label="Yes" />
            <FormControlLabel value="no" control={<Radio size="small" />} label="No" />
          </RadioGroup>
        </Paper>

        {/* ================= PARTY ================= */}

        <Paper elevation={4} sx={{ p: 2.2, borderRadius: 2.5 }}>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <PeopleIcon fontSize="small" color="primary" />
            <Typography fontWeight={600}>Party</Typography>
          </Box>

          <Select
            value={party}
            onChange={(e) => setParty(e.target.value)}
            fullWidth
            size="small"
            displayEmpty
          >
            <MenuItem value="">Select Party</MenuItem>

            {loading ? (
              <MenuItem disabled>
                <CircularProgress size={18} />
              </MenuItem>
            ) : (
              partyList.map((p, index) => (
                <MenuItem key={index} value={p.AccountName}>
                  {p.AccountName}
                </MenuItem>
              ))
            )}
          </Select>
        </Paper>

        {/* ================= BUTTONS ================= */}

        <Box display="flex" justifyContent="center" gap={3} mt={3.5}>
          <Button
            variant="contained"
            startIcon={<PrintIcon />}
            onClick={handlePrint}
            sx={{ minWidth: 170 }}
          >
            Print Report
          </Button>

          <Button
            variant="contained"
            color="error"
            startIcon={<CloseIcon />}
            onClick={handleClose}
          >
            Close
          </Button>
        </Box>

      </Box>
    </Box>
  );
}
