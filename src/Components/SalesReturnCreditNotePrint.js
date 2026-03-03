import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Paper,
  Typography,
  Button,
  Divider,
  Grid,
  CircularProgress
} from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function SalesReturnCreditNotePrint() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { startNo, endNo, allRequired } = state || {};

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ===============================
     FETCH DATA FROM BACKEND
     Change API URL as per your server
  =============================== */
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(
          `/api/credit-notes?start=${startNo}&end=${endNo}&all=${allRequired}`
        );
        const data = await res.json();
        setRows(data || []);
      } catch (err) {
        console.error("Fetch error:", err);
        setRows([]);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [startNo, endNo, allRequired]);

  const handlePrint = () => window.print();

  const totalAmount = rows.reduce(
    (sum, r) => sum + Number(r.amount || 0),
    0
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#edf2ff,#f8fbff)",
        p: 4
      }}
    >

      {/* ================= HEADER BAR ================= */}
      <Paper
        elevation={0}
        sx={{
          mb: 4,
          p: 2.5,
          borderRadius: 4,
          background: "linear-gradient(135deg,#e3f0ff,#f7faff)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
          border: "1px solid #e0e7ff"
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" gap={2}>
            <Button
              onClick={() => navigate(-1)}
              startIcon={<ArrowBackIcon />}
              sx={{
                px: 2.5,
                py: 1,
                borderRadius: 3,
                fontWeight: 700,
                textTransform: "none",
                background: "#ffffff",
                border: "1px solid #c7d2fe",
                boxShadow: "0 3px 8px rgba(0,0,0,0.06)",
                "&:hover": { background: "#eef2ff" }
              }}
            >
              Back
            </Button>

            <Box>
              <Typography
                variant="h5"
                fontWeight={800}
                sx={{
                  background: "linear-gradient(90deg,#1e3a8a,#2563eb)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                Credit Note Print Preview
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Review & print your credit note report
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              px: 2,
              py: 0.8,
              borderRadius: 20,
              fontSize: 13,
              fontWeight: 700,
              background: "#dbeafe",
              color: "#1d4ed8"
            }}
          >
            READY TO PRINT
          </Box>
        </Box>
      </Paper>

      {/* ================= PRINT AREA ================= */}
      <Paper
        id="print-area"
        elevation={10}
        sx={{
          maxWidth: 1000,
          mx: "auto",
          p: 5,
          borderRadius: 4,
          background: "#fff"
        }}
      >

        {/* Company Header */}
        <Typography variant="h4" fontWeight={800} textAlign="center">
          CREDIT NOTE
        </Typography>

        <Typography textAlign="center" color="text.secondary" mb={2}>
          Sales Return Credit Note
        </Typography>

        <Divider sx={{ mb: 3 }} />

        {/* Company + Filter Info */}
        <Grid container spacing={2} mb={3}>
          <Grid item xs={6}>
            <Typography fontWeight={700}>
              PHADKE BOOK HOUSE, KOLHAPUR
            </Typography>
            <Typography variant="body2">
              Phadke Bhavan, Near Hari Mandir
            </Typography>
            <Typography variant="body2">
              Kolhapur
            </Typography>
          </Grid>

          <Grid item xs={6} textAlign="right">
            <Typography><b>From No:</b> {startNo}</Typography>
            <Typography><b>To No:</b> {endNo}</Typography>
            <Typography>
              <b>All Required:</b> {allRequired ? "YES" : "NO"}
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 3 }} />

        {/* ================= DATA TABLE ================= */}
        {loading ? (
          <Box textAlign="center" p={5}>
            <CircularProgress />
          </Box>
        ) : (
          <table
            width="100%"
            border="1"
            cellPadding="10"
            style={{ borderCollapse: "collapse", fontSize: 14 }}
          >
            <thead>
              <tr style={{ background: "#f1f5ff" }}>
                <th>No</th>
                <th>Date</th>
                <th>Party</th>
                <th>Description</th>
                <th align="right">Amount</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td>{r.number}</td>
                  <td>{r.date}</td>
                  <td>{r.party}</td>
                  <td>{r.description}</td>
                  <td align="right">{r.amount}</td>
                </tr>
              ))}

              <tr>
                <td colSpan="4" align="right">
                  <b>Total</b>
                </td>
                <td align="right">
                  <b>{totalAmount.toFixed(2)}</b>
                </td>
              </tr>
            </tbody>
          </table>
        )}

        <Divider sx={{ my: 4 }} />

        {/* Signature */}
        <Typography textAlign="right" fontWeight={600}>
          Authorized Signature
        </Typography>

      </Paper>

      {/* ================= PRINT BUTTON BOTTOM ================= */}
      <Box textAlign="center" mt={4}>
        <Button
          variant="contained"
          size="large"
          startIcon={<PrintIcon />}
          onClick={handlePrint}
          sx={{
            px: 6,
            py: 1.5,
            fontWeight: 700,
            fontSize: 16,
            borderRadius: 3
          }}
        >
          Print Now
        </Button>
      </Box>

      {/* ================= PRINT CSS ================= */}
      <style>
        {`
        @media print {
          body * {
            visibility: hidden;
          }
          #print-area, #print-area * {
            visibility: visible;
          }
          #print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
        `}
      </style>

    </Box>
  );
}

export default SalesReturnCreditNotePrint;
