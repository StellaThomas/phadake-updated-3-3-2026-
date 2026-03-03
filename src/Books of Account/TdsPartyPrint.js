import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import { useLocation } from "react-router-dom";

export default function TdsPartyPrint() {

  const { state } = useLocation() || {};

  const startDate = state?.startDate || "";
  const endDate = state?.endDate || "";
  const rows = state?.rows || [];

  return (

    <Box sx={{ bgcolor:"#eef1f6", minHeight:"100vh", py:3 }}>

      <Box id="print-area" sx={{
        width:"210mm",
        minHeight:"297mm",
        mx:"auto",
        bgcolor:"#fff",
        px:"12mm",
        py:"10mm",
        fontFamily:"Times New Roman",
        fontSize:"11px"
      }}>

        <Typography align="center" fontWeight={700} fontSize={14}>
          Phadke Prakashan, Kolhapur
        </Typography>

        <Typography align="center" fontSize={12}>
          List of Parties whose TDS deducted / not deducted
        </Typography>

        <Typography align="center" fontSize={11}>
          From {startDate} to {endDate}
        </Typography>

        <Divider sx={{ my:1, borderColor:"#000" }}/>

        <table width="100%" style={{ borderCollapse:"collapse" }}>

          <thead>
            <tr>
              <th style={th}>Sr</th>
              <th style={th}>Party Name</th>
              <th style={thRight}>Amount</th>
              <th style={thRight}>TDS</th>
            </tr>
          </thead>

          <tbody>

            {rows.length === 0 &&
              <tr>
                <td colSpan="4" align="center">No Data</td>
              </tr>
            }

          </tbody>

        </table>

      </Box>


      <Box textAlign="center" mt={2}>
        <Button variant="contained" startIcon={<PrintIcon/>} onClick={()=>window.print()}>
          Print
        </Button>
      </Box>

    </Box>

  );

}

const th = {
  border:"1px solid black",
  padding:"4px",
  textAlign:"left"
};

const thRight = {
  border:"1px solid black",
  padding:"4px",
  textAlign:"right"
};

