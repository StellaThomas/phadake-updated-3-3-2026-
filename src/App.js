import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import Sidebar from "./sidebar";


/* Ledger */

import Ledger from "./Ledger/ledger";
import LedgerPrint from "./Ledger/ledgerprint";
import SummarisedLedgerPrint from "./Ledger/SummarisedLedgerPrint";

/* ALL DOCUMENT */
import BankLetter from "./Components/BankLetter";
import CreditAdvice from "./Components/CreditAdvice";
import DebitNote from "./Components/DebitNote";
import DeliveryChallanOtherThanPBH from "./Components/DeliveryChallanOtherThanPBH";
import InvoiceChallanOtherThanPBH from "./Components/InvoiceChallanOtherThanPBH";
import PurchaseBill from "./Components/PurchaseBill";
import Receipt from "./Components/Receipt";
import SalesChallan from "./Components/SalesChallan";
import SalesInvoice from "./Components/SalesInvoice";
import SalesReturnCreditNote from "./Components/SalesReturnCreditNote";
import Voucher from "./Components/Voucher";
import AllDocument from "./Components/AllDocument";
import BankLetterPrint from "./Components/BankLetterPrint";
import DeliveryChallanPrint from "./Components/DeliveryChallanPrint";
import InvoiceChallanPrint from "./Components/InvoiceChallanPrint";
import PurchaseBillPrint from "./Components/PurchaseBillPrint";
import ReceiptPrint from "./Components/ReceiptPrint";
import SalesInvoicePrint from "./Components/SalesInvoicePrint";
import CreditNotePrint from "./Components/SalesReturnCreditNotePrint";






/* BOOKS OF ACCOUNT */
import CashBankBook from "./Books of Account/BankBookCashBook";
import JournalRegister from "./Books of Account/JournalRegister";
import DayBook from "./Books of Account/DayBook";
import DebitNoteRegister from "./Books of Account/DebitNoteRegister";
import CreditNoteRegister from "./Books of Account/CreditNoteRegister";

/* SALES */
import SalesChallanRegister from "./Books of Account/SalesChallanRegister";
import SalesRegister from "./Books of Account/SalesRegister";
import SalesSummaryDatewise from "./Books of Account/SalesSummaryDatewise";
import ChallanRegisterPrint from "./Books of Account/ChallanRegisterPrint";
import SalesRegisterPrint from "./Books of Account/SalesRegisterPrint";
import SalesSummaryPrint from "./Books of Account/SalesSummaryPrint";


/* PURCHASE */
import PurchaseRegister from "./Books of Account/PurchaseRegister";
import PurchaseRegisterSummary from "./Books of Account/PurchaseRegisterSummary";
import PurchaseRegisterMonthlySummary from "./Books of Account/PurchaseRegisterMonthlySummary";

import TDSMasterListing from "./Books of Account/TDSMasterListing";
import YearlyTDSRegister from "./Books of Account/YearlyTDSRegister";
import TDSCertificate from "./Books of Account/TDSCertificate";
import TDSRegister from "./Books of Account/TDSRegister";


import CashFlowDaywise from "./Books of Account/CashFlowDaywise";
import CashFlowDaywisePrint from "./Books of Account/CashFlowDaywisePrint";

import CashFlowMonthwise from "./Books of Account/CashFlowMonthwise";
import CashFlowMonthwisePrint from "./Books of Account/CashFlowMonthwisePrint";

import ReceiptRegister from "./Books of Account/ReceiptRegister";
import ReceiptRegisterPrint from "./Books of Account/ReceiptRegisterPrint";

import SalesReturnCreditNoteRegister from "./Books of Account/SalesReturnCreditNoteRegister";
import SalesReturnCreditNoteRegisterPrint from "./Books of Account/SalesReturnCreditNoteRegisterPrint";

import PurchaseReturnDebitNoteRegister from "./Books of Account/PurchaseReturnDebitNoteRegister";
import PurchaseReturnDebitNoteRegisterPrint from "./Books of Account/PurchaseReturnDebitNoteRegisterPrint";

import ChallanDoneInvoiceNotDone from "./Books of Account/ChallanDoneInvoiceNotDone";

import SalesRegisterSummary from "./Books of Account/SalesRegisterSummary";
import SalesRegisterSummaryPrint from "./Books of Account/SalesRegisterSummaryPrint";

import InwardRegister from "./Books of Account/InwardRegister";

import TransactionSummury from "./Books of Account/TransactionSummury";
import TransactionSummaryPrint from "./Books of Account/TransactionSummaryPrint";

import TdsAndParty from "./Books of Account/TdsAndParty";
import TdsPartyPrint from "./Books of Account/TdsPartyPrint";

