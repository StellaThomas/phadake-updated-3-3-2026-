// import React, { useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   Button
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// function PLAccount() {
//   const navigate = useNavigate();

//   const [startDate, setStartDate] = useState("2025-04-01");
//   const [endDate, setEndDate] = useState("2026-03-31");

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

//           {/* ===== DATE AREA ===== */}
//           <Box
//             display="grid"
//             gridTemplateColumns="160px 1fr 60px"
//             gap={2}
//             mb={2}
//             alignItems="center"
//           >
//             <Typography fontWeight={600}>
//               Start Date :
//             </Typography>

//             <TextField
//               type="date"
//               size="small"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//             />

//             <Button variant="outlined" size="small">?</Button>

//             <Typography fontWeight={600}>
//               End Date :
//             </Typography>

//             <TextField
//               type="date"
//               size="small"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//             />

//             <Box />
//           </Box>

//           {/* ===== RIGHT BUTTON ===== */}
//           <Box display="flex" justifyContent="flex-end" mb={2}>
//             <Button variant="outlined">
//               Show Diff. in Trial Balance
//             </Button>
//           </Box>

//           {/* ===== SPACE LIKE YOUR SCREEN ===== */}
//           <Box height={120} />

//           {/* ===== FOOTER ===== */}
//           <Box mt={2}>

//             {/* LEFT BUTTONS */}
//             <Box display="flex" gap={2} mb={4}>
//               <Button
//                 variant="outlined"
//                 onClick={() => navigate("/sub-account-allocation")}
//               >
//                 Sub Account Allocation
//               </Button>

//               <Button variant="outlined">
//                 Duplicate Accounts
//               </Button>
//             </Box>

//             {/* ✅ CENTER PRINT + CLOSE */}
//             <Box
//               display="flex"
//               justifyContent="center"
//               gap={3}
//             >
//               <Button
//                 variant="contained"
//                 sx={{ px: 4 }}
//               >
//                 Print Report
//               </Button>

//               <Button
//                 variant="contained"
//                 color="error"
//                 sx={{ px: 4 }}
//                 onClick={() => navigate(-1)}
//               >
//                 Close
//               </Button>
//             </Box>

//           </Box>

//         </Paper>

//       </Box>
//     </Box>
//   );
// }

// export default PLAccount;









































































































import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function PLAccount() {
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState("2025-04-01");
  const [endDate, setEndDate] = useState("2026-03-31");

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
              Start Date :
            </Typography>

            <TextField
              type="date"
              size="small"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />

            <Button variant="outlined" size="small">?</Button>

            <Typography fontWeight={600}>
              End Date :
            </Typography>

            <TextField
              type="date"
              size="small"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />

            <Box />
          </Box>

          <Box display="flex" justifyContent="flex-end" mb={2}>
            <Button variant="outlined">
              Show Diff. in Trial Balance
            </Button>
          </Box>

          <Box height={120} />

          <Box mt={2}>

            <Box display="flex" gap={2} mb={4}>
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

            {/* ✅ ONLY THIS BUTTON CHANGED */}
            <Box display="flex" justifyContent="center" gap={3}>
              <Button
                variant="contained"
                sx={{ px: 4 }}
                onClick={() =>
                  navigate("/pl-print", {
                    state: { startDate, endDate }
                  })
                }
              >
                Print Report
              </Button>

              <Button
                variant="contained"
                color="error"
                sx={{ px: 4 }}
                onClick={() => navigate(-1)}
              >
                Close
              </Button>
            </Box>

          </Box>

        </Paper>
      </Box>
    </Box>
  );
}

export default PLAccount;
