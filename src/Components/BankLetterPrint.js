import React, { useRef, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Divider
} from "@mui/material";

function BankLetterPrint() {
  const printRef = useRef();

  const [date, setDate] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("00001");
  const [amount, setAmount] = useState("204,962.00");
  const [amountWords, setAmountWords] = useState(
    "Two hundred four thousand nine hundred sixty-two"
  );
  const [partyName, setPartyName] = useState(
    "PHADKE BOOK HOUSE, KOLHAPUR"
  );
  const [receiptNo, setReceiptNo] = useState("");

  const handlePrint = () => window.print();

  /* ✅ totally borderless textfield */
  const noBorderField = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": { border: "none" },
      "&:hover fieldset": { border: "none" },
      "&.Mui-focused fieldset": { border: "none" }
    },
    "& .MuiInputBase-input": {
      padding: "2px 4px",
      fontSize: "15px"
    },
    background: "transparent"
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#eef2f7,#dfe6ee)",
        py: 6
      }}
    >
      <Paper
        ref={printRef}
        sx={{
          width: "820px",
          mx: "auto",
          p: 6,
          borderRadius: 3,
          boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
          border: "1px solid #d0d7e2"
        }}
      >
        {/* HEADER */}
        <Typography align="center" fontWeight={800} fontSize={22}>
          Phadke Prakashan, Kolhapur
        </Typography>

        <Typography align="center" fontSize={14} color="text.secondary">
          Phadke Bhavan, Near Hari Mandir, Dudhali Kolhapur 416012
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography fontWeight={700} mb={3}>
          Collection through Bank
        </Typography>

        {/* DATE */}
        <Box display="flex" justifyContent="space-between" mb={3}>
          <Typography>Kolhapur</Typography>

          <TextField
            variant="outlined"
            size="small"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            sx={{ width: 150, ...noBorderField }}
          />
        </Box>

        <Typography mb={2}>The Manager</Typography>

        {/* INVOICE */}
        <Box display="flex" gap={2} alignItems="center" mb={2}>
          <Typography fontWeight={600}>
            Invoice No:
          </Typography>

          <TextField
            size="small"
            value={invoiceNo}
            onChange={(e) => setInvoiceNo(e.target.value)}
            sx={{ width: 90, ...noBorderField }}
          />

          <Typography fontWeight={600}>
            Amount Rs:
          </Typography>

          <TextField
            size="small"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            sx={{ width: 140, ...noBorderField }}
          />
        </Box>

        <Typography mb={2}>Dear Sir,</Typography>

        {/* PARTY */}
        <Box mb={2}>
          Drawn On:
          <TextField
            size="small"
            value={partyName}
            onChange={(e) => setPartyName(e.target.value)}
            sx={{ ml: 2, width: 480, ...noBorderField }}
          />
        </Box>

        {/* WORDS */}
        <Box mb={2}>
          Amount in Words:
          <TextField
            size="small"
            value={amountWords}
            onChange={(e) => setAmountWords(e.target.value)}
            sx={{ ml: 2, width: 520, ...noBorderField }}
          />
        </Box>

        {/* PARAGRAPH */}
        <Typography lineHeight={1.9} fontSize={15} mb={3}>
          We are enclosing our Invoice for Rs.
          <b> {amountWords} </b>
          and Ps. zero only together with Opening Stock as on
          01.04.2025 Receipt No.
          <TextField
            size="small"
            value={receiptNo}
            onChange={(e) => setReceiptNo(e.target.value)}
            sx={{ width: 100, ...noBorderField }}
          />
          for collection. A Demand Draft on Kolhapur for Rs.
          {amount} may be sent to us soon after collection.
          Please deliver the documents on payment.
        </Typography>

        {/* CENTER NOTE */}
        <Typography
          align="center"
          fontWeight={800}
          letterSpacing={1}
          mb={4}
        >
          YOUR CHARGES MAY BE RECOVERED FROM THE PARTY
        </Typography>

        <Typography fontWeight={700}>
          Draft Value – Rs. {amount}/-
        </Typography>

        {/* SIGN */}
        <Box mt={8} textAlign="right">
          <Typography>Yours faithfully,</Typography>
          <Typography fontWeight={700}>
            For Phadke Prakashan, Kolhapur
          </Typography>
          <Typography mt={5}>
            Authorised Signatory
          </Typography>
        </Box>

        {/* PRINT BUTTON */}
        <Box textAlign="center" mt={6} className="no-print">
          <Button
            variant="contained"
            size="large"
            onClick={handlePrint}
            sx={{
              px: 6,
              py: 1.4,
              fontWeight: 700,
              borderRadius: 2
            }}
          >
            Print Letter
          </Button>
        </Box>
      </Paper>

      {/* PRINT STYLE */}
      <style>
        {`
        @media print {
          .no-print { display:none; }
          body { background:white; }
          @page { margin:18mm; }
        }
        `}
      </style>
    </Box>
  );
}

export default BankLetterPrint;
