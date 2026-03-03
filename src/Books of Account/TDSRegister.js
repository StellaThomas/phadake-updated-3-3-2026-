import { useEffect, useState, useRef } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import {
  Box,
  Paper,
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  Button,
  Container,
  Stack
} from "@mui/material";

import PrintIcon from "@mui/icons-material/Print";
import CloseIcon from "@mui/icons-material/Close";

export default function TDSRegister() {

  const reportRef = useRef();
  const [printing, setPrinting] = useState(false);

  /* ================= FINANCIAL YEAR ================= */

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
  const [summaryMode, setSummaryMode] = useState("no");
  const [parties, setParties] = useState([]);
  const [selectedParty, setSelectedParty] = useState("");

  /* ================= FETCH PARTY ================= */

  useEffect(() => {
    axios
      .get("https://publication.microtechsolutions.net.in/php/Accountget.php")
      .then(res => setParties(res.data || []));
  }, []);

  /* ================= HANDLE PRINT ================= */

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

  /* ================= COMPACT STYLE ================= */

  const cardStyle = {
    p: 2,
    mb: 2,
    borderRadius: 2,
    boxShadow: "0 3px 10px rgba(0,0,0,0.08)"
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ py: 2 }}>

        <Typography
          variant="h5"
          align="center"
          mb={2}
          fontWeight={600}
        >
          TDS Register
        </Typography>

        {/* PERIOD */}
        <Paper sx={cardStyle}>
          <Typography fontSize={14} fontWeight={600} mb={1}>
            Period
          </Typography>
          <Stack direction="row" spacing={2}>
            <TextField
              size="small"
              type="date"
              fullWidth
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <TextField
              size="small"
              type="date"
              fullWidth
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Stack>
        </Paper>

        {/* SUMMARY */}
        <Paper sx={cardStyle}>
          <Typography fontSize={14} fontWeight={600}>
            Show Summary?
          </Typography>
          <RadioGroup
            row
            value={summaryMode}
            onChange={(e) => setSummaryMode(e.target.value)}
          >
            <FormControlLabel
              value="yes"
              control={<Radio size="small" />}
              label="Yes"
            />
            <FormControlLabel
              value="no"
              control={<Radio size="small" />}
              label="No"
            />
          </RadioGroup>
        </Paper>

        {/* PARTY */}
        <Paper sx={cardStyle}>
          <Typography fontSize={14} fontWeight={600} mb={1}>
            Party
          </Typography>
          <Select
            size="small"
            fullWidth
            value={selectedParty}
            onChange={(e) => setSelectedParty(e.target.value)}
          >
            {parties.map((p, i) => (
              <MenuItem key={i} value={p.AccountName}>
                {p.AccountName}
              </MenuItem>
            ))}
          </Select>
        </Paper>

        {/* BUTTONS */}
        <Box textAlign="center" mt={2}>
          <Button
            size="small"
            variant="contained"
            startIcon={<PrintIcon />}
            onClick={handlePrint}
            sx={{
              px: 4,
              py: 0.8,
              mr: 2,
              borderRadius: 1.5,
              fontSize: 13
            }}
          >
            PRINT
          </Button>

          <Button
            size="small"
            variant="contained"
            color="error"
            startIcon={<CloseIcon />}
            sx={{
              px: 4,
              py: 0.8,
              borderRadius: 1.5,
              fontSize: 13
            }}
          >
            CLOSE
          </Button>
        </Box>

        {/* ================= PRINT STRUCTURE ================= */}
        <div style={{ position: "absolute", left: "-9999px", top: 0 }}>
          <div
            ref={reportRef}
            style={{
              width: "794px",
              minHeight: "1123px",
              padding: "40px",
              fontFamily: "Times New Roman, serif",
              fontSize: "12px",
              background: "#ffffff",
              color: "#000"
            }}
          >

            <div style={{ textAlign: "center", fontWeight: "bold", fontSize: "18px" }}>
              Phadke Prakashan, Kolhapur.
            </div>

            <div style={{ textAlign: "center", marginTop: "5px" }}>
              TDS Register
            </div>

            <div style={{ textAlign: "center", marginTop: "5px" }}>
              From {startDate} to {endDate}
            </div>

            <div style={{
              position: "absolute",
              right: "40px",
              top: "60px"
            }}>
              Page #
            </div>

            <div style={{
              borderTop: "2px dashed #000",
              marginTop: "20px"
            }} />

            <table width="100%" style={{ marginTop: "10px", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th align="left">Trans Date</th>
                  <th align="left">Entry #</th>
                  <th align="left">Ref No.</th>
                  <th align="left">Trans Cd.</th>
                  <th align="right">Amount</th>
                  <th align="right">Rate</th>
                  <th align="right">TDS Amount</th>
                  <th align="right">Surcharge</th>
                  <th align="right">H. Edu. Cess</th>
                  <th align="right">Total TDS</th>
                  <th align="left">Dt. of Dep.</th>
                  <th align="left">Bank Name</th>
                  <th align="left">Cert #</th>
                </tr>
              </thead>
            </table>

            <div style={{
              borderTop: "2px dashed #000",
              marginTop: "5px"
            }} />

            <div style={{ marginTop: "20px", minHeight: "200px" }} />

            <div style={{ marginTop: "30px", fontWeight: "bold" }}>
              PAN NO -
            </div>

            <div style={{ borderBottom: "1px dotted #000", marginTop: "10px" }} />
            <div style={{ borderBottom: "1px dotted #000", marginTop: "10px" }} />

            <div style={{ marginTop: "30px", fontWeight: "bold" }}>
              Sub Total
            </div>

            <div style={{ borderTop: "2px solid #000", marginTop: "10px" }} />
            <div style={{ borderTop: "2px dashed #000", marginTop: "5px" }} />

          </div>
        </div>

      </Box>
    </Container>
  );
}