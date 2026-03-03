import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Collapse,
} from "@mui/material";
import { NavLink } from "react-router-dom";

/* ================= ICONS ================= */
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import DescriptionIcon from "@mui/icons-material/Description";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import ReplayIcon from "@mui/icons-material/Replay";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import InputIcon from "@mui/icons-material/Input";
import SummarizeIcon from "@mui/icons-material/Summarize";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import PrintIcon from "@mui/icons-material/Print";
import SettingsIcon from "@mui/icons-material/Settings";





const drawerWidth = 260;

function Sidebar() {
  const [openAllDocument, setOpenAllDocument] = useState(false);
  const [openBooks, setOpenBooks] = useState(true);
  const [openSales, setOpenSales] = useState(true);
  const [openPurchase, setOpenPurchase] = useState(true);
  const [openTDS, setOpenTDS] = useState(true);
  const [openFinalReport, setOpenFinalReport] = useState(true);
  const [openStock, setOpenStock] = useState(true);
  const [openListing, setOpenListing] = useState(true);
  const [openMiscReport, setOpenMiscReport] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);
  const [openReports, setOpenReports] = useState(false);


  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          background: "linear-gradient(180deg, #1565c0, #0d47a1)",
          color: "#fff",
          borderRight: "none",
        },
      }}
    >
      <Toolbar>
        <Typography variant="h6" fontWeight={700}>
          Bank Panel
        </Typography>
      </Toolbar>

      <List sx={{ px: 1 }}>

       {/* ================= Ledger ================= */}

      <SidebarGroup
  open={openAllDocument}
  toggle={() => setOpenAllDocument(!openAllDocument)}
  icon={<FolderOpenIcon />}
  title="Ledger"
>
  <SidebarItem 
    to="/ledger" 
    icon={<MenuBookIcon />} 
    text="Ledger Report" 
  />
