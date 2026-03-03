import React from "react";
import { Box, Paper, Typography, Divider } from "@mui/material";
import { useLocation } from "react-router-dom";

function formatDate(d) {
  if (!d) return "";
  const dt = new Date(d);
  return dt.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

export default function PLPrintHeader() {
  const { state } = useLocation();

  const start = formatDate(state?.startDate);
  const end = formatDate(state?.endDate);

  return (
    <Box sx={{ background: "#f3f3f3", minHeight: "100vh", p: 4 }}>

      <Paper
        sx={{
          maxWidth: 1100,
          mx: "auto",
          p: 5,
          background: "#fff",
          fontFamily: "serif",
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)"
        }}
      >

        {/* ===== COMPANY NAME ===== */}
        <Typography
          textAlign="center"
          fontSize={28}
          fontWeight={700}
          letterSpacing={1}
        >
          PHADE BOOK HOUSE
        </Typography>

        {/* ===== SUB TITLE ===== */}
        <Typography
          textAlign="center"
          fontSize={16}
          mt={1}
        >
          Profit and Loss Account from {start} to {end}
        </Typography>

        {/* ===== DASH LINE ===== */}
        <Divider sx={{ my: 3, borderBottomWidth: 2, borderStyle: "dashed" }} />

        {/* ===== TABLE HEADER ROW ===== */}
        <Box
          display="grid"
          gridTemplateColumns="1fr 120px 120px 40px 1fr 120px 120px"
          fontWeight={600}
          fontSize={14}
        >
          <Typography>Particulars</Typography>
          <Typography textAlign="right">Amount</Typography>
          <Typography textAlign="right">Amount</Typography>

          <Typography textAlign="center">|</Typography>

          <Typography>Particulars</Typography>
          <Typography textAlign="right">Amount</Typography>
          <Typography textAlign="right">Amount</Typography>
        </Box>

        <Divider sx={{ my: 2, borderBottomWidth: 2, borderStyle: "dashed" }} />

        {/* ===== SAMPLE BODY PLACEHOLDER ===== */}
        <Typography fontSize={13} color="text.secondary">
          (Report rows will appear here…)
        </Typography>

      </Paper>

      {/* ===== PRINT STYLE ===== */}
      <style>
        {`
        @media print {
          body {
            background: white;
          }
        }
        `}
      </style>

    </Box>
  );
}
