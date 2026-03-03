// import { useState, useEffect, useRef } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   Grid,
//   Button,
//   Stack,
//   Card,
//   CardContent,
//   TextField,
//   List,
//   ListItemButton,
//   ListItemText,
//   Checkbox,
//   ListItemIcon,
//   CircularProgress,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
//   Divider
// } from "@mui/material";

// import MenuBookIcon from "@mui/icons-material/MenuBook";
// import EventIcon from "@mui/icons-material/Event";
// import TagIcon from "@mui/icons-material/Tag";
// import PrintIcon from "@mui/icons-material/Print";
// import CloseIcon from "@mui/icons-material/Close";

// import axios from "axios";
// import dayjs from "dayjs";

// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

// export default function SalesBookwisePartywise() {

//   const reportRef = useRef();

//   const [printing, setPrinting] = useState(false);

//   const [activePanel, setActivePanel] = useState("book");

//   const [showBooks, setShowBooks] = useState("no");

//   /* ================= FINANCIAL YEAR ================= */

//   const today = dayjs();

//   const fyYear =
//     today.month() >= 3
//       ? today.year()
//       : today.year() - 1;

//   const [startDate, setStartDate] =
//     useState(`${fyYear}-04-01`);

//   const [endDate, setEndDate] =
//     useState(`${fyYear + 1}-03-31`);

//   /* ================= PUBLICATIONS ================= */

//   const [publications, setPublications] = useState([]);
//   const [selectedPublications, setSelectedPublications] = useState([]);
//   const [pubLoading, setPubLoading] = useState(false);

//   useEffect(() => {
//     loadPublications();
//   }, []);

//   const loadPublications = async () => {

//     try {

//       setPubLoading(true);

//       const res =
//         await axios.get(
//           "https://publication.microtechsolutions.net.in/php/Publicationget.php"
//         );

//       const list =
//         res.data.map(
//           x =>
//             x.PublicationName ||
//             Object.values(x)[0]
//         );

//       setPublications(list);

//     }
//     catch {
//       setPublications([]);
//     }
//     finally {
//       setPubLoading(false);
//     }

//   };

//   const togglePublication = (name) => {

//     setSelectedPublications(prev =>
//       prev.includes(name)
//         ? prev.filter(x => x !== name)
//         : [...prev, name]
//     );

//   };

//   const selectAllPublications = () => {

//     if (selectedPublications.length === publications.length)
//       setSelectedPublications([]);
//     else
//       setSelectedPublications(publications);

//   };

//   /* ================= PARTY ================= */

//   const [parties, setParties] = useState([]);
//   const [selectedParties, setSelectedParties] = useState([]);
//   const [partyLoading, setPartyLoading] = useState(false);

//   useEffect(() => {
//     loadParties();
//   }, []);

//   const loadParties = async () => {

//     try {

//       setPartyLoading(true);

//       const res =
//         await axios.get(
//           "https://publication.microtechsolutions.net.in/php/Publicationget.php"
//         );

//       const list =
//         res.data.map(
//           x =>
//             x.PublicationName ||
//             Object.values(x)[0]
//         );

//       setParties(list);

//     }
//     catch {
//       setParties([]);
//     }
//     finally {
//       setPartyLoading(false);
//     }

//   };

//   const toggleParty = (name) => {

//     setSelectedParties(prev =>
//       prev.includes(name)
//         ? prev.filter(x => x !== name)
//         : [...prev, name]
//     );

//   };

//   const selectAllParties = () => {

//     if (selectedParties.length === parties.length)
//       setSelectedParties([]);
//     else
//       setSelectedParties(parties);

//   };

//   /* ================= BOOK ================= */

//   const [bookCode, setBookCode] = useState("");
//   const [bookInfo, setBookInfo] = useState(null);
//   const [bookLoading, setBookLoading] = useState(false);

//   const loadBook = async (code) => {

//     if (!code) {
//       setBookInfo(null);
//       return;
//     }

//     try {

//       setBookLoading(true);

//       const res =
//         await axios.get(
//           `https://publication.microtechsolutions.net.in/php/Bookcodeget.php?BookCode=${code}`
//         );

//       if (res.data.length > 0)
//         setBookInfo(res.data[0]);
//       else
//         setBookInfo(null);

