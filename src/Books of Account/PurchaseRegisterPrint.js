import React from "react";
import { Box, Typography, Button } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import { useLocation } from "react-router-dom";

function PurchaseRegisterPrint() {
  const { state } = useLocation() || {};
  const { startDate, endDate, party, rows = [] } = state || {};

  return (
    <Box sx={{
      bgcolor: "#e6eaef",
      minHeight: "100vh",
      py: 3,
      fontFamily: `"Times New Roman", serif`
    }}>
      {/* A4 PAGE */}
      <Box id="print-area" sx={{
        width: "210mm",
        minHeight: "297mm",
        mx: "auto",
        bgcolor: "#fff",
        px: "14mm",
        py: "12mm",
        boxShadow: "0 0 25px rgba(0,0,0,0.18)"
      }}>

        <Typography align="center" fontSize={18} fontWeight={700}>
          Phadke Prakashan, Kolhapur.
        </Typography>

        <Typography align="center" fontSize={14}>
          Purchase Register
        </Typography>

        <Typography align="center" fontSize={12}>
          Selected Party : {party || "All"} &nbsp;
          From {startDate} to {endDate}
        </Typography>

        <Box sx={{ borderTop: "1px solid #000", mt: 1 }} />
        <Box sx={{ borderTop: "1px solid #000", mt: 0.3, mb: 1 }} />

        <table width="100%" style={{ borderCollapse: "collapse", fontSize: 11 }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #000" }}>
              <th>Date</th>
              <th>PV No</th>
              <th>Supplier Name</th>
              <th>GSTIN</th>
              <th>Bill No</th>
              <th>Bill Date</th>
              <th>Bill Amt</th>
              <th>Purchase Type</th>
              <th>Taxable</th>
              <th>IGST</th>
              <th>CGST</th>
              <th>SGST</th>
              <th>Account Head</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td>{r.date}</td>
                <td>{r.pvNo}</td>
                <td>{r.supplier}</td>
                <td>{r.gstin}</td>
                <td>{r.billNo}</td>
                <td>{r.billDate}</td>
                <td align="right">{r.billAmt}</td>
                <td>{r.purchaseType}</td>
                <td align="right">{r.taxable}</td>
                <td align="right">{r.igst}</td>
                <td align="right">{r.cgst}</td>
                <td align="right">{r.sgst}</td>
                <td>{r.accountHead}</td>
                <td align="right">{r.amount}</td>
              </tr>
            ))}

            <tr style={{ borderTop: "1px solid #000" }}>
              <td colSpan="13"><b>Total</b></td>
              <td />
            </tr>
          </tbody>
        </table>
      </Box>

      <Box textAlign="center" mt={3}>
        <Button
          variant="contained"
          startIcon={<PrintIcon />}
          onClick={() => window.print()}
        >
          Print
        </Button>
      </Box>

      <style>{`
        @page { size: A4; margin: 12mm; }

        @media print {
          body * { visibility: hidden; }
          #print-area, #print-area * { visibility: visible; }
          #print-area { position:absolute; left:0; top:0; width:210mm; box-shadow:none; }
        }

        th, td { padding: 3px; }
      `}</style>
    </Box>
  );
}

export default PurchaseRegisterPrint;
