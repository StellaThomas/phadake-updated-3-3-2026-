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

function InvoiceChallanPrint() {
  const { state } = useLocation();

  // ✅ Editable header fields
  const [creditMemoNo, setCreditMemoNo] = useState(
    state?.startNo || ""
  );

  const [memoDate, setMemoDate] = useState(
    new Date().toISOString().substring(0, 10)
  );

  // ✅ backend rows later
  const rows = state?.rows || [];

  const total = rows.reduce(
    (sum, r) => sum + (Number(r.qty) * Number(r.rate)),
    0
  );

  return (
    <Box sx={{ bgcolor: "#f2f4f8", minHeight: "100vh", py: 3 }}>

      <Paper
        sx={{
          width: "210mm",
          minHeight: "297mm",
          mx: "auto",
          p: 4,
          boxShadow: 3
        }}
      >

        {/* ================= HEADER ================= */}

        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography fontWeight={800} fontSize={18}>
              PHADKE BOOK HOUSE, KOLHAPUR
            </Typography>

            <Typography fontSize={13}>
              Phadke Bhavan, Near Hari Mandir, Dudhali
            </Typography>

            <Typography fontSize={13}>
              Kolhapur – 416012
            </Typography>

            <Typography fontSize={13}>
              Tel: 0231-2540211
            </Typography>
          </Box>

          {/* ✅ EDITABLE FIELDS */}
          <Box textAlign="right" display="flex" flexDirection="column" gap={1}>

            <TextField
              label="Credit Memo No"
              size="small"
              value={creditMemoNo}
              onChange={(e) => setCreditMemoNo(e.target.value)}
              className="no-print"
            />

            <TextField
              type="date"
              size="small"
              value={memoDate}
              onChange={(e) => setMemoDate(e.target.value)}
              className="no-print"
            />

            {/* ✅ PRINT MODE TEXT */}
            <Typography className="print-only" fontWeight={700}>
              Credit Memo No : {creditMemoNo || "—"}
            </Typography>

            <Typography className="print-only">
              {memoDate}
            </Typography>

          </Box>
        </Box>

        {/* ================= TITLE ================= */}

        <Typography
          align="center"
          fontWeight={700}
          mt={3}
          mb={2}
          fontSize={16}
        >
          Opening Stock Statement
        </Typography>

        {/* ================= TABLE ================= */}

        <Table size="small">
          <TableHead>
            <TableRow sx={{ bgcolor: "#e9eef5" }}>
              <TableCell width={50}>#</TableCell>
              <TableCell width={90}>Code</TableCell>
              <TableCell width={90}>Class</TableCell>
              <TableCell>Book Name</TableCell>
              <TableCell align="right" width={70}>Qty</TableCell>
              <TableCell align="right" width={90}>Rate</TableCell>
              <TableCell align="right" width={110}>Amount</TableCell>
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

            {rows.map((r, i) => (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{r.code}</TableCell>
                <TableCell>{r.cls}</TableCell>
                <TableCell>{r.name}</TableCell>
                <TableCell align="right">{r.qty}</TableCell>
                <TableCell align="right">{r.rate}</TableCell>
                <TableCell align="right">
                  {(r.qty * r.rate).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>

        {/* ================= TOTAL ================= */}

        <Box display="flex" justifyContent="flex-end" mt={2}>
          <Typography fontWeight={700}>
            Total : ₹ {total.toFixed(2)}
          </Typography>
        </Box>

        {/* ================= FOOTER ================= */}

        <Box mt={6} display="flex" justifyContent="space-between">
          <Typography>Prepared By</Typography>
          <Typography>Checked By</Typography>
          <Typography>Authorized Sign</Typography>
        </Box>

        {/* ================= PRINT BUTTON ================= */}

        <Box textAlign="center" mt={4} className="no-print">
          <Button
            variant="contained"
            size="large"
            onClick={() => window.print()}
          >
            Print
          </Button>
        </Box>

      </Paper>

      {/* ================= PRINT CSS ================= */}

      <style>{`
        .print-only { display:none }

        @media print {
          body { background:white !important; }

          .MuiDrawer-root,
          .no-print { display:none !important; }

          .print-only { display:block !important; }

          .MuiPaper-root {
            box-shadow:none !important;
            margin:0 !important;
          }
        }
      `}</style>

    </Box>
  );
}

export default InvoiceChallanPrint;
