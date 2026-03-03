import {
  Box,
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Divider,
  Button
} from "@mui/material";

import PrintIcon from "@mui/icons-material/Print";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

export default function BooksDetailsPrint() {
  const navigate = useNavigate();

  const handlePrint = () => window.print();

  return (
    <Box sx={{ background: "#e5e7eb", minHeight: "100vh", p: 3 }}>

      {/* ===== PRINT SHEET ===== */}

      <Paper
        sx={{
          width: 900,
          mx: "auto",
          p: 5,
          borderRadius: 2,
          boxShadow: 6,
          background: "#fff"
        }}
      >

        {/* HEADER */}

        <Typography align="center" fontWeight={800} fontSize={20}>
          PHADKE BOOK HOUSE
        </Typography>

        <Typography align="center" fontSize={14} mt={1}>
          Book Details
        </Typography>

        <Typography align="center" fontSize={12} color="text.secondary">
          From 01-04-2025 To 31-03-2026, Selected Book Code (4183, 4183)
        </Typography>

        <Typography align="right" fontSize={12} mt={1}>
          Page 1 of 1
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* TABLE */}

        <Table size="small">

          <TableHead>
            <TableRow>
              <TableCell><b>Particulars</b></TableCell>
              <TableCell align="right"><b>Sales</b></TableCell>
              <TableCell align="right"><b>Challan</b></TableCell>
              <TableCell align="right"><b>Total</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>

            {/* BOOK HEADER ROW */}

            <TableRow>
              <TableCell colSpan={4} sx={{ fontWeight: 700 }}>
                M4183 — Book Name Preview Line (Unicode Title)
              </TableCell>
            </TableRow>

            {/* PARTY LINE */}

            <TableRow>
              <TableCell>
                1. AJARA HIGHSCHOOL, AJARA
              </TableCell>
              <TableCell align="right">43</TableCell>
              <TableCell align="right">0</TableCell>
              <TableCell align="right">43</TableCell>
            </TableRow>

            {/* TOTAL */}

            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>
                Total Books
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: 700 }}>
                43
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: 700 }}>
                0
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: 700 }}>
                43
              </TableCell>
            </TableRow>

          </TableBody>
        </Table>

      </Paper>

      {/* ===== ACTION BUTTONS — HIDDEN IN PRINT ===== */}

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
