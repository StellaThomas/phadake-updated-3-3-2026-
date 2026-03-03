import { useState, useEffect, useRef } from "react";

import {
  Box,
  Paper,
  Typography,
  Grid,
  Button,
  Stack,
  TextField,
  Checkbox,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  CircularProgress,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@mui/material";

import EventIcon from "@mui/icons-material/Event";
import BusinessIcon from "@mui/icons-material/Business";
import PrintIcon from "@mui/icons-material/Print";
import CloseIcon from "@mui/icons-material/Close";

import { useNavigate } from "react-router-dom";

import axios from "axios";
import dayjs from "dayjs";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function PartywiseSalesReceipt() {

  const navigate = useNavigate();
  const reportRef = useRef();

  const [panel, setPanel] = useState("period");
  const [printing, setPrinting] = useState(false);

  /* ================= FINANCIAL YEAR ================= */

  const today = dayjs();

  const fyYear =
    today.month() >= 3
      ? today.year()
      : today.year() - 1;

  const [startDate, setStartDate] =
    useState(`${fyYear}-04-01`);

  const [endDate, setEndDate] =
    useState(`${fyYear+1}-03-31`);


  /* ================= CITY ================= */

  const [cities, setCities] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [loadingCities, setLoadingCities] = useState(false);


  /* ================= REPORT STATE ================= */

  const [reportData, setReportData] = useState([]);


  /* ================= LOAD CITY ================= */

  useEffect(() => {
    loadCities();
  }, []);

  const loadCities = async () => {

    try {

      setLoadingCities(true);

      const res = await axios.get(
        "https://publication.microtechsolutions.net.in/php/Cityget.php"
      );

      const list =
        res.data.map(
          x => x.CityName || Object.values(x)[0]
        );

      setCities(list);

    }
    catch {

      setCities([]);

    }
    finally {

      setLoadingCities(false);

    }

  };


  /* ================= SELECT CITY ================= */

  const toggleCity = (name) => {

    setSelectedCities(prev =>
      prev.includes(name)
        ? prev.filter(x => x !== name)
        : [...prev, name]
    );

  };


  /* ================= PRINT FUNCTION (FIXED PROFESSIONAL A4) ================= */

  const handlePrint = async () => {

    setPrinting(true);

    setTimeout(async () => {

      try {

        const element = reportRef.current;

        if (!element) return;

        const canvas =
          await html2canvas(element,{
            scale:2,
            useCORS:true
          });

        const imgData =
          canvas.toDataURL("image/png");

        const pdf =
          new jsPDF("p","mm","a4");

        pdf.addImage(
          imgData,
          "PNG",
          0,
          0,
          210,
          297,
          "",
          "FAST"
        );

        window.open(
          pdf.output("bloburl"),
          "_blank"
        );

      }
      catch(err){

        console.error(err);

      }
      finally{

        setPrinting(false);

      }

    },500);

  };


  /* ================= CALCULATE ================= */

  const getClosing = (row) =>

    (Number(row.opBal || 0)
    + Number(row.bills || 0)
    + Number(row.other || 0)
    - Number(row.receipt || 0));


  /* ================= PRINT HEADER STYLE ================= */

  const cellHeader = {
    border: "1px solid #000",
    fontWeight: "bold",
    fontSize: "11px",
    padding: "6px"
  };


  /* ================= UI ================= */

  return (

    <Box sx={{minHeight:"100vh",p:4}}>

      {/* YOUR UI (UNCHANGED) */}

      <Typography variant="h4" fontWeight="bold" mb={3}>
        Partywise Sales & Receipt
      </Typography>

      <Grid container spacing={3}>

        <Grid item xs={3}>

          <Stack spacing={2}>

            <Button
              variant={panel==="period"?"contained":"outlined"}
              startIcon={<EventIcon/>}
              onClick={()=>setPanel("period")}
            >
              Period
            </Button>

            <Button
              variant={panel==="city"?"contained":"outlined"}
              startIcon={<BusinessIcon/>}
              onClick={()=>setPanel("city")}
            >
              City / District
            </Button>

          </Stack>

        </Grid>


        <Grid item xs={9}>

          <Paper sx={{p:3}}>

            <Typography fontWeight="bold">
              Period
            </Typography>

            <Grid container spacing={2} mb={2}>

              <Grid item xs={6}>

                <TextField
                  type="date"
                  fullWidth
                  value={startDate}
                  onChange={(e)=>
                    setStartDate(e.target.value)
                  }
                />

              </Grid>


              <Grid item xs={6}>

                <TextField
                  type="date"
                  fullWidth
                  value={endDate}
                  onChange={(e)=>
                    setEndDate(e.target.value)
                  }
                />

              </Grid>

            </Grid>


            {panel==="city" && (

              <Box sx={{
                maxHeight:250,
                overflowY:"auto",
                border:"1px solid #ccc"
              }}>

                {loadingCities
                ?
                  <CircularProgress/>
                :
                  <List>

                    {cities.map(city=>(

                      <ListItemButton
                        key={city}
                        onClick={()=>toggleCity(city)}
                      >

                        <ListItemIcon>

                          <Checkbox
                            checked={
                              selectedCities.includes(city)
                            }
                          />

                        </ListItemIcon>

                        <ListItemText primary={city}/>

                      </ListItemButton>

                    ))}

                  </List>
                }

              </Box>

            )}


            <Divider sx={{my:3}}/>


            <Button
              variant="contained"
              startIcon={<PrintIcon/>}
              onClick={handlePrint}
              disabled={printing}
            >
              Print
            </Button>

          </Paper>

        </Grid>

      </Grid>



      {/* ================= PROFESSIONAL A4 PRINT AREA ================= */}

      <Box
        ref={reportRef}
        sx={{
          position:"absolute",
          left:"-9999px",
          width:"210mm",
          minHeight:"297mm",
          bgcolor:"#fff",
          color:"#000",
          fontFamily:"Arial",
          fontSize:"11px",
          padding:"15mm"
        }}
      >

        <Typography align="center" sx={{fontSize:"18px",fontWeight:"bold"}}>
          PHADKE BOOK HOUSE
        </Typography>

        <Typography align="center" sx={{fontSize:"13px"}}>
          Partywise Sales & Receipt Statement
        </Typography>

        <Typography align="center" sx={{fontSize:"12px"}}>
          From {startDate} To {endDate}
        </Typography>

        <Typography sx={{mt:2,fontSize:"11px"}}>
          Selected Cities : {selectedCities.join(", ")}
        </Typography>


        <Table size="small" sx={{mt:2,border:"1px solid black"}}>

          <TableHead>

            <TableRow>

              <TableCell sx={cellHeader}>Sr No</TableCell>

              <TableCell sx={cellHeader}>
                Name Of Party
              </TableCell>

              <TableCell sx={cellHeader} align="right">
                OP Bal
              </TableCell>

              <TableCell sx={cellHeader} align="right">
                Bills
              </TableCell>

              <TableCell sx={cellHeader} align="right">
                Other
              </TableCell>

              <TableCell sx={cellHeader} align="right">
                Receipt
              </TableCell>

              <TableCell sx={cellHeader} align="right">
                Closing Bal
              </TableCell>

            </TableRow>

          </TableHead>


          <TableBody>

            {reportData.length === 0 && (

              <TableRow>

                <TableCell colSpan={7} align="center">
                  No Data Available
                </TableCell>

              </TableRow>

            )}

          </TableBody>

        </Table>

      </Box>

    </Box>

  );

}






















