//     }
//     catch {
//       setBookInfo(null);
//     }
//     finally {
//       setBookLoading(false);
//     }

//   };

//   /* ================= PRINT FUNCTION ================= */

//   const handlePrint = async () => {

//     setPrinting(true);

//     setTimeout(async () => {

//       try {

//         const element = reportRef.current;

//         if (!element) return;

//         const canvas =
//           await html2canvas(element, {
//             scale: 2,
//             useCORS: true,
//             logging: false
//           });

//         const imgData =
//           canvas.toDataURL("image/png");

//         const pdf =
//           new jsPDF("p", "mm", "a4");

//         pdf.addImage(
//           imgData,
//           "PNG",
//           0,
//           0,
//           210,
//           297
//         );

//         window.open(
//           pdf.output("bloburl"),
//           "_blank"
//         );

//       }
//       catch (error) {

//         console.error("PDF Error:", error);

//       }
//       finally {

//         setPrinting(false);

//       }

//     }, 500);

//   };

//   /* ================= LIST STYLE ================= */

//   const listBoxStyle = {
//     border: "1px solid #999",
//     p: 1,
//     height: 240,
//     overflowY: "auto",
//     bgcolor: "#fff",
//     fontSize: "0.75rem",
//     fontFamily: "monospace"
//   };

//   /* ================= UI ================= */

//   return (

//     <Box p={3} bgcolor="#f4f6f8">

//       <Paper sx={{p:2,mb:3}}>
//         <Typography variant="h5" fontWeight="bold">
//           Sales Bookwise Partywise
//         </Typography>
//       </Paper>

//       <Grid container spacing={3}>

//         {/* LEFT MENU */}

//         <Grid item xs={3}>

//           <Stack spacing={2}>

//             <Button
//               startIcon={<MenuBookIcon/>}
//               variant={activePanel==="publication"?"contained":"outlined"}
//               onClick={()=>setActivePanel("publication")}
//             >
//               Publication
//             </Button>

//             <Button
//               startIcon={<EventIcon/>}
//               variant={activePanel==="period"?"contained":"outlined"}
//               onClick={()=>setActivePanel("period")}
//             >
//               Period
//             </Button>

//             <Button
//               startIcon={<TagIcon/>}
//               variant={activePanel==="book"?"contained":"outlined"}
//               onClick={()=>setActivePanel("book")}
//             >
//               Book Code
//             </Button>

//           </Stack>

//         </Grid>

//         {/* RIGHT */}

//         <Grid item xs={9}>

//           <Card sx={{mb:2}}>
//             <CardContent>

//               <Typography fontWeight="bold">
//                 Show Books ?
//               </Typography>

//               <RadioGroup
//                 row
//                 value={showBooks}
//                 onChange={(e)=>setShowBooks(e.target.value)}
//               >
//                 <FormControlLabel value="yes" control={<Radio/>} label="Yes"/>
//                 <FormControlLabel value="no" control={<Radio/>} label="No"/>
//               </RadioGroup>

//             </CardContent>
//           </Card>

//           {/* PERIOD */}

//           {activePanel==="period" && (

//             <Card sx={{mb:2}}>

//               <CardContent>

//                 <Typography fontWeight="bold">
//                   Period
//                 </Typography>

//                 <Grid container spacing={2} mt={1}>

//                   <Grid item xs={6}>
//                     <TextField
//                       label="Start Date"
//                       type="date"
//                       fullWidth
//                       size="small"
//                       value={startDate}
//                       onChange={(e)=>setStartDate(e.target.value)}
//                       InputLabelProps={{shrink:true}}
//                     />
//                   </Grid>

//                   <Grid item xs={6}>
//                     <TextField
//                       label="End Date"
//                       type="date"
//                       fullWidth
//                       size="small"
//                       value={endDate}
//                       onChange={(e)=>setEndDate(e.target.value)}
//                       InputLabelProps={{shrink:true}}
//                     />
//                   </Grid>

//                 </Grid>

//               </CardContent>

//             </Card>

//           )}

//           {/* BOOK */}

//           {activePanel==="book" && (

//             <Card>

//               <CardContent>

//                 <Typography fontWeight="bold">
//                   Book Search
//                 </Typography>

