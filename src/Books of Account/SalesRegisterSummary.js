// import React, { useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   Button,
//   MenuItem,
//   Checkbox,
//   FormControlLabel,
//   Radio,
//   RadioGroup
// } from "@mui/material";

// function SalesRegisterSummary() {
//   const [startDate, setStartDate] = useState("2026-04-01");
//   const [endDate, setEndDate] = useState("2026-03-31");
//   const [excelOutput, setExcelOutput] = useState(false);
//   const [showSummary, setShowSummary] = useState("no");
//   const [salesToCanvassors, setSalesToCanvassors] = useState(false);
//   const [accountGroup, setAccountGroup] = useState("");

//   const cardStyle = {
//     p: 4,
//     borderRadius: 2,
//     backgroundColor: "#fff",
//     border: "1px solid #e0e0e0",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
//     mb: 4,
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         backgroundColor: "#f4f6fa",
//         pt: 6,
//         pb: 6,
//       }}
//     >
//       <Box sx={{ width: 900, mx: "auto" }}>

//         {/* ================= TITLE ================= */}
//         <Typography
//           variant="h4"
//           fontWeight={700}
//           textAlign="center"
//           mb={4}
//         >
//           Period
//         </Typography>

//         {/* ================= PERIOD ================= */}
//         <Paper sx={cardStyle}>
//           <Box
//             display="grid"
//             gridTemplateColumns="160px 1fr 44px 180px"
//             alignItems="center"
//             columnGap={2}
//             mb={3}
//           >
//             <Typography fontWeight={600}>
//               Start Date :
//             </Typography>

//             <TextField
//               type="date"
//               size="small"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//               fullWidth
//             />

//             <Box
//               sx={{
//                 width: 34,
//                 height: 34,
//                 border: "1px solid #9e9e9e",
//                 borderRadius: 1,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 fontWeight: 700,
//                 userSelect: "none",
//               }}
//             >
//               ?
//             </Box>

//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={excelOutput}
//                   onChange={(e) => setExcelOutput(e.target.checked)}
//                 />
//               }
//               label="Excel output?"
//             />
//           </Box>

//           <Box
//             display="grid"
//             gridTemplateColumns="160px 1fr 44px"
//             alignItems="center"
//             columnGap={2}
//           >
//             <Typography fontWeight={600}>
//               End Date :
//             </Typography>

//             <TextField
//               type="date"
//               size="small"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//               fullWidth
//             />

//             <Box />
//           </Box>
//         </Paper>

//         {/* ================= SUMMARY OPTIONS ================= */}
//         <Paper sx={cardStyle}>
//           <Typography fontWeight={700} mb={1}>
//             Show Summary ?
//           </Typography>

//           <RadioGroup
//             row
//             value={showSummary}
//             onChange={(e) => setShowSummary(e.target.value)}
//           >
//             <FormControlLabel value="yes" control={<Radio />} label="Yes" />
//             <FormControlLabel value="no" control={<Radio />} label="No" />
//           </RadioGroup>

//           <FormControlLabel
//             sx={{ mt: 1 }}
//             control={
//               <Checkbox
//                 checked={salesToCanvassors}
//                 onChange={(e) => setSalesToCanvassors(e.target.checked)}
//               />
//             }
//             label="Sales To Canvassors?"
//           />
//         </Paper>

//         {/* ================= ACCOUNT GROUP ================= */}
//         <Paper sx={cardStyle}>
//           <Typography fontWeight={700} mb={2}>
//             Account Group
//           </Typography>

//           <TextField
//             select
//             size="small"
//             fullWidth
//             value={accountGroup}
//             onChange={(e) => setAccountGroup(e.target.value)}
//           >
//             <MenuItem value="">Select Account Group</MenuItem>
//             <MenuItem value="A S NIMBALKAR">A. S. NIMBALKAR</MenuItem>
//             <MenuItem value="CASH">Cash</MenuItem>
//             <MenuItem value="BANK">Bank</MenuItem>
//           </TextField>
//         </Paper>

//         {/* ================= ACTION BUTTONS ================= */}
//         <Box
//           display="flex"
//           justifyContent="center"
//           gap={4}
//           mt={5}
//         >
//           <Button
//             variant="contained"
//             size="large"
//             sx={{
//               px: 6,
//               fontWeight: 600,
//               backgroundColor: "#1976d2",
//               boxShadow: "0 4px 8px rgba(25,118,210,0.35)",
//             }}
//           >
//             PRINT REPORT
//           </Button>

