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

// export default function StockStatement({
//   publicationsData = [],
//   bookStandardsData = [],
//   bookGroupsData = [],
//   booksData = []
// }) {

//   const navigate = useNavigate();

//   /* ================= STATE ================= */

//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   const [publicationMode, setPublicationMode] = useState("all");
//   const [bookStandardMode, setBookStandardMode] = useState("all");
//   const [bookGroupMode, setBookGroupMode] = useState("all");

//   const [closingOnly, setClosingOnly] = useState(false);

//   const [groups, setGroups] = useState({});
//   const [selectedBook, setSelectedBook] = useState(null);

//   const toggleGroup = (g) =>
//     setGroups(prev => ({ ...prev, [g]: !prev[g] }));

//   /* ================= PRINT ================= */

//   const handlePrint = () => {
//     navigate("/stock-statement-print", {
//       state: {
//         startDate,
//         endDate,
//         publicationMode,
//         bookStandardMode,
//         bookGroupMode,
//         selectedGroups: groups,
//         selectedBook,
//         closingOnly
//       }
//     });
//   };

//   /* ================= UI ================= */

//   return (
//     <Box sx={{ p: 4, background: "#f4f6f8", minHeight: "100vh" }}>

//       <Typography variant="h4" fontWeight={700} mb={3}>
//         Stock Statement
//       </Typography>

//       {/* ================= PERIOD ================= */}

//       <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 3 }}>
//         <Typography fontWeight={700} mb={2}>Period</Typography>

//         <Grid container spacing={3}>
//           <Grid item xs={4}>
//             <TextField
//               label="Start Date"
//               type="date"
//               fullWidth
//               InputLabelProps={{ shrink: true }}
//               value={startDate}
//               onChange={e => setStartDate(e.target.value)}
//             />
//           </Grid>

//           <Grid item xs={4}>
//             <TextField
//               label="End Date"
//               type="date"
//               fullWidth
//               InputLabelProps={{ shrink: true }}
//               value={endDate}
//               onChange={e => setEndDate(e.target.value)}
//             />
//           </Grid>

//           <Grid item xs={4}>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={closingOnly}
//                   onChange={e => setClosingOnly(e.target.checked)}
//                 />
//               }
//               label="Print Only Closing Stock"
//             />
//           </Grid>
//         </Grid>
//       </Paper>

//       {/* ================= PUBLICATIONS ================= */}

//       <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 3 }}>
//         <Typography fontWeight={700}>Publications</Typography>

//         <RadioGroup
//           value={publicationMode}
//           onChange={e => setPublicationMode(e.target.value)}
//         >
//           <FormControlLabel value="all" control={<Radio />} label="All Publications" />
//           <FormControlLabel value="selected" control={<Radio />} label="Selected Publications" />
//         </RadioGroup>
//       </Paper>

//       {/* ================= BOOK STANDARD ================= */}

//       <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 3 }}>
//         <Typography fontWeight={700}>Book Standard</Typography>

//         <RadioGroup
//           value={bookStandardMode}
//           onChange={e => setBookStandardMode(e.target.value)}
//         >
//           <FormControlLabel value="all" control={<Radio />} label="All" />
//           <FormControlLabel value="selected" control={<Radio />} label="Selected" />
//         </RadioGroup>
//       </Paper>

//       {/* ================= BOOK GROUP ================= */}

//       <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 3 }}>
//         <Typography fontWeight={700} mb={2}>Book Group</Typography>

//         <RadioGroup
//           value={bookGroupMode}
//           onChange={e => setBookGroupMode(e.target.value)}
//         >
//           <FormControlLabel value="all" control={<Radio />} label="All Group" />
//           <FormControlLabel value="selected" control={<Radio />} label="Selected Group" />
//         </RadioGroup>

//         <FormGroup row>
//           {bookGroupsData.map(g => (
//             <FormControlLabel
//               key={g}
//               control={
//                 <Checkbox
//                   checked={groups[g] || false}
//                   onChange={() => toggleGroup(g)}
//                 />
//               }
//               label={g}
//               sx={{ width: "25%" }}
//             />
//           ))}
//         </FormGroup>
//       </Paper>

//       {/* ================= BOOK SELECTION ================= */}

//       <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 3 }}>
//         <Typography fontWeight={700} mb={1}>Book Selection</Typography>

//         <Paper
//           variant="outlined"
//           sx={{ height: 200, overflow: "auto", borderRadius: 2 }}
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

//       {/* ================= BUTTONS ================= */}

//       <Box display="flex" justifyContent="center" gap={4}>
//         <Button
//           variant="contained"
//           size="large"
//           startIcon={<PrintIcon />}
//           onClick={handlePrint}
//         >
//           Print Report
//         </Button>

//         <Button
//           variant="contained"
//           color="error"
//           size="large"
//           startIcon={<CloseIcon />}
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
  Stack
} from "@mui/material";

import PrintIcon from "@mui/icons-material/Print";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

