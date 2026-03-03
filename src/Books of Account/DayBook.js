import React, { useState } from "react";
import {
  Box, Paper, Typography, TextField,
  Checkbox, FormControlLabel, Button,
  Radio, RadioGroup, Stack, Grid
} from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import CloseIcon from "@mui/icons-material/Close";
import dayjs from "dayjs";

export default function DayBook() {

  /* ===============================
     FINANCIAL YEAR DEFAULT
  =============================== */

  const today = dayjs();
  const year = today.year();
  const month = today.month();

  let fyStart, fyEnd;

  if (month < 3) {
    fyStart = dayjs(`${year - 1}-04-01`);
    fyEnd = dayjs(`${year}-03-31`);
  } else {
    fyStart = dayjs(`${year}-04-01`);
    fyEnd = dayjs(`${year + 1}-03-31`);
  }

  const [startDate, setStartDate] = useState(fyStart.format("YYYY-MM-DD"));
  const [endDate, setEndDate] = useState(fyEnd.format("YYYY-MM-DD"));
  const [mode, setMode] = useState("selected");

  const [options, setOptions] = useState([
    { id: 1, label: "Credit Note", checked: false },
    { id: 2, label: "Debit Note", checked: false },
    { id: 3, label: "JV", checked: false },
    { id: 4, label: "Payments", checked: false },
    { id: 5, label: "Purchase", checked: false },
    { id: 6, label: "Purchase Return - Debit Note", checked: false },
    { id: 7, label: "Receipts", checked: false },
    { id: 8, label: "Sales Invoice", checked: false }
  ]);

  const toggleOption = (id) => {
    setOptions(prev =>
      prev.map(o =>
        o.id === id ? { ...o, checked: !o.checked } : o
      )
    );
  };

  const handleModeChange = (val) => {
    setMode(val);
    setOptions(prev =>
      prev.map(o => ({ ...o, checked: val === "all" }))
    );
  };

  /* ===============================
     PRINT LOGIC (localStorage)
  =============================== */

  const handlePrint = () => {

    const selectedOptions = options
      .filter(o => o.checked)
      .map(o => o.label);

    localStorage.setItem(
      "dayBookPrintData",
      JSON.stringify({
        startDate,
        endDate,
        mode,
        selectedOptions
      })
    );

    window.open("/day-book-print", "_blank");
  };

  return (
    <Box sx={{
      minHeight: "100vh",
      background: "#eef2f6",
      display: "flex",
      justifyContent: "center",
      pt: 6
    }}>
      <Box width={540}>

        <Typography
          variant="h5"
          fontWeight={600}
          textAlign="center"
          mb={3}
        >
          Day Book
        </Typography>

        {/* PERIOD */}
        <Paper sx={{ p: 2.5, borderRadius: 3, mb: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Start Date"
                type="date"
                size="small"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="End Date"
                type="date"
                size="small"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Grid>
          </Grid>
        </Paper>

        {/* TRANSACTIONS */}
        <Paper sx={{ p: 2.5, borderRadius: 3, mb: 3 }}>
          <Typography fontWeight={600} mb={1}>
            Transactions
          </Typography>

          <RadioGroup
            row
            value={mode}
            onChange={(e) => handleModeChange(e.target.value)}
          >
            <FormControlLabel
              value="all"
              control={<Radio size="small" />}
              label="Select All"
            />
            <FormControlLabel
              value="selected"
              control={<Radio size="small" />}
              label="Selected"
            />
          </RadioGroup>

          <Box sx={{
            border: "1px solid #ccc",
            borderRadius: 2,
            p: 1,
            maxHeight: 150,
            overflow: "auto",
            mt: 1
          }}>
            {options.map(opt => (
              <FormControlLabel
                key={opt.id}
                control={
                  <Checkbox
                    size="small"
                    checked={opt.checked}
                    onChange={() => toggleOption(opt.id)}
                  />
                }
                label={opt.label}
              />
            ))}
          </Box>
        </Paper>

        {/* BUTTONS */}
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            startIcon={<PrintIcon />}
            onClick={handlePrint}
          >
            Print
          </Button>

          <Button
            variant="contained"
            color="error"
            startIcon={<CloseIcon />}
            onClick={() => window.history.back()}
          >
            Close
          </Button>
        </Stack>

      </Box>
    </Box>
  );
}
