import React, { useState } from "react";
import {
  Box, Paper, Typography, TextField,
  Checkbox, FormControlLabel, Button, Divider
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function SalesInvoice() {
  const navigate = useNavigate();

  const [startNo, setStartNo] = useState("");
  const [endNo, setEndNo] = useState("");
  const [allRequired, setAllRequired] = useState(false);
  const [printBill, setPrintBill] = useState(false);

  const handlePrint = () => {
    navigate("/sales-invoice-print", {
      state: { startNo, endNo, allRequired, printBill }
    });
  };

  const handleClose = () => {
    setStartNo("");
    setEndNo("");
    setAllRequired(false);
    setPrintBill(false);
  };

  return (
    <Box sx={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#f5f7fa,#e4e8ee)",
      display: "flex",
      justifyContent: "center",
      pt: 8
    }}>
      <Box>

        <Typography variant="h4" fontWeight={700} textAlign="center" mb={4}>
          Sales Invoice
        </Typography>

        <Paper elevation={6} sx={{ width: 540, p: 4, borderRadius: 3 }}>

          <Box display="flex" mb={3}>
            <Typography width={140} fontWeight={600}>Start No :</Typography>
            <TextField fullWidth size="small"
              value={startNo}
              onChange={(e)=>setStartNo(e.target.value)}
            />
          </Box>

          <Box display="flex" mb={3}>
            <Typography width={140} fontWeight={600}>End No :</Typography>
            <TextField fullWidth size="small"
              value={endNo}
              onChange={(e)=>setEndNo(e.target.value)}
            />
          </Box>

          <Divider sx={{my:2}}/>

          <FormControlLabel
            control={<Checkbox checked={allRequired}
              onChange={(e)=>setAllRequired(e.target.checked)} />}
            label="All Challans are Required"
          />

          <FormControlLabel
            control={<Checkbox checked={printBill}
              onChange={(e)=>setPrintBill(e.target.checked)} />}
            label="Print Canvassor’s Bill"
          />

        </Paper>

        <Box display="flex" justifyContent="center" gap={3} mt={4}>
          <Button variant="contained" size="large" onClick={handlePrint}>
            Print Report
          </Button>

          <Button variant="contained" color="error"
            size="large" onClick={handleClose}>
            Close
          </Button>
        </Box>

      </Box>
    </Box>
  );
}

export default SalesInvoice;
