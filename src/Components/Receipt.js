// import React, { useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   Checkbox,
//   FormControlLabel,
//   Button,
//   Divider,
//   Radio,
//   RadioGroup
// } from "@mui/material";

// function Receipt() {
//   const [startNo, setStartNo] = useState("");
//   const [endNo, setEndNo] = useState("");
//   const [allRequired, setAllRequired] = useState(false);
//   const [receiptPart, setReceiptPart] = useState("first");

//   const handlePrint = () => {
//     window.print();
//   };

//   const handleClose = () => {
//     setStartNo("");
//     setEndNo("");
//     setAllRequired(false);
//     setReceiptPart("first");
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8ee 100%)",
//         display: "flex",
//         justifyContent: "center",
//         paddingTop: "50px"
//       }}
//     >
//       <Box>
//         {/* PAGE TITLE */}
//         <Typography
//           variant="h4"
//           fontWeight="700"
//           textAlign="center"
//           mb={4}
//         >
//           Receipt
//         </Typography>

//         {/* FIRST CARD */}
//         <Paper
//           elevation={6}
//           sx={{
//             width: 540,
//             padding: "30px 36px",
//             borderRadius: "12px",
//             mb: 4
//           }}
//         >
//           <Box display="flex" alignItems="center" mb={3}>
//             <Typography sx={{ width: 140, fontWeight: 600 }}>
//               Start No :
//             </Typography>
//             <TextField
//               size="small"
//               fullWidth
//               value={startNo}
//               onChange={(e) => setStartNo(e.target.value)}
//             />
//           </Box>

//           <Box display="flex" alignItems="center" mb={3}>
//             <Typography sx={{ width: 140, fontWeight: 600 }}>
//               End No :
//             </Typography>
//             <TextField
//               size="small"
//               fullWidth
//               value={endNo}
//               onChange={(e) => setEndNo(e.target.value)}
//             />
//           </Box>

//           <Divider sx={{ my: 2 }} />

//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={allRequired}
//                 onChange={(e) => setAllRequired(e.target.checked)}
//               />
//             }
//             label={
//               <Typography fontWeight={600}>
//                 All Challans are Required
//               </Typography>
//             }
//           />
//         </Paper>

//         {/* SECOND TITLE */}
//         <Typography
//           variant="h5"
//           fontWeight="700"
//           textAlign="center"
//           mb={3}
//         >
//           First Copy of Receipt
//         </Typography>

//         {/* SECOND CARD */}
//         <Paper
//           elevation={6}
//           sx={{
//             width: 540,
//             padding: "26px 36px",
//             borderRadius: "12px"
//           }}
//         >
//           <RadioGroup
//             value={receiptPart}
//             onChange={(e) => setReceiptPart(e.target.value)}
//           >
//             <FormControlLabel
//               value="first"
//               control={<Radio />}
//               label={
//                 <Typography fontWeight={600}>
//                   First Part
//                 </Typography>
//               }
//             />

//             <FormControlLabel
//               value="second"
//               control={<Radio />}
//               label={
//                 <Typography fontWeight={600}>
//                   Second Part
//                 </Typography>
//               }
//             />
//           </RadioGroup>
//         </Paper>

//         {/* BUTTONS */}
//         <Box display="flex" justifyContent="center" gap={3} mt={5}>
//           <Button
//             variant="contained"
//             size="large"
//             sx={{ px: 5 }}
//             onClick={handlePrint}
//           >
//             Print Report
//           </Button>

//           <Button
//             variant="contained"
//             color="error"
//             size="large"
//             sx={{ px: 5 }}
//             onClick={handleClose}
//           >
//             Close
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// export default Receipt;




























import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Divider,
  Radio,
  RadioGroup
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Receipt() {
  const navigate = useNavigate();

  const [startNo, setStartNo] = useState("");
  const [endNo, setEndNo] = useState("");
  const [allRequired, setAllRequired] = useState(false);
  const [receiptPart, setReceiptPart] = useState("first");

  const handlePrint = () => {
    navigate("/receipt-print", {
      state: {
        startNo,
        endNo,
        allRequired,
        receiptPart
      }
    });
  };

  const handleClose = () => {
    setStartNo("");
    setEndNo("");
    setAllRequired(false);
    setReceiptPart("first");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#f5f7fa,#e4e8ee)",
        display: "flex",
        justifyContent: "center",
        pt: 6
      }}
    >
      <Box>

        <Typography variant="h4" fontWeight={700} textAlign="center" mb={4}>
          Receipt
        </Typography>

        <Paper elevation={6} sx={{ width: 540, p: 4, borderRadius: 3, mb: 4 }}>
          <Box display="flex" mb={3}>
            <Typography width={140} fontWeight={600}>Start No :</Typography>
            <TextField size="small" fullWidth value={startNo}
              onChange={(e)=>setStartNo(e.target.value)} />
          </Box>

          <Box display="flex" mb={3}>
            <Typography width={140} fontWeight={600}>End No :</Typography>
            <TextField size="small" fullWidth value={endNo}
              onChange={(e)=>setEndNo(e.target.value)} />
          </Box>

          <Divider sx={{ my: 2 }} />

          <FormControlLabel
            control={
              <Checkbox checked={allRequired}
                onChange={(e)=>setAllRequired(e.target.checked)} />
            }
            label="All Challans are Required"
          />
        </Paper>

        <Typography variant="h5" fontWeight={700} textAlign="center" mb={2}>
          First Copy of Receipt
        </Typography>

        <Paper elevation={6} sx={{ width: 540, p: 3, borderRadius: 3 }}>
          <RadioGroup value={receiptPart}
            onChange={(e)=>setReceiptPart(e.target.value)}>
            <FormControlLabel value="first" control={<Radio />} label="First Part" />
            <FormControlLabel value="second" control={<Radio />} label="Second Part" />
          </RadioGroup>
        </Paper>

        <Box display="flex" justifyContent="center" gap={3} mt={5}>
          <Button variant="contained" size="large" onClick={handlePrint}>
            Print Report
          </Button>

          <Button variant="contained" color="error" size="large" onClick={handleClose}>
            Close
          </Button>
        </Box>

      </Box>
    </Box>
  );
}

export default Receipt;
