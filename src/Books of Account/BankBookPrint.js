// import React from "react";
// import { useLocation } from "react-router-dom";
// import { Box, Typography, Divider, Button } from "@mui/material";
// import PrintIcon from "@mui/icons-material/Print";

// function BankBookPrint() {
//   const { state } = useLocation();
//   const { startDate, endDate } = state || {};

//   const formatDate = (d) =>
//     d?.format ? d.format("DD-MM-YYYY") : "";

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         background: "linear-gradient(135deg,#e9eef5,#f8fafc)",
//         p: { xs: 2, md: 4 },
//         fontFamily: `"Inter","Roboto","Segoe UI",Arial,sans-serif`
//       }}
//     >

//       {/* ================= PAPER ================= */}
//       <Box
//         id="print-area"
//         sx={{
//           maxWidth: 920,
//           mx: "auto",
//           bgcolor: "#fff",
//           px: { xs: 3, md: 6 },
//           py: { xs: 4, md: 6 },
//           borderRadius: 2,
//           boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
//           border: "1px solid #dfe3e8"
//         }}
//       >

//         {/* ================= HEADER ================= */}
//         <Typography
//           align="center"
//           sx={{
//             fontWeight: 700,
//             fontSize: 22,
//             letterSpacing: 0.3
//           }}
//         >
//           Phadke Prakashan, Kolhapur
//         </Typography>

//         <Typography
//           align="center"
//           mt={1}
//           sx={{
//             letterSpacing: 6,
//             fontSize: 15,
//             fontWeight: 600
//           }}
//         >
//           BANK BOOK
//         </Typography>

//         <Typography
//           align="center"
//           mt={1}
//           sx={{
//             fontSize: 14,
//             color: "text.secondary"
//           }}
//         >
//           From {formatDate(startDate)} to {formatDate(endDate)}
//         </Typography>

//         <Divider sx={{ my: 3, borderColor: "#000" }} />

//         {/* ================= COLUMN HEADER ================= */}
//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns:
//               "150px 1.3fr 1.3fr 110px 120px 120px 140px",
//             fontWeight: 700,
//             fontSize: 13,
//             pb: 1
//           }}
//         >
//           <div>Entry No / Ref</div>
//           <div>Account Name</div>
//           <div>Particulars</div>
//           <div>Chq No</div>
//           <div style={{ textAlign: "right" }}>Debit</div>
//           <div style={{ textAlign: "right" }}>Credit</div>
//           <div style={{ textAlign: "right" }}>Balance</div>
//         </Box>

//         <Divider sx={{ borderColor: "#000", mb: 2 }} />

//         {/* ================= ACCOUNT LINE ================= */}
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             fontWeight: 700,
//             fontSize: 14
//           }}
//         >
//           <Typography>
//             BANK OF INDIA, C/A A/C 09022110000887
//           </Typography>

//           <Typography>
//             Opening Balance …… XXXXX Dr
//           </Typography>
//         </Box>

//         <Divider sx={{ borderColor: "#000", my: 2 }} />

//         {/* ================= BACKEND DATA AREA ================= */}
//         <Box
//           sx={{
//             py: 6,
//             textAlign: "center",
//             color: "#607d8b",
//             fontSize: 14
//           }}
//         >
//           Transaction rows will be rendered here from backend
//         </Box>

//       </Box>

//       {/* ================= PRINT BUTTON ================= */}
//       <Box textAlign="center" mt={4}>
//         <Button
//           variant="contained"
//           size="large"
//           startIcon={<PrintIcon />}
//           onClick={() => window.print()}
//           sx={{
//             px: 6,
//             py: 1.5,
//             fontWeight: 700,
//             borderRadius: 3,
//             background: "linear-gradient(90deg,#1565c0,#1976d2)",
//             boxShadow: "0 8px 20px rgba(25,118,210,0.35)"
//           }}
//         >
//           Print Bank Book
//         </Button>
//       </Box>

//       {/* ================= PRINT CSS ================= */}
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
//             border: none;
//             font-family: "Inter","Roboto","Segoe UI",Arial,sans-serif;
//           }
//         }
//       `}</style>

//     </Box>
//   );
// }

// export default BankBookPrint;








































































import React, { useEffect, useState } from "react";
import { Box, Typography, Divider } from "@mui/material";

export default function BankBookPrint() {

  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bankBookFormData"));
    setFormData(stored);
  }, []);

  return (
    <Box sx={{ p: 4, bgcolor: "#f4f6f9", minHeight: "100vh" }}>

      <Box
        sx={{
          maxWidth: 1000,
          mx: "auto",
          bgcolor: "#fff",
          p: 5,
          borderRadius: 2,
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
        }}
      >

        {/* HEADER */}
        <Typography align="center" fontWeight={700} fontSize={20}>
          PHADKE PRAKASHAN, KOLHAPUR
        </Typography>

        <Typography align="center" mt={1} fontWeight={600}>
          CASH / BANK BOOK
        </Typography>

        <Typography align="center" mt={1}>
          From {formData?.startDate} To {formData?.endDate}
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* COLUMN HEADER */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns:
              "120px 1.2fr 1.2fr 120px 120px 140px",
            fontWeight: 700,
            pb: 1
          }}
        >
          <div>Date</div>
          <div>Account</div>
          <div>Particulars</div>
          <div style={{ textAlign: "right" }}>Debit</div>
          <div style={{ textAlign: "right" }}>Credit</div>
          <div style={{ textAlign: "right" }}>Balance</div>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* EMPTY STRUCTURE */}
        <Box py={5} textAlign="center" color="#607d8b">
          Transaction rows will appear here after API integration
        </Box>

      </Box>

    </Box>
  );
}


























