</SidebarGroup>




        {/* ================= ALL DOCUMENT ================= */}
        <SidebarGroup
          open={openAllDocument}
          toggle={() => setOpenAllDocument(!openAllDocument)}
          icon={<FolderOpenIcon />}
          title="All Document"
        >
          <SidebarItem to="/bank-letter" icon={<DescriptionIcon />} text="Bank Letter" />
          <SidebarItem to="/credit-advice" icon={<AccountBalanceIcon />} text="Credit Advice" />
          <SidebarItem to="/debit-note" icon={<ReceiptLongIcon />} text="Debit Note" />
          {/* <SidebarItem to="/delivery-challan" icon={<LocalShippingIcon />} text="Delivery Challan" /> */}
          <SidebarItem to="/delivery-challan-other-than-pbh" icon={<LocalShippingIcon />} text="Delivery Challan" />

          {/* <SidebarItem to="/invoice-challan" icon={<ReceiptIcon />} text="Invoice Challan" /> */}
            <SidebarItem to="/invoice-challan-other-than-pbh" icon={<ReceiptIcon />} text="Invoice Challan" />
          <SidebarItem to="/purchase-bill" icon={<ShoppingCartIcon />} text="Purchase Bill" />
          <SidebarItem to="/receipt" icon={<ReceiptLongIcon />} text="Receipt" />
          <SidebarItem to="/sales-invoice" icon={<ReceiptIcon />} text="Sales Invoice" />
          <SidebarItem to="/sales-return-credit-note" icon={<ReplayIcon />} text="Sales Return Credit Note" />
          <SidebarItem to="/voucher" icon={<ConfirmationNumberIcon />} text="Voucher" />
        </SidebarGroup>

        {/* ================= BOOKS OF ACCOUNT ================= */}
        <SidebarGroup
          open={openBooks}
          toggle={() => setOpenBooks(!openBooks)}
          icon={<MenuBookIcon />}
          title="Books of Account"
        >
          <SidebarItem to="/cash-bank-book" icon={<AccountBalanceWalletIcon />} text="Cash / Bank Book" />
          <SidebarItem to="/journal-register" icon={<LibraryBooksIcon />} text="Journal Register" />
          <SidebarItem to="/day-book" icon={<MenuBookIcon />} text="Day Book" />
          <SidebarItem to="/debit-note-register" icon={<ReceiptLongIcon />} text="Debit Note Register" />
          <SidebarItem to="/credit-note-register" icon={<ReceiptLongIcon />} text="Credit Note Register" />

          {/* SALES */}
          <SidebarSubGroup
            open={openSales}
            toggle={() => setOpenSales(!openSales)}
            icon={<StorefrontIcon />}
            title="Sales"
          >
            <SidebarItem to="/sales-challan-register" icon={<PointOfSaleIcon />} text="Challan Register" pl={8} />
            <SidebarItem to="/sales-register" icon={<ReceiptIcon />} text="Sales Register" pl={8} />
            <SidebarItem to="/sales-summary-datewise" icon={<AssessmentIcon />} text="Sales Summary Datewise" pl={8} />
          </SidebarSubGroup>

          {/* PURCHASE */}
          <SidebarSubGroup
            open={openPurchase}
            toggle={() => setOpenPurchase(!openPurchase)}
            icon={<ShoppingCartIcon />}
            title="Purchase"
          >
            <SidebarItem to="/purchase-register" icon={<ListAltIcon />} text="Purchase Register" pl={8} />
            <SidebarItem to="/purchase-register-summary" icon={<AssessmentIcon />} text="Purchase Register Summary" pl={8} />
            <SidebarItem to="/purchase-register-monthly-summary" icon={<ListAltIcon />} text="Purchase Register Monthly Summary" pl={8} />
          </SidebarSubGroup>

          {/* TDS */}
          <SidebarSubGroup
            open={openTDS}
            toggle={() => setOpenTDS(!openTDS)}
            icon={<AccountTreeIcon />}
            title="TDS"
          >
            <SidebarItem to="/tds-master-listing" icon={<LibraryBooksIcon />} text="TDS Master Listing" pl={8} />
            <SidebarItem to="/yearly-tds-register" icon={<AssessmentIcon />} text="Yearly TDS Register" pl={8} />
            <SidebarItem to="/tds-certificate" icon={<DescriptionIcon />} text="TDS Certificate" pl={8} />
            <SidebarItem
    to="/tds/register"
    icon={<DescriptionIcon />}
    text="TDS Register"
    pl={8}
  />

            
          </SidebarSubGroup>

          {/* EXTRA REPORTS */}
          <SidebarItem to="/cash-flow-daywise" icon={<AssessmentIcon />} text="Cash Flow Daywise" />
          <SidebarItem to="/cash-flow-monthwise" icon={<AssessmentIcon />} text="Cash Flow Monthwise" />
          <SidebarItem to="/receipt-register" icon={<ReceiptLongIcon />} text="Receipt Register" />
          <SidebarItem to="/sales-return-credit-note-register" icon={<ReceiptLongIcon />} text="Sales Return Credit Note Register" />
          <SidebarItem to="/purchase-return-debit-note-register" icon={<ReceiptLongIcon />} text="Purchase Return Debit Note Register" />
          <SidebarItem to="/challan-done-invoice-not-done" icon={<ReceiptIcon />} text="Challan Done but Invoice Not Done" />
          <SidebarItem to="/sales-register-summary" icon={<AssessmentIcon />} text="Sales Register Summary" />
          <SidebarItem to="/inward-register" icon={<InputIcon />} text="Inward Register" />
          <SidebarItem to="/transaction-summury" icon={<AssessmentIcon />} text="Transaction Summary" />

          <SidebarItem to="/tds-party" icon={<AssessmentIcon />} text="TDS & Party" />
        </SidebarGroup>

        {/* ================= FINAL REPORT ================= */}
       <SidebarGroup
  open={openFinalReport}
  toggle={() => setOpenFinalReport(!openFinalReport)}
  icon={<AssessmentIcon />}
  title="Final Report"
>
  <SidebarItem to="/trial-balance-simple" icon={<SummarizeIcon />} text="Trial Balance - Simple" pl={8} />
  <SidebarItem to="/trial-balance-periodic" icon={<SummarizeIcon />} text="Trial Balance - Periodic" pl={8} />
  <SidebarItem to="/pl-account" icon={<SummarizeIcon />} text="P & L A/c" pl={8} />
  <SidebarItem to="/balance-sheet" icon={<AccountBalanceIcon />} text="Balance Sheet" pl={8} />
  <SidebarItem to="/fixed-asset-schedule" icon={<AccountBalanceIcon />} text="Fixed Asset Schedule" pl={8} />
  <SidebarItem to="/pl-with-last-year" icon={<SummarizeIcon />} text="P & L A/c with Last Year" pl={8} />
  <SidebarItem to="/schedule" icon={<SummarizeIcon />} text="Schedule" pl={8} />
  <SidebarItem to="/capital-account" icon={<AccountBalanceIcon />} text="Capital Account" pl={8} />
</SidebarGroup>
    
   
{/* ================= STOCK ================= */}
<SidebarGroup
  open={openStock}
  toggle={() => setOpenStock(!openStock)}
  icon={<InventoryIcon />}
  title="Stock"
