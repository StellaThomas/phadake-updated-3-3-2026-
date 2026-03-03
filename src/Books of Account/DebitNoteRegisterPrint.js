// import React from "react";
// import { useLocation } from "react-router-dom";
// import { Box, Typography, Button } from "@mui/material";
// import PrintIcon from "@mui/icons-material/Print";

// function DebitNoteRegisterPrint() {
//   const { state } = useLocation();
//   const { startDate, endDate } = state || {};

//   return (
//     <Box sx={{ minHeight: "100vh", background: "#e9edf3", p: 4 }}>

//       {/* ===== PAPER ===== */}
//       <Box
//         id="print-area"
//         sx={{
//           maxWidth: 900,
//           mx: "auto",
//           bgcolor: "#fff",
//           p: 6,
//           boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
//           fontFamily: `"Inter","Roboto","Segoe UI",Arial,sans-serif`
//         }}
//       >

//         {/* HEADER */}
//         <Typography align="center" fontWeight={700}>
//           Phadke Prakashan, Kolhapur
//         </Typography>

//         <Typography align="center" mt={1} letterSpacing={5} fontWeight={700}>
//           Debit Note Register
//         </Typography>

//         <Typography align="center" mt={1} fontSize={14}>
//           From {startDate} to {endDate}
//         </Typography>

//         <hr style={{ margin: "22px 0", border: "1px solid #000" }} />

//         {/* TABLE */}
//         <table width="100%" style={{ borderCollapse: "collapse", fontSize: 13 }}>
//           <thead>
//             <tr style={{
//               background: "#eef1f5",
//               borderTop: "2px solid #000",
//               borderBottom: "2px solid #000"
//             }}>
//               <th align="left" width="140">Entry No / Ref No</th>
//               <th align="left" width="260">Account Name</th>
//               <th align="left">Particulars</th>
//               <th align="right" width="120">Debit</th>
//               <th align="right" width="120">Credit</th>
//             </tr>
//           </thead>

//           <tbody>
//             <tr>
//               <td colSpan="5" style={{
//                 padding: "50px",
//                 textAlign: "center",
//                 color: "#607d8b"
//               }}>
//                 Debit note rows will render here from backend
//               </td>
//             </tr>

//             {/* TOTAL ROWS STRUCTURE */}
//             <tr>
//               <td colSpan="3" align="right" style={{ paddingTop: 20, fontWeight: 700 }}>
//                 Day Total
//               </td>
//               <td align="right">—</td>
//               <td align="right">—</td>
//             </tr>

//             <tr>
//               <td colSpan="3" align="right" style={{ fontWeight: 700 }}>
//                 Grand Total
//               </td>
//               <td align="right">—</td>
//               <td align="right">—</td>
//             </tr>

//           </tbody>
//         </table>

//       </Box>

//       {/* PRINT BUTTON */}
//       <Box textAlign="center" mt={4}>
//         <Button
//           variant="contained"
//           size="large"
//           startIcon={<PrintIcon />}
//           onClick={() => window.print()}
//         >
//           PRINT DEBIT NOTE REGISTER
//         </Button>
//       </Box>

//       {/* PRINT CSS */}
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

// export default DebitNoteRegisterPrint;












































import React from "react";
import { Box, Typography, Button } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";

function DebitNoteRegisterPrint() {

  const params = new URLSearchParams(window.location.search);
  const startDate = params.get("start");
  const endDate = params.get("end");

  return (
    <Box sx={{ minHeight: "100vh", background: "#e9edf3", p: 4 }}>

      <Box
        id="print-area"
        sx={{
          maxWidth: 900,
          mx: "auto",
          bgcolor: "#fff",
          p: 6,
          fontFamily: `"Inter","Roboto","Segoe UI",Arial,sans-serif`
        }}
      >

        <Typography align="center" fontWeight={700}>
          Phadke Prakashan, Kolhapur
        </Typography>

        <Typography align="center" mt={1} letterSpacing={5} fontWeight={700}>
          DEBIT NOTE REGISTER
        </Typography>

        <Typography align="center" mt={1} fontSize={14}>
          From {startDate} to {endDate}
        </Typography>

        <hr style={{ margin: "22px 0", border: "1px solid #000" }} />

        <table width="100%" style={{ borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{
              background: "#eef1f5",
              borderTop: "2px solid #000",
              borderBottom: "2px solid #000"
            }}>
              <th align="left" width="140">Entry No / Ref No</th>
              <th align="left" width="260">Account Name</th>
              <th align="left">Particulars</th>
              <th align="right" width="120">Debit</th>
              <th align="right" width="120">Credit</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan="5" style={{
                padding: "60px",
                textAlign: "center",
                color: "#607d8b"
              }}>
                Debit note rows will render here from backend
              </td>
            </tr>

            <tr>
              <td colSpan="3" align="right" style={{ fontWeight: 700 }}>
                Day Total
              </td>
              <td align="right">—</td>
              <td align="right">—</td>
            </tr>

            <tr>
              <td colSpan="3" align="right" style={{ fontWeight: 700 }}>
                Grand Total
              </td>
              <td align="right">—</td>
              <td align="right">—</td>
            </tr>

          </tbody>
        </table>

      </Box>

      <Box textAlign="center" mt={4}>
        <Button
          variant="contained"
          startIcon={<PrintIcon />}
          onClick={() => window.print()}
        >
          PRINT DEBIT NOTE REGISTER
        </Button>
      </Box>

      <style>{`
        @media print {
          body * { visibility: hidden; }

          #print-area, #print-area * {
            visibility: visible;
          }

          #print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `}</style>

    </Box>
  );
}

export default DebitNoteRegisterPrint;
