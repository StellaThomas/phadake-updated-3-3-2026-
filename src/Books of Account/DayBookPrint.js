// import React from "react";
// import { useLocation } from "react-router-dom";
// import { Box, Typography, Button } from "@mui/material";
// import PrintIcon from "@mui/icons-material/Print";

// function DayBookPrint() {
//   const { state } = useLocation();
//   const { startDate, endDate } = state || {};

//   return (
//     <Box sx={{ minHeight: "100vh", background: "#e9edf3", p: 4 }}>

//       {/* ================= PAPER ================= */}
//       <Box
//         id="print-area"
//         sx={{
//           maxWidth: 1050,
//           mx: "auto",
//           bgcolor: "#fff",
//           p: 6,
//           boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
//           fontFamily: `"Inter","Roboto","Segoe UI",Arial,sans-serif`
//         }}
//       >

//         {/* ===== HEADER ===== */}
//         <Typography align="center" fontWeight={700} fontSize={20}>
//           Phadke Prakashan, Kolhapur
//         </Typography>

//         <Typography align="center" mt={1} letterSpacing={6} fontWeight={700}>
//           DAY BOOK
//         </Typography>

//         <Typography align="center" mt={1} fontSize={14}>
//           From {startDate} to {endDate} (Transaction Datewise)
//         </Typography>

//         <hr style={{ margin: "24px 0", border: "1px solid #000" }} />

//         {/* ===== TABLE HEADER ===== */}
//         <table width="100%" style={{ borderCollapse: "collapse", fontSize: 13 }}>
//           <thead>
//             <tr style={{
//               background: "#eef1f5",
//               borderTop: "2px solid #000",
//               borderBottom: "2px solid #000"
//             }}>
//               <th align="left" width="70">User Id</th>
//               <th align="left" width="90">Entry No</th>
//               <th align="left" width="90">Ref No</th>
//               <th align="left" width="100">Trans Type</th>
//               <th align="left" width="180">Account Name</th>
//               <th align="left">Particulars</th>
//               <th align="left" width="120">Cheque No</th>
//               <th align="right" width="120">Debit</th>
//               <th align="right" width="120">Credit</th>
//             </tr>
//           </thead>

//           <tbody>
//             <tr>
//               <td colSpan="9" style={{
//                 padding: "40px",
//                 textAlign: "center",
//                 color: "#607d8b"
//               }}>
//                 Day Book rows will render here from backend
//               </td>
//             </tr>
//           </tbody>
//         </table>

//       </Box>

//       {/* ===== PRINT BUTTON ===== */}
//       <Box textAlign="center" mt={4}>
//         <Button
//           variant="contained"
//           size="large"
//           startIcon={<PrintIcon />}
//           onClick={() => window.print()}
//           sx={{ px: 6, py: 1.5 }}
//         >
//           PRINT DAY BOOK
//         </Button>
//       </Box>

//       {/* ===== PRINT CSS ===== */}
//       <style>{`
//         @media print {
//           body * { visibility: hidden; }
//           #print-area, #print-area * { visibility: visible; }

//           #print-area {
//             position: absolute;
//             left: 0;
//             top: 0;
//             width: 100%;
//             box-shadow: none;
//           }
//         }
//       `}</style>

//     </Box>
//   );
// }

// export default DayBookPrint;
















import React from "react";
import { Box, Typography, Button } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";

function DayBookPrint() {

  const params = new URLSearchParams(window.location.search);
  const startDate = params.get("start");
  const endDate = params.get("end");
  const types = params.get("types");

  return (
    <Box sx={{ minHeight: "100vh", background: "#e9edf3", p: 4 }}>

      <Box
        id="print-area"
        sx={{
          maxWidth: 1050,
          mx: "auto",
          bgcolor: "#fff",
          p: 6,
          fontFamily: `"Inter","Roboto","Segoe UI",Arial,sans-serif`
        }}
      >

        {/* HEADER */}
        <Typography align="center" fontWeight={700} fontSize={20}>
          Phadke Prakashan, Kolhapur
        </Typography>

        <Typography align="center" mt={1} letterSpacing={6} fontWeight={700}>
          DAY BOOK
        </Typography>

        <Typography align="center" mt={1} fontSize={14}>
          From {startDate} to {endDate}
        </Typography>

        <Typography align="center" mt={1} fontSize={13}>
          Transaction Types: {types || "All"}
        </Typography>

        <hr style={{ margin: "24px 0", border: "1px solid #000" }} />

        <Box textAlign="center" py={6} color="#607d8b">
          Day Book rows will render here from backend
        </Box>

      </Box>

      {/* MANUAL PRINT BUTTON */}
      <Box textAlign="center" mt={4}>
        <Button
          variant="contained"
          size="large"
          startIcon={<PrintIcon />}
          onClick={() => window.print()}
        >
          PRINT DAY BOOK
        </Button>
      </Box>

      {/* PRINT CSS */}
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #print-area, #print-area * { visibility: visible; }

          #print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            box-shadow: none;
          }
        }
      `}</style>

    </Box>
  );
}

export default DayBookPrint;
