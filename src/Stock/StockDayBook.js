// import { useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   Grid,
//   TextField,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
//   Checkbox,
//   FormGroup,
//   Button,
//   List,
//   ListItemButton,
//   ListItemText
// } from "@mui/material";

// import PrintIcon from "@mui/icons-material/Print";
// import CloseIcon from "@mui/icons-material/Close";
// import { useNavigate } from "react-router-dom";

// export default function StockDayBook({
//   transactionTypesData = [],
//   booksData = []
// }) {

//   const navigate = useNavigate();

//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   const [partyMode, setPartyMode] = useState("all");
//   const [transactionMode, setTransactionMode] = useState("both");

//   const [types, setTypes] = useState({});
//   const [selectedBook, setSelectedBook] = useState(null);

//   const toggleType = (t) =>
//     setTypes(prev => ({ ...prev, [t]: !prev[t] }));

//   const handlePrint = () => {
//     navigate("/stock-daybook-print", {
//       state: {
//         startDate,
//         endDate,
//         partyMode,
//         transactionMode,
//         selectedTypes: types,
//         selectedBook
//       }
//     });
//   };

//   /* ================= UI ================= */

//   return (
//     <Box sx={{ p: 4, background: "#f4f6f8", minHeight: "100vh" }}>

//       <Typography variant="h4" fontWeight={700} mb={3}>
//         Stock Day Book
//       </Typography>

//       {/* ================= PERIOD CARD ================= */}

//       <Paper elevation={4} sx={{ p: 3, mb: 3, borderRadius: 3 }}>
//         <Typography fontWeight={700} mb={2}>
//           Period
//         </Typography>

//         <Grid container spacing={3}>
//           <Grid item xs={12} md={3}>
//             <TextField
//               label="Start Date"
//               type="date"
//               size="small"
//               fullWidth
//               InputLabelProps={{ shrink: true }}
//               value={startDate}
//               onChange={e => setStartDate(e.target.value)}
//             />
//           </Grid>

//           <Grid item xs={12} md={3}>
//             <TextField
//               label="End Date"
//               type="date"
//               size="small"
//               fullWidth
//               InputLabelProps={{ shrink: true }}
//               value={endDate}
//               onChange={e => setEndDate(e.target.value)}
//             />
//           </Grid>
//         </Grid>
//       </Paper>

//       {/* ================= PARTY CARD ================= */}

//       <Paper elevation={4} sx={{ p: 3, mb: 3, borderRadius: 3 }}>
//         <Typography fontWeight={700} mb={2}>
//           Party Selection
//         </Typography>

//         <RadioGroup
//           row
//           value={partyMode}
//           onChange={e => setPartyMode(e.target.value)}
//         >
//           <FormControlLabel value="all" control={<Radio />} label="All Parties" />
//           <FormControlLabel value="selected" control={<Radio />} label="Selected Party" />
//         </RadioGroup>
//       </Paper>

//       {/* ================= TRANSACTION CARD ================= */}

//       <Paper elevation={4} sx={{ p: 3, mb: 3, borderRadius: 3 }}>
//         <Typography fontWeight={700} mb={2}>
//           Transaction
//         </Typography>

//         <RadioGroup
//           row
//           value={transactionMode}
//           onChange={e => setTransactionMode(e.target.value)}
//         >
//           <FormControlLabel value="both" control={<Radio />} label="Both Inward & Outward" />
//           <FormControlLabel value="inward" control={<Radio />} label="Inward" />
//           <FormControlLabel value="outward" control={<Radio />} label="Outward" />
//         </RadioGroup>
//       </Paper>

//       {/* ================= TRANSACTION TYPE CARD ================= */}

//       <Paper elevation={4} sx={{ p: 3, mb: 3, borderRadius: 3 }}>
//         <Typography fontWeight={700} mb={2}>
//           Transaction Type
//         </Typography>

//         <FormGroup row>
//           {transactionTypesData.map(t => (
//             <FormControlLabel
//               key={t}
//               sx={{ width: "33%" }}
//               control={
//                 <Checkbox
//                   checked={types[t] || false}
//                   onChange={() => toggleType(t)}
//                 />
//               }
//               label={t}
//             />
//           ))}
//         </FormGroup>
//       </Paper>

//       {/* ================= BOOK SELECTION CARD ================= */}

//       <Paper elevation={4} sx={{ p: 3, mb: 4, borderRadius: 3 }}>
//         <Typography fontWeight={700} mb={2}>
//           Book Selection
//         </Typography>

//         <Paper
//           variant="outlined"
//           sx={{
//             height: 200,
//             overflow: "auto",
//             borderRadius: 2
//           }}
//         >
//           <List dense>
//             {booksData.map(b => (
//               <ListItemButton
//                 key={b.code}
//                 selected={selectedBook?.code === b.code}
//                 onClick={() => setSelectedBook(b)}
//               >
//                 <ListItemText primary={`${b.code} — ${b.name}`} />
//               </ListItemButton>
//             ))}
//           </List>
//         </Paper>
//       </Paper>

//       {/* ================= BUTTONS CENTER ================= */}

