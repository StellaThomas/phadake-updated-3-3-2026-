import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

function fmt(d) {
  if (!d) return "";
  return new Date(d).toLocaleDateString("en-GB");
}

/* ===== ROW ===== */
function Row({ ly, p, a1, a2 }) {
  return (
    <Box
      display="grid"
      gridTemplateColumns="110px 1fr 120px 120px"
      columnGap={2}
      py={0.6}
      fontSize={14}
    >
      <Typography textAlign="right">{ly}</Typography>
      <Typography>{p}</Typography>
      <Typography textAlign="right">{a1}</Typography>
      <Typography textAlign="right">{a2}</Typography>
    </Box>
  );
}

export default function PLLastYearPrintPage() {
  const { state } = useLocation();

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
          maxWidth: 1200,
          mx: "auto",
          p: 5,
          borderRadius: 3,
          boxShadow: "0 16px 36px rgba(0,0,0,0.12)"
        }}
      >

        {/* ================= HEADER ================= */}

        <Typography textAlign="center" fontSize={22} fontWeight={800}>
          PHADE BOOK HOUSE
        </Typography>

        <Typography textAlign="center" fontSize={15} mt={1} fontWeight={600}>
          Profit and Loss Account
        </Typography>

        <Typography textAlign="center" fontSize={13} color="text.secondary">
          From {fmt(state?.startDate)} To {fmt(state?.endDate)}
        </Typography>

        <Box mt={2} mb={2} sx={{ borderTop: "2px dashed #444" }} />

        {/* ================= HEADER STRIP ================= */}

        <Box
          display="grid"
          gridTemplateColumns="
            110px 1fr 120px 120px
            40px
            110px 1fr 120px 120px
          "
          columnGap={2}
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
          <Typography textAlign="right">Last Yr</Typography>
          <Typography>Particulars</Typography>
          <Typography textAlign="right">Amount</Typography>
          <Typography textAlign="right">Amount</Typography>

          <Typography textAlign="center">|</Typography>

          <Typography textAlign="right">Last Yr</Typography>
          <Typography>Particulars</Typography>
          <Typography textAlign="right">Amount</Typography>
          <Typography textAlign="right">Amount</Typography>
        </Box>

        {/* ================= BODY ================= */}

        <Box
          display="grid"
          gridTemplateColumns="1fr 40px 1fr"
          gap={3}
          mt={3}
        >

          {/* LEFT SIDE */}
          <Box>
            <Typography fontWeight={800} mb={1}>
              TRADING / EXPENSES
            </Typography>

            <Row ly="--" p="Opening Stock" a1="--" a2="--" />
            <Row ly="9,10,000" p="Book Purchases" a1="9,64,561" a2="9,64,561" />
            <Row ly="300" p="Freight A/C" a1="364" a2="364" />
            <Row ly="-60,000" p="Purchase Return" a1="-74,851" a2="-74,851" />
            <Row ly="" p="Gross Profit c/o" a1="82,993" a2="82,993" />
          </Box>

          {/* CENTER DIVIDER */}
          <Box sx={{ borderLeft: "2px dashed #999" }} />

          {/* RIGHT SIDE */}
          <Box>
            <Typography fontWeight={800} mb={1}>
              TRADING / INCOME
            </Typography>

            <Row ly="10,80,000" p="Sales" a1="11,34,390" a2="11,34,390" />
            <Row ly="-70,000" p="Sales Return" a1="-87,780" a2="-87,780" />
            <Row ly="--" p="Closing Stock" a1="--" a2="--" />
            <Row ly="" p="Gross Profit b/f" a1="82,993" a2="82,993" />
          </Box>

        </Box>

        {/* ================= FOOTER ================= */}

        <Box mt={3} sx={{ borderTop: "2px dashed #444" }} />

        <Typography textAlign="center" mt={2} fontSize={16} fontWeight={800}>
          Net Profit : 82,993
        </Typography>

      </Paper>

      {/* PRINT */}
      <style>
        {`
          @media print {
            @page { size: A4 portrait; margin: 12mm; }
            body { background:white; }
          }
        `}
      </style>
    </Box>
  );
}