import BankBookPrint from "./Books of Account/BankBookPrint";
import JournalRegisterPrint from "./Books of Account/JournalRegisterPrint";
import DayBookPrint from "./Books of Account/DayBookPrint";
import DebitNoteRegisterPrint from "./Books of Account/DebitNoteRegisterPrint";
import CreditNoteRegisterPrint from "./Books of Account/CreditNoteRegisterPrint";
import PurchaseRegisterPrint from "./Books of Account/PurchaseRegisterPrint";
import PurchaseRegisterSummaryPrint from "./Books of Account/PurchaseRegisterSummaryPrint";
import PurchaseRegisterMonthlySummaryPrint from "./Books of Account/PurchaseRegisterMonthlySummaryPrint";

import TDSMasterListingPrint from "./Books of Account/TDSMasterListingPrint";

import YearlyTDSRegisterPrint from "./Books of Account/YearlyTDSRegisterPrint";
import TDSCertificatePrint from "./Books of Account/TDSCertificatePrint";









/* FINAL REPORT */
import SubAccountAllocation from "./Final Report/SubAccountAllocation";
import TrialBalanceSimple from "./Final Report/TrialBalanceSimple";
import TrialBalancePeriodic from "./Final Report/TrialBalancePeriodic";

import PLAccount from "./Final Report/PLAccount";
import PLPrintPage from "./Final Report/PLPrintPage";

import BalanceSheet from "./Final Report/BalanceSheet";
import BalanceHeaderPage from "./Final Report/BalanceHeaderPage";

import FixedAssetSchedule from "./Final Report/FixedAssetSchedule";
import FixedAssetHeaderPage from "./Final Report/FixedAssetHeaderPage";

import PLWithLastYear from "./Final Report/P LA WithLastYear";
import PLLastYearPrintPage from "./Final Report/PLLastYearPrintPage";

import Schedule from "./Final Report/Schedule"
import SchedulePrintPage from "./Final Report/SchedulePrintPage";

import CapitalAccount from "./Final Report/CapitalAccount";


// Stock //
import BookPurchaseReport from "./Stock/BookPurchaseReport";
import NetSale from "./Stock/NetSale";
import StockBook from "./Stock/StockBook";
import StockBookPrintPreview from "./Stock/StockBookPrintPreview";
import StockDayBook from "./Stock/StockDayBook";
import StockDayBookPrint from "./Stock/StockDayBookPrint";
import StockStatement from "./Stock/StockStatement";
import StockStatementPrint from "./Stock/StockStatementPrint";
import Stockstmtdetaisl from "./Stock/Stockstmtdetaisl";
import NetSaleSummary from "./Stock/NetSaleSummary";


//Listning //
import CanvassingCollegeList from "./Listing/CanvassingCollegeList";
import CanvassingCollegeListPrint from "./Listing/CanvassingCollegeListPrint";
import CanvassorPartyListing from "./Listing/CanvassorPartyListing";
import PartyListing from "./Listing/PartyListing";
import PartyListingPrint from "./Listing/PartyListingPrint";
import AreaListing from "./Listing/AreaListing";


                //MIS REPORTS//

import MISReport from "./MISReport/MISReport";
import MISReportPanel from "./MISReport/MISReportPanel";
import SalesPublicationSummary from "./MISReport/SalesPublicationSummary";
import SalesPublicationSummaryPrint from "./MISReport/SalesPublicationSummaryPrint";
import SalesBookwisePartywise from "./MISReport/SalesBookwisePartywise";
import SalesBookwisePartywisePrint from "./MISReport/SalesBookwisePartywisePrint";
import PartywiseSalesReceipt from "./MISReport/PartywiseSalesReceipt";
import PartywiseSalesReceiptPrint from "./MISReport/PartywiseSalesReceiptPrint";
import BooksDetails from "./MISReport/BooksDetails";
import BooksDetailsPrint from "./MISReport/BooksDetailsPrint";






          //Misc Reports//
import MISBookListing from "./MiscReport/MISBookListing";
import MisFbtStatement from "./MiscReport/MisFbtStatement";
import AccountGroupListing from "./MiscReport/AccountGroupListing";




             //Canvassing //
import Accountmasterlistingmobilenos from "./Canvassing/Accountmasterlistingmobilenos";             

            

      

       // Setting //
import CompanyMaster from "./setting/CompanyMaster";   



function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>

        {/* SIDEBAR */}
        <Sidebar />

        {/* PAGE CONTENT */}
        <Box sx={{ flexGrow: 1 }}>
          <Routes>

            {/* DEFAULT */}
            
           

           {/* Ledger */}

            <Route path="/ledger" element={<Ledger />} />
             <Route path="/printing/ledger/ledgerprint" element={<LedgerPrint />} />
             <Route
  path="/printing/ledger/summarised"
  element={<SummarisedLedgerPrint />}
