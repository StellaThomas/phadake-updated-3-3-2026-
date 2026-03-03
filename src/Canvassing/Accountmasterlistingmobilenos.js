// import React, { useState, useRef } from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   Stack,
//   Divider,
//   Container,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   CircularProgress,
// } from "@mui/material";

// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

// const formatDisplayDate = (date) => {
//   if (!date) return "";
//   const d = new Date(date);
//   const day = String(d.getDate()).padStart(2, "0");
//   const month = String(d.getMonth() + 1).padStart(2, "0");
//   const year = d.getFullYear();
//   return `${day}-${month}-${year}`;
// };

// const Accountmasterlistingmobilenos = () => {
//   const reportRef = useRef(null);

//   const [fromdate, setFromdate] = useState("");
//   const [todate, setTodate] = useState("");
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [showReport, setShowReport] = useState(false);

//   // ================= RESET FINANCIAL YEAR =================
//   const setFinancialYear = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = today.getMonth() + 1;

//     const startYear = month >= 4 ? year : year - 1;
//     const endYear = month >= 4 ? year + 1 : year;

//     setFromdate(`${startYear}-04-01`);
//     setTodate(`${endYear}-03-31`);
//   };

//   // ================= PRINT =================
//   const handlePrint = async () => {
//     if (!fromdate || !todate) {
//       alert("Please select From Date and To Date");
//       return;
//     }

//     setLoading(true);

//     try {
//       const apiURL = `https://publication.microtechsolutions.net.in/php/get/getCanvassingAccountMasterListing.php?fromDate=${fromdate}&toDate=${todate}`;

//       const res = await fetch(apiURL);
//       const json = await res.json();

//       let apiData = [];
//       if (json.success && Array.isArray(json.data)) {
//         apiData = json.data;
//       }

//       setData(apiData);
//       setShowReport(true);
//       setLoading(false);

//       setTimeout(() => generatePDF(), 600);
//     } catch (error) {
//       console.error("API Error:", error);
//       setLoading(false);
//     }
//   };

//   // ================= PDF =================
//   const generatePDF = async () => {
//     const element = reportRef.current;
//     if (!element) return;

//     const canvas = await html2canvas(element, { scale: 2 });
//     const imgData = canvas.toDataURL("image/png");

//     const pdf = new jsPDF("p", "mm", "a4");

//     const imgWidth = 210;
//     const imgHeight = (canvas.height * imgWidth) / canvas.width;

//     pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
//     window.open(pdf.output("bloburl"), "_blank");
//   };

//   const handleExit = () => {
//     setShowReport(false);
//     setData([]);
//   };

//   return (
//     <Box sx={{ bgcolor: "#f4f6f9", minHeight: "100vh" }}>

//       {/* 🔵 TOP BLUE STRIP */}
//       <Box sx={{ height: "6px", bgcolor: "#1e73be" }} />

//       {/* ================= FORM UI ================= */}
//       {!showReport && (
//         <Box
//           sx={{
//             maxWidth: 1100,
//             mx: "auto",
//             mt: 2,
//             bgcolor: "#ffffff",
//             px: 6,
//             pt: 4,
//             pb: 10,
//             minHeight: "80vh",
//           }}
//         >
//           <Typography
//             sx={{
//               textAlign: "center",
//               color: "#1e73be",
//               fontWeight: 700,
//               fontSize: 20,
//               letterSpacing: 1,
//               mb: 3,
//             }}
//           >
//             ACCOUNT MASTER LISTING (MOBILE NOS)
//           </Typography>

//           <Typography sx={{ textAlign: "center", fontSize: 17, mb: 5 }}>
//             Period Filter
//           </Typography>

//           <Stack direction="row" spacing={10} justifyContent="center">
//             <Box>
//               <Typography sx={{ fontWeight: 600, mb: 1 }}>
//                 Start Date:
//               </Typography>
//               <input
//                 type="date"
//                 value={fromdate}
//                 onChange={(e) => setFromdate(e.target.value)}
//                 style={{
//                   width: 220,
//                   padding: "8px 12px",
//                   borderRadius: 6,
//                   border: "1px solid #d0d0d0",
//                   backgroundColor: "#fafafa",
//                 }}
//               />
//             </Box>

//             <Box>
//               <Typography sx={{ fontWeight: 600, mb: 1 }}>
//                 End Date:
//               </Typography>
//               <input
//                 type="date"
//                 value={todate}
//                 onChange={(e) => setTodate(e.target.value)}
//                 style={{
//                   width: 220,
//                   padding: "8px 12px",
//                   borderRadius: 6,
//                   border: "1px solid #d0d0d0",
//                   backgroundColor: "#fafafa",
//                 }}
//               />
//             </Box>
//           </Stack>

