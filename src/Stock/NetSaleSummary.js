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
//   Button,
//   Stack,
//   Autocomplete,
//   Radio,
//   RadioGroup,
//   Select,
//   MenuItem
// } from "@mui/material";

// import PrintIcon from "@mui/icons-material/Print";
// import CloseIcon from "@mui/icons-material/Close";

// export default function NetSaleSummary() {

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
//   const [standards, setStandards] = useState([]);
//   const [groups, setGroups] = useState([]);
//   const [cities, setCities] = useState([]);

//   const [partyMode, setPartyMode] = useState("all");
//   const [standardMode, setStandardMode] = useState("all");
//   const [groupMode, setGroupMode] = useState("all");

//   const [selectedParty, setSelectedParty] = useState(null);
//   const [selectedCity, setSelectedCity] = useState("");
//   const [partyBookwise, setPartyBookwise] = useState(false);

//   const [bookCode, setBookCode] = useState("");
//   const [bookList, setBookList] = useState([]);

//   /* ================= FETCH APIs ================= */

//   useEffect(() => {
//     axios.get("https://publication.microtechsolutions.net.in/php/Accountget.php")
//       .then(res => setAccounts(res.data || []));

//     axios.get("https://publication.microtechsolutions.net.in/php/Standardget.php")
//       .then(res => setStandards(res.data || []));

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

//   /* ================= COMPACT UI STYLE ================= */

//   const sectionBox = {
//     border: "1px solid #dcdcdc",
//     borderRadius: 1,
//     p: 1.2,        // reduced padding
//     mb: 2,         // reduced margin
//     background: "#ffffff"
//   };

//   return (
//     <Box sx={{ p: 2, bgcolor: "#f4f6f9", minHeight: "100vh" }}>

//       <Typography variant="subtitle1" mb={2} fontWeight={600}>
//         Net Sale Summary
//       </Typography>

//       {/* ================= PERIOD ================= */}
//       <Paper sx={sectionBox}>
//         <Typography fontSize={13} fontWeight={600} mb={1}>Period</Typography>
//         <Stack direction="row" spacing={2}>
//           <TextField type="date" size="small"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)} />
//           <TextField type="date" size="small"
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)} />
//         </Stack>
//       </Paper>

//       {/* ================= PARTY ================= */}
//       <Paper sx={sectionBox}>
//         <Typography fontSize={13} fontWeight={600} mb={1}>Party</Typography>

//         <RadioGroup row value={partyMode}
//           onChange={(e) => setPartyMode(e.target.value)}>
//           <FormControlLabel value="all" control={<Radio size="small" />} label="All" />
//           <FormControlLabel value="selected" control={<Radio size="small" />} label="Selected" />
//         </RadioGroup>

//         <Stack direction="row" spacing={2} mt={1}>
//           <Autocomplete
//             size="small"
//             fullWidth
//             options={accounts}
//             getOptionLabel={(o) => o.AccountName || ""}
//             value={selectedParty}
//             onChange={(e, v) => setSelectedParty(v)}
//             renderInput={(params) =>
//               <TextField {...params} size="small" placeholder="Select Party" />
//             }
//           />

//           <FormControlLabel
//             control={<Checkbox size="small"
//               checked={partyBookwise}
//               onChange={(e) => setPartyBookwise(e.target.checked)}
//             />}
//             label="Partywise?"
//           />
//         </Stack>
//       </Paper>

//       {/* ================= BOOK STANDARD ================= */}
//       <Paper sx={sectionBox}>
//         <Typography fontSize={13} fontWeight={600} mb={1}>Book Standard</Typography>
//         <RadioGroup row value={standardMode}
//           onChange={(e) => setStandardMode(e.target.value)}>
//           <FormControlLabel value="all" control={<Radio size="small" />} label="All" />
//           <FormControlLabel value="selected" control={<Radio size="small" />} label="Selected" />
//         </RadioGroup>
//       </Paper>

