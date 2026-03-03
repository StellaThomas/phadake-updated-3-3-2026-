import { Box, Paper, Typography, Button, Divider } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import { useLocation } from "react-router-dom";

export default function PartyListingPrint() {
  const { state } = useLocation() || {};
  const handlePrint = () => window.print();

  const parties = state?.parties || [];
  const generatedOn = new Date().toLocaleString();

  return (
    <Box
      sx={{
        background: "#bdbdbd",
        minHeight: "100vh",
        p: 3
      }}
    >
      {/* ================= PRINT PAGE ================= */}

      <Paper
        sx={{
          width: "210mm",
          minHeight: "297mm",
          mx: "auto",
          p: 5,
          background: "#fff",
          color: "#000",
          boxShadow: 8,
          borderRadius: 2
        }}
      >
        {/* HEADER */}

        <Typography align="center" fontWeight={800} fontSize={20}>
          Party Listing
        </Typography>

        <Typography align="center" mt={1} fontSize={14}>
          Group: <b>{state?.groupHead || "All"}</b>
          {"  |  "}
          City: <b>{state?.city || "All"}</b>
        </Typography>

        <Divider sx={{ mt: 2, mb: 3 }} />

        {/* TWO COLUMN GRID */}

        <Box
          display="grid"
          gridTemplateColumns="1fr 1fr"
          columnGap={8}
          rowGap={4}
        >
          {parties.length === 0 && (
            <Typography>No data received</Typography>
          )}

          {parties.map((p, i) => (
            <Box key={i}>
              <Typography fontWeight={700} fontSize={14}>
                {p.name}
              </Typography>

              {!state?.onlyNameMobile && (
                <Typography fontSize={13} mt={0.5}>
                  {p.address}
                  <br />
                  {p.city}
                </Typography>
              )}

              <Typography fontSize={13} mt={0.5}>
                Mobile: {p.mobile}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* FOOTER */}

        <Divider sx={{ mt: 5, mb: 2 }} />

        <Typography fontSize={12}>
          Generated on: {generatedOn}
        </Typography>
      </Paper>

      {/* ================= PRINT BUTTON BOTTOM ================= */}

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
          sx={{
            px: 6,
            py: 1.5,
            borderRadius: 2,
            boxShadow: 4
          }}
        >
          Print
        </Button>
      </Box>
    </Box>
  );
}
