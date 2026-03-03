import { useState, useEffect, useRef } from "react";

import {
  Box,
  Paper,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Grid,
  Stack,
  Checkbox,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Divider,
  CircularProgress,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@mui/material";

import PrintIcon from "@mui/icons-material/Print";
import CloseIcon from "@mui/icons-material/Close";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EventIcon from "@mui/icons-material/Event";

import { useNavigate } from "react-router-dom";

import axios from "axios";
import dayjs from "dayjs";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function SalesPublicationSummary() {

  const navigate = useNavigate();
  const reportRef = useRef();

  const [printing, setPrinting] = useState(false);

  const [mode, setMode] = useState("month");

  const [showPub, setShowPub] = useState(true);
  const [showPeriod, setShowPeriod] = useState(false);

  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(false);

  const [selectedPubs, setSelectedPubs] = useState([]);

  /* ================= FINANCIAL YEAR ================= */

  const today = dayjs();

  const fyYear =
    today.month() >= 3
      ? today.year()
      : today.year() - 1;

  const [startDate, setStartDate] =
    useState(`${fyYear}-04-01`);

  const [endDate, setEndDate] =
    useState(`${fyYear + 1}-03-31`);

  /* ================= FETCH PUBLICATIONS ================= */

  useEffect(() => {
    fetchPublications();
  }, []);

  const fetchPublications = async () => {

    try {

      setLoading(true);

      const res = await axios.get(
        "https://publication.microtechsolutions.net.in/php/Publicationget.php"
      );

      if (Array.isArray(res.data)) {

        const names = res.data.map(
          x =>
            x.PublicationName ||
            x.Publication ||
            Object.values(x)[0]
        );

        setPublications(names);

      }

    }
    catch {
      setPublications([]);
    }
    finally {
      setLoading(false);
    }

  };

  /* ================= SELECT ================= */

  const togglePub = (name) => {

    setSelectedPubs(prev =>
      prev.includes(name)
        ? prev.filter(x => x !== name)
        : [...prev, name]
    );

  };

  const handleSelectAll = () => {

    if (selectedPubs.length === publications.length)
      setSelectedPubs([]);
    else
      setSelectedPubs(publications);

  };

  /* ================= PRINT FUNCTION ================= */

  const handlePrint = async () => {

    if (!reportRef.current) return;

    setPrinting(true);

    setTimeout(async () => {

      try {

        const canvas =
          await html2canvas(reportRef.current, {
            scale: 2,
            useCORS: true
          });

        const imgData =
          canvas.toDataURL("image/png");

        const pdf =
          new jsPDF("p", "mm", "a4");

        const width = 190;
        const height =
          (canvas.height * width) /
          canvas.width;

        pdf.addImage(
          imgData,
          "PNG",
          10,
          10,
          width,
          height
        );

        window.open(
          pdf.output("bloburl"),
          "_blank"
        );

      }
      catch (err) {

        console.error(err);

      }
      finally {

        setPrinting(false);

      }

    }, 500);

  };

  /* ================= UI ================= */

  return (

    <Box sx={{ p:3, background:"#f4f6f8", minHeight:"100vh" }}>

      {/* HEADER */}

      <Paper sx={{ p:2, mb:3 }}>

        <Typography variant="h4" fontWeight="bold">
          Sales Publicationwise Summary
        </Typography>

      </Paper>

      <Grid container spacing={3}>

        {/* LEFT MENU */}

        <Grid item xs={11} md={2}>

          <Paper sx={{ p:2 }}>

            <Stack spacing={2}>

              <Button
                variant={showPub ? "contained":"outlined"}
                startIcon={<MenuBookIcon />}
                onClick={()=>{
                  setShowPub(true);
                  setShowPeriod(false);
                }}
              >
                PUBLICATION
              </Button>

              <Button
                variant={showPeriod ? "contained":"outlined"}
                startIcon={<EventIcon />}
                onClick={()=>{
                  setShowPeriod(true);
                  setShowPub(false);
                }}
              >
                PERIOD
              </Button>

            </Stack>

          </Paper>

        </Grid>


        {/* RIGHT PANEL */}

        <Grid item xs={12} md={9}>

          <Paper sx={{ p:3 }}>

            {/* REPORT MODE */}

            <Typography fontWeight="bold">
              Report Mode
            </Typography>

            <RadioGroup
              value={mode}
              onChange={(e)=>setMode(e.target.value)}
            >

              <FormControlLabel
                value="date"
                control={<Radio />}
                label="Datewise"
              />

              <FormControlLabel
                value="month"
                control={<Radio />}
                label="Monthwise"
              />

            </RadioGroup>

            <Divider sx={{ my:2 }}/>


            {/* PUBLICATION */}

            {showPub && (

              <Box>

                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={1}
                >

                  <Typography fontWeight="bold">
                    Select Publication
                  </Typography>

                  <Button size="small" onClick={handleSelectAll}>
                    Select All
                  </Button>

                </Box>

                <Paper sx={listBoxStyle}>

                  {loading ?

                    <CircularProgress/>

                    :

                    <List>

                      {publications.map((pub,i)=>(

                        <ListItemButton
                          key={i}
                          onClick={()=>togglePub(pub)}
                        >

                          <ListItemIcon>

                            <Checkbox
                              checked={selectedPubs.includes(pub)}
                            />

                          </ListItemIcon>

                          <ListItemText primary={pub}/>

                        </ListItemButton>

                      ))}

                    </List>

                  }

                </Paper>

              </Box>

            )}


            {/* PERIOD */}

            {showPeriod && (

              <Box>

                <Typography fontWeight="bold">
                  Period
                </Typography>

                <TextField
                  label="Start Date"
                  type="date"
                  fullWidth
                  value={startDate}
                  onChange={(e)=>setStartDate(e.target.value)}
                  sx={{ mb:2 }}
                  InputLabelProps={{ shrink:true }}
                />

                <TextField
                  label="End Date"
                  type="date"
                  fullWidth
                  value={endDate}
                  onChange={(e)=>setEndDate(e.target.value)}
                  InputLabelProps={{ shrink:true }}
                />

              </Box>

            )}


            {/* BUTTONS */}

            <Box mt={3}>

              <Button
                variant="contained"
                startIcon={<PrintIcon />}
                onClick={handlePrint}
                disabled={printing}
              >
                Print
              </Button>

              <Button
                variant="contained"
                color="error"
                startIcon={<CloseIcon />}
                onClick={()=>navigate(-1)}
                sx={{ ml:2 }}
              >
                Close
              </Button>

            </Box>

          </Paper>

        </Grid>

      </Grid>


      {/* ================= PRINT AREA ================= */}

      <Box
        ref={reportRef}
        sx={{
          position:"absolute",
          left:"-9999px",
          width:"210mm",
          minHeight:"297mm",
          background:"#fff",
          padding:"15mm",
          fontSize:"11px",
          fontFamily:"serif"
        }}
      >

        {/* HEADER */}

        <Typography align="center" fontWeight="bold" fontSize={16}>
          PHADKE BOOK HOUSE
        </Typography>

        <Typography align="center" fontSize={13}>
          Sales Publicationwise Summary
        </Typography>

        <Typography align="center" fontSize={11}>
          From {startDate} To {endDate}
        </Typography>

        <Divider sx={{ my:1 }}/>


        {/* TABLE STRUCTURE */}

        <Table size="small">

          <TableHead>

            <TableRow>

              <TableCell sx={headerCell}>
                Particulars
              </TableCell>

              <TableCell align="right" sx={headerCell}>
                Sale
              </TableCell>

              <TableCell align="right" sx={headerCell}>
                Sale Return
              </TableCell>

              <TableCell align="right" sx={headerCell}>
                Net Sale
              </TableCell>

            </TableRow>

          </TableHead>

          <TableBody>

            <TableRow>

              <TableCell colSpan={4} align="center">
                (Data will load from backend)
              </TableCell>

            </TableRow>

          </TableBody>

        </Table>

      </Box>

    </Box>

  );

}

/* ================= STYLES ================= */

const listBoxStyle = {

  border:"1px solid #bbb",
  padding:"6px",
  height:"240px",
  overflowY:"auto",
  background:"#fff"

};

const headerCell = {

  fontWeight:"bold",
  borderBottom:"1px solid black"

};































