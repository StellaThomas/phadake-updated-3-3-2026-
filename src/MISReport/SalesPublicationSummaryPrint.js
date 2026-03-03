import {
  Box,
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Divider
} from "@mui/material";

import PrintIcon from "@mui/icons-material/Print";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

export default function SalesPublicationSummaryPrint() {
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  return (
    <Box sx={{ p: 3, background: "#eee", minHeight: "100vh" }}>

      <Paper
        sx={{
          p: 4,
          maxWidth: 900,
          mx: "auto",
          borderRadius: 2
        }}
      >

        {/* ===== REPORT HEADER ===== */}

        <Typography align="center" fontWeight={800} fontSize={20}>
          PHADKE BOOK HOUSE
        </Typography>

        <Typography align="center" fontSize={13} sx={{ mt: 1 }}>
          Sales Publicationwise Summary Report
        </Typography>

        <Typography align="center" fontSize={12} color="text.secondary">
          All Parties • Selected Filters • Date Range
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* ===== TABLE ===== */}

        <Table size="small">

          <TableHead>
            <TableRow>
              <TableCell><b>Particulars</b></TableCell>
              <TableCell align="right"><b>Sale</b></TableCell>
              <TableCell align="right"><b>Sale Return</b></TableCell>
              <TableCell align="right"><b>Net Sale</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>

            {/* ===== SAMPLE STRUCTURE ROWS ===== */}

            {[1,2,3,4].map((i) => (
              <TableRow key={i}>
                <TableCell>
                  Party Name {i}
                  <Typography fontSize={12} color="text.secondary">
                    Book details line preview
                  </Typography>
                </TableCell>

                <TableCell align="right">0</TableCell>
                <TableCell align="right">0</TableCell>
                <TableCell align="right">0</TableCell>
              </TableRow>
            ))}

            {/* ===== TOTAL ROW ===== */}

            <TableRow>
              <TableCell><b>Total</b></TableCell>
              <TableCell align="right"><b>0</b></TableCell>
              <TableCell align="right"><b>0</b></TableCell>
              <TableCell align="right"><b>0</b></TableCell>
            </TableRow>

          </TableBody>

        </Table>

      </Paper>

      {/* ===== ACTION BUTTONS (NOT PRINTED) ===== */}

      <Box
        display="flex"
        justifyContent="center"
        gap={3}
        mt={3}
        sx={{ "@media print": { display: "none" } }}
      >
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
          onClick={() => navigate(-1)}
        >
          Close
        </Button>
      </Box>

    </Box>
  );
}
