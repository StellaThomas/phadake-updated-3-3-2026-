import { Box, Paper, Typography, Button } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";

export default function StockBookPrintPreview({
  startDate,
  endDate,
  selectedGroups = []
}) {

  const rows = [
    {
      date: "01-04-25",
      ref: "",
      particulars: "Opening Balance ...",
      inward: "",
      outward: "",
      balance: ""
    }
  ];

  const handlePrint = () => window.print();

  return (
    <Box sx={{ p: 4, background: "#9e9e9e", minHeight: "100vh" }}>

      {/* PAPER */}
      <Paper
        sx={{
          width: "210mm",
          minHeight: "297mm",
          mx: "auto",
          p: 4,
          background: "#fff",
          color: "#000"
        }}
      >

        {/* HEADER */}

        <Typography align="center" fontWeight={700} fontSize={20}>
          M. V. Phadke & Co. Kolhapur
        </Typography>

        <Typography align="center" mt={1}>
          Stock Book
        </Typography>

        <Typography align="center" mt={1}>
          From {startDate || "____"} to {endDate || "____"}
        </Typography>

        <Typography align="right" mt={-4}>
          Page 1 of 1
        </Typography>

        {/* TABLE HEADER */}

        <Box mt={3} borderTop="2px solid #000" borderBottom="1px solid #000" py={1}>
          <Box display="grid" gridTemplateColumns="120px 120px 1fr 120px 120px 120px" fontWeight={600}>
            <div>Date</div>
            <div>Ref No</div>
            <div>Particulars</div>
            <div>Inward</div>
            <div>Outward</div>
            <div>Balance</div>
          </Box>
        </Box>

        {/* ROWS */}

        {rows.map((r, i) => (
          <Box key={i} py={2} borderBottom="1px solid #bbb">
            <Box display="grid" gridTemplateColumns="120px 120px 1fr 120px 120px 120px">
              <div>{r.date}</div>
              <div>{r.ref}</div>
              <div>{r.particulars}</div>
              <div>{r.inward}</div>
              <div>{r.outward}</div>
              <div>{r.balance}</div>
            </Box>
          </Box>
        ))}

      </Paper>

      {/* ✅ PRINT BUTTON — BOTTOM */}

      <Box
        sx={{
          mt: 3,
          textAlign: "center",
          "@media print": { display: "none" }
        }}
      >
        <Button
          variant="contained"
          size="large"
          startIcon={<PrintIcon />}
          onClick={handlePrint}
          sx={{ px: 6, py: 1.5 }}
        >
          Print Report
        </Button>
      </Box>

    </Box>
  );
}