//       <Box display="flex" justifyContent="center" gap={4}>
//         <Button
//           variant="contained"
//           size="large"
//           startIcon={<PrintIcon />}
//           onClick={handlePrint}
//           sx={{ px: 5 }}
//         >
//           Print Report
//         </Button>

//         <Button
//           variant="contained"
//           color="error"
//           size="large"
//           startIcon={<CloseIcon />}
//           sx={{ px: 5 }}
//         >
//           Close
//         </Button>
//       </Box>

//     </Box>
//   );
// }












































import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Grid,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormGroup,
  Button,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Divider
} from "@mui/material";

import PrintIcon from "@mui/icons-material/Print";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

export default function StockDayBook({
  transactionTypesData = [],
  booksData = []
}) {
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [partyMode, setPartyMode] = useState("all");
  const [transactionMode, setTransactionMode] = useState("both");

  const [types, setTypes] = useState({});
  const [selectedBook, setSelectedBook] = useState(null);

  const toggleType = (t) =>
    setTypes(prev => ({ ...prev, [t]: !prev[t] }));

  const handlePrint = () => {
    navigate("/stock-daybook-print", {
      state: {
        startDate,
        endDate,
        partyMode,
        transactionMode,
        selectedTypes: types,
        selectedBook
      }
    });
  };

  const card = {
    p: 2.5,
    borderRadius: 3,
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)"
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#eef2f7", py: 4 }}>
      <Box width={760} mx="auto">

        {/* ================= TITLE ================= */}

        <Typography variant="h5" fontWeight={600} mb={2}>
          Stock Day Book
        </Typography>

        {/* ================= PERIOD ================= */}

        <Paper sx={{ ...card, mb: 2 }}>
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
        </Paper>

        {/* ================= PARTY + TRANSACTION ================= */}

        <Grid container spacing={2} mb={2}>

          {/* Party */}
          <Grid item xs={6}>
            <Paper sx={card}>
              <Typography fontWeight={600} mb={1}>
                Party
              </Typography>

              <RadioGroup
                value={partyMode}
                onChange={e => setPartyMode(e.target.value)}
              >
                <FormControlLabel
                  value="all"
                  control={<Radio size="small" />}
                  label="All Parties"
                />
                <FormControlLabel
                  value="selected"
                  control={<Radio size="small" />}
                  label="Selected Party"
                />
              </RadioGroup>
            </Paper>
          </Grid>

          {/* Transaction */}
          <Grid item xs={6}>
            <Paper sx={card}>
              <Typography fontWeight={600} mb={1}>
                Transaction
              </Typography>

              <RadioGroup
                value={transactionMode}
                onChange={e => setTransactionMode(e.target.value)}
              >
                <FormControlLabel
                  value="both"
                  control={<Radio size="small" />}
                  label="Both Inward & Outward"
                />
                <FormControlLabel
                  value="inward"
                  control={<Radio size="small" />}
                  label="Inward"
                />
                <FormControlLabel
                  value="outward"
                  control={<Radio size="small" />}
                  label="Outward"
                />
              </RadioGroup>
            </Paper>
          </Grid>

        </Grid>

        {/* ================= TRANSACTION TYPE ================= */}

        <Paper sx={{ ...card, mb: 2 }}>
          <Typography fontWeight={600} mb={1}>
            Transaction Type
          </Typography>

          <Divider sx={{ mb: 1 }} />

          <FormGroup row>
            {transactionTypesData.map(t => (
              <FormControlLabel
                key={t}
                sx={{ width: "50%" }}
                control={
                  <Checkbox
                    size="small"
                    checked={types[t] || false}
                    onChange={() => toggleType(t)}
                  />
                }
                label={t}
              />
            ))}
          </FormGroup>
        </Paper>

        {/* ================= BOOK SECTION ================= */}

        <Paper sx={{ ...card, mb: 3 }}>
          <Typography fontWeight={600} mb={1}>
            Book Selection
          </Typography>

          <Divider sx={{ mb: 1 }} />

          <Paper
            variant="outlined"
            sx={{
              height: 180,
              overflow: "auto",
              borderRadius: 2,
              bgcolor: "#fafbff"
            }}
          >
            <List dense>
              {booksData.map(b => (
                <ListItemButton
                  dense
                  key={b.code}
                  selected={selectedBook?.code === b.code}
                  onClick={() => setSelectedBook(b)}
                >
                  <ListItemText
                    primary={`${b.code} — ${b.name}`}
                  />
                </ListItemButton>
              ))}
            </List>
          </Paper>
        </Paper>

        {/* ================= BUTTONS CENTER ================= */}

        <Stack direction="row" spacing={3} justifyContent="center">
          <Button
            variant="contained"
            startIcon={<PrintIcon />}
            onClick={handlePrint}
            sx={{
              px: 5,
              fontWeight: 600,
              borderRadius: 2,
              boxShadow: 3
            }}
          >
            Print Report
          </Button>

          <Button
            variant="contained"
            color="error"
            startIcon={<CloseIcon />}
            onClick={() => navigate(-1)}
            sx={{
              px: 5,
              fontWeight: 600,
              borderRadius: 2,
              boxShadow: 3
            }}
          >
            Close
          </Button>
        </Stack>

      </Box>
    </Box>
  );
}
