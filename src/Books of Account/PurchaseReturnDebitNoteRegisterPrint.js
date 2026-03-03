import React from "react";
import { Box, Button } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import { useLocation } from "react-router-dom";

export default function PurchaseReturnDebitNoteRegisterPrint() {

  const { state } = useLocation() || {};

  const startDate = state?.startDate || "";
  const endDate = state?.endDate || "";

  const rows = [];

  return (

    <Box sx={{ background:"#edf1f5", minHeight:"100vh", py:2 }}>

      <Box
        id="print-area"
        sx={{
          width:"210mm",
          minHeight:"297mm",
          margin:"auto",
          background:"#fff",
          padding:"8mm",
          fontFamily:"Times New Roman",
          fontSize:"11px"
        }}
      >

        <div style={{ textAlign:"center", fontWeight:"bold", fontSize:"14px" }}>
          Phadke Prakashan, Kolhapur
        </div>

        <div style={{ textAlign:"center", fontSize:"12px" }}>
          PURCHASE RETURN DEBIT NOTE REGISTER
        </div>

        <div style={{ textAlign:"center", fontSize:"11px", marginBottom:"8px" }}>
          From {startDate} to {endDate}
        </div>

        <table width="100%" style={{ borderCollapse:"collapse" }}>

          <thead>
            <tr>
              <th style={th}>Entry No</th>
              <th style={th}>Account Name</th>
              <th style={th}>Particulars</th>
              <th style={thRight}>Debit</th>
              <th style={thRight}>Credit</th>
            </tr>
          </thead>

          <tbody>

            {rows.length === 0 && (
              <tr>
                <td colSpan="5" style={{ textAlign:"center", padding:"10px" }}>
                  No data available
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </Box>


      <Box textAlign="center" mt={2}>
        <Button
          variant="contained"
          startIcon={<PrintIcon/>}
          onClick={()=>window.print()}
        >
          Print
        </Button>
      </Box>


      <style>{`
        @page { size:A4; margin:8mm; }

        @media print {

          body * { visibility:hidden; }

          #print-area, #print-area * {
            visibility:visible;
          }

          #print-area {
            position:absolute;
            left:0;
            top:0;
            width:210mm;
          }

        }
      `}</style>

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
