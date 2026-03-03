import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import { useLocation } from "react-router-dom";

function TransactionSummaryPrint() {

  const { state } = useLocation() || {};

  /* ===== DATA FROM BACKEND VIA NAVIGATION OR API ===== */

  const {
    startDate = "",
    endDate = "",
    accountGroup = "",
    transactions = [],
    rows = []   // 👈 backend should send this array
  } = state || {};

  /* ===== CALCULATIONS ===== */

  const grandTotal = rows.reduce(
    (sum, r) => sum + (Number(r.total) || 0),
    0
  );

  /* ===== UI ===== */

  return (
    <Box sx={{ bgcolor: "#eef1f6", minHeight: "100vh", py: 3 }}>

      {/* ================= PRINT SHEET ================= */}
      <Box
        id="print-area"
        sx={{
          width: "210mm",
          minHeight: "297mm",
          mx: "auto",
          bgcolor: "#fff",
          px: "20mm",
          py: "16mm",
          boxShadow: "0 0 28px rgba(0,0,0,0.18)",
          fontFamily: '"Times New Roman", serif',
          fontSize: 13,
          borderRadius: 1
        }}
      >

        {/* ================= HEADER ================= */}
        <Typography align="center" fontWeight={700} fontSize={18}>
          Phadke Prakashan, Kolhapur
        </Typography>

        <Typography align="center" fontSize={15} fontWeight={600}>
          Transaction Summary
        </Typography>

        <Typography align="center" fontSize={12}>
          From {startDate} to {endDate}
        </Typography>

        {accountGroup && (
          <Typography align="center" fontSize={12}>
            Account Group : {accountGroup}
          </Typography>
        )}

        <Typography align="right" fontSize={11}>
          Page 1
        </Typography>

        <Divider sx={{ borderColor: "#000", my: 1 }} />

        {/* ================= META ================= */}
        <Box mb={2} fontSize={12}>
          <b>Transactions :</b>{" "}
          {transactions?.length ? transactions.join(", ") : "All"}
        </Box>

        {/* ================= TABLE ================= */}
        <table
          width="100%"
          style={{
            borderCollapse: "collapse",
            marginTop: 8
          }}
        >
          <thead>
            <tr style={{
              borderTop: "1px solid #000",
              borderBottom: "1px solid #000",
              background: "#f7f7f7"
            }}>
              <th align="left" style={{ padding: 6 }}>Type</th>
              <th align="right">Basic</th>
              <th align="right">Tax</th>
              <th align="right">Other</th>
              <th align="right">Total</th>
            </tr>
          </thead>

          <tbody>

            {/* ===== BACKEND ROWS ===== */}
            {rows.length === 0 && (
              <tr>
                <td colSpan="5" style={{ padding: 20, textAlign: "center" }}>
                  No data received from server
                </td>
              </tr>
            )}

            {rows.map((r, i) => (
              <tr key={i}>
                <td style={{ padding: 6 }}>{r.type}</td>
                <td align="right">{r.basic}</td>
                <td align="right">{r.tax}</td>
                <td align="right">{r.other}</td>
                <td align="right">{r.total}</td>
              </tr>
            ))}

            {/* ===== TOTAL ===== */}
            {rows.length > 0 && (
              <tr style={{
                borderTop: "1px solid #000",
                borderBottom: "3px double #000",
                fontWeight: 700
              }}>
                <td style={{ padding: 6 }}>TOTAL</td>
                <td />
                <td />
                <td />
                <td align="right">{grandTotal}</td>
              </tr>
            )}

          </tbody>
        </table>

        {/* ================= FOOTER ================= */}
        <Box mt={6} fontSize={11}>
          Generated on: {new Date().toLocaleString()}
        </Box>

      </Box>

      {/* ================= PRINT BUTTON ================= */}
      <Box textAlign="center" mt={3}>
        <Button
          variant="contained"
          size="large"
          startIcon={<PrintIcon />}
          onClick={() => window.print()}
          sx={{
            px: 5,
            fontWeight: 700,
            boxShadow: "0 6px 18px rgba(25,118,210,0.35)"
          }}
        >
          Print
        </Button>
      </Box>

      {/* ================= PRINT CSS ================= */}
      <style>{`
        @page { size: A4; margin: 10mm; }

        @media print {
          body * { visibility: hidden; }
          #print-area, #print-area * { visibility: visible; }

          #print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 210mm;
            box-shadow: none;
          }
        }
      `}</style>

    </Box>
  );
}

export default TransactionSummaryPrint;
