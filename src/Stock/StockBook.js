import { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  TextField,
  Button,
  Stack,
  List,
  ListItemButton,
  ListItemText
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import PrintIcon from "@mui/icons-material/Print";
import CloseIcon from "@mui/icons-material/Close";

import { useNavigate } from "react-router-dom";

export default function StockBook({ groupsData = [] }) {
  const navigate = useNavigate();

  const [mode, setMode] = useState("group");
  const [showSummary, setShowSummary] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [left, setLeft] = useState([]);
  const [right, setRight] = useState([]);

  const [selectedLeft, setSelectedLeft] = useState(null);
  const [selectedRight, setSelectedRight] = useState(null);

  useEffect(() => {
    if (groupsData?.length) setLeft(groupsData);
  }, [groupsData]);

  /* ===== MOVE ===== */

  const moveOneRight = () => {
    if (!selectedLeft) return;
    setRight(r => [...r, selectedLeft]);
    setLeft(l => l.filter(x => x !== selectedLeft));
    setSelectedLeft(null);
  };

  const moveAllRight = () => {
    setRight(r => [...r, ...left]);
    setLeft([]);
  };

  const moveOneLeft = () => {
    if (!selectedRight) return;
    setLeft(l => [...l, selectedRight]);
    setRight(r => r.filter(x => x !== selectedRight));
    setSelectedRight(null);
  };

  const moveAllLeft = () => {
    setLeft(l => [...l, ...right]);
    setRight([]);
  };

  const handlePrint = () => {
    navigate("/stock-book-print", {
      state: { startDate, endDate, mode, showSummary, selectedGroups: right }
    });
  };

  /* ===== SMALL SQUARE BUTTON STYLE ===== */

  const arrowBtn = {
    minWidth: 38,
    width: 38,
    height: 38,
    borderRadius: 2,
    p: 0
  };

  const card = {
    p: 2,
    borderRadius: 3,
    boxShadow: "0 4px 12px rgba(0,0,0,0.06)"
  };

  return (
    <Box sx={{ minHeight: "100vh", background: "#eef2f6", pt: 4 }}>
      <Box width={720} mx="auto">

        <Typography variant="h5" fontWeight={800} mb={2}>
          Stock Book Report
        </Typography>

        {/* ===== TOP ===== */}

        <Grid container spacing={2} mb={2}>

          <Grid item xs={4}>
            <Paper sx={card}>
              <Typography fontWeight={700}>Mode</Typography>
              <RadioGroup value={mode} onChange={e => setMode(e.target.value)}>
                <FormControlLabel value="code" control={<Radio size="small"/>} label="Code" />
                <FormControlLabel value="group" control={<Radio size="small"/>} label="Group" />
              </RadioGroup>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper sx={card}>
              <Typography fontWeight={700}>Options</Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    size="small"
                    checked={showSummary}
                    onChange={e => setShowSummary(e.target.checked)}
                  />
                }
                label="Show Summary"
              />
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper sx={card}>
              <Typography fontWeight={700} mb={1}>Period</Typography>
              <Stack spacing={1}>
                <TextField type="date" size="small"
                  value={startDate}
                  onChange={e => setStartDate(e.target.value)}
                />
                <TextField type="date" size="small"
                  value={endDate}
                  onChange={e => setEndDate(e.target.value)}
                />
              </Stack>
            </Paper>
          </Grid>

        </Grid>

        {/* ===== DUAL LIST ===== */}

        <Paper sx={card}>

          <Grid container spacing={2} alignItems="center" justifyContent="center">

            {/* LEFT */}
            <Grid item>
              <Typography fontWeight={700} mb={1} textAlign="center">
                Available
              </Typography>

              <Paper variant="outlined"
                sx={{ height: 180, width: 200, overflow: "auto", borderRadius: 2 }}>
                <List dense>
                  {left.map(item => (
                    <ListItemButton
                      dense
                      key={item}
                      selected={selectedLeft === item}
                      onClick={() => setSelectedLeft(item)}
                    >
                      <ListItemText primary={item} />
                    </ListItemButton>
                  ))}
                </List>
              </Paper>
            </Grid>

            {/* SMALL SQUARE BUTTONS */}
            <Grid item>
              <Stack spacing={1.2}>
                <Button variant="contained" sx={arrowBtn} onClick={moveOneRight}>
                  <ArrowForwardIcon fontSize="small" />
                </Button>

                <Button variant="contained" sx={arrowBtn} onClick={moveAllRight}>
                  <KeyboardDoubleArrowRightIcon fontSize="small" />
                </Button>

                <Button variant="outlined" sx={arrowBtn} onClick={moveOneLeft}>
                  <ArrowBackIcon fontSize="small" />
                </Button>

                <Button variant="outlined" sx={arrowBtn} onClick={moveAllLeft}>
                  <KeyboardDoubleArrowLeftIcon fontSize="small" />
                </Button>
              </Stack>
            </Grid>

            {/* RIGHT */}
            <Grid item>
              <Typography fontWeight={700} mb={1} textAlign="center">
                Selected
              </Typography>

              <Paper variant="outlined"
                sx={{ height: 180, width: 200, overflow: "auto", borderRadius: 2 }}>
                <List dense>
                  {right.map(item => (
                    <ListItemButton
                      dense
                      key={item}
                      selected={selectedRight === item}
                      onClick={() => setSelectedRight(item)}
                    >
                      <ListItemText primary={item} />
                    </ListItemButton>
                  ))}
                </List>
              </Paper>
            </Grid>

          </Grid>

          {/* ===== CENTER ACTION BUTTONS ===== */}

          <Stack direction="row" spacing={2} justifyContent="center" mt={3}>
            <Button variant="contained"
              startIcon={<PrintIcon />}
              onClick={handlePrint}
              sx={{ px: 4, fontWeight: 700 }}>
              Print
            </Button>

            <Button variant="contained"
              color="error"
              startIcon={<CloseIcon />}
              onClick={() => navigate(-1)}
              sx={{ px: 4, fontWeight: 700 }}>
              Close
            </Button>
          </Stack>

        </Paper>

      </Box>
    </Box>
  );
}
