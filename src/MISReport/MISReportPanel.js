import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Divider,
  Chip,
  Stack
} from "@mui/material";

import PrintIcon from "@mui/icons-material/Print";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useNavigate } from "react-router-dom";

export default function SelectedReportCard() {

  const navigate = useNavigate();

  // default selected report
  const [selectedReport] = useState("MIS Reports");

  const handleOpenReport = () => {
    console.log("Opening report:", selectedReport);

    // example routing if needed later
    // navigate("/mis-reports");
  };

  const handlePrint = () => {
    window.print();
  };

  return (

    <Box
      sx={{
        minHeight: "100vh",
        background: "#eef2f6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >

      <Paper
        elevation={6}
        sx={{
          width: 420,
          borderRadius: 4,
          p: 4
        }}
      >

        {/* Title */}
        <Typography
          fontWeight={700}
          fontSize={22}
          mb={2}
        >
          Selected Report
        </Typography>


        {/* Selected Chip */}
        <Chip
          label={selectedReport}
          sx={{
            background:
              "linear-gradient(45deg,#1565c0,#42a5f5)",
            color: "#fff",
            fontWeight: 600,
            fontSize: 15,
            px: 2,
            py: 2,
            borderRadius: 5
          }}
        />


        <Divider sx={{ my: 3 }} />


        {/* Open text */}
        <Typography
          align="center"
          color="text.secondary"
          mb={2}
        >
          Click OPEN to launch report
        </Typography>


        {/* OPEN BUTTON */}
        <Box textAlign="center" mb={4}>

          <Button
            variant="contained"
            endIcon={<ArrowForwardIosIcon />}
            onClick={handleOpenReport}
            sx={{
              background:
                "linear-gradient(45deg,#1565c0,#42a5f5)",
              px: 5,
              py: 1.5,
              borderRadius: 3,
              fontWeight: 700,
              fontSize: 15,
              boxShadow: 3
            }}
          >
            OPEN REPORT
          </Button>

        </Box>


        {/* Bottom Buttons */}
        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
        >

          <Button
            variant="contained"
            startIcon={<PrintIcon />}
            onClick={handlePrint}
            sx={{
              background:
                "linear-gradient(45deg,#1565c0,#42a5f5)",
              px: 4,
              py: 1.2,
              borderRadius: 3,
              fontWeight: 700
            }}
          >
            PRINT
          </Button>


          <Button
            variant="contained"
            color="error"
            startIcon={<CloseIcon />}
            onClick={() => navigate(-1)}
            sx={{
              px: 4,
              py: 1.2,
              borderRadius: 3,
              fontWeight: 700
            }}
          >
            CLOSE
          </Button>

        </Stack>

      </Paper>

    </Box>

  );

}

