// import React, { useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   Checkbox,
//   Select,
//   MenuItem,
//   Button
// } from "@mui/material";

// /* ================= TAX OPTIONS ================= */
// const salesTaxOptions = [
//   { label: "C.S.T. 4%", taxId: 1 },
//   { label: "CST 12.5%", taxId: 2 },
//   { label: "Exempted", taxId: 3 },
//   { label: "Expenses", taxId: 4 },
//   { label: "GST 5%", taxId: 5 },
//   { label: "GST 12%", taxId: 6 },
//   { label: "GST 18%", taxId: 7 },
//   { label: "GST 28%", taxId: 8 },
//   { label: "IGST 5%", taxId: 9 },
//   { label: "IGST 12%", taxId: 10 },
//   { label: "IGST 18%", taxId: 11 },
//   { label: "IGST 28%", taxId: 12 },
//   { label: "Lbr Chgs.", taxId: 13 },
//   { label: "R.D.", taxId: 14 },
//   { label: "ROYALTY", taxId: 15 },
//   { label: "Transit-Against C Form", taxId: 16 },
//   { label: "U.R.D", taxId: 17 },
//   { label: "VAT 4%", taxId: 18 },
//   { label: "VAT 5%", taxId: 19 },
//   { label: "VAT 6%", taxId: 20 },
//   { label: "VAT 8%", taxId: 21 },
//   { label: "VAT 12.5%", taxId: 22 },
//   { label: "VAT 13.5%", taxId: 23 },
//   { label: "VAT @5.5%", taxId: 24 }
// ];

// function PurchaseRegister() {
//   const [startDate, setStartDate] = useState("2026-04-01");
//   const [endDate, setEndDate] = useState("2026-03-31");
//   const [showListing, setShowListing] = useState("no");
//   const [accountHead, setAccountHead] = useState("");
//   const [party, setParty] = useState("");
//   const [selectedTaxIds, setSelectedTaxIds] = useState([]);

//   const handleTaxChange = (taxId) => {
//     setSelectedTaxIds((prev) =>
//       prev.includes(taxId)
//         ? prev.filter((id) => id !== taxId)
//         : [...prev, taxId]
//     );
//   };

//   return (
//     <Box sx={{ minHeight: "100vh", background: "#f4f6fa", py: 6 }}>
//       <Box width={860} mx="auto">

//         {/* ================= PERIOD ================= */}
//         <Typography variant="h4" fontWeight={700} textAlign="center" mb={3}>
//           Period
//         </Typography>

//         <Paper elevation={4} sx={{ p: 4, mb: 4 }}>
//           <Box display="grid" gridTemplateColumns="140px 1fr 40px" gap={2} mb={2}>
//             <Typography fontWeight={600}>Start Date :</Typography>
//             <TextField
//               type="date"
//               size="small"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//               fullWidth
//             />
//             <Box sx={{
//               border: "1px solid #aaa",
//               borderRadius: 1,
//               textAlign: "center",
//               fontWeight: "bold"
//             }}>
//               ?
//             </Box>
//           </Box>

//           <Box display="grid" gridTemplateColumns="140px 1fr 40px" gap={2}>
//             <Typography fontWeight={600}>End Date :</Typography>
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

//         {/* ================= FILTER ================= */}
//         <Paper elevation={4} sx={{ p: 4, mb: 4 }}>
//           <Typography fontWeight={600} mb={1}>
//             Show Bill Listing ?
//           </Typography>

//           <RadioGroup
//             row
//             value={showListing}
//             onChange={(e) => setShowListing(e.target.value)}
//           >
//             <FormControlLabel value="yes" control={<Radio />} label="Yes" />
//             <FormControlLabel value="no" control={<Radio />} label="No" />
//           </RadioGroup>

//           <Box mt={3}>
//             <Typography fontWeight={600}>Account Head</Typography>
//             <Select
//               fullWidth
//               size="small"
//               value={accountHead}
//               onChange={(e) => setAccountHead(e.target.value)}
//             >
//               <MenuItem value="">Select</MenuItem>
//               <MenuItem value="purchase">Purchase</MenuItem>
//               <MenuItem value="expenses">Expenses</MenuItem>
//             </Select>
//           </Box>

//           <Box mt={3}>
//             <Typography fontWeight={600}>Party</Typography>
//             <Select
//               fullWidth
//               size="small"
//               value={party}
//               onChange={(e) => setParty(e.target.value)}
//             >
//               <MenuItem value="">Select</MenuItem>
//               <MenuItem value="vendor1">Vendor 1</MenuItem>
//               <MenuItem value="vendor2">Vendor 2</MenuItem>
//             </Select>
//           </Box>

//           <Box mt={3}>
//             <Typography fontWeight={600}>Tax Head</Typography>
//             <Paper
//               variant="outlined"
//               sx={{
//                 maxHeight: 180,
//                 overflowY: "auto",
//                 p: 1,
//                 mt: 1
//               }}
//             >
//               {salesTaxOptions.map((tax) => (
//                 <FormControlLabel
//                   key={tax.taxId}
//                   control={
//                     <Checkbox
//                       checked={selectedTaxIds.includes(tax.taxId)}
//                       onChange={() => handleTaxChange(tax.taxId)}
//                     />
//                   }
//                   label={tax.label}
//                 />
//               ))}
//             </Paper>
//           </Box>
//         </Paper>

