// import React from "react";
// import { useLocation } from "react-router-dom";
// import { Box, Typography, Divider, Button } from "@mui/material";
// import PrintIcon from "@mui/icons-material/Print";

// function JournalRegisterPrint() {
//   const { state } = useLocation();
//   const { startDate, endDate } = state || {};

//   const formatDate = (d) =>
//     d?.format ? d.format("DD-MM-YYYY") : "";

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         background: "#e9edf3",
//         p: 4,
//         fontFamily: `"Inter","Roboto","Segoe UI",Arial,sans-serif`
//       }}
//     >

//       {/* ===== PAPER ===== */}
//       <Box
//         id="print-area"
//         sx={{
//           maxWidth: 920,
//           mx: "auto",
//           bgcolor: "#fff",
//           p: 6,
//           boxShadow: "0 25px 70px rgba(0,0,0,0.18)"
//         }}
//       >

//         {/* HEADER */}
//         <Typography align="center" fontWeight={700} fontSize={20}>
//           Phadke Prakashan, Kolhapur
//         </Typography>

//         <Typography
//           align="center"
//           mt={1}
//           letterSpacing={6}
//           fontWeight={700}
//         >
//           JOURNAL REGISTER
//         </Typography>

//         <Typography align="center" mt={1} fontSize={14}>
//           From {formatDate(startDate)} to {formatDate(endDate)}
//         </Typography>

//         <Divider sx={{ my: 3, borderColor: "#000" }} />

//         {/* COLUMN HEADER */}
//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: "160px 1.4fr 1.6fr 140px 140px",
//             fontWeight: 700,
//             fontSize: 13
//           }}
//         >
//           <div>Entry No / Ref</div>
//           <div>Account Name</div>
//           <div>Particulars</div>
//           <div style={{ textAlign: "right" }}>Debit</div>
//           <div style={{ textAlign: "right" }}>Credit</div>
//         </Box>

//         <Divider sx={{ borderColor: "#000", my: 2 }} />

//         {/* BACKEND DATA AREA */}
//         <Box
//           sx={{
//             py: 8,
//             textAlign: "center",
//             color: "#607d8b"
//           }}
//         >
//           Journal transaction rows will render here from backend
//         </Box>

//       </Box>

//       {/* PRINT BUTTON */}
//       <Box textAlign="center" mt={4}>
//         <Button
//           variant="contained"
//           startIcon={<PrintIcon />}
//           size="large"
//           onClick={() => window.print()}
//           sx={{ px: 6, py: 1.5 }}
//         >
//           Print Journal Register
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

// export default JournalRegisterPrint;


























































































import React, { useEffect, useState } from "react";
import { Box, Typography, Divider, Button } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";

export default function JournalRegisterPrint() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("journalRegisterData"));
    setData(stored);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#e9edf3",
        p: 4,
        fontFamily: `"Inter","Roboto","Segoe UI",Arial,sans-serif`
      }}
    >
      <Box
        id="print-area"
        sx={{
          maxWidth: 950,
          mx: "auto",
          bgcolor: "#fff",
          p: 6,
          borderRadius: 2,
          boxShadow: "0 25px 70px rgba(0,0,0,0.18)"
        }}
      >

        {/* HEADER */}
        <Typography align="center" fontWeight={700} fontSize={20}>
          PHADKE PRAKASHAN, KOLHAPUR
        </Typography>

        <Typography
          align="center"
          mt={1}
          letterSpacing={6}
          fontWeight={700}
        >
          JOURNAL REGISTER
        </Typography>

        <Typography align="center" mt={1} fontSize={14}>
          From {data?.startDate} to {data?.endDate}
        </Typography>

        <Divider sx={{ my: 3, borderColor: "#000" }} />

        {/* TABLE HEADER */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "160px 1.4fr 1.6fr 140px 140px",
            fontWeight: 700,
            fontSize: 13
          }}
        >
          <div>Entry No / Ref</div>
          <div>Account Name</div>
          <div>Particulars</div>
          <div style={{ textAlign: "right" }}>Debit</div>
          <div style={{ textAlign: "right" }}>Credit</div>
        </Box>

        <Divider sx={{ borderColor: "#000", my: 2 }} />

        {/* EMPTY STRUCTURE */}
        <Box
          sx={{
            py: 8,
            textAlign: "center",
            color: "#607d8b"
          }}
        >
          Journal transaction rows will render here after API integration
        </Box>

      </Box>

      {/* PRINT BUTTON */}
      <Box textAlign="center" mt={4}>
        <Button
          variant="contained"
          startIcon={<PrintIcon />}
          size="large"
          onClick={() => window.print()}
          sx={{
            px: 4,
            py: 1.2,
            fontWeight: 400,
            borderRadius: 2
          }}
        >
          Print Journal Register
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
            border-radius: 0;
          }
        }
      `}</style>

    </Box>
  );
}
