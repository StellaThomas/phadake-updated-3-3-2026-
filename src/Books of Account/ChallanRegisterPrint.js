// import React from "react";
// import { useLocation } from "react-router-dom";
// import { Box, Typography, Button } from "@mui/material";
// import PrintIcon from "@mui/icons-material/Print";

// function ChallanRegisterPrint() {
//   const { state } = useLocation();
//   const { startDate, endDate, showBooks, party } = state || {};

//   return (
//     <Box sx={{ background: "#e9edf3", minHeight: "100vh", p: 4 }}>

//       <Box
//         id="print-area"
//         sx={{
//           maxWidth: 920,
//           mx: "auto",
//           bgcolor: "#fff",
//           p: 6,
//           boxShadow: "0 20px 60px rgba(0,0,0,0.15)"
//         }}
//       >

//         {/* HEADER */}
//         <Typography align="center" fontWeight={700}>
//           Phadke Prakashan, Kolhapur
//         </Typography>

//         <Typography align="center" mt={1} fontWeight={700}>
//           Challan Register
//         </Typography>

//         <Typography align="center" mt={1} fontSize={14}>
//           From {startDate} to {endDate}
//         </Typography>

//         <hr style={{ margin: "24px 0", border: "1px solid #000" }} />

//         {/* TABLE */}
//         <table width="100%" style={{ borderCollapse: "collapse", fontSize: 13 }}>
//           <thead>
//             <tr style={{
//               background: "#eef1f5",
//               borderTop: "2px solid #000",
//               borderBottom: "2px solid #000"
//             }}>
//               <th align="left">Date</th>
//               <th align="left">Chln No</th>
//               <th align="left">Name of Party</th>
//               <th align="right">No. of Books</th>
//               <th align="left">Inv No & Dt</th>
//               <th align="center">Parcel</th>
//               <th align="center">Bundles</th>
//             </tr>
//           </thead>

//           <tbody>
//             <tr>
//               <td colSpan="7" style={{ padding: 50, textAlign: "center", color: "#607d8b" }}>
//                 Data will be loaded from backend
//               </td>
//             </tr>

//             <tr>
//               <td colSpan="6" align="right" style={{ fontWeight: 700 }}>
//                 Day Total
//               </td>
//               <td align="center">—</td>
//             </tr>
//           </tbody>
//         </table>

//       </Box>

//       {/* PRINT BUTTON */}
//       <Box textAlign="center" mt={4}>
//         <Button variant="contained" size="large"
//           startIcon={<PrintIcon />}
//           onClick={() => window.print()}
//         >
//           PRINT REGISTER
//         </Button>
//       </Box>

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

// export default ChallanRegisterPrint;














































































import React from "react";
import { Box, Typography, Button } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";

function ChallanRegisterPrint() {

  const params = new URLSearchParams(window.location.search);

  const startDate = params.get("start");
  const endDate = params.get("end");
  const showBooks = params.get("show");
  const party = params.get("party");

  return (
    <Box sx={{ background: "#e9edf3", minHeight: "100vh", p: 4 }}>

      <Box
        id="print-area"
        sx={{
          maxWidth: 920,
          mx: "auto",
          bgcolor: "#fff",
          p: 6
        }}
      >

        <Typography align="center" fontWeight={700}>
          Phadke Prakashan, Kolhapur
        </Typography>

        <Typography align="center" mt={1} fontWeight={700}>
          Challan Register
        </Typography>

        <Typography align="center" mt={1}>
          From {startDate} to {endDate}
        </Typography>

        <Typography align="center" mt={1} fontSize={13}>
          Party: {party || "All"}
        </Typography>

        <Typography align="center" fontSize={13}>
          Show Books: {showBooks === "yes" ? "Yes" : "No"}
        </Typography>

        <hr style={{ margin: "24px 0", border: "1px solid #000" }} />

        <table width="100%" style={{ borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{
              background: "#eef1f5",
              borderTop: "2px solid #000",
              borderBottom: "2px solid #000"
            }}>
              <th align="left">Date</th>
              <th align="left">Chln No</th>
              <th align="left">Name of Party</th>
              <th align="right">No. of Books</th>
              <th align="left">Inv No & Dt</th>
              <th align="center">Parcel</th>
              <th align="center">Bundles</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan="7" style={{ padding: 60, textAlign: "center", color: "#607d8b" }}>
                Data will be loaded from backend
              </td>
            </tr>

            <tr>
              <td colSpan="6" align="right" style={{ fontWeight: 700 }}>
                Day Total
              </td>
              <td align="center">—</td>
            </tr>
          </tbody>
        </table>

      </Box>

      <Box textAlign="center" mt={4}>
        <Button
          variant="contained"
          size="large"
          startIcon={<PrintIcon />}
          onClick={() => window.print()}
        >
          PRINT REGISTER
        </Button>
      </Box>

      <style>{`
        @media print {
          body * { visibility: hidden; }
          #print-area, #print-area * { visibility: visible; }

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

export default ChallanRegisterPrint;