//       {/* ================= BOOK GROUP ================= */}
//       <Paper sx={sectionBox}>
//         <Typography fontSize={13} fontWeight={600} mb={1}>Book Group</Typography>
//         <RadioGroup row value={groupMode}
//           onChange={(e) => setGroupMode(e.target.value)}>
//           <FormControlLabel value="all" control={<Radio size="small" />} label="All" />
//           <FormControlLabel value="selected" control={<Radio size="small" />} label="Selected" />
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
//         <Typography fontSize={13} fontWeight={600} mb={1}>District</Typography>
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
//         <Typography fontSize={13} fontWeight={600} mb={1}>Book Selection</Typography>

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
//           height: 120,
//           overflowY: "auto",
//           fontSize: "11px"
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
//       <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
//         <Button variant="contained"
//           startIcon={<PrintIcon />}
//           sx={{ px: 3 }}
//           onClick={handlePrint}>
//           PRINT
//         </Button>

//         <Button variant="contained"
//           color="error"
//           startIcon={<CloseIcon />}
//           sx={{ px: 3 }}>
//           CLOSE
//         </Button>
//       </Stack>

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
  Button,
  Stack,
  Autocomplete,
  Radio,
  RadioGroup,
  Select,
  MenuItem,
} from "@mui/material";

import PrintIcon from "@mui/icons-material/Print";
import CloseIcon from "@mui/icons-material/Close";

