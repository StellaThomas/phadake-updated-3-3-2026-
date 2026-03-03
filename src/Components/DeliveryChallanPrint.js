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

function DeliveryChallanPrint() {
  const { state } = useLocation();
  const rows = state?.rows || [];

  const [memoNo, setMemoNo] = useState("");
  const [memoDate, setMemoDate] = useState("");

  return (
    <Box sx={{ bgcolor: "#f3f5f8", py: 3 }}>

      {/* ================= A4 SHEET ================= */}
      <Paper
        sx={{
          width: "210mm",
          minHeight: "297mm",
          mx: "auto",
          p: 5,
          boxShadow: 4
        }}
      >

        {/* ================= TOP NUMBER + DATE ================= */}

        <Box
          display="flex"
          justifyContent="center"
          gap={6}
          mb={3}
          className="no-print"
        >
          <TextField
            label="Memo No"
            size="small"
            value={memoNo}
            onChange={(e) => setMemoNo(e.target.value)}
          />

          <TextField
            label="Date"
            size="small"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={memoDate}
            onChange={(e) => setMemoDate(e.target.value)}
          />
        </Box>

        {/* ================= PRINT VIEW NUMBER + DATE ================= */}

        <Box
          display="flex"
          justifyContent="center"
          gap={10}
          mb={2}
          className="print-only"
        >
          <Typography fontWeight={700}>{memoNo}</Typography>
          <Typography fontWeight={700}>{memoDate}</Typography>
        </Box>

        {/* ================= DOUBLE HEADER BLOCK ================= */}

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          mb={4}
        >

          {/* LEFT BLOCK */}
          <Box width="45%">
            <Typography fontWeight={700}>
              Phadke Prakashan, Kolhapur.
            </Typography>

            <Typography fontSize={13}>
              Phadke Bhavan, Near Hari Mandir, Dudhali
            </Typography>

            <Typography fontSize={13}>
              Kolhapur - 416012
            </Typography>

            <Typography fontSize={13}>
              Tel. No. - 2540 211
            </Typography>
          </Box>

          {/* RIGHT BLOCK */}
          <Box width="45%">
            <Typography fontWeight={700}>
              PHADKE BOOK HOUSE, KOLHAPUR.
            </Typography>

            <Typography fontSize={13}>
              Phadke Bhavan, Near Hari Mandir
            </Typography>

            <Typography fontSize={13}>
              Dudhali, Kolhapur Dist. KOLHAPUR - 416012
            </Typography>

            <Typography fontSize={13}>
              Tel. No.
            </Typography>
          </Box>
        </Box>

        {/* ================= TITLE ================= */}

        <Typography
          align="center"
          fontWeight={700}
          fontSize={16}
          mb={3}
          sx={{ letterSpacing: 1 }}
        >
          DELIVERY CHALLAN
        </Typography>

        {/* ================= TABLE ================= */}

        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: "#e9edf3" }}>
              <TableCell>#</TableCell>
              <TableCell>Code</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Book Name</TableCell>
              <TableCell align="right">Qty</TableCell>
              <TableCell align="right">Rate</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  Backend data will appear here
                </TableCell>
              </TableRow>
            )}

            {rows.map((r, i) => (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{r.code}</TableCell>
                <TableCell>{r.cls}</TableCell>
                <TableCell>{r.name}</TableCell>
                <TableCell align="right">{r.qty}</TableCell>
                <TableCell align="right">{r.rate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* ================= SIGNATURE ================= */}

        <Box mt={8} display="flex" justifyContent="space-between">
          <Typography>Prepared By</Typography>
          <Typography>Checked By</Typography>
          <Typography>Authorized Sign</Typography>
        </Box>

        {/* ================= PRINT BUTTON ================= */}

        <Box textAlign="center" mt={5} className="no-print">
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
          .no-print {
            display: none !important;
          }

          .print-only {
            display:flex !important;
          }

          body {
            background:white !important;
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

export default DeliveryChallanPrint;