//         {/* ================= BUTTONS ================= */}
//         <Box display="flex" justifyContent="center" gap={4}>
//           <Button variant="contained" size="large" sx={{ px: 5 }}>
//             Print Report
//           </Button>
//           <Button variant="contained" color="error" size="large" sx={{ px: 5 }}>
//             Close
//           </Button>
//         </Box>

//       </Box>
//     </Box>
//   );
// }

// export default PurchaseRegister;

































































































































import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  Button,
  Grid
} from "@mui/material";

import PrintIcon from "@mui/icons-material/Print";
import CloseIcon from "@mui/icons-material/Close";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

import { useNavigate } from "react-router-dom";

/* ================= TAX OPTIONS ================= */

const salesTaxOptions = [
  { label: "GST 5%", taxId: 5 },
  { label: "GST 12%", taxId: 6 },
  { label: "GST 18%", taxId: 7 },
  { label: "GST 28%", taxId: 8 },
  { label: "IGST 5%", taxId: 9 },
  { label: "IGST 12%", taxId: 10 },
  { label: "VAT 5%", taxId: 19 },
  { label: "VAT 12.5%", taxId: 22 }
];

export default function PurchaseRegister() {
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState("2026-04-01");
  const [endDate, setEndDate] = useState("2026-03-31");
  const [showListing, setShowListing] = useState("no");
  const [accountHead, setAccountHead] = useState("");
  const [party, setParty] = useState("");
  const [selectedTaxIds, setSelectedTaxIds] = useState([]);

  const handleTaxChange = (taxId) => {
    setSelectedTaxIds(prev =>
      prev.includes(taxId)
        ? prev.filter(id => id !== taxId)
        : [...prev, taxId]
    );
  };

  const handlePrint = () => {
    navigate("/purchase-register-print", {
      state: {
        startDate,
        endDate,
        showListing,
        accountHead,
        party,
        selectedTaxIds
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
        pt: 3
      }}
    >
      <Box width={700}>

        {/* ===== TITLE ===== */}

        <Typography
          variant="h5"
          fontWeight={600}
          textAlign="center"
          mb={2}
        >
          Purchase Register
        </Typography>

        {/* ================= PERIOD ================= */}

        <Paper elevation={4} sx={{ p: 2.2, mb: 2, borderRadius: 2.5 }}>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
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

        {/* ================= BILL LISTING ================= */}

        <Paper elevation={4} sx={{ p: 2, mb: 2, borderRadius: 2.5 }}>
          <Typography fontWeight={600} fontSize={15}>
            Show Bill Listing ?
          </Typography>

          <RadioGroup
            row
            value={showListing}
            onChange={e => setShowListing(e.target.value)}
          >
            <FormControlLabel value="yes" control={<Radio size="small" />} label="Yes" />
            <FormControlLabel value="no" control={<Radio size="small" />} label="No" />
          </RadioGroup>
        </Paper>

        {/* ================= ACCOUNT + PARTY ================= */}

        <Paper elevation={4} sx={{ p: 2, mb: 2, borderRadius: 2.5 }}>
          <Typography fontWeight={700} fontSize={15} mb={1}>
            Account Head
          </Typography>

          <Select
            fullWidth
            size="small"
            value={accountHead}
            onChange={e => setAccountHead(e.target.value)}
            displayEmpty
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="purchase">Purchase</MenuItem>
            <MenuItem value="expenses">Expenses</MenuItem>
          </Select>

          <Typography fontWeight={600} fontSize={15} mt={2} mb={1}>
            Party
          </Typography>

          <Select
            fullWidth
            size="small"
            value={party}
            onChange={e => setParty(e.target.value)}
            displayEmpty
          >
            <MenuItem value="">Select Party</MenuItem>
            <MenuItem value="vendor1">Vendor 1</MenuItem>
            <MenuItem value="vendor2">Vendor 2</MenuItem>
          </Select>
        </Paper>

        {/* ================= TAX ================= */}

        <Paper elevation={4} sx={{ p: 2, borderRadius: 2.5 }}>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <ReceiptLongIcon fontSize="small" color="primary" />
            <Typography fontWeight={600} fontSize={15}>
              Tax Head
            </Typography>
          </Box>

          <Paper
            variant="outlined"
            sx={{ maxHeight: 140, overflowY: "auto", p: 1 }}
          >
            {salesTaxOptions.map(tax => (
              <FormControlLabel
                key={tax.taxId}
                control={
                  <Checkbox
                    size="small"
                    checked={selectedTaxIds.includes(tax.taxId)}
                    onChange={() => handleTaxChange(tax.taxId)}
                  />
                }
                label={<Typography fontSize={13}>{tax.label}</Typography>}
              />
            ))}
          </Paper>
        </Paper>

        {/* ================= BUTTONS ================= */}

        <Box display="flex" justifyContent="center" gap={3} mt={3}>
          <Button
            variant="contained"
            size="medium"
            startIcon={<PrintIcon />}
            onClick={handlePrint}
            sx={{
              px: 4,
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
              px: 4,
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