>


 <SidebarItem
    to="/stock-book"
    icon={<MenuBookIcon />}
    text="Stock Book"
    pl={8}
  />

 <SidebarItem
    to="/stock-daybook"
    icon={<DescriptionIcon />}
    text="Stock Day Book"
    pl={8}
  />

   <SidebarItem
    to="/stock-statement"
    icon={<AssessmentIcon />}
    text="Stock Statement"
    pl={8}
  />


  <SidebarItem
  to="/stock-stmt-details"
  icon={<AssessmentIcon />}
  text="Stock Stmt Details"
  pl={8}
/>


  <SidebarItem
    to="/net-sale"
    icon={<AssessmentIcon />}
    text="Net Sale"
    pl={8}
  />

 
<SidebarItem
  to="/net-sale-summary"
  icon={<AssessmentIcon />}
  text="Net Sale Summary"
  pl={8}
/>
 


  <SidebarItem
    to="/book-purchase-report"
    icon={<MenuBookIcon />}
    text="Book Purchase Report"
    pl={8}
  /> 

 
</SidebarGroup>

 {/* ================= LISTING ================= */}
<SidebarGroup
  open={openListing}
  toggle={() => setOpenListing(!openListing)}
  icon={<ListAltIcon />}
  title="Listing"
>

  <SidebarItem
    to="/area-listing"
    icon={<LocationOnIcon />}
    text="Area"
    pl={8}
  />


  <SidebarItem
    to="/canvassing-college-list"
    icon={<StorefrontIcon />}
    text="Canvassing College List"
    pl={8}
  />

  <SidebarItem
    to="/canvassor-party-listing"
    icon={<AccountTreeIcon />}
    text="Canvassor Party Listing"
    pl={8}
  />

  <SidebarItem
    to="/party-listing"
    icon={<ListAltIcon />}
    text="Party Listing"
    pl={8}
  />

</SidebarGroup>

{/* ================= MIS REPORT (MAIN MENU) ================= */}

<SidebarItem
  to="/mis-report"
  icon={<AssessmentIcon />}
  text="MIS Report"
  pl={2}
/>

{/* ================= MISC REPORT ================= */}

<SidebarGroup
  open={openMiscReport}
  toggle={() => setOpenMiscReport(!openMiscReport)}
  icon={<AssessmentIcon />}
  title="Misc Report"
>

<SidebarItem
  to="/account-group-listing"
  icon={<AccountTreeIcon />}
  text="Account Group"
  pl={8}
/>


  
  <SidebarItem
    to="/mis-book-listing"
    icon={<MenuBookIcon />}
    text="Book Listing"
    pl={8}
  />

  <SidebarItem
    to="/mis-fbt-statement"
    icon={<AssessmentIcon />}
    text="FBT Statement"
    pl={8}
  />
</SidebarGroup>

{/* =================Canvassing =========================*/}

  <SidebarGroup
        open={openReports}
        toggle={() => setOpenReports(!openReports)}
        icon={<FolderOpenIcon />}
        title="Canvassing"
      >
        <SidebarItem 
          to="/accountmaster-listing-mobile-nos" 
          icon={<MenuBookIcon />} 
          text="Accountmaster Listing Mobile Nos" 
        />
      </SidebarGroup>




 
{/* ================= Setting  ================= */}
<SidebarGroup
  open={openSetting}
  toggle={() => setOpenSetting(!openSetting)}
  icon={<SettingsIcon />}
  title="Setting"
>

  <SidebarItem
    to="/company-master"
    icon={<AccountTreeIcon />}
    text="Company Master"
    pl={8}
  />

</SidebarGroup>

 

      </List>
    </Drawer>
  );
}

/* ================= REUSABLE ================= */

function SidebarGroup({ open, toggle, icon, title, children }) {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={toggle}>
          <ListItemIcon sx={{ color: "#fff" }}>{icon}</ListItemIcon>
          <ListItemText primary={title} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding>{children}</List>
      </Collapse>
    </>
  );
}

function SidebarSubGroup({ open, toggle, icon, title, children }) {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={toggle} sx={{ pl: 4 }}>
          <ListItemIcon sx={{ color: "#fff" }}>{icon}</ListItemIcon>
          <ListItemText primary={title} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding>{children}</List>
      </Collapse>
    </>
  );
}


function SidebarItem({ to, icon, text, pl = 4 }) {
  return (
    <ListItem disablePadding>
      <ListItemButton
        component={NavLink}
        to={to}
        sx={{
          pl,
          color: "#fff",
          "&.active": { background: "rgba(255,255,255,0.25)" },
          "&:hover": { background: "rgba(255,255,255,0.18)" },
        }}
      >
        <ListItemIcon sx={{ color: "#fff" }}>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
}

export default Sidebar;