export default function NetSaleSummary() {
  const reportRef = useRef();
  const [printing, setPrinting] = useState(false);

  /* ================= FINANCIAL YEAR DEFAULT ================= */

  const getFinancialYear = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;

    let startYear = month >= 4 ? year : year - 1;
    let endYear = startYear + 1;

    return {
      start: `${startYear}-04-01`,
      end: `${endYear}-03-31`,
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

  const [selectedParty, setSelectedParty] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedCity, setSelectedCity] = useState("");
  const [partyBookwise, setPartyBookwise] = useState(false);

  const [bookCode, setBookCode] = useState("");
  const [bookList, setBookList] = useState([]);
  const [standards, setStandards] = useState([]);
const [selectedStandard, setSelectedStandard] = useState(null);

  /* ================= FETCH APIs ================= */

  useEffect(() => {
    axios
      .get("https://publication.microtechsolutions.net.in/php/Accountget.php")
      .then((res) => setAccounts(res.data || []));

    axios
      .get("https://publication.microtechsolutions.net.in/php/BookGroupget.php")
      .then((res) => setGroups(res.data || []));

    axios
      .get("https://publication.microtechsolutions.net.in/php/Cityget.php")
      .then((res) => setCities(res.data || []));
  }, []);

  /* ================= BOOK SEARCH ================= */

  const handleBookSearch = async () => {
    if (!bookCode) return;

    const res = await axios.get(
      `https://publication.microtechsolutions.net.in/php/Bookcodeget.php?BookCode=${bookCode}`,
    );

    setBookList(res.data || []);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") handleBookSearch();
  };

  /* ================= PRINT ================= */

  const handlePrint = async () => {
    setPrinting(true);

    setTimeout(async () => {
      try {
        const element = reportRef.current;
        if (!element) return;

        const canvas = await html2canvas(element, {
          scale: 2,
          useCORS: true,
          logging: false,
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

  const sectionBox = {
    border: "1px solid #dcdcdc",
    borderRadius: 1,
    p: 1.5,
    background: "#ffffff",
  };

  return (
    <Box sx={{ p: 3, bgcolor: "#f4f6f9", minHeight: "100vh" }}>
      <Typography variant="subtitle1" mb={2} fontWeight={600}>
        Net Sale Summary
      </Typography>

      {/* ================= PERIOD ================= */}
      <Paper sx={{ ...sectionBox, mb: 3 }}>
        <Typography fontSize={13} fontWeight={600} mb={1}>
          Period
        </Typography>
        <Stack direction="row" spacing={2}>
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
      <Box sx={{ display: "flex", gap: 4 }}>
        {/* LEFT COLUMN */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>
          {/* PARTY */}
          <Paper sx={sectionBox}>
            <Typography fontSize={13} fontWeight={600} mb={1}>
              Party
            </Typography>

            <RadioGroup
              row
              value={partyMode}
              onChange={(e) => setPartyMode(e.target.value)}
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

            <Stack direction="row" spacing={2} mt={1}>
              <Autocomplete
                size="small"
                fullWidth
                disablePortal
                openOnFocus
                autoHighlight
                options={accounts}
                getOptionLabel={(o) => o.AccountName || ""}
                value={selectedParty}
                onChange={(e, v) => setSelectedParty(v)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    placeholder="Select Party"
                  />
                )}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    checked={partyBookwise}
                    onChange={(e) => setPartyBookwise(e.target.checked)}
                  />
                }
                label="Partywise?"
              />
            </Stack>
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
            <Typography fontSize={13} fontWeight={600} mb={1}>
              Book Selection
            </Typography>

            <TextField
              size="small"
              fullWidth
              placeholder="Enter Book Code"
              value={bookCode}
              onChange={(e) => setBookCode(e.target.value)}
              onKeyDown={handleEnter}
            />

            <Box
              mt={1}
              sx={{
                border: "1px solid #999",
                height: 90,
                overflowY: "auto",
                fontSize: "11px",
              }}
            >
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
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>

      

         
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
            <Typography fontSize={13} fontWeight={600} mb={1}>
              District
            </Typography>
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

      {/* BUTTONS */}
      <Stack direction="row" spacing={3} justifyContent="center" mt={4}>
        <Button
          variant="contained"
          startIcon={<PrintIcon />}
          onClick={handlePrint}
        >
          PRINT
        </Button>

        <Button variant="contained" color="error" startIcon={<CloseIcon />}>
          CLOSE
        </Button>
      </Stack>
  {/* ================= HIDDEN PRINT SECTION ================= */}
      <div style={{ position: "absolute", left: "-9999px", top: 0 }}>
        <div
          ref={reportRef}
          style={{
            width: "794px",
            minHeight: "1123px",
            padding: "40px",
            fontFamily: "Times New Roman, serif",
            fontSize: "13px",
            background: "#fff",
            color: "#000",
            position: "relative"
          }}
        >
          <div style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
            M. V. Phadke & Co. Kolhapur
          </div>

          <div style={{ textAlign: "center", marginTop: "4px" }}>
            Net Sale Summary
          </div>

          <div style={{ textAlign: "center", marginTop: "4px" }}>
            From {startDate} To {endDate} (including Sales Return)
          </div>

          <div style={{ position: "absolute", right: "40px", top: "40px" }}>
            Page 1 of 1
          </div>

          <div style={{ marginTop: "15px", borderTop: "2px solid black" }} />
          <div style={{ marginTop: "2px", borderTop: "1px solid black" }} />

          <table
            width="100%"
            cellPadding="4"
            cellSpacing="0"
            style={{ marginTop: "10px", borderCollapse: "collapse", textAlign: "center" }}
          >
            <thead>
              <tr style={{ borderBottom: "1px solid black" }}>
                <th>Book Code</th>
                <th>Book Name</th>
                <th>Total Copies</th>
              </tr>
            </thead>
            <tbody>
              {bookList.map((book, index) => (
                <tr key={index}>
                  <td>{book.BookCode}</td>
                  <td style={{ textAlign: "left" }}>{book.BookName}</td>
                  <td>{book.CopiesSold || 0}</td>
                </tr>
              ))}

              <tr style={{ fontWeight: "bold", borderTop: "1px solid black" }}>
                <td colSpan="2">Total</td>
                <td>
                  {bookList.reduce(
                    (sum, item) => sum + Number(item.CopiesSold || 0),
                    0
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </Box>
  );
}
