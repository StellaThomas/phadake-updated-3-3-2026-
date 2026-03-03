import React from "react";

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

import { useNavigate, useLocation } from "react-router-dom";

export default function SalesBookwisePartywisePrint() {

  const navigate = useNavigate();
  const location = useLocation();

  /* ================= RECEIVE DATA ================= */

  const {
    companyName = "PHADKE BOOK HOUSE",
    reportTitle = "Sales Bookwise Partywise",
    startDate = "",
    endDate = "",
    partyData = []
  } = location.state || {};



  /* ================= PRINT ================= */

  const handlePrint = () => {

    window.print();

  };



  /* ================= CALCULATE PARTY TOTAL ================= */

  const getPartyTotal = (books = []) => {

    let sale = 0;
    let returnAmt = 0;

    books.forEach(book => {

      sale += Number(book.sale || 0);
      returnAmt += Number(book.return || 0);

    });

    return {
      sale,
      returnAmt,
      net: sale - returnAmt
    };

  };



  /* ================= CALCULATE GRAND TOTAL ================= */

  const getGrandTotal = () => {

    let sale = 0;
    let returnAmt = 0;

    partyData.forEach(party => {

      party.books.forEach(book => {

        sale += Number(book.sale || 0);
        returnAmt += Number(book.return || 0);

      });

    });

    return {
      sale,
      returnAmt,
      net: sale - returnAmt
    };

  };

  const grandTotal = getGrandTotal();



  /* ================= UI ================= */

  return (

    <Box
      sx={{
        background: "#e5e7eb",
        minHeight: "100vh",
        p: 3
      }}
    >

      {/* PRINT SHEET */}

      <Paper
        sx={{
          width: "210mm",
          minHeight: "297mm",
          margin: "auto",
          padding: "25mm",

          "@media print": {

            width: "100%",
            minHeight: "100%",
            boxShadow: "none",
            margin: 0,
            padding: "10mm"

          }

        }}
      >

        {/* HEADER */}

        <Typography
          align="center"
          fontWeight="bold"
          fontSize="22px"
        >
          {companyName}
        </Typography>


        <Typography
          align="center"
          fontSize="16px"
          fontWeight="bold"
        >
          {reportTitle}
        </Typography>


        <Typography
          align="center"
          fontSize="13px"
          mb={1}
        >
          Period : {startDate} to {endDate}
        </Typography>


        <Divider sx={{ mb: 2 }} />


        {/* TABLE */}

        <Table
          size="small"
          sx={{
            border: "1px solid black"
          }}
        >

          {/* HEADER */}

          <TableHead>

            <TableRow>

              <TableCell
                sx={{
                  border: "1px solid black",
                  fontWeight: "bold"
                }}
              >
                Particulars
              </TableCell>


              <TableCell
                align="right"
                sx={{
                  border: "1px solid black",
                  fontWeight: "bold"
                }}
              >
                Sale
              </TableCell>


              <TableCell
                align="right"
                sx={{
                  border: "1px solid black",
                  fontWeight: "bold"
                }}
              >
                Sale Return
              </TableCell>


              <TableCell
                align="right"
                sx={{
                  border: "1px solid black",
                  fontWeight: "bold"
                }}
              >
                Net Sale
              </TableCell>

            </TableRow>

          </TableHead>



          {/* BODY */}

          <TableBody>

            {partyData.length === 0 ? (

              <TableRow>

                <TableCell colSpan={4} align="center">
                  No Data Available
                </TableCell>

              </TableRow>

            ) : (

              partyData.map((party, index) => {

                const total = getPartyTotal(party.books);

                return (

                  <React.Fragment key={index}>

                    {/* PARTY NAME */}

                    <TableRow>

                      <TableCell
                        colSpan={4}
                        align="center"
                        sx={{
                          fontWeight: "bold",
                          border: "1px solid black",
                          background: "#f9fafb"
                        }}
                      >
                        {party.partyName}
                      </TableCell>

                    </TableRow>



                    {/* BOOK LIST */}

                    {party.books.map((book, i) => (

                      <TableRow key={i}>

                        <TableCell
                          sx={{
                            border: "1px solid black",
                            pl: 4
                          }}
                        >
                          {book.bookName}
                        </TableCell>


                        <TableCell
                          align="right"
                          sx={{
                            border: "1px solid black"
                          }}
                        >
                          {book.sale}
                        </TableCell>


                        <TableCell
                          align="right"
                          sx={{
                            border: "1px solid black"
                          }}
                        >
                          {book.return}
                        </TableCell>


                        <TableCell
                          align="right"
                          sx={{
                            border: "1px solid black"
                          }}
                        >
                          {book.sale - book.return}
                        </TableCell>

                      </TableRow>

                    ))}



                    {/* PARTY TOTAL */}

                    <TableRow>

                      <TableCell
                        sx={{
                          border: "1px solid black",
                          fontWeight: "bold",
                          pl: 4
                        }}
                      >
                        Total
                      </TableCell>


                      <TableCell
                        align="right"
                        sx={{
                          border: "1px solid black",
                          fontWeight: "bold"
                        }}
                      >
                        {total.sale}
                      </TableCell>


                      <TableCell
                        align="right"
                        sx={{
                          border: "1px solid black",
                          fontWeight: "bold"
                        }}
                      >
                        {total.returnAmt}
                      </TableCell>


                      <TableCell
                        align="right"
                        sx={{
                          border: "1px solid black",
                          fontWeight: "bold"
                        }}
                      >
                        {total.net}
                      </TableCell>

                    </TableRow>

                  </React.Fragment>

                );

              })

            )}



            {/* GRAND TOTAL */}

            {partyData.length > 0 && (

              <TableRow>

                <TableCell
                  sx={{
                    border: "1px solid black",
                    fontWeight: "bold"
                  }}
                >
                  GRAND TOTAL
                </TableCell>


                <TableCell
                  align="right"
                  sx={{
                    border: "1px solid black",
                    fontWeight: "bold"
                  }}
                >
                  {grandTotal.sale}
                </TableCell>


                <TableCell
                  align="right"
                  sx={{
                    border: "1px solid black",
                    fontWeight: "bold"
                  }}
                >
                  {grandTotal.returnAmt}
                </TableCell>


                <TableCell
                  align="right"
                  sx={{
                    border: "1px solid black",
                    fontWeight: "bold"
                  }}
                >
                  {grandTotal.net}
                </TableCell>

              </TableRow>

            )}

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
          sx={{ px: 4 }}
        >
          Print
        </Button>


        <Button
          variant="contained"
          color="error"
          startIcon={<CloseIcon />}
          onClick={() => navigate(-1)}
          sx={{ px: 4 }}
        >
          Close
        </Button>

      </Box>

    </Box>

  );

}
