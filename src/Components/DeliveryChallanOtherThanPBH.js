import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Divider
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function DeliveryChallanOtherThanPBH() {
  const navigate = useNavigate();

  const [startNo, setStartNo] = useState("");
  const [endNo, setEndNo] = useState("");
  const [allRequired, setAllRequired] = useState(false);

  const handlePrint = () => {
    navigate("/dc-print-table", {
      state: { startNo, endNo, allRequired }
    });
  };

  const handleClose = () => {
    setStartNo("");
    setEndNo("");
    setAllRequired(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8ee 100%)",
        display: "flex",
        justifyContent: "center",
        paddingTop: "60px"
      }}
    >
      <Box>

        <Typography
          variant="h4"
          fontWeight="700"
          textAlign="center"
          mb={4}
        >
          Delivery Challan Other Than PBH
        </Typography>

        <Paper
          elevation={6}
          sx={{
            width: 520,
            padding: "32px 36px",
            borderRadius: "12px"
          }}
        >
          <Box display="flex" alignItems="center" mb={3}>
            <Typography sx={{ width: 130, fontWeight: 600 }}>
              Start No :
            </Typography>
            <TextField
              size="small"
              fullWidth
              value={startNo}
              onChange={(e) => setStartNo(e.target.value)}
            />
          </Box>

          <Box display="flex" alignItems="center" mb={3}>
            <Typography sx={{ width: 130, fontWeight: 600 }}>
              End No :
            </Typography>
            <TextField
              size="small"
              fullWidth
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

        <Box display="flex" justifyContent="center" gap={3} mt={4}>
          <Button
            variant="contained"
            size="large"
            type="button"
            onClick={handlePrint}
            sx={{ px: 5 }}
          >
            Print Report
          </Button>

          <Button
            variant="contained"
            color="error"
            size="large"
            type="button"
            onClick={handleClose}
            sx={{ px: 5 }}
          >
            Close
          </Button>
        </Box>

      </Box>
    </Box>
  );
}

export default DeliveryChallanOtherThanPBH;
