import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  Grid
} from "@mui/material";

import PrintIcon from "@mui/icons-material/Print";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

export default function InwardRegister() {
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState("2026-04-01");
  const [endDate, setEndDate] = useState("2026-03-31");
  const [showBooks, setShowBooks] = useState("no");
  const [accountGroup, setAccountGroup] = useState("");

  const handlePrint = () => {
    navigate("/inward-register-print", {
      state: { startDate, endDate, showBooks, accountGroup }
    });
  };

  const handleClose = () => navigate(-1);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#eef2f7,#e3e8f0)",
        display: "flex",
        justifyContent: "center",
        pt: 4
      }}
    >
      <Box width={540}>

        {/* TITLE */}

        <Typography
          variant="h5"
          fontWeight={600}
          textAlign="center"
          mb={2}
        >
          Inward Register
        </Typography>

        {/* PERIOD */}

        <Paper sx={{ p: 2.5, borderRadius: 2.5, mb: 2.5 }}>
          <Typography fontWeight={600} fontSize={15} mb={2}>
            Period
          </Typography>

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

        {/* SHOW BOOKS */}

        <Paper sx={{ p: 2.5, borderRadius: 2.5, mb: 2.5 }}>
          <Typography fontWeight={600} fontSize={15}>
            Show Books ?
          </Typography>

          <RadioGroup
            row
            value={showBooks}
            onChange={(e) => setShowBooks(e.target.value)}
          >
            <FormControlLabel value="yes" control={<Radio size="small" />} label="Yes" />
            <FormControlLabel value="no" control={<Radio size="small" />} label="No" />
          </RadioGroup>
        </Paper>

        {/* ACCOUNT GROUP */}

        <Paper sx={{ p: 2.5, borderRadius: 2.5 }}>
          <Typography fontWeight={600} fontSize={15} mb={1}>
            Account Group
          </Typography>

          <TextField
            select
            size="small"
            fullWidth
            value={accountGroup}
            onChange={(e) => setAccountGroup(e.target.value)}
          >
            <MenuItem value="">Select Account Group</MenuItem>
            <MenuItem value="CASH">Cash</MenuItem>
            <MenuItem value="BANK">Bank</MenuItem>
          </TextField>
        </Paper>

        {/* BUTTONS */}

        <Box display="flex" justifyContent="center" gap={2.5} mt={3}>
          <Button
            variant="contained"
            size="medium"
            startIcon={<PrintIcon />}
            onClick={handlePrint}
            sx={{
              px: 3.5,
              py: 1,
              fontSize: 14,
              fontWeight: 600,
              borderRadius: 2,
              minWidth: 170
            }}
          >
            Print Report
          </Button>

          <Button
            variant="contained"
            color="error"
            size="medium"
            startIcon={<CloseIcon />}
            onClick={handleClose}
            sx={{
              px: 3.5,
              py: 1,
              fontSize: 14,
              fontWeight: 600,
              borderRadius: 2,
              minWidth: 120
            }}
          >
            Close
          </Button>
        </Box>

      </Box>
    </Box>
  );
}
