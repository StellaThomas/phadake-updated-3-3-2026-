// import { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

// import {
//   Box,
//   Paper,
//   Typography,
//   TextField,
//   Checkbox,
//   FormControlLabel,
//   Radio,
//   RadioGroup,
//   Button,
//   Stack,
//   Select,
//   MenuItem
// } from "@mui/material";

// import PrintIcon from "@mui/icons-material/Print";
// import CloseIcon from "@mui/icons-material/Close";

// export default function BookPurchaseReport() {

//   const reportRef = useRef();
//   const [printing, setPrinting] = useState(false);

//   /* ================= FINANCIAL YEAR DEFAULT ================= */

//   const getFinancialYear = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = today.getMonth() + 1;

//     let startYear = month >= 4 ? year : year - 1;
//     let endYear = startYear + 1;

//     return {
//       start: `${startYear}-04-01`,
//       end: `${endYear}-03-31`
//     };
//   };

//   const fy = getFinancialYear();

//   /* ================= STATE ================= */

//   const [startDate, setStartDate] = useState(fy.start);
//   const [endDate, setEndDate] = useState(fy.end);

//   const [accounts, setAccounts] = useState([]);
//   const [groups, setGroups] = useState([]);
//   const [cities, setCities] = useState([]);

//   const [partyMode, setPartyMode] = useState("all");
//   const [standardMode, setStandardMode] = useState("all");
//   const [groupMode, setGroupMode] = useState("all");

//   const [selectedCity, setSelectedCity] = useState("");
//   const [partyBookwise, setPartyBookwise] = useState(false);

//   const [bookCode, setBookCode] = useState("");
//   const [bookList, setBookList] = useState([]);

//   /* ================= FETCH APIs ================= */

//   useEffect(() => {
//     axios.get("https://publication.microtechsolutions.net.in/php/Accountget.php")
//       .then(res => setAccounts(res.data || []));

//     axios.get("https://publication.microtechsolutions.net.in/php/BookGroupget.php")
//       .then(res => setGroups(res.data || []));

//     axios.get("https://publication.microtechsolutions.net.in/php/Cityget.php")
//       .then(res => setCities(res.data || []));
//   }, []);

//   /* ================= BOOK SEARCH ================= */

//   const handleBookSearch = async () => {
//     if (!bookCode) return;

//     const res = await axios.get(
//       `https://publication.microtechsolutions.net.in/php/Bookcodeget.php?BookCode=${bookCode}`
//     );

//     setBookList(res.data || []);
//   };

//   const handleEnter = (e) => {
//     if (e.key === "Enter") handleBookSearch();
//   };

//   /* ================= PRINT FUNCTION ================= */

//   const handlePrint = async () => {
//     setPrinting(true);

//     setTimeout(async () => {
//       try {
//         const element = reportRef.current;
//         if (!element) return;

//         const canvas = await html2canvas(element, {
//           scale: 2,
//           useCORS: true,
//           logging: false
//         });

//         const imgData = canvas.toDataURL("image/png");
//         const pdf = new jsPDF("p", "mm", "a4");

//         pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
//         window.open(pdf.output("bloburl"), "_blank");

//       } catch (error) {
//         console.error("PDF Error:", error);
//       } finally {
//         setPrinting(false);
//       }
//     }, 500);
//   };

//   /* ================= UI STYLE ================= */

//   const sectionBox = {
//     border: "1px solid #bdbdbd",
//     borderRadius: 1,
//     p: 2,
//     mb: 2,
//     background: "#fdfdfd"
//   };

//   return (
//     <Box sx={{ p: 3, bgcolor: "#f4f6f9", minHeight: "100vh" }}>

//       <Typography variant="h6" mb={3} fontWeight={600}>
//         Book Purchase Report
//       </Typography>

//       {/* ================= PERIOD ================= */}
//       <Paper sx={sectionBox}>
//         <Typography fontWeight={600} mb={1}>Period</Typography>

//         <Stack direction="row" spacing={3}>
//           <TextField
//             type="date"
//             size="small"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//           />

//           <TextField
//             type="date"
//             size="small"
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)}
//           />
//         </Stack>
//       </Paper>

//       {/* ================= PARTY ================= */}
//       <Paper sx={sectionBox}>
//         <Typography fontWeight={600} mb={1}>Party</Typography>

//         <RadioGroup
//           row
//           value={partyMode}
//           onChange={(e) => setPartyMode(e.target.value)}
//         >
//           <FormControlLabel value="all" control={<Radio size="small" />} label="All Parties" />
//           <FormControlLabel value="selected" control={<Radio size="small" />} label="Selected Party" />
//         </RadioGroup>

