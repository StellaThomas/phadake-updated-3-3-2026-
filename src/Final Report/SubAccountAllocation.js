import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Select,
  MenuItem,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CircularProgress,
  IconButton
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

/* ================= HARDCODED ACCOUNT NAMES ================= */

const ACCOUNT_LIST = [
  { id: 1, name: "SHRI CHAMKIRE RAJARAM SHANKAR" },
  { id: 2, name: "SHRI PHADKE M. V." },
  { id: 3, name: "SHRI PHADKE MANDAR" }
];

function SubAccountAllocation() {
  const navigate = useNavigate();

  const [selectedId, setSelectedId] = useState("");
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  /* ================= LOAD TABLE FROM BACKEND ================= */

  const loadLedger = async (id) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/sub-account-ledger/${id}`);
      const data = await res.json();
      setRows(data);
    } catch (err) {
      console.error(err);
      setRows([]);
    }
    setLoading(false);
  };

  /* ================= SELECT CHANGE ================= */

  const handleChange = (e) => {
    const id = e.target.value;
    setSelectedId(id);
    if (id) loadLedger(id);
  };

  return (
    <Box sx={{ minHeight: "100vh", background: "#f4f6fa", pt: 6 }}>
      <Box sx={{ width: 1000, mx: "auto" }}>

        {/* ================= BACK BUTTON ================= */}

        <IconButton
          onClick={() => navigate(-1)}
          sx={{
            mb: 1,
            background: "#fff",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            "&:hover": { background: "#f5f5f5" }
          }}
        >
          <ArrowBackIcon />
        </IconButton>

        {/* ================= MAIN CARD ================= */}

        <Paper
          sx={{
            p: 3,
            borderRadius: 2,
            background: "#fff",
            boxShadow: "0 6px 16px rgba(0,0,0,0.08)"
          }}
        >

          {/* ================= ACCOUNT SELECT ================= */}

          <Typography fontWeight={700} mb={2}>
            Account Name
          </Typography>

          <Select
            fullWidth
            size="small"
            value={selectedId}
            onChange={handleChange}
            displayEmpty
          >
            <MenuItem value="">
              <em>Select Account</em>
            </MenuItem>

            {ACCOUNT_LIST.map(acc => (
              <MenuItem key={acc.id} value={acc.id}>
                {acc.name}
              </MenuItem>
            ))}
          </Select>

          {/* ================= TABLE ================= */}

          <Table size="small" sx={{ mt: 3 }}>
            <TableHead>
              <TableRow sx={{ background: "#f1f1f1" }}>
                <TableCell>Date</TableCell>
                <TableCell>Trans Cd</TableCell>
                <TableCell>Particulars</TableCell>
                <TableCell>Debit</TableCell>
                <TableCell>Credit</TableCell>
                <TableCell>Balance</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>

              {loading && (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    <CircularProgress size={22} />
                  </TableCell>
                </TableRow>
              )}

              {!loading && rows.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    No data
                  </TableCell>
                </TableRow>
              )}

              {rows.map((r, i) => (
                <TableRow key={i}>
                  <TableCell>{r.date}</TableCell>
                  <TableCell>{r.transCode}</TableCell>
                  <TableCell>{r.particulars}</TableCell>
                  <TableCell>{r.debit}</TableCell>
                  <TableCell>{r.credit}</TableCell>
                  <TableCell>{r.balance}</TableCell>
                </TableRow>
              ))}

            </TableBody>
          </Table>

          {/* ================= BUTTONS ================= */}

          <Box mt={3} display="flex" gap={2}>
            <Button variant="contained">
              OK
            </Button>

            <Button
              variant="contained"
              color="error"
              onClick={() => navigate(-1)}
            >
              Close
            </Button>
          </Box>

        </Paper>

      </Box>
    </Box>
  );
}

export default SubAccountAllocation;