//                 <TextField
//                   fullWidth
//                   size="small"
//                   value={bookCode}
//                   onChange={(e)=>{
//                     setBookCode(e.target.value);
//                     loadBook(e.target.value);
//                   }}
//                   sx={{mt:1}}
//                 />

//                 {bookLoading && <CircularProgress sx={{mt:2}}/>}

//                 {bookInfo && (

//                   <Box mt={2}>

//                     <Typography>
//                       Code : {bookInfo.BookCode}
//                     </Typography>

//                     <Typography>
//                       Name : {bookInfo.BookName}
//                     </Typography>

//                   </Box>

//                 )}

//               </CardContent>

//             </Card>

//           )}

//           {/* PARTY */}

//           <Card sx={{mt:2}}>

//             <CardContent>

//               <Typography fontWeight="bold">
//                 Party
//               </Typography>

//               <Button size="small" onClick={selectAllParties}>
//                 Select All
//               </Button>

//               <Box sx={listBoxStyle}>

//                 {partyLoading
//                   ?
//                   <CircularProgress/>
//                   :
//                   <List>

//                     {parties.map(party=>(

//                       <ListItemButton
//                         key={party}
//                         onClick={()=>toggleParty(party)}
//                       >

//                         <ListItemIcon>
//                           <Checkbox
//                             checked={
//                               selectedParties.includes(party)
//                             }
//                           />
//                         </ListItemIcon>

//                         <ListItemText primary={party}/>

//                       </ListItemButton>

//                     ))}

//                   </List>

//                 }

//               </Box>

//             </CardContent>

//           </Card>

//           {/* BUTTON */}

//           <Box textAlign="center" mt={3}>

//             <Button
//               variant="contained"
//               startIcon={<PrintIcon/>}
//               onClick={handlePrint}
//               disabled={printing}
//               sx={{mr:2}}
//             >
//               Print
//             </Button>

//             <Button
//               variant="contained"
//               color="error"
//               startIcon={<CloseIcon/>}
//             >
//               Close
//             </Button>

//           </Box>

//         </Grid>

//       </Grid>

//       {/* PRINT AREA */}

//       <Box
//         ref={reportRef}
//         sx={{
//           width:"210mm",
//           minHeight:"297mm",
//           background:"#fff",
//           padding:"20mm",
//           position:"absolute",
//           left:"-9999px"
//         }}
//       >

//         <Typography align="center" fontWeight="bold" fontSize={18}>
//           PHADKE BOOK HOUSE
//         </Typography>

//         <Typography align="center">
//           Sales Bookwise Partywise
//         </Typography>

//         <Typography align="center">
//           From {startDate} To {endDate}
//         </Typography>

//         <Divider sx={{my:2}}/>

//         <table width="100%" border="1" cellPadding="5">

//           <thead>

//             <tr>
//               <th>Sr No</th>
//               <th>Party Name</th>
//               <th>Book Code</th>
//               <th>Book Name</th>
//               <th>Sale</th>
//               <th>Return</th>
//               <th>Net Sale</th>
//             </tr>

//           </thead>

//           <tbody>

//             <tr>
//               <td colSpan="7" align="center">
//                 Report Structure Only — Data will load from backend
//               </td>
//             </tr>

//           </tbody>

//         </table>

//       </Box>

//     </Box>

//   );

// }















































import { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  TextField,
  Checkbox,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
  Divider
} from "@mui/material";

import PrintIcon from "@mui/icons-material/Print";
import CloseIcon from "@mui/icons-material/Close";

