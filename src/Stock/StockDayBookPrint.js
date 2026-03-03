import { Box, Paper, Typography, Button } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import { useLocation } from "react-router-dom";

export default function StockDayBookPrint() {

  const { state } = useLocation() || {};
  const handlePrint = () => window.print();

  /* ===== rows should come from state later ===== */
  const rows = state?.rows || [];

  const generatedOn = new Date().toLocaleString();

  return (
    <Box sx={{ background: "#bdbdbd", minHeight: "100vh", p: 3 }}>

      {/* ================= REPORT PAGE ================= */}

      <Paper
        sx={{
          width: "210mm",
          minHeight: "297mm",
          mx: "auto",
          p: 5,
          background: "#fff",
          color: "#000",
          boxShadow: 6
        }}
      >

        {/* ===== HEADER ===== */}

        <Typography align="center" fontWeight={700} fontSize={20}>
          Phadke Prakashan, Kolhapur
        </Typography>

        <Typography align="center" fontWeight={600} mt={1}>
          Stock Day Book
        </Typography>

        <Typography align="center" mt={1}>
          From {state?.startDate || "____"} to {state?.endDate || "____"}
        </Typography>

        <Typography align="right" mt={-5}>
          Page 1
        </Typography>

        {/* ===== LINES ===== */}

        <Box borderTop="2px solid #000" mt={2} mb={1} />

        <Typography fontSize={14}>
          Transactions : All
        </Typography>

        <Box borderBottom="1px solid #000" mt={1} mb={2} />

        {/* ================= TABLE HEADER ================= */}

        <Box
          display="grid"
          gridTemplateColumns="90px 80px 110px 1fr 120px 120px"
          fontWeight={700}
          fontSize={14}
          borderBottom="1px solid #000"
          pb={1}
        >
          <div>Date</div>
          <div>Party</div>
          <div>Ref No</div>
          <div>Particulars</div>
          <div style={{ textAlign: "right" }}>Inward</div>
          <div style={{ textAlign: "right" }}>Outward</div>
        </Box>

        {/* ================= TABLE ROWS ================= */}

        {rows.length === 0 && (
          <Typography mt={3} align="center">
            No data received
          </Typography>
        )}

        {rows.map((r, i) => (
          <Box
            key={i}
            display="grid"
            gridTemplateColumns="90px 80px 110px 1fr 120px 120px"
            fontSize={14}
            py={1.2}
            borderBottom="1px solid #e0e0e0"
          >
            <div>{r.date}</div>
            <div>{r.party}</div>
            <div>{r.ref}</div>
            <div>{r.particulars}</div>
            <div style={{ textAlign: "right" }}>{r.inward}</div>
            <div style={{ textAlign: "right" }}>{r.outward}</div>
          </Box>
        ))}

        {/* ================= FOOTER ================= */}

        <Box mt={6} fontSize={13}>
          Generated on: {generatedOn}
        </Box>

      </Paper>

      {/* ================= PRINT BUTTON — BOTTOM ================= */}

      <Box
        sx={{
          textAlign: "center",
          mt: 3,
          "@media print": { display: "none" }
        }}
      >
        <Button
          variant="contained"
          size="large"
          startIcon={<PrintIcon />}
          onClick={handlePrint}
          sx={{ px: 6 }}
        >
          Print Report
        </Button>
      </Box>

    </Box>
  );
}
