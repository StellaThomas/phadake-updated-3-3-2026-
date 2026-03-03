import React from "react";
import { Box, Typography, Button } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import { useLocation } from "react-router-dom";

export default function TDSCertificatePrint() {

  const { state } = useLocation() || {};

  const startDate = state?.startDate || "";
  const endDate = state?.endDate || "";
  const party = state?.party || "";

  /* Example rows structure (backend later) */
  const rows = state?.rows || [];

  return (

    <Box
      sx={{
        background: "#eef2f7",
        minHeight: "100vh",
        padding: "15px"
      }}
    >

      {/* ================= PRINT AREA ================= */}

      <Box
        id="print-area"
        sx={{
          width: "210mm",
          minHeight: "297mm",
          margin: "auto",
          background: "#fff",
          padding: "12mm",
          fontFamily: "'Times New Roman', serif",
          fontSize: "12px",
          lineHeight: "1.4",
          color: "#000",
          boxShadow: "0 0 8px rgba(0,0,0,0.15)"
        }}
      >

        {/* ================= HEADER ================= */}

        <Typography
          align="center"
          sx={{
            fontWeight: "bold",
            fontSize: "16px",
            marginBottom: "2px"
          }}
        >
          FORM NO. 16A
        </Typography>

        <Typography
          align="center"
          sx={{
            fontSize: "12px",
            marginBottom: "10px"
          }}
        >
          Certificate of deduction of tax at source
        </Typography>


        {/* ================= DEDUCTOR BOX ================= */}

        <Box
          sx={{
            border: "1px solid #000",
            padding: "8px",
            marginBottom: "10px"
          }}
        >

          <Typography sx={{ fontSize: "12px" }}>
            <b>Deductor :</b> Phadke Prakashan, Kolhapur
          </Typography>

          <Typography sx={{ fontSize: "12px" }}>
            <b>Payee :</b> {party || "___________"}
          </Typography>

          <Typography sx={{ fontSize: "12px" }}>
            <b>Period :</b> {startDate} to {endDate}
          </Typography>

        </Box>


        {/* ================= PAYMENT DETAILS ================= */}

        <Box
          sx={{
            border: "1px solid #000",
            padding: "8px"
          }}
        >

          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "12px",
              marginBottom: "6px"
            }}
          >
            Payment Details
          </Typography>


          <table
            width="100%"
            style={{
              borderCollapse: "collapse",
              fontSize: "12px"
            }}
          >

            <thead>

              <tr>

                <th style={thStyle}>Sr</th>

                <th style={thStyle}>Amount</th>

                <th style={thStyle}>TDS</th>

                <th style={thStyle}>Date</th>

              </tr>

            </thead>

            <tbody>

              {rows.length > 0 ? (

                rows.map((row, index) => (

                  <tr key={index}>

                    <td style={tdStyle}>{index + 1}</td>

                    <td style={tdStyle}>{row.amount}</td>

                    <td style={tdStyle}>{row.tds}</td>

                    <td style={tdStyle}>{row.date}</td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td colSpan="4"
                    style={{
                      padding: "12px",
                      textAlign: "center",
                      fontSize: "12px"
                    }}
                  >
                    No payment data available
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </Box>


        {/* ================= FOOTER ================= */}

        <Box
          sx={{
            marginTop: "10px",
            borderTop: "1px solid #000",
            paddingTop: "5px"
          }}
        >

          <Typography
            sx={{
              fontSize: "10px"
            }}
          >
            Generated on : {new Date().toLocaleString()}
          </Typography>

        </Box>

      </Box>


      {/* ================= PRINT BUTTON ================= */}

      <Box textAlign="center" marginTop="15px">

        <Button
          variant="contained"
          startIcon={<PrintIcon />}
          onClick={() => window.print()}
          sx={{
            fontSize: "13px",
            padding: "6px 20px"
          }}
        >
          Print
        </Button>

      </Box>


      {/* ================= PRINT CSS ================= */}

      <style>{`

        @page {
          size: A4;
          margin: 8mm;
        }

        @media print {

          body {
            background: white;
          }

          body * {
            visibility: hidden;
          }

          #print-area, #print-area * {
            visibility: visible;
          }

          #print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 210mm;
            box-shadow: none;
          }

        }

      `}</style>

    </Box>

  );

}


/* ================= TABLE STYLE ================= */

const thStyle = {

  border: "1px solid #000",

  padding: "6px",

  textAlign: "left",

  fontWeight: "bold",

  background: "#f2f2f2"

};


const tdStyle = {

  border: "1px solid #000",

  padding: "6px"

};
