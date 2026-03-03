import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  TextField
} from "@mui/material";
import { useLocation } from "react-router-dom";

function PurchaseBillPrint() {
  const { state } = useLocation();

  // 🔹 backend rows will come later
  const rows = state?.rows || [];

  const [billNo, setBillNo] = useState("");
  const [billDate, setBillDate] = useState("");

  return (
    <Box sx={{ bgcolor: "#e9edf3", py: 3 }}>

      {/* ================= A4 PAGE ================= */}
      <Paper
        sx={{
          width: "210mm",
          minHeight: "297mm",
          mx: "auto",
          px: 5,
          py: 4,
          boxShadow: 4,
          borderRadius: 2
        }}
      >

        {/* ================= COMPANY HEADER ================= */}

        <Box textAlign="center" mb={2}>
          <Typography fontWeight={800} fontSize={20}>
            Phadke Prakashan, Kolhapur.
          </Typography>

          <Typography fontSize={13}>
            Phadke Bhavan, Near Hari Mandir, Dudhali Kolhapur 416012
          </Typography>
        </Box>

        <Box borderTop="2px solid #222" mb={3} />

        {/* ================= BILL INFO ================= */}

        <Box display="flex" justifyContent="space-between" mb={3}>

          {/* LEFT BLOCK */}
          <Box>
            <Typography fontWeight={600}>From :</Typography>
            <Typography fontSize={13}>Transaction Date :</Typography>
            <Typography fontSize={13}>Transaction No :</Typography>
          </Box>

          {/* RIGHT BLOCK — INPUT MODE */}
          <Box textAlign="right" className="no-print">
            <TextField
              label="Bill No"
              size="small"
              value={billNo}
              onChange={(e) => setBillNo(e.target.value)}
              sx={{ mb: 1, width: 160 }}
            />
            <br />
            <TextField
              label="Bill Date"
              type="date"
              size="small"
              InputLabelProps={{ shrink: true }}
              value={billDate}
              onChange={(e) => setBillDate(e.target.value)}
              sx={{ width: 160 }}
            />
          </Box>

          {/* RIGHT BLOCK — PRINT MODE */}
          <Box textAlign="right" className="print-only">
            <Typography fontWeight={600}>Bill No : {billNo}</Typography>
            <Typography>Bill Date : {billDate}</Typography>
          </Box>

        </Box>

        {/* ================= TABLE ================= */}

        <Table size="small">

          <TableHead>
            <TableRow
              sx={{
                borderTop: "1.5px solid #000",
                borderBottom: "1.5px solid #000",
                bgcolor: "#f4f6f9"
              }}
            >
              <TableCell width={60}><b>Sr</b></TableCell>
              <TableCell width={120}><b>Book Code</b></TableCell>
              <TableCell><b>Book Name</b></TableCell>
              <TableCell align="right" width={90}><b>Copies</b></TableCell>
              <TableCell align="right" width={90}><b>Price</b></TableCell>
              <TableCell align="right" width={90}><b>Disc %</b></TableCell>
              <TableCell align="right" width={120}><b>Amount</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>

            {/* EMPTY STATE */}
            {rows.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  Backend data will appear here
                </TableCell>
              </TableRow>
            )}

            {rows.map((r, i) => (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{r.code}</TableCell>
                <TableCell>{r.name}</TableCell>
                <TableCell align="right">{r.qty}</TableCell>
                <TableCell align="right">{r.price}</TableCell>
                <TableCell align="right">{r.disc}</TableCell>
                <TableCell align="right">{r.amount}</TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>

        {/* ================= FOOTER SIGN ================= */}

        <Box mt={8} display="flex" justifyContent="space-between">
          <Typography>Prepared By</Typography>
          <Typography>Checked By</Typography>
          <Typography>Authorized Sign</Typography>
        </Box>

        {/* ================= PRINT BUTTON ================= */}

        <Box textAlign="center" mt={5} className="no-print">
          <Button
            variant="contained"
            size="large"
            onClick={() => window.print()}
            sx={{ px: 6, fontWeight: 700 }}
          >
            Print Bill
          </Button>
        </Box>

      </Paper>

      {/* ================= PRINT CSS ================= */}

      <style>{`
        .print-only { display:none }

        @media print {

          body {
            background:white !important;
          }

          .MuiDrawer-root,
          .no-print {
            display:none !important;
          }

          .print-only {
            display:block !important;
          }

          .MuiPaper-root {
            box-shadow:none !important;
            margin:0 !important;
          }

        }
      `}</style>

    </Box>
  );
}

export default PurchaseBillPrint;
