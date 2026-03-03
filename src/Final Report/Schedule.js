import React, { useEffect, useState } from "react";
import {
  Box, Paper, Typography, TextField, Button,
  Checkbox, FormControlLabel
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Schedule() {
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState("2025-04-01");
  const [endDate, setEndDate] = useState("2026-03-31");

  const [groups, setGroups] = useState([]);
  const [selected, setSelected] = useState([]);

  const [printSumm, setPrintSumm] = useState(false);
  const [opening, setOpening] = useState(false);

  const cardStyle = {
    p: 3,
    borderRadius: 2,
    backgroundColor: "#fff",
    boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
    mb: 4
  };

  /* ===== fetch backend groups ===== */

  useEffect(() => {
    fetch("/api/account-groups")
      .then(r => r.json())
      .then(setGroups);
  }, []);

  const moveRight = (g) => {
    setSelected(prev => [...prev, g]);
    setGroups(prev => prev.filter(x => x !== g));
  };

  const moveLeft = (g) => {
    setGroups(prev => [...prev, g]);
    setSelected(prev => prev.filter(x => x !== g));
  };

  return (
    <Box sx={{ minHeight: "100vh", background: "#f4f6fa", pt: 6 }}>
      <Box sx={{ width: 1000, mx: "auto" }}>

        <Typography variant="h4" fontWeight={700} textAlign="center" mb={4}>
          Period
        </Typography>

        {/* PERIOD */}
        <Paper sx={cardStyle}>
          <Box display="grid" gridTemplateColumns="160px 1fr" gap={2}>
            <Typography>Start Date</Typography>
            <TextField type="date" size="small"
              value={startDate}
              onChange={e=>setStartDate(e.target.value)} />

            <Typography>End Date</Typography>
            <TextField type="date" size="small"
              value={endDate}
              onChange={e=>setEndDate(e.target.value)} />
          </Box>

          <Box mt={2}>
            <FormControlLabel
              control={<Checkbox checked={printSumm}
                onChange={e=>setPrintSumm(e.target.checked)} />}
              label="Print Summarised Trial Bal?"
            />
            <FormControlLabel
              control={<Checkbox checked={opening}
                onChange={e=>setOpening(e.target.checked)} />}
              label="Opening Trial Balance?"
            />
          </Box>
        </Paper>

        {/* GROUP SELECTOR */}
        <Paper sx={cardStyle}>
          <Typography fontWeight={700} mb={2}>
            Account Groups
          </Typography>

          <Box display="grid" gridTemplateColumns="1fr 120px 1fr" gap={2}>

            {/* LEFT */}
            <Box sx={{ border:"1px solid #ccc", p:2, height:260, overflowY:"auto" }}>
              {groups.map(g => (
                <Box key={g} onClick={()=>moveRight(g)}
                  sx={{ cursor:"pointer", p:0.5 }}>
                  {g}
                </Box>
              ))}
            </Box>

            {/* BUTTONS */}
            <Box display="flex" flexDirection="column" gap={2} justifyContent="center">
              <Button onClick={()=>setSelected([...selected, ...groups])}>{">>"}</Button>
              <Button onClick={()=>setGroups([...groups, ...selected])}>{"<<"}</Button>
            </Box>

            {/* RIGHT */}
            <Box sx={{ border:"1px solid #ccc", p:2, height:260, overflowY:"auto" }}>
              {selected.map(g => (
                <Box key={g} onClick={()=>moveLeft(g)}
                  sx={{ cursor:"pointer", p:0.5 }}>
                  {g}
                </Box>
              ))}
            </Box>

          </Box>

          <Box mt={3} display="flex" gap={2}>
            <Button
              variant="outlined"
              onClick={()=>navigate("/sub-account-allocation")}
            >
              Sub Account Allocation
            </Button>

          <Button
  variant="contained"
  onClick={() =>
    navigate("/schedule-print", {
      state: { endDate, selected }
    })
  }
>
  Print Report
</Button>
            <Button variant="contained" color="error">Close</Button>
          </Box>
        </Paper>

      </Box>
    </Box>
  );
}

export default Schedule;
