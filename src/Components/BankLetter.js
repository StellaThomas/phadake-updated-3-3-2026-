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

function BankLetter() {
  const navigate = useNavigate();

  const [startNo, setStartNo] = useState("");
  const [endNo, setEndNo] = useState("");
  const [allRequired, setAllRequired] = useState(false);

  /* =========================
     PRINT BUTTON → GO TO LETTER PAGE
  ========================= */
  const handlePrint = () => {
    navigate("/bank-letter-print", {
      state: {
        startNo,
        endNo,
        allRequired
      }
    });
  };

  /* =========================
     CLOSE → RESET FORM
  ========================= */
  const handleClose = () => {
    setStartNo("");
    setEndNo("");
    setAllRequired(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #f5f7fa 0%, #e4e8ee 100%)",
        display: "flex",
        justifyContent: "center",
        paddingTop: "60px"
      }}
    >
      <Box>
        {/* TITLE */}
        <Typography
          variant="h4"
          fontWeight="700"
          textAlign="center"
          mb={4}
          letterSpacing={1}
        >
          Bank Letter
        </Typography>

        {/* CARD */}
        <Paper
          elevation={6}
          sx={{
            width: 520,
            padding: "32px 36px",
            borderRadius: "12px"
          }}
        >
          {/* START NO */}
          <Box display="flex" alignItems="center" mb={3}>
            <Typography
              sx={{
                width: 130,
                fontWeight: 600,
                fontSize: "15px"
              }}
            >
              Start No :
            </Typography>

            <TextField
              size="small"
              fullWidth
              placeholder="Enter start number"
              value={startNo}
              onChange={(e) => setStartNo(e.target.value)}
            />
          </Box>

          {/* END NO */}
          <Box display="flex" alignItems="center" mb={3}>
            <Typography
              sx={{
                width: 130,
                fontWeight: 600,
                fontSize: "15px"
              }}
            >
              End No :
            </Typography>

            <TextField
              size="small"
              fullWidth
              placeholder="Enter end number"
              value={endNo}
              onChange={(e) => setEndNo(e.target.value)}
            />
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* CHECKBOX */}
          <FormControlLabel
            control={
              <Checkbox
                checked={allRequired}
                onChange={(e) =>
                  setAllRequired(e.target.checked)
                }
              />
            }
            label={
              <Typography fontWeight={600} fontSize="14px">
                All Challans are Required
              </Typography>
            }
          />
        </Paper>

        {/* BUTTONS */}
        <Box
          display="flex"
          justifyContent="center"
          gap={3}
          mt={4}
        >
          {/* PRINT */}
          <Button
            variant="contained"
            size="large"
            onClick={handlePrint}
            sx={{
              px: 5,
              py: 1.2,
              borderRadius: "8px",
              fontWeight: 600,
              background:
                "linear-gradient(135deg, #1e88e5, #1565c0)"
            }}
          >
            Print Report
          </Button>

          {/* CLOSE */}
          <Button
            variant="contained"
            size="large"
            color="error"
            onClick={handleClose}
            sx={{
              px: 5,
              py: 1.2,
              borderRadius: "8px",
              fontWeight: 600
            }}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default BankLetter;