//         <FormControlLabel
//           control={
//             <Checkbox
//               size="small"
//               checked={partyBookwise}
//               onChange={(e) => setPartyBookwise(e.target.checked)}
//             />
//           }
//           label="Partywise, Bookwise?"
//         />
//       </Paper>

//       {/* ================= BOOK STANDARD ================= */}
//       <Paper sx={sectionBox}>
//         <Typography fontWeight={600} mb={1}>Book Standard</Typography>

//         <RadioGroup
//           row
//           value={standardMode}
//           onChange={(e) => setStandardMode(e.target.value)}
//         >
//           <FormControlLabel value="all" control={<Radio size="small" />} label="All" />
//           <FormControlLabel value="selected" control={<Radio size="small" />} label="Selected" />
//         </RadioGroup>
//       </Paper>

//       {/* ================= BOOK GROUP ================= */}
//       <Paper sx={sectionBox}>
//         <Typography fontWeight={600} mb={1}>Book Group</Typography>

//         <RadioGroup
//           row
//           value={groupMode}
//           onChange={(e) => setGroupMode(e.target.value)}
//         >
//           <FormControlLabel value="all" control={<Radio size="small" />} label="All Group" />
//           <FormControlLabel value="selected" control={<Radio size="small" />} label="Selected Group" />
//         </RadioGroup>

//         <Box mt={1}>
//           {groups.map((group, index) => (
//             <FormControlLabel
//               key={index}
//               control={<Checkbox size="small" />}
//               label={group.BookGroupName}
//             />
//           ))}
//         </Box>
//       </Paper>

//       {/* ================= DISTRICT ================= */}
//       <Paper sx={sectionBox}>
//         <Typography fontWeight={600} mb={1}>District</Typography>

//         <Select
//           fullWidth
//           size="small"
//           value={selectedCity}
//           onChange={(e) => setSelectedCity(e.target.value)}
//         >
//           {cities.map((city, index) => (
//             <MenuItem key={index} value={city.CityName}>
//               {city.CityName}
//             </MenuItem>
//           ))}
//         </Select>
//       </Paper>

//       {/* ================= BOOK SELECTION ================= */}
//       <Paper sx={sectionBox}>
//         <Typography fontWeight={600} mb={1}>Book Selection</Typography>

//         <TextField
//           size="small"
//           fullWidth
//           placeholder="Enter Book Code"
//           value={bookCode}
//           onChange={(e) => setBookCode(e.target.value)}
//           onKeyDown={handleEnter}
//         />

//         <Box mt={1} sx={{
//           border: "1px solid #999",
//           height: 150,
//           overflowY: "auto",
//           fontSize: "12px"
//         }}>
//           <table width="100%" border="1" cellSpacing="0">
//             <thead>
//               <tr>
//                 <th>Book Code</th>
//                 <th>Book Name</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bookList.map((book, index) => (
//                 <tr key={index}>
//                   <td>{book.BookCode}</td>
//                   <td>{book.BookName}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </Box>
//       </Paper>

//       {/* ================= BUTTONS ================= */}
//       <Stack direction="row" spacing={4} justifyContent="center" mt={3}>
//         <Button
//           variant="contained"
//           startIcon={<PrintIcon />}
//           onClick={handlePrint}
//         >
//           Print Report
//         </Button>

//         <Button
//           variant="contained"
//           color="error"
//           startIcon={<CloseIcon />}
//         >
//           Close
//         </Button>
//       </Stack>

//       {/* ================= PRINT STRUCTURE ================= */}
//       <div style={{ position: "absolute", left: "-9999px" }}>
//         <div
//           ref={reportRef}
//           style={{
//             width: "794px",
//             minHeight: "1123px",
//             padding: "40px",
//             fontFamily: "serif",
//             fontSize: "12px",
//             background: "#fff"
//           }}
//         >
//           <div style={{ textAlign: "center", fontWeight: "bold", fontSize: "16px" }}>
//             M. V. Phadke & Co. Kolhapur
//           </div>

//           <div style={{ textAlign: "center", marginTop: "5px" }}>
//             Book Purchase Report
//           </div>

//           <div style={{ textAlign: "center", marginTop: "5px" }}>
//             From {startDate} To {endDate}
//           </div>

//           <hr />

//           <table width="100%" border="1" cellPadding="5">
//             <thead>
//               <tr>
//                 <th>Sr No</th>
//                 <th>Book Code</th>
//                 <th>Book Name</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bookList.map((book, index) => (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{book.BookCode}</td>
//                   <td>{book.BookName}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//         </div>
//       </div>

