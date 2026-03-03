// import React, { useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   Checkbox,
//   FormControlLabel,
//   Button,
//   Radio,
//   RadioGroup,
//   Select,
//   MenuItem,
//   Grid
// } from "@mui/material";

// import PrintIcon from "@mui/icons-material/Print";
// import CloseIcon from "@mui/icons-material/Close";
// import DateRangeIcon from "@mui/icons-material/DateRange";
// import PeopleIcon from "@mui/icons-material/People";

// import { useNavigate } from "react-router-dom";

// export default function SalesRegister() {
//   const navigate = useNavigate();

//   const [startDate, setStartDate] = useState("2026-04-01");
//   const [endDate, setEndDate] = useState("2026-03-31");
//   const [excelOutput, setExcelOutput] = useState(false);
//   const [summary, setSummary] = useState("no");
//   const [salesToCanvassor, setSalesToCanvassor] = useState(false);
//   const [party, setParty] = useState("");

//   const handlePrint = () => {
//     navigate("/sales-register-print", {
//       state: {
//         startDate,
//         endDate,
//         excelOutput,
//         summary,
//         salesToCanvassor,
//         party
//       }
//     });
//   };

//   const handleClose = () => navigate(-1);

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         background: "linear-gradient(135deg,#eef2f7,#e3e8f0)",
//         display: "flex",
//         justifyContent: "center",
//         pt: 3
//       }}
//     >
//       <Box width={700}>

//         {/* ===== TITLE ===== */}

//         <Typography
//           variant="h5"
//           fontWeight={600}
//           textAlign="center"
//           mb={2}
//         >
//           Sales Register Period
//         </Typography>

//         {/* ================= PERIOD ================= */}

//         <Paper elevation={4} sx={{ p: 2.2, mb: 2, borderRadius: 2.5 }}>
//           <Box display="flex" alignItems="center" gap={1} mb={1}>
//             <DateRangeIcon fontSize="small" color="primary" />
//             <Typography fontWeight={600} fontSize={15}>
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
//                 onChange={e => setStartDate(e.target.value)}
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
//                 onChange={e => setEndDate(e.target.value)}
//               />
//             </Grid>
//           </Grid>

//           <FormControlLabel
//             sx={{ mt: 1 }}
//             control={
//               <Checkbox
//                 size="small"
//                 checked={excelOutput}
//                 onChange={e => setExcelOutput(e.target.checked)}
//               />
//             }
//             label={<Typography fontSize={14}>Excel Output?</Typography>}
//           />
//         </Paper>

//         {/* ================= SUMMARY ================= */}

//         <Paper elevation={4} sx={{ p: 2, mb: 2, borderRadius: 2.5 }}>
//           <Typography fontWeight={600} fontSize={15} mb={0.5}>
//             Show Summary ?
//           </Typography>

//           <RadioGroup
//             row
//             value={summary}
//             onChange={e => setSummary(e.target.value)}
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

//         {/* ================= CANVASSOR ================= */}

//         <Paper elevation={4} sx={{ p: 2, mb: 2, borderRadius: 2.5 }}>
//           <FormControlLabel
//             control={
//               <Checkbox
//                 size="small"
//                 checked={salesToCanvassor}
//                 onChange={e => setSalesToCanvassor(e.target.checked)}
//               />
//             }
//             label={
//               <Typography fontSize={14}>
//                 Sales To Canvassors?
//               </Typography>
//             }
//           />
//         </Paper>

//         {/* ================= PARTY ================= */}

//         <Paper elevation={4} sx={{ p: 2, borderRadius: 2.5 }}>
//           <Box display="flex" alignItems="center" gap={1} mb={1}>
//             <PeopleIcon fontSize="small" color="primary" />
//             <Typography fontWeight={600} fontSize={15}>
//               Party
//             </Typography>
//           </Box>

//           <Select
//             value={party}
//             onChange={e => setParty(e.target.value)}
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
//           mt={3}
//         >
//           <Button
//             variant="contained"
//             size="medium"
//             startIcon={<PrintIcon />}
//             onClick={handlePrint}
//             sx={{
//               px: 4,
//               py: 1,
//               fontSize: 14,
//               fontWeight: 500,
//               borderRadius: 2,
//               minWidth: 160
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
//               fontSize: 14,
//               fontWeight: 600,
//               borderRadius: 2,
//               minWidth: 130
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
  Checkbox,
  FormControlLabel,
  Button,
  Radio,
  RadioGroup,
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

export default function SalesRegister() {

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
  const [excelOutput, setExcelOutput] = useState(false);
  const [summary, setSummary] = useState("no");
  const [salesToCanvassor, setSalesToCanvassor] = useState(false);
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
        console.error("Party API Error:", err);
        setLoading(false);
      });

  }, []);

  /* ===============================
     OPEN PRINT IN NEW TAB
  =============================== */

  const handlePrint = () => {
    const url =
      `/sales-register-print?start=${startDate}&end=${endDate}&excel=${excelOutput}&summary=${summary}&canvassor=${salesToCanvassor}&party=${party}`;

    window.open(url, "_blank");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#eef2f7,#e3e8f0)",
        display: "flex",
        justifyContent: "center",
        pt: 3
      }}
    >
      <Box width={700}>

        <Typography variant="h5" fontWeight={600} textAlign="center" mb={2}>
          Sales Register Period
        </Typography>

        {/* ================= PERIOD ================= */}

        <Paper elevation={4} sx={{ p: 2.2, mb: 2, borderRadius: 2.5 }}>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
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
                onChange={e => setStartDate(e.target.value)}
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
                onChange={e => setEndDate(e.target.value)}
              />
            </Grid>
          </Grid>

          <FormControlLabel
            sx={{ mt: 1 }}
            control={
              <Checkbox
                size="small"
                checked={excelOutput}
                onChange={e => setExcelOutput(e.target.checked)}
              />
            }
            label="Excel Output?"
          />
        </Paper>

        {/* ================= SUMMARY ================= */}

        <Paper elevation={4} sx={{ p: 2, mb: 2, borderRadius: 2.5 }}>
          <Typography fontWeight={600}>Show Summary?</Typography>

          <RadioGroup
            row
            value={summary}
            onChange={e => setSummary(e.target.value)}
          >
            <FormControlLabel value="yes" control={<Radio size="small" />} label="Yes" />
            <FormControlLabel value="no" control={<Radio size="small" />} label="No" />
          </RadioGroup>
        </Paper>

        {/* ================= CANVASSOR ================= */}

        <Paper elevation={4} sx={{ p: 2, mb: 2, borderRadius: 2.5 }}>
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                checked={salesToCanvassor}
                onChange={e => setSalesToCanvassor(e.target.checked)}
              />
            }
            label="Sales To Canvassors?"
          />
        </Paper>

        {/* ================= PARTY ================= */}

        <Paper elevation={4} sx={{ p: 2, borderRadius: 2.5 }}>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <PeopleIcon fontSize="small" color="primary" />
            <Typography fontWeight={600}>Party</Typography>
          </Box>

          <Select
            value={party}
            onChange={e => setParty(e.target.value)}
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

        <Box display="flex" justifyContent="center" gap={3} mt={3}>
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
            onClick={() => window.history.back()}
          >
            Close
          </Button>
        </Box>

      </Box>
    </Box>
  );
}
