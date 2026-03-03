import React, { useState } from "react";
import {
  Box, Paper, Typography,
  Table, TableHead, TableRow, TableCell, TableBody,
  Button, TextField
} from "@mui/material";
import { useLocation } from "react-router-dom";

function SalesInvoicePrint() {
  const { state } = useLocation();

  const [memoNo, setMemoNo] = useState("");
  const [memoDate, setMemoDate] = useState("");

  // backend later
  const rows = state?.rows || [];

  return (
    <Box sx={{ bgcolor:"#eef2f6", py:3 }}>

      <Paper sx={{
        width:"210mm",
        minHeight:"297mm",
        mx:"auto",
        p:5,
        boxShadow:4
      }}>

        {/* ================= HEADER ================= */}

        <Box display="flex" justifyContent="space-between" mb={4}>

          <Box>
            <Typography fontWeight={800}>
              PHADKE BOOK HOUSE, KOLHAPUR
            </Typography>

            <Typography fontSize={13}>
              Phadke Bhavan, Near Hari Mandir, Dudhali
            </Typography>

            <Typography fontSize={13}>
              Kolhapur – 416012
            </Typography>

            <Typography fontSize={13}>
              GSTIN : 27AGGDP8699E1ZP
            </Typography>
          </Box>

          {/* INPUT HEADER */}
          <Box className="no-print">
            <TextField label="Credit Memo No"
              size="small"
              value={memoNo}
              onChange={(e)=>setMemoNo(e.target.value)}
              sx={{mb:1}} />
            <br/>
            <TextField type="date"
              size="small"
              value={memoDate}
              onChange={(e)=>setMemoDate(e.target.value)} />
          </Box>

          {/* PRINT HEADER */}
          <Box className="print-only" textAlign="right">
            <Typography fontWeight={700}>
              Credit Memo No: {memoNo}
            </Typography>
            <Typography>{memoDate}</Typography>
          </Box>

        </Box>

        <Typography align="center" fontWeight={700} mb={2}>
          Opening Stock as on 01.04.2025
        </Typography>

        {/* ================= TABLE ================= */}

        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor:"#e9edf3" }}>
              <TableCell>#</TableCell>
              <TableCell>Code</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Book Name</TableCell>
              <TableCell align="right">Qty</TableCell>
              <TableCell align="right">Rate</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  Backend data will appear here
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        {/* PRINT BUTTON */}
        <Box textAlign="center" mt={5} className="no-print">
          <Button variant="contained"
            onClick={()=>window.print()}>
            Print
          </Button>
        </Box>

      </Paper>

      <style>{`
        .print-only { display:none }

        @media print {
          .MuiDrawer-root,
          .no-print { display:none !important }
          .print-only { display:block !important }
          body { background:white }
          .MuiPaper-root { box-shadow:none }
        }
      `}</style>

    </Box>
  );
}

export default SalesInvoicePrint;