//     </Box>
//   );
// }






























































import { useEffect, useState, useRef } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import {
  Box,
  Paper,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Stack,
  Select,
  MenuItem,
 Autocomplete
} from "@mui/material";

import PrintIcon from "@mui/icons-material/Print";
import CloseIcon from "@mui/icons-material/Close";

export default function BookPurchaseReport() {

  const reportRef = useRef();
  const [printing, setPrinting] = useState(false);
  const [standards, setStandards] = useState([]);
const [selectedStandard, setSelectedStandard] = useState(null);

  /* ================= FINANCIAL YEAR DEFAULT ================= */

  const getFinancialYear = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;

    let startYear = month >= 4 ? year : year - 1;
    let endYear = startYear + 1;

    return {
      start: `${startYear}-04-01`,
      end: `${endYear}-03-31`
    };
  };

  const fy = getFinancialYear();

  /* ================= STATE ================= */

  const [startDate, setStartDate] = useState(fy.start);
  const [endDate, setEndDate] = useState(fy.end);

  const [accounts, setAccounts] = useState([]);
  const [groups, setGroups] = useState([]);
  const [cities, setCities] = useState([]);

  const [partyMode, setPartyMode] = useState("all");
  const [standardMode, setStandardMode] = useState("all");
  const [groupMode, setGroupMode] = useState("all");

  const [selectedCity, setSelectedCity] = useState("");
  const [partyBookwise, setPartyBookwise] = useState(false);

  const [bookCode, setBookCode] = useState("");
  const [bookList, setBookList] = useState([]);
 
  /* ================= FETCH APIs ================= */

  useEffect(() => {
    axios.get("https://publication.microtechsolutions.net.in/php/Accountget.php")
      .then(res => setAccounts(res.data || []));

    axios.get("https://publication.microtechsolutions.net.in/php/BookGroupget.php")
      .then(res => setGroups(res.data || []));

    axios.get("https://publication.microtechsolutions.net.in/php/Cityget.php")
      .then(res => setCities(res.data || []));
  }, []);

  /* ================= BOOK SEARCH ================= */

  const handleBookSearch = async () => {
    if (!bookCode) return;

    const res = await axios.get(
      `https://publication.microtechsolutions.net.in/php/Bookcodeget.php?BookCode=${bookCode}`
    );

    setBookList(res.data || []);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") handleBookSearch();
  };

  /* ================= PRINT FUNCTION ================= */

  const handlePrint = async () => {
    setPrinting(true);

    setTimeout(async () => {
      try {
        const element = reportRef.current;
        if (!element) return;

        const canvas = await html2canvas(element, {
          scale: 2,
          useCORS: true,
          logging: false
        });

        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");

        pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
        window.open(pdf.output("bloburl"), "_blank");

      } catch (error) {
        console.error("PDF Error:", error);
      } finally {
        setPrinting(false);
      }
    }, 500);
  };

  /* ================= UI STYLE ================= */

  const sectionBox = {
    border: "1px solid #bdbdbd",
    borderRadius: 1,
    p: 2,
    mb: 2,
    background: "#fdfdfd"
  };

  return (
  <Box sx={{ p: 3, bgcolor: "#f4f6f9", minHeight: "100vh" }}>
    <Typography variant="h6" mb={3} fontWeight={600}>
      Book Purchase Report
    </Typography>

    {/* ================= PERIOD ================= */}
    <Paper sx={sectionBox}>
      <Typography fontWeight={600} mb={1}>Period</Typography>
      <Stack direction="row" spacing={3}>
        <TextField
          type="date"
          size="small"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <TextField
          type="date"
          size="small"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </Stack>
    </Paper>

    {/* ================= MAIN DIVIDE ================= */}
    <Box sx={{ display: "flex", gap: 4, mt: 2 }}>

      {/* LEFT COLUMN */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>

        {/* PARTY */}
        <Paper sx={sectionBox}>
          <Typography fontWeight={600} mb={1}>Party</Typography>

          <RadioGroup
            row
            value={partyMode}
            onChange={(e) => setPartyMode(e.target.value)}
          >
            <FormControlLabel value="all" control={<Radio size="small" />} label="All Parties" />
            <FormControlLabel value="selected" control={<Radio size="small" />} label="Selected Party" />
          </RadioGroup>

          <FormControlLabel
            control={
              <Checkbox
                size="small"
                checked={partyBookwise}
                onChange={(e) => setPartyBookwise(e.target.checked)}
              />
            }
            label="Partywise, Bookwise?"
          />
        </Paper>

        {/* BOOK STANDARD */}
       
       
       <Paper sx={sectionBox}>
         <Typography fontSize={13} fontWeight={600} mb={1}>
           Book Standard
         </Typography>
       
         <RadioGroup
           row
           value={standardMode}
           onChange={(e) => setStandardMode(e.target.value)}
         >
           <FormControlLabel
             value="all"
             control={<Radio size="small" />}
             label="All"
           />
           <FormControlLabel
             value="selected"
             control={<Radio size="small" />}
             label="Selected"
           />
         </RadioGroup>
       
         {/* SHOW DROPDOWN ONLY IF SELECTED */}
       
       
         {standardMode === "selected" && (
           <Autocomplete
             size="small"
             fullWidth
             disablePortal
             openOnFocus
             autoHighlight
             options={standards}
             getOptionLabel={(o) => o.StandardName || ""}
             value={selectedStandard}
             onChange={(e, v) => setSelectedStandard(v)}
             renderInput={(params) => (
               <TextField
                 {...params}
                 size="small"
                 placeholder="Select Standard"
                 sx={{ mt: 1 }}
               />
             )}
           />
         )}
       </Paper>

        {/* BOOK SELECTION */}
        <Paper sx={sectionBox}>
          <Typography fontWeight={600} mb={1}>Book Selection</Typography>

          <TextField
            size="small"
            fullWidth
            placeholder="Enter Book Code"
            value={bookCode}
            onChange={(e) => setBookCode(e.target.value)}
            onKeyDown={handleEnter}
          />

          <Box mt={1} sx={{
            border: "1px solid #999",
            height: 120,
            overflowY: "auto",
            fontSize: "12px"
          }}>
            <table width="100%" border="1" cellSpacing="0">
              <thead>
                <tr>
                  <th>Book Code</th>
                  <th>Book Name</th>
                </tr>
              </thead>
              <tbody>
                {bookList.map((book, index) => (
                  <tr key={index}>
                    <td>{book.BookCode}</td>
                    <td>{book.BookName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        </Paper>

      </Box>

      {/* RIGHT COLUMN */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>

        {/* BOOK GROUP */}
        <Paper sx={sectionBox}>
          <Typography fontWeight={600} mb={1}>Book Group</Typography>

          <RadioGroup
            row
            value={groupMode}
            onChange={(e) => setGroupMode(e.target.value)}
          >
            <FormControlLabel value="all" control={<Radio size="small" />} label="All Group" />
            <FormControlLabel value="selected" control={<Radio size="small" />} label="Selected Group" />
          </RadioGroup>

          <Box mt={1}>
            {groups.map((group, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox size="small" />}
                label={group.BookGroupName}
              />
            ))}
          </Box>
        </Paper>

        {/* DISTRICT */}
        <Paper sx={sectionBox}>
          <Typography fontWeight={600} mb={1}>District</Typography>

          <Select
            fullWidth
            size="small"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            {cities.map((city, index) => (
              <MenuItem key={index} value={city.CityName}>
                {city.CityName}
              </MenuItem>
            ))}
          </Select>
        </Paper>

      </Box>
    </Box>

    {/* ================= BUTTONS ================= */}
    <Stack direction="row" spacing={4} justifyContent="center" mt={3}>
      <Button variant="contained" startIcon={<PrintIcon />} onClick={handlePrint}>
        Print Report
      </Button>

      <Button variant="contained" color="error" startIcon={<CloseIcon />}>
        Close
      </Button>
    </Stack>

      {/* ================= PRINT STRUCTURE ================= */}
      <div style={{ position: "absolute", left: "-9999px" }}>
        <div
          ref={reportRef}
          style={{
            width: "794px",
            minHeight: "1123px",
            padding: "40px",
            fontFamily: "serif",
            fontSize: "12px",
            background: "#fff"
          }}
        >
          <div style={{ textAlign: "center", fontWeight: "bold", fontSize: "16px" }}>
            M. V. Phadke & Co. Kolhapur
          </div>

          <div style={{ textAlign: "center", marginTop: "5px" }}>
            Book Purchase Report
          </div>

          <div style={{ textAlign: "center", marginTop: "5px" }}>
            From {startDate} To {endDate}
          </div>

          <hr />

          <table width="100%" border="1" cellPadding="5">
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Book Code</th>
                <th>Book Name</th>
              </tr>
            </thead>
            <tbody>
              {bookList.map((book, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{book.BookCode}</td>
                  <td>{book.BookName}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>

    </Box>
  );
}