export default function StockStatement({
  publicationsData = [],
  bookStandardsData = [],
  bookGroupsData = [],
  booksData = []
}) {
  const navigate = useNavigate();

  /* ================= STATE ================= */

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [publicationMode, setPublicationMode] = useState("all");
  const [bookStandardMode, setBookStandardMode] = useState("all");
  const [bookGroupMode, setBookGroupMode] = useState("all");

  const [closingOnly, setClosingOnly] = useState(false);
  const [groups, setGroups] = useState({});
  const [selectedBook, setSelectedBook] = useState(null);

  const toggleGroup = (g) =>
    setGroups(prev => ({ ...prev, [g]: !prev[g] }));

  /* ================= PRINT ================= */

  const handlePrint = () => {
    navigate("/stock-statement-print", {
      state: {
        startDate,
        endDate,
        publicationMode,
        bookStandardMode,
        bookGroupMode,
        selectedGroups: groups,
        selectedBook,
        closingOnly
      }
    });
  };

  const card = {
    p: 2,
    borderRadius: 3,
    boxShadow: "0 3px 10px rgba(0,0,0,0.06)"
  };

  /* ================= UI ================= */

  return (
    <Box sx={{ minHeight: "100vh", background: "#eef2f6", pt: 3 }}>
      <Box width={760} mx="auto">

        {/* ===== TITLE ===== */}
        <Typography variant="h5" fontWeight={600} mb={2}>
          Stock Statement
        </Typography>

        {/* ===== PERIOD ===== */}
        <Paper sx={{ ...card, mb: 2 }}>
          <Typography fontWeight={600} mb={1}>
            Period
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                label="Start"
                type="date"
                size="small"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="End"
                type="date"
                size="small"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
              />
            </Grid>

            <Grid item xs={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    checked={closingOnly}
                    onChange={e => setClosingOnly(e.target.checked)}
                  />
                }
                label="Closing Only"
              />
            </Grid>
          </Grid>
        </Paper>

        {/* ===== PUBLICATION + STANDARD ===== */}
        <Grid container spacing={2} mb={2}>

          <Grid item xs={6}>
            <Paper sx={card}>
              <Typography fontWeight={600}>Publications</Typography>
              <RadioGroup
                value={publicationMode}
                onChange={e => setPublicationMode(e.target.value)}
              >
                <FormControlLabel value="all" control={<Radio size="small"/>} label="All" />
                <FormControlLabel value="selected" control={<Radio size="small"/>} label="Selected" />
              </RadioGroup>
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <Paper sx={card}>
              <Typography fontWeight={600}>Book Standard</Typography>
              <RadioGroup
                value={bookStandardMode}
                onChange={e => setBookStandardMode(e.target.value)}
              >
                <FormControlLabel value="all" control={<Radio size="small"/>} label="All" />
                <FormControlLabel value="selected" control={<Radio size="small"/>} label="Selected" />
              </RadioGroup>
            </Paper>
          </Grid>

        </Grid>

        {/* ===== BOOK GROUP ===== */}
        <Paper sx={{ ...card, mb: 2 }}>
          <Typography fontWeight={600} mb={1}>
            Book Group
          </Typography>

          <RadioGroup
            value={bookGroupMode}
            onChange={e => setBookGroupMode(e.target.value)}
          >
            <FormControlLabel value="all" control={<Radio size="small"/>} label="All" />
            <FormControlLabel value="selected" control={<Radio size="small"/>} label="Selected" />
          </RadioGroup>

          <FormGroup row>
            {bookGroupsData.map(g => (
              <FormControlLabel
                key={g}
                sx={{ width: "33%" }}
                control={
                  <Checkbox
                    size="small"
                    checked={groups[g] || false}
                    onChange={() => toggleGroup(g)}
                  />
                }
                label={g}
              />
            ))}
          </FormGroup>
        </Paper>

        {/* ===== BOOK LIST ===== */}
        <Paper sx={{ ...card, mb: 3 }}>
          <Typography fontWeight={600} mb={1}>
            Book Selection
          </Typography>

          <Paper variant="outlined" sx={{ height: 170, overflow: "auto", borderRadius: 2 }}>
            <List dense>
              {booksData.map(b => (
                <ListItemButton
                  dense
                  key={b.code}
                  selected={selectedBook?.code === b.code}
                  onClick={() => setSelectedBook(b)}
                >
                  <ListItemText primary={`${b.code} — ${b.name}`} />
                </ListItemButton>
              ))}
            </List>
          </Paper>
        </Paper>

        {/* ===== BUTTONS CENTER ===== */}
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            startIcon={<PrintIcon />}
            onClick={handlePrint}
            sx={{ px: 4, fontWeight: 600 }}
          >
            Print
          </Button>

          <Button
            variant="contained"
            color="error"
            startIcon={<CloseIcon />}
            onClick={() => navigate(-1)}
            sx={{ px: 4, fontWeight: 600 }}
          >
            Close
          </Button>
        </Stack>

      </Box>
    </Box>
  );
}