//           <Button
//             variant="contained"
//             size="large"
//             color="error"
//             sx={{
//               px: 6,
//               fontWeight: 600,
//               boxShadow: "0 4px 8px rgba(211,47,47,0.35)",
//             }}
//           >
//             CLOSE
//           </Button>
//         </Box>

//       </Box>
//     </Box>
//   );
// }

// export default SalesRegisterSummary;
























































































































import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Grid
} from "@mui/material";

import PrintIcon from "@mui/icons-material/Print";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

export default function SalesRegisterSummary() {
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState("2026-04-01");
  const [endDate, setEndDate] = useState("2026-03-31");
  const [excelOutput, setExcelOutput] = useState(false);
  const [showSummary, setShowSummary] = useState("no");
  const [salesToCanvassors, setSalesToCanvassors] = useState(false);
  const [accountGroup, setAccountGroup] = useState("");

  const handlePrint = () => {
    navigate("/sales-register-summary-print", {
      state: {
        startDate,
        endDate,
        excelOutput,
        showSummary,
        salesToCanvassors,
        accountGroup
      }
    });
  };

  const handleClose = () => navigate(-1);

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
      <Box width={560}>

        {/* TITLE */}

        <Typography
          variant="h5"
          fontWeight={600}
          textAlign="center"
          mb={2}
        >
          Sales Register Summary
        </Typography>

        {/* PERIOD */}

        <Paper sx={{ p: 2.5, borderRadius: 2.5, mb: 2.5 }}>
          <Typography fontWeight={600} fontSize={15} mb={2}>
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

          <FormControlLabel
            sx={{ mt: 1 }}
            control={
              <Checkbox
                size="small"
                checked={excelOutput}
                onChange={(e) => setExcelOutput(e.target.checked)}
              />
            }
            label="Excel output"
          />
        </Paper>

        {/* OPTIONS */}

        <Paper sx={{ p: 2.5, borderRadius: 2.5, mb: 2.5 }}>
          <Typography fontWeight={600} fontSize={15}>
            Show Summary ?
          </Typography>

          <RadioGroup
            row
            value={showSummary}
            onChange={(e) => setShowSummary(e.target.value)}
          >
            <FormControlLabel value="yes" control={<Radio size="small" />} label="Yes" />
            <FormControlLabel value="no" control={<Radio size="small" />} label="No" />
          </RadioGroup>

          <FormControlLabel
            control={
              <Checkbox
                size="small"
                checked={salesToCanvassors}
                onChange={(e) => setSalesToCanvassors(e.target.checked)}
              />
            }
            label="Sales To Canvassors"
          />
        </Paper>

        {/* ACCOUNT GROUP */}

        <Paper sx={{ p: 2.5, borderRadius: 2.5 }}>
          <Typography fontWeight={600} fontSize={15} mb={1}>
            Account Group
          </Typography>

          <TextField
            select
            size="small"
            fullWidth
            value={accountGroup}
            onChange={(e) => setAccountGroup(e.target.value)}
          >
            <MenuItem value="">Select Account Group</MenuItem>
            <MenuItem value="CASH">Cash</MenuItem>
            <MenuItem value="BANK">Bank</MenuItem>
          </TextField>
        </Paper>

        {/* BUTTONS */}

        <Box display="flex" justifyContent="center" gap={2.5} mt={3}>
          <Button
            variant="contained"
            size="medium"
            startIcon={<PrintIcon />}
            onClick={handlePrint}
            sx={{
              px: 3.5,
              py: 1,
              fontSize: 14,
              fontWeight: 600,
              borderRadius: 2,
              minWidth: 170
            }}
          >
            Print Report
          </Button>

          <Button
            variant="contained"
            color="error"
            size="medium"
            startIcon={<CloseIcon />}
            onClick={handleClose}
            sx={{
              px: 3.5,
              py: 1,
              fontSize: 14,
              fontWeight: 600,
              borderRadius: 2,
              minWidth: 120
            }}
          >
            Close
          </Button>
        </Box>

      </Box>
    </Box>
  );
}