//           <Typography
//             onClick={setFinancialYear}
//             sx={{
//               textAlign: "center",
//               color: "#1e73be",
//               fontSize: 14,
//               cursor: "pointer",
//               mt: 3,
//               mb: 6,
//               "&:hover": { textDecoration: "underline" },
//             }}
//           >
//             RESET TO FINANCIAL YEAR
//           </Typography>

//           <Divider />

//           <Stack direction="row" spacing={4} justifyContent="center" sx={{ mt: 4 }}>
//             <Button
//               variant="contained"
//               sx={{
//                 px: 6,
//                 backgroundColor: "#2b78c5",
//                 boxShadow: "0px 3px 6px rgba(0,0,0,0.15)",
//               }}
//               onClick={handlePrint}
//               disabled={loading}
//             >
//               {loading ? (
//                 <CircularProgress size={22} color="inherit" />
//               ) : (
//                 "PRINT"
//               )}
//             </Button>

//             <Button
//               variant="outlined"
//               sx={{
//                 px: 6,
//                 borderColor: "#e53935",
//                 color: "#e53935",
//               }}
//               onClick={handleExit}
//             >
//               EXIT
//             </Button>
//           </Stack>
//         </Box>
//       )}

//       {/* ================= REPORT ================= */}
//       {showReport && (
//         <Container
//           ref={reportRef}
//           maxWidth="lg"
//           sx={{
//             bgcolor: "white",
//             py: 5,
//             border: "1px solid #000",
//             mt: 4,
//           }}
//         >

//           {/* 🔙 Back Button ONLY HERE */}
//           <Box sx={{ mb: 2 }}>
//             <Button
//               onClick={() => setShowReport(false)}
//               sx={{
//                 color: "#1e73be",
//                 fontWeight: 600,
//                 textTransform: "none",
//               }}
//             >
//               ← Back
//             </Button>
//           </Box>

//           <Box sx={{ textAlign: "center", mb: 4 }}>
//             <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
//               Phadke Prakashan, Kolhapur.
//             </Typography>
//             <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>
//               Account Master Listing : Mobile Numbers
//             </Typography>
//             <Typography sx={{ fontSize: 12, mt: 1 }}>
//               From: {formatDisplayDate(fromdate)} &nbsp;&nbsp;
//               To: {formatDisplayDate(todate)}
//             </Typography>
//           </Box>

//           <Table size="small">
//             <TableHead>
//               <TableRow sx={{ borderTop: "2px solid black", borderBottom: "2px solid black" }}>
//                 <TableCell><b>ACCOUNT/PARTY NAME</b></TableCell>
//                 <TableCell><b>TELEPHONE NO.</b></TableCell>
//                 <TableCell><b>MOBILE NO.</b></TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {data.length > 0 ? (
//                 data.map((row, index) => (
//                   <TableRow key={index}>
//                     <TableCell>{row["Account Party Name"]}</TableCell>
//                     <TableCell>{row["Telephone No"]}</TableCell>
//                     <TableCell>{row["Mobile No"]}</TableCell>
//                   </TableRow>
//                 ))
//               ) : (
//                 <TableRow>
//                   <TableCell colSpan={3} align="center">
//                     No Data Found
//                   </TableCell>
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </Container>
//       )}
//     </Box>
//   );
// };

// export default Accountmasterlistingmobilenos;





















































import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Divider,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  CircularProgress,
} from "@mui/material";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const formatDisplayDate = (date) => {
  if (!date) return "";
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
};