/>

            

            {/* ALL DOCUMENT */}
            <Route path="/bank-letter" element={<BankLetter />} />
            <Route path="/credit-advice" element={<CreditAdvice />} />
            <Route path="/debit-note" element={<DebitNote />} />
            <Route path="/delivery-challan-other-than-pbh" element={<DeliveryChallanOtherThanPBH />} />
            <Route path="/invoice-challan-other-than-pbh" element={<InvoiceChallanOtherThanPBH />} />
            <Route path="/purchase-bill" element={<PurchaseBill />} />
            <Route path="/receipt" element={<Receipt />} />
            <Route path="/sales-challan" element={<SalesChallan />} />
            <Route path="/sales-invoice" element={<SalesInvoice />} />
            <Route path="/sales-return-credit-note" element={<SalesReturnCreditNote />} />
            <Route path="/voucher" element={<Voucher />} />
            <Route path="/all-document" element={<AllDocument />} />
            <Route path="/bank-letter-print" element={<BankLetterPrint />} />
           <Route path="/dc-print-table" element={<DeliveryChallanPrint />} />
            <Route path="/invoice-challan-print" element={<InvoiceChallanPrint />} />
            <Route path="/purchase-bill-print" element={<PurchaseBillPrint />} />
            <Route path="/receipt-print" element={<ReceiptPrint />} />
            <Route path="/sales-invoice-print" element={<SalesInvoicePrint />} />
            <Route path="/credit-note-print" element={<CreditNotePrint />} />


            {/* BOOKS OF ACCOUNT */}
            <Route path="/cash-bank-book" element={<CashBankBook />} />
            <Route path="/journal-register" element={<JournalRegister />} />
            <Route path="/day-book" element={<DayBook />} />
            <Route path="/debit-note-register" element={<DebitNoteRegister />} />
            <Route path="/credit-note-register" element={<CreditNoteRegister />} />

            {/* SALES */}
            <Route path="/sales-challan-register" element={<SalesChallanRegister />} />
            <Route path="/sales-register" element={<SalesRegister />} />
            <Route path="/sales-summary-datewise" element={<SalesSummaryDatewise />} />
         <Route
  path="/challan-register-print"
  element={<ChallanRegisterPrint />}
/>
<Route path="/sales-register-print" element={<SalesRegisterPrint />} />
<Route path="/sales-summary-print" element={<SalesSummaryPrint />} />










            {/* PURCHASE */}
            <Route path="/purchase-register" element={<PurchaseRegister />} />
            <Route path="/purchase-register-summary" element={<PurchaseRegisterSummary />} />
            <Route path="/purchase-register-monthly-summary" element={<PurchaseRegisterMonthlySummary />} />
            <Route path="/purchase-register-print" element={<PurchaseRegisterPrint />} />
            <Route path="/purchase-register-summary-print" element={<PurchaseRegisterSummaryPrint />} />
            <Route
  path="/purchase-register-monthly-summary-print"
  element={<PurchaseRegisterMonthlySummaryPrint />}
/>
<Route path="/yearly-tds-register-print" element={<YearlyTDSRegisterPrint />} />
<Route path="/tds-certificate-print" element={<TDSCertificatePrint />} />





            <Route path="/tds-master-listing" element={<TDSMasterListing />} />
            <Route path="/yearly-tds-register" element={<YearlyTDSRegister />} />
            <Route path="/tds-certificate" element={<TDSCertificate />} />
            <Route path="/tds-master-listing-print" element={<TDSMasterListingPrint />} />
            <Route path="/tds/register" element={<TDSRegister />} />

            <Route path="/cash-flow-daywise" element={<CashFlowDaywise />} />
            <Route path="/cashflow-daywise-print" element={<CashFlowDaywisePrint />} />
          
            <Route path="/cash-flow-monthwise" element={<CashFlowMonthwise />} />
            <Route path="/cashflow-monthwise-print" element={<CashFlowMonthwisePrint />} />

            <Route path="/receipt-register" element={<ReceiptRegister />} />
            <Route path="/receipt-register-print" element={<ReceiptRegisterPrint />} />

            <Route path="/sales-return-credit-note-register" element={<SalesReturnCreditNoteRegister />} />
            <Route   path="/sales-return-credit-note-print" element={<SalesReturnCreditNoteRegisterPrint />}
/>


            <Route path="/purchase-return-debit-note-register" element={<PurchaseReturnDebitNoteRegister />} />
            <Route path="/purchase-return-debit-note-print"  element={<PurchaseReturnDebitNoteRegisterPrint />}
/>
 
  
            <Route path="/challan-done-invoice-not-done" element={<ChallanDoneInvoiceNotDone />} />

       
  
 
