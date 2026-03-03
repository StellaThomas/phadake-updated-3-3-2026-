import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  TextField
} from "@mui/material";
import { useLocation } from "react-router-dom";

function ReceiptPrint() {
  const { state } = useLocation();

  const [receiptNo, setReceiptNo] = useState("");
  const [receiptDate, setReceiptDate] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <Box sx={{ bgcolor: "#eef2f6", py: 3 }}>

      <Paper
        sx={{
          width: "210mm",
          minHeight: "297mm",
          mx: "auto",
          p: 6,
          boxShadow: 4
        }}
      >

        {/* ================= RIGHT TOP BLOCK ================= */}

        {/* INPUT VIEW */}
        <Box textAlign="right" mb={6} className="no-print">

          <TextField
            label="Receipt No"
            size="small"
            value={receiptNo}
            onChange={(e) => setReceiptNo(e.target.value)}
            sx={{ mb: 1, width: 160 }}
          />

          <br />

          <TextField
            label="Date"
            type="date"
            size="small"
            InputLabelProps={{ shrink: true }}
            value={receiptDate}
            onChange={(e) => setReceiptDate(e.target.value)}
            sx={{ mb: 1, width: 160 }}
          />

          <br />

          <TextField
            label="Amount"
            size="small"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            sx={{ width: 160 }}
          />

        </Box>

        {/* PRINT VIEW */}
        <Box textAlign="right" mb={6} className="print-only">
          <Typography fontWeight={700}>{receiptNo}</Typography>
          <Typography>{receiptDate}</Typography>
          <Typography fontWeight={700}>{amount}</Typography>
        </Box>

        {/* ================= CENTER TEXT ================= */}

        <Typography align="center" mb={3}>
          BANK OF INDIA, C/A A/C 090220110000887 DIST: KOLHAPUR
        </Typography>

        <Typography align="center" mb={3}>
          Amount in words will come here
        </Typography>

        <Typography align="center" mb={5}>
          Cash Withdrawn Self Chq. No. _______
        </Typography>

        <Typography align="center">
          Cash
        </Typography>

        {/* ================= PRINT BUTTON ================= */}

        <Box textAlign="center" mt={8} className="no-print">
          <Button variant="contained" onClick={() => window.print()}>
            Print
          </Button>
        </Box>

      </Paper>

      {/* ================= PRINT CSS ================= */}

      <style>{`
        .print-only { display:none }

        @media print {

          .MuiDrawer-root,
          .no-print { display:none !important }

          .print-only { display:block !important }

          body { background:white !important }

          .MuiPaper-root { box-shadow:none !important }

        }
      `}</style>

    </Box>
  );
}

export default ReceiptPrint;
