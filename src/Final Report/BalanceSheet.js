// import React, { useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   Button
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// function BalanceSheet() {
//   const navigate = useNavigate();

//   const [asOnDate, setAsOnDate] = useState("2026-03-31");

//   const cardStyle = {
//     p: 3,
//     borderRadius: 2,
//     background: "#fff",
//     boxShadow: "0 6px 16px rgba(0,0,0,0.08)"
//   };

//   return (
//     <Box sx={{ minHeight: "100vh", background: "#f4f6fa", pt: 6 }}>
//       <Box sx={{ width: 900, mx: "auto" }}>

//         {/* ===== TITLE ===== */}
//         <Typography
//           variant="h4"
//           fontWeight={700}
//           textAlign="center"
//           mb={4}
//         >
//           As On ?
//         </Typography>

//         {/* ===== MAIN CARD ===== */}
//         <Paper sx={cardStyle}>

//           <Box
//             display="grid"
//             gridTemplateColumns="160px 1fr 60px"
//             gap={2}
//             mb={2}
//             alignItems="center"
//           >
//             <Typography fontWeight={600}>
//               As On :
//             </Typography>

//             <TextField
//               type="date"
//               size="small"
//               value={asOnDate}
//               onChange={(e) => setAsOnDate(e.target.value)}
//             />

//             <Button variant="outlined" size="small">
//               ?
//             </Button>
//           </Box>

//           {/* RIGHT BUTTON */}
//           <Box display="flex" justifyContent="flex-end" mb={2}>
//             <Button variant="outlined">
//               Show Diff. in Trial Balance
//             </Button>
//           </Box>

//           {/* EMPTY SPACE */}
//           <Box height={140} />

//           {/* LEFT BUTTONS INSIDE CARD */}
//           <Box display="flex" gap={2}>
//             <Button
//               variant="outlined"
//               onClick={() => navigate("/sub-account-allocation")}
//             >
//               Sub Account Allocation
//             </Button>

//             <Button variant="outlined">
//               Duplicate Accounts
//             </Button>
//           </Box>

//         </Paper>

//         {/* ✅ PRINT + CLOSE — BELOW CARD CENTER */}
//         <Box
//           mt={4}
//           display="flex"
//           justifyContent="center"
//           gap={3}
//         >
//           <Button
//             variant="contained"
//             sx={{
//               px: 5,
//               background: "#2b6cb0",
//               boxShadow: 3,
//               "&:hover": { background: "#1f4f82" }
//             }}
//           >
//             Print Report
//           </Button>

//           <Button
//             variant="contained"
//             color="error"
//             sx={{ px: 5, boxShadow: 3 }}
//             onClick={() => navigate(-1)}
//           >
//             Close
//           </Button>
//         </Box>

//       </Box>
//     </Box>
//   );
// }

// export default  BalanceSheet;













































































import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function BalanceSheet() {
  const navigate = useNavigate();
  const [asOnDate, setAsOnDate] = useState("2026-03-31");

  const cardStyle = {
    p: 3,
    borderRadius: 2,
    background: "#fff",
    boxShadow: "0 6px 16px rgba(0,0,0,0.08)"
  };

  return (
    <Box sx={{ minHeight: "100vh", background: "#f4f6fa", pt: 6 }}>
      <Box sx={{ width: 900, mx: "auto" }}>

        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          mb={4}
        >
          As On ?
        </Typography>

        <Paper sx={cardStyle}>

          <Box
            display="grid"
            gridTemplateColumns="160px 1fr 60px"
            gap={2}
            mb={2}
            alignItems="center"
          >
            <Typography fontWeight={600}>
              As On :
            </Typography>

            <TextField
              type="date"
              size="small"
              value={asOnDate}
              onChange={(e) => setAsOnDate(e.target.value)}
            />

            <Button variant="outlined" size="small">?</Button>
          </Box>

          <Box display="flex" justifyContent="flex-end" mb={2}>
            <Button variant="outlined">
              Show Diff. in Trial Balance
            </Button>
          </Box>

          <Box height={140} />

          <Box display="flex" gap={2}>
            <Button
              variant="outlined"
              onClick={() => navigate("/sub-account-allocation")}
            >
              Sub Account Allocation
            </Button>

            <Button variant="outlined">
              Duplicate Accounts
            </Button>
          </Box>

        </Paper>

        {/* ✅ ONLY THIS BUTTON WIRED */}
        <Box mt={4} display="flex" justifyContent="center" gap={3}>
          <Button
            variant="contained"
            sx={{
              px: 5,
              background: "#2b6cb0",
              boxShadow: 3,
              "&:hover": { background: "#1f4f82" }
            }}
            onClick={() =>
              navigate("/balance-header", {
                state: { asOnDate }
              })
            }
          >
            Print Report
          </Button>

          <Button
            variant="contained"
            color="error"
            sx={{ px: 5, boxShadow: 3 }}
            onClick={() => navigate(-1)}
          >
            Close
          </Button>
        </Box>

      </Box>
    </Box>
  );
}

export default BalanceSheet;
