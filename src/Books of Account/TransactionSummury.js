// import React, { useEffect, useState } from "react";
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
//   RadioGroup,
//   FormGroup,
//   CircularProgress
// } from "@mui/material";

// function TransactionSummury() {
//   const [startDate, setStartDate] = useState("2025-04-01");
//   const [endDate, setEndDate] = useState("2026-03-31");

//   const [mode, setMode] = useState("selected");

//   const [transactions, setTransactions] = useState([]);
//   const [checked, setChecked] = useState({});

//   const [accountGroups, setAccountGroups] = useState([]);
//   const [accountGroup, setAccountGroup] = useState("");

//   const [loading, setLoading] = useState(true);

//   /* ================= CARD STYLE ================= */

//   const cardStyle = {
//     p: 3,
//     borderRadius: 2,
//     backgroundColor: "#fff",
//     boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
//     mb: 4
//   };

//   /* ================= FETCH DATA ================= */

//   useEffect(() => {
//     async function loadData() {
//       try {
//         const tRes = await fetch("/api/transactions");
//         const tData = await tRes.json();

//         setTransactions(tData);

//         // build checked map
//         const initChecked = {};
//         tData.forEach(t => {
//           initChecked[t.id] = true;
//         });
//         setChecked(initChecked);

//         const gRes = await fetch("/api/account-groups");
//         const gData = await gRes.json();
//         setAccountGroups(gData);

//       } catch (err) {
//         console.error("Load error:", err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadData();
//   }, []);

//   /* ================= SELECT ALL MODE ================= */

//   useEffect(() => {
//     if (mode === "all") {
//       const all = {};
//       transactions.forEach(t => {
//         all[t.id] = true;
//       });
//       setChecked(all);
//     }
//   }, [mode, transactions]);

//   /* ================= CHECKBOX TOGGLE ================= */

//   const handleCheck = (id) => {
//     setChecked(prev => ({
//       ...prev,
//       [id]: !prev[id]
//     }));
//   };

//   /* ================= PRINT CLICK ================= */

//   const handlePrint = () => {
//     const selectedTransactions = Object.keys(checked)
//       .filter(k => checked[k]);

//     const payload = {
//       startDate,
//       endDate,
//       accountGroup,
//       transactions: selectedTransactions
//     };

//     console.log("PRINT PAYLOAD:", payload);

//     // 👉 call backend print API here
//     // fetch("/api/print-report", { method:"POST", body: JSON.stringify(payload) })
//   };

//   /* ================= UI ================= */

//   if (loading) {
//     return (
//       <Box p={6} textAlign="center">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ minHeight: "100vh", backgroundColor: "#f4f6fa", pt: 6 }}>
//       <Box sx={{ width: 900, mx: "auto" }}>

//         {/* ================= PERIOD ================= */}

//         <Typography variant="h4" fontWeight={700} textAlign="center" mb={4}>
//           Period
//         </Typography>

//         <Paper sx={cardStyle}>

//           <Box
//             display="grid"
//             gridTemplateColumns="160px 1fr 44px"
//             alignItems="center"
//             columnGap={2}
//             mb={2}
//           >
//             <Typography fontWeight={600}>Start Date :</Typography>

//             <TextField
//               type="date"
//               size="small"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//               fullWidth
//             />

//             <Box sx={{
//               border: "1px solid #bdbdbd",
//               borderRadius: 1,
//               textAlign: "center",
//               fontWeight: 700,
//               lineHeight: "34px"
//             }}>
//               ?
//             </Box>
//           </Box>

//           <Box display="grid" gridTemplateColumns="160px 1fr" columnGap={2}>
//             <Typography fontWeight={600}>End Date :</Typography>

//             <TextField
//               type="date"
//               size="small"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//               fullWidth
//             />
//           </Box>

//         </Paper>

//         {/* ================= TRANSACTION ================= */}

//         <Paper sx={cardStyle}>

//           <Typography fontWeight={700} mb={2}>
//             Transaction
//           </Typography>

//           <RadioGroup
//             row
//             value={mode}
//             onChange={(e) => setMode(e.target.value)}
//             sx={{ mb: 2 }}
//           >
//             <FormControlLabel value="all" control={<Radio />} label="Select All" />
//             <FormControlLabel value="selected" control={<Radio />} label="Selected" />
//           </RadioGroup>

