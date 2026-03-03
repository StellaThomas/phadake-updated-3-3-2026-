import { Box, Paper, Typography, Button } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import { useLocation } from "react-router-dom";

export default function CanvassingCollegeListPrint() {

  const { state } = useLocation() || {};
  const handlePrint = () => window.print();

  const rows = state?.rows || []; // from backend later
  const generatedOn = new Date().toLocaleString();

  return (
    <Box sx={{ background: "#bdbdbd", minHeight: "100vh", p: 3 }}>

      {/* PRINT BUTTON BOTTOM */}

      <Paper
        sx={{
          width: "210mm",
          minHeight: "297mm",
          mx: "auto",
          p: 5,
          background: "#fff",
          color: "#000",
          boxShadow: 6
        }}
      >

        {/* HEADER */}

        <Typography align="center" fontWeight={700} fontSize={20}>
          Phadke Prakashan, Kolhapur
        </Typography>

        <Typography align="center" fontWeight={600} mt={1}>
          Canvassing College List
        </Typography>

        <Typography align="center" mt={1}>
          City: {state?.city || "All"} | College: {state?.college || "All"}
        </Typography>

        <Box borderTop="2px solid #000" mt={2} mb={2} />

        {/* ROW BLOCK STYLE — LIKE YOUR OLD SOFTWARE */}

        {rows.length === 0 && (
          <Typography align="center" mt={6}>
            No data received
          </Typography>
        )}

        {rows.map((r, i) => (
          <Box key={i} mb={4}>

            <Typography fontWeight={700}>
              {r.city}
            </Typography>

            <Typography fontWeight={700}>
              {r.collegeName}
            </Typography>

            <Typography fontSize={14}>
              {r.address}
            </Typography>

            <Typography fontSize={14}>
              Phone: {r.phone}
            </Typography>

          </Box>
        ))}

        <Box mt={8} fontSize={13}>
          Generated on: {generatedOn}
        </Box>

      </Paper>

      {/* PRINT BUTTON */}

      <Box
        sx={{
          textAlign: "center",
          mt: 3,
          "@media print": { display: "none" }
        }}
      >
        <Button
          variant="contained"
          size="large"
          startIcon={<PrintIcon />}
          onClick={handlePrint}
          sx={{ px: 6 }}
        >
          Print
        </Button>
      </Box>

    </Box>
  );
}
