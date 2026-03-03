// import React, { useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   Button,
//   MenuItem
// } from "@mui/material";

// function CashFlowDaywise() {
//   const [startDate, setStartDate] = useState("2026-04-01");
//   const [endDate, setEndDate] = useState("2026-03-31");
//   const [accountGroup, setAccountGroup] = useState("");

//   const cardStyle = {
//     p: 4,
//     borderRadius: 2,
//     backgroundColor: "#fff",
//     boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
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

//         {/* ================= TOP TITLE ================= */}
//         <Typography
//           variant="h4"
//           fontWeight={700}
//           textAlign="center"
//           mb={4}
//         >
//           Period
//         </Typography>

//         {/* ================= PERIOD CARD ================= */}
//         <Paper sx={cardStyle}>
//           {/* Start Date */}
//           <Box
//             display="grid"
//             gridTemplateColumns="160px 1fr 44px"
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
//                 border: "1px solid #999",
//                 borderRadius: 1,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 fontWeight: 700,
//                 cursor: "pointer",
//                 userSelect: "none",
//               }}
//             >
//               ?
//             </Box>
//           </Box>

//           {/* End Date */}
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

//         {/* ================= ACCOUNT GROUP CARD ================= */}
//         <Paper sx={cardStyle}>
//           <Typography fontWeight={700} mb={2}>
//             Account Group
//           </Typography>

//           <TextField
//             select
//             size="small"
//             value={accountGroup}
//             onChange={(e) => setAccountGroup(e.target.value)}
//             fullWidth
//           >
//             <MenuItem value="">Select Account Group</MenuItem>
//             <MenuItem value="A S NIMBALKAR">A. S. NIMBALKAR</MenuItem>
//             <MenuItem value="CASH">Cash</MenuItem>
//             <MenuItem value="BANK">Bank</MenuItem>
//           </TextField>
//         </Paper>

//         {/* ================= FOOTER BUTTONS ================= */}
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
//               boxShadow: "0 4px 10px rgba(25,118,210,0.35)",
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
//               boxShadow: "0 4px 10px rgba(211,47,47,0.35)",
//             }}
//           >
//             CLOSE
//           </Button>
//         </Box>

//       </Box>
//     </Box>
//   );
// }

// export default CashFlowDaywise;




























































import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
  Grid
} from "@mui/material";

import DateRangeIcon from "@mui/icons-material/DateRange";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PrintIcon from "@mui/icons-material/Print";
import CloseIcon from "@mui/icons-material/Close";

import { useNavigate } from "react-router-dom";

export default function CashFlowDaywise() {
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState("2026-04-01");
  const [endDate, setEndDate] = useState("2026-03-31");
  const [accountGroup, setAccountGroup] = useState("");

  const handlePrint = () => {
    navigate("/cashflow-daywise-print", {
      state: { startDate, endDate, accountGroup }
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
      <Box width={540}>

        {/* ===== TITLE ===== */}

        <Typography
          variant="h5"
          fontWeight={600}
          textAlign="center"
          mb={2}
        >
          Cash Flow Daywise
        </Typography>

        {/* ===== PERIOD ===== */}

        <Paper elevation={5} sx={{ p: 2.5, borderRadius: 2.5, mb: 2.5 }}>
          <Box display="flex" alignItems="center" gap={1} mb={1.5}>
            <DateRangeIcon fontSize="small" color="primary" />
            <Typography fontWeight={600} fontSize={15}>
              Period
            </Typography>
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

        {/* ===== ACCOUNT GROUP ===== */}

        <Paper elevation={5} sx={{ p: 2.5, borderRadius: 2.5 }}>
          <Box display="flex" alignItems="center" gap={1} mb={1.5}>
            <AccountBalanceIcon fontSize="small" color="primary" />
            <Typography fontWeight={600} fontSize={15}>
              Account Group
            </Typography>
          </Box>

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
            <MenuItem value="A S NIMBALKAR">A. S. NIMBALKAR</MenuItem>
          </TextField>
        </Paper>

        {/* ===== BUTTONS ===== */}

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
              minWidth: 160
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
              minWidth: 130
            }}
          >
            Close
          </Button>
        </Box>

      </Box>
    </Box>
  );
}