//           <Box
//             sx={{
//               border: "1px solid #d0d0d0",
//               borderRadius: 1,
//               p: 2,
//               maxHeight: 200,
//               overflowY: "auto"
//             }}
//           >
//             <FormGroup>
//               {transactions.map(t => (
//                 <FormControlLabel
//                   key={t.id}
//                   control={
//                     <Checkbox
//                       checked={!!checked[t.id]}
//                       onChange={() => handleCheck(t.id)}
//                     />
//                   }
//                   label={t.name}
//                 />
//               ))}
//             </FormGroup>
//           </Box>

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

//             {accountGroups.map(g => (
//               <MenuItem key={g.id} value={g.id}>
//                 {g.name}
//               </MenuItem>
//             ))}

//           </TextField>
//         </Paper>

//         {/* ================= BUTTONS ================= */}

//         <Box display="flex" justifyContent="center" gap={4} mt={5}>

//           <Button
//             variant="contained"
//             size="large"
//             onClick={handlePrint}
//             sx={{
//               px: 6,
//               fontWeight: 600,
//               backgroundColor: "#1976d2"
//             }}
//           >
//             PRINT REPORT
//           </Button>

//           <Button
//             variant="contained"
//             size="large"
//             color="error"
//             sx={{ px: 6, fontWeight: 600 }}
//           >
//             CLOSE
//           </Button>

//         </Box>

//       </Box>
//     </Box>
//   );
// }

// export default  TransactionSummury;




































































import React, { useEffect, useState } from "react";
import {
  Box, Paper, Typography, TextField, Button,
  MenuItem, Checkbox, FormControlLabel, Radio,
  RadioGroup, FormGroup, CircularProgress, Grid
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import PrintIcon from "@mui/icons-material/Print";
import CloseIcon from "@mui/icons-material/Close";

export default function TransactionSummury() {
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState("2025-04-01");
  const [endDate, setEndDate] = useState("2026-03-31");
  const [mode, setMode] = useState("selected");
  const [transactions, setTransactions] = useState([]);
  const [checked, setChecked] = useState({});
  const [accountGroups, setAccountGroups] = useState([]);
  const [accountGroup, setAccountGroup] = useState("");
  const [loading, setLoading] = useState(true);

  /* ================= LOAD ================= */

  useEffect(() => {
    async function loadData() {
      try {
        const tRes = await fetch("/api/transactions");
        const tData = await tRes.json();
        setTransactions(tData);

        const init = {};
        tData.forEach(t => (init[t.id] = true));
        setChecked(init);

        const gRes = await fetch("/api/account-groups");
        setAccountGroups(await gRes.json());

      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  /* ================= CHECK ================= */

  const handleCheck = (id) => {
    setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  /* ================= PRINT ================= */

  const handlePrint = () => {
    const selectedTransactions =
      Object.keys(checked).filter(k => checked[k]);

    navigate("/transaction-summary-print", {
      state: {
        startDate,
        endDate,
        accountGroup,
        transactions: selectedTransactions
      }
    });
  };

  const handleClose = () => navigate(-1);

  if (loading) {
    return (
      <Box p={6} textAlign="center">
        <CircularProgress />
      </Box>
    );
  }

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
          Transaction Summary
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
        </Paper>

        {/* TRANSACTIONS */}

        <Paper sx={{ p: 2.5, borderRadius: 2.5, mb: 2.5 }}>
          <Typography fontWeight={600} fontSize={15} mb={1}>
            Transaction
          </Typography>

          <RadioGroup
            row
            value={mode}
            onChange={(e) => setMode(e.target.value)}
          >
            <FormControlLabel value="all" control={<Radio size="small" />} label="All" />
            <FormControlLabel value="selected" control={<Radio size="small" />} label="Selected" />
          </RadioGroup>

          <Box
            sx={{
              border: "1px solid #ddd",
              borderRadius: 1.5,
              p: 1,
              maxHeight: 160,
              overflow: "auto",
              mt: 1
            }}
          >
            <FormGroup>
              {transactions.map(t => (
                <FormControlLabel
                  key={t.id}
                  control={
                    <Checkbox
                      size="small"
                      checked={!!checked[t.id]}
                      onChange={() => handleCheck(t.id)}
                    />
                  }
                  label={t.name}
                />
              ))}
            </FormGroup>
          </Box>
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
            <MenuItem value="">Select</MenuItem>
            {accountGroups.map(g => (
              <MenuItem key={g.id} value={g.id}>
                {g.name}
              </MenuItem>
            ))}
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
