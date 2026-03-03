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

import { useLocation, useNavigate } from "react-router-dom";

export default function PartywiseSalesReceiptPrint() {

  const navigate = useNavigate();

  const location = useLocation();

  /* ================= RECEIVE DATA ================= */

  const {
    companyName = "PHADKE BOOK HOUSE",
    reportTitle = "Partywise Sales & Receipt Statement",
    startDate = "01-04-2025",
    endDate = "31-03-2026",
    reportData = []
  } = location.state || {};



  /* ================= SAMPLE DATA IF EMPTY ================= */

  const data =
    reportData.length > 0
      ? reportData
      : [
          {
            district: "NAGPUR",
            parties: [
              {
                partyName: "TAKALKHEDE SIR, KORADI",
                opBal: -577,
                bills: 1440,
                other: 0,
                receipt: 0
              },
              {
                partyName: "ADMANE SIR, NAGPUR",
                opBal: 0,
                bills: 1690,
                other: 0,
                receipt: 0
              },
              {
                partyName: "AMIT PUSTAKALAYA, NAGPUR",
                opBal: 6920,
                bills: 26793,
                other: 0,
                receipt: 17174
              }
            ]
          }
        ];



  /* ================= CALCULATE ================= */

  let grandOp = 0;
  let grandBills = 0;
  let grandOther = 0;
  let grandReceipt = 0;
  let grandClosing = 0;



  /* ================= PRINT ================= */

  const handlePrint = () => {

    window.print();

  };



  /* ================= UI ================= */

  return (

    <Box sx={{ background: "#e5e7eb", minHeight: "100vh", p: 3 }}>


      <Paper
        sx={{
          width: "210mm",
          minHeight: "297mm",
          mx: "auto",
          p: 4,
          fontFamily: "Courier New",

          "@media print": {
            boxShadow: "none",
            margin: 0,
            width: "100%"
          }
        }}
      >


        {/* HEADER */}

        <Typography align="center" fontWeight="bold" fontSize={18}>
          {companyName}
        </Typography>

        <Typography align="center" fontSize={14}>
          {reportTitle}
        </Typography>

        <Typography align="center" fontSize={12}>
          From {startDate} To {endDate}
        </Typography>

        <Divider sx={{ my: 1 }} />


        {/* TABLE */}

        <Table size="small">


          <TableHead>

            <TableRow>

              <TableCell sx={{ fontWeight: "bold" }}>
                Sr No.
              </TableCell>

              <TableCell sx={{ fontWeight: "bold" }}>
                Name Of Party
              </TableCell>

              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                OP Bal
              </TableCell>

              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Bills
              </TableCell>

              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Other
              </TableCell>

              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Receipt
              </TableCell>

              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Closing Bal
              </TableCell>

            </TableRow>

          </TableHead>


          <TableBody>

            {data.map((district, dIndex) => {

              let subOp = 0;
              let subBills = 0;
              let subOther = 0;
              let subReceipt = 0;
              let subClosing = 0;

              return (

                <>

                  {/* DISTRICT */}

                  <TableRow key={dIndex}>
                    <TableCell colSpan={7}>
                      <Typography fontWeight="bold">
                        Dist : {district.district}
                      </Typography>
                    </TableCell>
                  </TableRow>


                  {/* PARTIES */}

                  {district.parties.map((p, i) => {

                    const closing =
                      Number(p.opBal) +
                      Number(p.bills) +
                      Number(p.other) -
                      Number(p.receipt);

                    subOp += Number(p.opBal);
                    subBills += Number(p.bills);
                    subOther += Number(p.other);
                    subReceipt += Number(p.receipt);
                    subClosing += closing;

                    grandOp += Number(p.opBal);
                    grandBills += Number(p.bills);
                    grandOther += Number(p.other);
                    grandReceipt += Number(p.receipt);
                    grandClosing += closing;

                    return (

                      <TableRow key={i}>

                        <TableCell>
                          {i + 1}
                        </TableCell>

                        <TableCell>
                          {p.partyName}
                        </TableCell>

                        <TableCell align="right">
                          {p.opBal.toFixed(2)}
                        </TableCell>

                        <TableCell align="right">
                          {p.bills.toFixed(2)}
                        </TableCell>

                        <TableCell align="right">
                          {p.other.toFixed(2)}
                        </TableCell>

                        <TableCell align="right">
                          {p.receipt.toFixed(2)}
                        </TableCell>

                        <TableCell align="right">
                          {closing.toFixed(2)}
                        </TableCell>

                      </TableRow>

                    );

                  })}


                  {/* SUB TOTAL */}

                  <TableRow>

                    <TableCell colSpan={2}>
                      <Typography fontWeight="bold">
                        Sub Total
                      </Typography>
                    </TableCell>

                    <TableCell align="right">
                      {subOp.toFixed(2)}
                    </TableCell>

                    <TableCell align="right">
                      {subBills.toFixed(2)}
                    </TableCell>

                    <TableCell align="right">
                      {subOther.toFixed(2)}
                    </TableCell>

                    <TableCell align="right">
                      {subReceipt.toFixed(2)}
                    </TableCell>

                    <TableCell align="right">
                      {subClosing.toFixed(2)}
                    </TableCell>

                  </TableRow>

                </>

              );

            })}


            {/* GRAND TOTAL */}

            <TableRow>

              <TableCell colSpan={2}>
                <Typography fontWeight="bold">
                  Grand Total
                </Typography>
              </TableCell>

              <TableCell align="right">
                {grandOp.toFixed(2)}
              </TableCell>

              <TableCell align="right">
                {grandBills.toFixed(2)}
              </TableCell>

              <TableCell align="right">
                {grandOther.toFixed(2)}
              </TableCell>

              <TableCell align="right">
                {grandReceipt.toFixed(2)}
              </TableCell>

              <TableCell align="right">
                {grandClosing.toFixed(2)}
              </TableCell>

            </TableRow>

          </TableBody>

        </Table>

      </Paper>


      {/* BUTTONS */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          mt: 3,

          "@media print": {
            display: "none"
          }
        }}
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
