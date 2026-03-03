import React, { useState } from "react";
import {
  Box, Paper, Typography, TextField,
  Checkbox, FormControlLabel, Button, Divider
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function SalesReturnCreditNote() {
  const navigate = useNavigate();

  const [startNo, setStartNo] = useState("");
  const [endNo, setEndNo] = useState("");
  const [allRequired, setAllRequired] = useState(false);

  const handlePrint = () => {
    if (!startNo || !endNo) {
      alert("Please enter Start No and End No");
      return;
    }

    // ✅ NAVIGATE — NOT PRINT
    navigate("/credit-note-print", {
      state: { startNo, endNo, allRequired }
    });
  };

  return (
    <Box sx={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#eef2f7,#d9e2ec)",
      display: "flex",
      justifyContent: "center",
      pt: 8
    }}>
      <Box>

        <Typography variant="h4" fontWeight={800} textAlign="center" mb={4}>
          Sales Return Credit Note
        </Typography>

        <Paper elevation={8} sx={{ width: 540, p: 4, borderRadius: 3 }}>

          <Box display="flex" mb={3}>
            <Typography sx={{ width: 150, fontWeight: 700 }}>
              Start No :
            </Typography>
            <TextField
              fullWidth size="small"
              value={startNo}
              onChange={(e) => setStartNo(e.target.value)}
            />
          </Box>

          <Box display="flex" mb={3}>
            <Typography sx={{ width: 150, fontWeight: 700 }}>
              End No :
            </Typography>
            <TextField
              fullWidth size="small"
              value={endNo}
              onChange={(e) => setEndNo(e.target.value)}
            />
          </Box>

          <Divider sx={{ my: 2 }} />

          <FormControlLabel
            control={
              <Checkbox
                checked={allRequired}
                onChange={(e) => setAllRequired(e.target.checked)}
              />
            }
            label="All Challans are Required"
          />

        </Paper>

        <Box display="flex" justifyContent="center" gap={3} mt={5}>
          <Button variant="contained" size="large" onClick={handlePrint}>
            Print Report
          </Button>

          <Button variant="contained" color="error" size="large">
            Close
          </Button>
        </Box>

      </Box>
    </Box>
  );
}

export default SalesReturnCreditNote;