/

            <Route path="/sales-register-summary" element={<SalesRegisterSummary />} />
             <Route path="/sales-register-summary-print"   element={<SalesRegisterSummaryPrint />}

  />
            <Route path="/inward-register" element={<InwardRegister />} />

          <Route path="/transaction-summury" element={<TransactionSummury />} />
     
         <Route  path="/transaction-summary-print" element={<TransactionSummaryPrint />}
/>
  

 
  
 

            <Route path="/tds-party" element={<TdsAndParty />} />
            <Route path="/tds-party-print" element={<TdsPartyPrint />} />

            <Route path="/bank-book-print" element={<BankBookPrint />} />
            <Route path="/journal-register-print" element={<JournalRegisterPrint />} />
            <Route path="/day-book-print" element={<DayBookPrint />} />
            <Route path="/debit-note-register-print" element={<DebitNoteRegisterPrint />} />
            <Route path="/credit-note-register-print" element={<CreditNoteRegisterPrint />} />
            




            {/* FINAL REPORT */}
            <Route path="/sub-account-allocation" element={<SubAccountAllocation />} />
            <Route path="/trial-balance-simple" element={<TrialBalanceSimple />} />
            <Route path="/trial-balance-periodic" element={<TrialBalancePeriodic />} />

            <Route path="/pl-account" element={<PLAccount />} />
            <Route path="/pl-print" element={<PLPrintPage />} />

            <Route path="/balance-sheet" element={<BalanceSheet />} />
           <Route path="/balance-header" element={<BalanceHeaderPage />} />

            <Route path="/fixed-asset-schedule" element={<FixedAssetSchedule />} />
                    <Route path="/fa-header" element={<FixedAssetHeaderPage />} />

            <Route path="/pl-with-last-year" element={<PLWithLastYear />} />
            <Route path="/pl-lastyear-print" element={<PLLastYearPrintPage />} />

            <Route path="/schedule" element={<Schedule />} />
            <Route path="/schedule-print" element={<SchedulePrintPage />} />

            <Route path="/capital-account" element={<CapitalAccount />} />

            {/* STOCK */}
            <Route path="/book-purchase-report" element={<BookPurchaseReport />} />
            <Route path="/net-sale" element={<NetSale />} />
            <Route path="/stock-book" element={<StockBook />} />
            <Route path="/stock-book-print" element={<StockBookPrintPreview />} />
            <Route path="/stock-daybook" element={<StockDayBook />} />
            <Route path="/stock-daybook-print" element={<StockDayBookPrint />} />
            <Route path="/stock-statement" element={<StockStatement />} />
            <Route path="/stock-statement-print" element={<StockStatementPrint />} />
            <Route
  path="/stock-stmt-details"
  element={<Stockstmtdetaisl />}
/>
  <Route path="net-sale-summary" element={<NetSaleSummary />} />


        
                    //Listning //
             
             <Route path="/canvassing-college-list" element={<CanvassingCollegeList />} />
            <Route path="/canvassing-college-list-print" element={<CanvassingCollegeListPrint />} />
            <Route path="/canvassor-party-listing" element={<CanvassorPartyListing />} />
            <Route path="/party-listing" element={<PartyListing />} />
            <Route path="/party-listing-print" element={<PartyListingPrint />} />
            <Route path="/area-listing" element={<AreaListing />} />
           

                     //MIS REPORTS//

              <Route path="/mis-report" element={<MISReport />} />  
              <Route path="/mis-report-panel" element={<MISReportPanel />} />  
<Route path="/sales-publication-summary" element={<SalesPublicationSummary />} />  
<Route
  path="/sales-publication-summary-print"
  element={<SalesPublicationSummaryPrint />}
/>
<Route path="/sales-bookwise-partywise" element={<SalesBookwisePartywise />} />
<Route
  path="/sales-bookwise-partywise-print"
  element={<SalesBookwisePartywisePrint />}
/>
<Route
  path="/partywise-sales-receipt"
  element={<PartywiseSalesReceipt />}
/>

<Route
  path="/partywise-sales-receipt-print"
  element={<PartywiseSalesReceiptPrint />}
/>
<Route path="/books-details" element={<BooksDetails />} />
<Route
  path="/books-details-print"
  element={<BooksDetailsPrint />}
/>





               // Misc Reports//
            <Route path="/mis-book-listing" element={<MISBookListing />} />
            <Route path="/mis-fbt-statement" element={<MisFbtStatement />} />
            <Route path="/account-group-listing" element={<AccountGroupListing />} />



            // Canvassing //
            <Route 
  path="/accountmaster-listing-mobile-nos" 
  element={<Accountmasterlistingmobilenos />} 
/>


                      //Setting //

            <Route path="/company-master" element={<CompanyMaster />} />

            {/* FALLBACK */}
            <Route path="*" element={<BankLetter />} />

          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