import axios from "axios";
import dayjs from "dayjs";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function SalesBookwisePartywise() {

  const reportRef = useRef();
  const [printing, setPrinting] = useState(false);
  const [showBooks, setShowBooks] = useState("no");

  const today = dayjs();
  const fyYear = today.month() >= 3 ? today.year() : today.year() - 1;

  const [startDate, setStartDate] = useState(`${fyYear}-04-01`);
  const [endDate, setEndDate] = useState(`${fyYear + 1}-03-31`);

  const [publications, setPublications] = useState([]);
  const [selectedPublications, setSelectedPublications] = useState([]);

  const [parties, setParties] = useState([]);
  const [selectedParties, setSelectedParties] = useState([]);

  const [bookCode, setBookCode] = useState("");
  const [bookInfo, setBookInfo] = useState(null);

  useEffect(() => {
    loadPublications();
    loadParties();
  }, []);

  const loadPublications = async () => {
    try {
      const res = await axios.get(
        "https://publication.microtechsolutions.net.in/php/Publicationget.php"
      );
      setPublications(
        res.data.map(x => x.PublicationName || Object.values(x)[0])
      );
    } catch {
      setPublications([]);
    }
  };

  const loadParties = async () => {
    try {
      const res = await axios.get(
        "https://publication.microtechsolutions.net.in/php/Accountget.php"
      );
      setParties(
        res.data.map(x => x.AccountName || Object.values(x)[0])
      );
    } catch {
      setParties([]);
    }
  };

  const loadBookInfo = async (code) => {
    if (!code) return setBookInfo(null);
    try {
      const res = await axios.get(
        `https://publication.microtechsolutions.net.in/php/Bookcodeget.php?BookCode=${code}`
      );
      setBookInfo(res.data.length > 0 ? res.data[0] : null);
    } catch {
      setBookInfo(null);
    }
  };

  const togglePublication = (name) => {
    setSelectedPublications(prev =>
      prev.includes(name)
        ? prev.filter(x => x !== name)
        : [...prev, name]
    );
  };

  const toggleParty = (name) => {
    setSelectedParties(prev =>
      prev.includes(name)
        ? prev.filter(x => x !== name)
        : [...prev, name]
    );
  };
const handlePrint = async () => {
    setPrinting(true);
    setTimeout(async () => {
      const element = reportRef.current;
      const canvas = await html2canvas(element, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
      window.open(pdf.output("bloburl"), "_blank");
      setPrinting(false);
    }, 500);
  };


  return (
    <Box p={3} bgcolor="#f4f6f8">

      <Typography variant="h5" fontWeight="bold" mb={3}>
        Sales Bookwise Partywise
      </Typography>

      {/* TOP SECTION */}
      <Paper sx={{ p: 2, mb: 3, borderRadius: 2 }} elevation={2}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Typography fontWeight="bold">Show Book ?</Typography>
            <RadioGroup
              row
              value={showBooks}
              onChange={(e) => setShowBooks(e.target.value)}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </Grid>

          <Grid item xs={8}>
            <Typography fontWeight="bold">Periode</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  type="date"
                  fullWidth
                  size="small"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  type="date"
                  fullWidth
                  size="small"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      {/* PUBLICATION + BOOK CODE */}
      <Grid container spacing={3} mb={3}>

        <Grid item xs={6}>
          <Paper sx={{ p: 2, borderRadius: 2 }} elevation={2}>
  <Typography fontWeight="bold">Publication</Typography>
  <Divider sx={{ my: 1 }} />

  {/* SELECT ALL */}
  <FormControlLabel
    control={
      <Checkbox
        checked={
          publications.length > 0 &&
          selectedPublications.length === publications.length
        }
        indeterminate={
          selectedPublications.length > 0 &&
          selectedPublications.length < publications.length
        }
        onChange={(e) => {
          if (e.target.checked) {
            setSelectedPublications(publications);
          } else {
            setSelectedPublications([]);
          }
        }}
      />
    }
    label="Select All"
  />

  <Divider sx={{ mb: 1 }} />

  <Box sx={{ maxHeight: 220, overflowY: "auto" }}>
    {publications.map(pub => (
      <FormControlLabel
        key={pub}
        control={
          <Checkbox
            checked={selectedPublications.includes(pub)}
            onChange={() => togglePublication(pub)}
          />
        }
        label={pub}
      />
    ))}
  </Box>
</Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper sx={{ p: 2, borderRadius: 2 }} elevation={2}>
            <Typography fontWeight="bold">Book Code</Typography>
            <Divider sx={{ my: 1 }} />
            <TextField
              fullWidth
              size="small"
              value={bookCode}
              onChange={(e) => {
                setBookCode(e.target.value);
                loadBookInfo(e.target.value);
              }}
            />
            {bookInfo && (
              <Box mt={2}>
                <Typography>Code: {bookInfo.BookCode}</Typography>
                <Typography>Name: {bookInfo.BookName}</Typography>
              </Box>
            )}
          </Paper>
        </Grid>

      </Grid>

      {/* PARTY */}
      <Paper sx={{ p: 2, borderRadius: 2 }} elevation={2} mb={3}>
        <Typography fontWeight="bold">Party</Typography>
        <Divider sx={{ my: 1 }} />
        <Box sx={{ maxHeight: 150, overflowY: "auto" }}>
          {parties.map(party => (
            <FormControlLabel
              key={party}
              control={
                <Checkbox
                  checked={selectedParties.includes(party)}
                  onChange={() => toggleParty(party)}
                />
              }
              label={party}
            />
          ))}
        </Box>
      </Paper>

      {/* BUTTONS */}
      <Box textAlign="center" mt={3}>
        <Button
          variant="contained"
          startIcon={<PrintIcon />}
          onClick={handlePrint}
          disabled={printing}
          sx={{ mr: 2 }}
        >
          Print
        </Button>

        <Button
          variant="outlined"
          color="error"
          startIcon={<CloseIcon />}
        >
          Close
        </Button>
      </Box>

      {/* PRINT AREA */}
   <Box
        ref={reportRef}
        sx={{
          width: "210mm",
          minHeight: "297mm",
          background: "#fff",
          padding: "20mm",
          position: "absolute",
          left: "-9999px"
        }}
      >

        <Typography align="center" fontWeight="bold">
          PHADKE BOOK HOUSE
        </Typography>

        <Typography align="center">
          From {startDate} To {endDate}
        </Typography>
<table
  width="100%"
  style={{
    borderCollapse: "collapse",
    marginTop: "10px",
    width: "100%"
  }}
>
  <thead>
    <tr style={{ borderBottom: "1px solid black" }}>
      <th style={{ textAlign: "left", padding: "6px" }}>
        Particulars
      </th>

      {showBooks === "yes" ? (
        <>
         
          <th style={{ textAlign: "right", padding: "6px" }}>
            Sale
          </th>
          <th style={{ textAlign: "right", padding: "6px" }}>
            Sale Return
          </th>
          <th style={{ textAlign: "right", padding: "6px" }}>
            Net Sale
          </th>
        </>
      ) : (
        <>
          <th style={{ textAlign: "right", padding: "6px" }}>
            Sale
          </th>
          <th style={{ textAlign: "right", padding: "6px" }}>
            Sale Return
          </th>
          <th style={{ textAlign: "right", padding: "6px" }}>
            Net Sale
          </th>
        </>
      )}
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style={{ padding: "6px" }}>
        Report Structure Only
      </td>

      {showBooks === "yes" ? (
        <>
          <td style={{ textAlign: "center", padding: "6px" }}>
            {bookCode || ""}
          </td>
          <td style={{ padding: "6px" }}>
            {bookInfo?.BookName || ""}
          </td>
          <td style={{ textAlign: "right", padding: "6px" }}>
            43
          </td>
          <td style={{ textAlign: "right", padding: "6px" }}>
            0
          </td>
          <td style={{ textAlign: "right", padding: "6px" }}>
            43
          </td>
        </>
      ) : (
        <>
          <td style={{ textAlign: "right", padding: "6px" }}>
            43
          </td>
          <td style={{ textAlign: "right", padding: "6px" }}>
            0
          </td>
          <td style={{ textAlign: "right", padding: "6px" }}>
            43
          </td>
        </>
      )}
    </tr>

    {/* TOTAL ROW */}
    <tr style={{ borderTop: "1px solid black" }}>
      <td style={{ padding: "6px" }}>
        <strong>Total</strong>
      </td>

      {showBooks === "yes" ? (
        <>
          <td></td>
          <td></td>
          <td style={{ textAlign: "right", padding: "6px" }}>
            <strong>43</strong>
          </td>
          <td style={{ textAlign: "right", padding: "6px" }}>
            <strong>0</strong>
          </td>
          <td style={{ textAlign: "right", padding: "6px" }}>
            <strong>43</strong>
          </td>
        </>
      ) : (
        <>
          <td style={{ textAlign: "right", padding: "6px" }}>
            <strong>43</strong>
          </td>
          <td style={{ textAlign: "right", padding: "6px" }}>
            <strong>0</strong>
          </td>
          <td style={{ textAlign: "right", padding: "6px" }}>
            <strong>43</strong>
          </td>
        </>
      )}
    </tr>
  </tbody>
</table>
      </Box>

    </Box>
  );
}