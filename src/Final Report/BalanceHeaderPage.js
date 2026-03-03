import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

function formatDate(d) {
  if (!d) return "";
  const dt = new Date(d);
  return dt.toLocaleDateString("en-GB");
}

export default function BalanceHeaderPage() {
  const { state } = useLocation();
  const asOn = formatDate(state?.asOnDate);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(180deg,#eef2f7,#e3e8f0)",
        p: 5
      }}
    >
      <Paper
        sx={{
          maxWidth: 1050,
          mx: "auto",
          px: 6,
          py: 5,
          borderRadius: 3,
          background: "#ffffff",
          boxShadow: "0 12px 30px rgba(0,0,0,0.10)"
        }}
      >

        {/* ===== COMPANY NAME ===== */}
        <Typography
          textAlign="center"
          fontSize={28}
          fontWeight={800}
          letterSpacing={1}
          sx={{ fontFamily: "serif" }}
        >
          PHADKE  BOOK HOUSE
        </Typography>

        {/* ===== REPORT TITLE ===== */}
        <Typography
          textAlign="center"
          fontSize={16}
          mt={1}
          color="text.secondary"
          sx={{ fontFamily: "serif" }}
        >
          Balance Sheet As on {asOn}
        </Typography>

        {/* ===== DOUBLE DASH LINE ===== */}
        <Box mt={3}>
          <Box sx={{ borderTop: "2px dashed #444" }} />
          <Box sx={{ borderTop: "1px dashed #999", mt: 0.5 }} />
        </Box>

        {/* ===== COLUMN HEADERS ===== */}
        <Box
          mt={2}
          display="grid"
          gridTemplateColumns="1fr 80px 1fr"
          alignItems="center"
        >
          <Typography
            fontWeight={700}
            fontSize={15}
            sx={{ fontFamily: "serif" }}
          >
            Capital & Liabilities
          </Typography>

          <Typography
            textAlign="center"
            fontWeight={700}
            fontSize={15}
          >
            |
          </Typography>

          <Typography
            fontWeight={700}
            fontSize={15}
            textAlign="right"
            sx={{ fontFamily: "serif" }}
          >
            Assets & Properties
          </Typography>
        </Box>

        {/* ===== BOTTOM DASH ===== */}
        <Box mt={2}>
          <Box sx={{ borderTop: "2px dashed #444" }} />
        </Box>

      </Paper>

      {/* ===== PRINT MODE ===== */}
      <style>
        {`
          @media print {
            body { background: white; }
          }
        `}
      </style>
    </Box>
  );
}
