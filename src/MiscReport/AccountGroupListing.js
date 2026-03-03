import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const AccountGroupListing = () => {

  const reportRef = useRef();

  useEffect(() => {
    handlePrint();
  }, []);

  const handlePrint = async () => {
    setTimeout(async () => {
      const element = reportRef.current;
      if (!element) return;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
      window.open(pdf.output("bloburl"), "_blank");
    }, 500);
  };

  return (
    <Box
      ref={reportRef}
      sx={{
        width: "210mm",
        minHeight: "297mm",
        p: "20mm",
        bgcolor: "#fff",
        fontFamily: "serif",
        fontSize: "13px"
      }}
    >

      <Typography align="center" fontWeight="bold" fontSize={18}>
        Phadke Publications
      </Typography>

      <Typography align="center" mb={2}>
        Account Groups
      </Typography>

      <hr />
      <hr />

      <table
        width="100%"
        style={{ borderCollapse: "collapse", marginTop: "10px" }}
      >
        <thead>
          <tr>
            <th style={thStyle}>Sr No</th>
            <th style={thStyle}>Group Name</th>
            <th style={thStyle}>Print Details In</th>
            <th style={thStyle}>Trial Balance</th>
            <th style={thStyle}>Account Type</th>
          </tr>
        </thead>

        <tbody>
          {/* Dynamic rows will be mapped here later */}
        </tbody>
      </table>

    </Box>
  );
};

const thStyle = {
  borderBottom: "1px solid black",
  padding: "6px",
  textAlign: "left"
};

export default AccountGroupListing;
