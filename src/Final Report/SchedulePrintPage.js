import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

function fmt(d) {
  if (!d) return "";
  return new Date(d).toLocaleDateString("en-GB");
}

export default function SchedulePrintPage() {
  const { state } = useLocation();
  const asOn = fmt(state?.endDate);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(180deg,#eef2f6,#e3e9f2)",
        p: 4
      }}
    >
      <Paper
        sx={{
          maxWidth: 1000,
          mx: "auto",
          p: 5,
          borderRadius: 3,
          boxShadow: "0 18px 40px rgba(0,0,0,0.12)"
        }}
      >

        {/* ================= HEADER ================= */}

        <Box position="relative">

          <Typography
            textAlign="center"
            fontSize={20}
            fontWeight={800}
            letterSpacing={1}
          >
            PHADE BOOK HOUSE
          </Typography>

          <Typography
            position="absolute"
            right={0}
            top={0}
            fontSize={12}
            color="text.secondary"
          >
            Page 1 of 1
          </Typography>

        </Box>

        <Typography
          textAlign="center"
          fontSize={14}
          mt={1}
          fontWeight={600}
        >
          Schedule As On {asOn}
        </Typography>

        {/* ===== TOP RULE ===== */}
        <Box mt={2} mb={2} sx={{ borderTop: "2px solid #333" }} />

        {/* ================= TABLE HEADER ONLY ================= */}

        <Box
          display="grid"
          gridTemplateColumns="90px 1fr 150px 150px 150px"
          sx={{
            background: "#f4f6f8",
            border: "1px solid #cfd6df",
            borderRadius: 2,
            px: 2,
            py: 1.5,
            fontWeight: 800,
            fontSize: 14
          }}
        >
          <Typography>Sr No</Typography>
          <Typography>Account Name</Typography>
          <Typography textAlign="right">Debit</Typography>
          <Typography textAlign="right">Credit</Typography>
          <Typography textAlign="right">Balance</Typography>
        </Box>

        {/* ===== BOTTOM RULE ===== */}
        <Box mt={2} sx={{ borderTop: "1px dashed #999" }} />

      </Paper>

      {/* ================= PRINT ================= */}

      <style>
        {`
          @media print {
            @page { size:A4 portrait; margin:12mm; }
            body { background:white; }
          }
        `}
      </style>

    </Box>
  );
}