const Accountmasterlistingmobilenos = () => {
  const reportRef = useRef(null);

  const [fromdate, setFromdate] = useState("");
  const [todate, setTodate] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showReport, setShowReport] = useState(false);

  // ================= RESET FINANCIAL YEAR =================
  const setFinancialYear = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;

    const startYear = month >= 4 ? year : year - 1;
    const endYear = month >= 4 ? year + 1 : year;

    setFromdate(`${startYear}-04-01`);
    setTodate(`${endYear}-03-31`);
  };

  // ================= PRINT =================
  const handlePrint = async () => {
    if (!fromdate || !todate) {
      alert("Please select From Date and To Date");
      return;
    }

    setLoading(true);

    try {
      const apiURL = `https://publication.microtechsolutions.net.in/php/get/getCanvassingAccountMasterListing.php?fromDate=${fromdate}&toDate=${todate}`;

      const res = await fetch(apiURL);
      const json = await res.json();

      let apiData = [];
      if (json.success && Array.isArray(json.data)) {
        apiData = json.data;
      }

      setData(apiData);
      setShowReport(true);
      setLoading(false);

      setTimeout(() => generatePDF(), 600);
    } catch (error) {
      console.error("API Error:", error);
      setLoading(false);
    }
  };

  // ================= PDF =================
  const generatePDF = async () => {
    const element = reportRef.current;
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    window.open(pdf.output("bloburl"), "_blank");
  };

  const handleExit = () => {
    setShowReport(false);
    setData([]);
  };

  return (
    <Box sx={{ bgcolor: "#f4f6f9", minHeight: "100vh" }}>
      {/* 🔵 TOP BLUE STRIP */}
      <Box sx={{ height: "6px", bgcolor: "#1e73be" }} />

      {/* ================= FORM UI ================= */}
      {!showReport && (
        <Box
          sx={{
            maxWidth: 1100,
            mx: "auto",
            mt: 2,
            bgcolor: "#ffffff",
            px: 6,
            pt: 4,
            pb: 10,
            minHeight: "80vh",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              color: "#1e73be",
              fontWeight: 700,
              fontSize: 20,
              letterSpacing: 1,
              mb: 3,
            }}
          >
            ACCOUNT MASTER LISTING (MOBILE NOS)
          </Typography>

          <Typography sx={{ textAlign: "center", fontSize: 17, mb: 5 }}>
            Period Filter
          </Typography>

          <Stack direction="row" spacing={10} justifyContent="center">
            <Box>
              <Typography sx={{ fontWeight: 600, mb: 1 }}>
                Start Date:
              </Typography>
              <input
                type="date"
                value={fromdate}
                onChange={(e) => setFromdate(e.target.value)}
                style={{
                  width: 220,
                  padding: "8px 12px",
                  borderRadius: 6,
                  border: "1px solid #d0d0d0",
                  backgroundColor: "#fafafa",
                }}
              />
            </Box>

            <Box>
              <Typography sx={{ fontWeight: 600, mb: 1 }}>
                End Date:
              </Typography>
              <input
                type="date"
                value={todate}
                onChange={(e) => setTodate(e.target.value)}
                style={{
                  width: 220,
                  padding: "8px 12px",
                  borderRadius: 6,
                  border: "1px solid #d0d0d0",
                  backgroundColor: "#fafafa",
                }}
              />
            </Box>
          </Stack>

          <Typography
            onClick={setFinancialYear}
            sx={{
              textAlign: "center",
              color: "#1e73be",
              fontSize: 14,
              cursor: "pointer",
              mt: 3,
              mb: 6,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            RESET TO FINANCIAL YEAR
          </Typography>

          <Divider />

          <Stack direction="row" spacing={4} justifyContent="center" sx={{ mt: 4 }}>
            <Button
              variant="contained"
              sx={{
                px: 6,
                backgroundColor: "#2b78c5",
                boxShadow: "0px 3px 6px rgba(0,0,0,0.15)",
              }}
              onClick={handlePrint}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={22} color="inherit" />
              ) : (
                "PRINT"
              )}
            </Button>

            <Button
              variant="outlined"
              sx={{
                px: 6,
                borderColor: "#e53935",
                color: "#e53935",
              }}
              onClick={handleExit}
            >
              EXIT
            </Button>
          </Stack>
        </Box>
      )}

      {/* ================= REPORT ================= */}
      {showReport && (
        <>
          {/* 🔙 Back Button (OUTSIDE PDF AREA) */}
          <Box sx={{ maxWidth: 1100, mx: "auto", mt: 3 }}>
            <Button
              onClick={() => setShowReport(false)}
              sx={{
                color: "#1e73be",
                fontWeight: 600,
                textTransform: "none",
              }}
            >
              ← Back
            </Button>
          </Box>

          {/* 📄 Printable Area Only */}
          <Container
            ref={reportRef}
            maxWidth="lg"
            sx={{
              bgcolor: "white",
              py: 5,
              border: "1px solid #000",
              mt: 2,
            }}
          >
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
                Phadke Prakashan, Kolhapur.
              </Typography>
              <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>
                Account Master Listing : Mobile Numbers
              </Typography>
              <Typography sx={{ fontSize: 12, mt: 1 }}>
                From: {formatDisplayDate(fromdate)} &nbsp;&nbsp;
                To: {formatDisplayDate(todate)}
              </Typography>
            </Box>

            <Table size="small">
              <TableHead>
                <TableRow sx={{ borderTop: "2px solid black", borderBottom: "2px solid black" }}>
                  <TableCell><b>ACCOUNT/PARTY NAME</b></TableCell>
                  <TableCell><b>TELEPHONE NO.</b></TableCell>
                  <TableCell><b>MOBILE NO.</b></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {data.length > 0 ? (
                  data.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row["Account Party Name"]}</TableCell>
                      <TableCell>{row["Telephone No"]}</TableCell>
                      <TableCell>{row["Mobile No"]}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={3} align="center">
                      No Data Found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Container>
        </>
      )}
    </Box>
  );
};

export default Accountmasterlistingmobilenos;