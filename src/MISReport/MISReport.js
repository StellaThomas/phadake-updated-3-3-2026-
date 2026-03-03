
// import { useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   List,
//   ListItemButton,
//   ListItemText,
//   Button,
//   Stack,
//   Divider
// } from "@mui/material";

// import AssessmentIcon from "@mui/icons-material/Assessment";
// import CategoryIcon from "@mui/icons-material/Category";
// import MenuBookIcon from "@mui/icons-material/MenuBook";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import EventIcon from "@mui/icons-material/Event";
// import TagIcon from "@mui/icons-material/Tag";
// import PeopleIcon from "@mui/icons-material/People";
// import BusinessIcon from "@mui/icons-material/Business";
// import AccountTreeIcon from "@mui/icons-material/AccountTree";
// import CloseIcon from "@mui/icons-material/Close";
// import { useNavigate } from "react-router-dom";

// const reportTypes = [
//   "MIS Reports",
//   "Sales Publicationwise Summary",
//   "Sales Bookwise Partywise",
//   "Partywise Sales & Receipt",
//   "Books Details"
// ];

// const filterButtons = [
//   { label: "Publication", icon: <MenuBookIcon /> },
//   { label: "Book Group", icon: <CategoryIcon /> },
//   { label: "Standard", icon: <AssessmentIcon /> },
//   { label: "Area", icon: <LocationOnIcon /> },
//   { label: "Period", icon: <EventIcon /> },
//   { label: "Book Code", icon: <TagIcon /> },
//   { label: "Party", icon: <PeopleIcon /> },
//   { label: "City/District", icon: <BusinessIcon /> },
//   { label: "Account Groups", icon: <AccountTreeIcon /> }
// ];

// export default function MISReport() {
//   const navigate = useNavigate();
//   const [selectedReport, setSelectedReport] = useState(reportTypes[0]);

//   const handleReportClick = (r) => {
//     setSelectedReport(r);

//     if (r === "MIS Reports") navigate("/mis-report-panel");
//     if (r === "Sales Publicationwise Summary") navigate("/sales-publication-summary");
//     if (r === "Sales Bookwise Partywise") navigate("/sales-bookwise-partywise");
//     if (r === "Partywise Sales & Receipt") navigate("/partywise-sales-receipt");
//     if (r === "Books Details") navigate("/books-details");
//   };

//   return (
//     <Box sx={{ p: 3, background: "#f4f6f8", minHeight: "100vh" }}>

//       {/* TITLE — smaller */}
//       <Typography variant="h5" fontWeight={600} mb={2}>
//         MIS Report Panel
//       </Typography>

//       <Paper
//         elevation={4}
//         sx={{
//           p: 2,
//           borderRadius: 3,
//           display: "grid",
//           gridTemplateColumns: "240px 1fr",
//           gap: 2,
//           minHeight: 420
//         }}
//       >

//         {/* LEFT PANEL */}
//         <Box>

//           {/* REPORT TYPE */}
//           <Paper variant="outlined" sx={{ p: 1.5, mb: 2, borderRadius: 2 }}>
//             <Typography fontWeight={600} mb={1} fontSize={14}>
//               Type of Report
//             </Typography>

//             <List dense>
//               {reportTypes.map((r) => (
//                 <ListItemButton
//                   key={r}
//                   dense
//                   selected={selectedReport === r}
//                   onClick={() => handleReportClick(r)}
//                   sx={{ borderRadius: 1 }}
//                 >
//                   <ListItemText
//                     primary={r}
//                     primaryTypographyProps={{ fontSize: 13 }}
//                   />
//                 </ListItemButton>
//               ))}
//             </List>
//           </Paper>

//           {/* FILTER BUTTONS — compact */}
//           <Stack spacing={1}>
//             {filterButtons.map((btn) => (
//               <Button
//                 key={btn.label}
//                 variant="outlined"
//                 size="small"
//                 startIcon={btn.icon}
//                 fullWidth
//                 sx={{
//                   justifyContent: "flex-start",
//                   py: 0.8,
//                   borderRadius: 2,
//                   fontWeight: 600,
//                   fontSize: 13
//                 }}
//               >
//                 {btn.label}
//               </Button>
//             ))}
//           </Stack>

//         </Box>

//         {/* RIGHT PANEL */}
//         <Paper
//           variant="outlined"
//           sx={{
//             p: 3,
//             borderRadius: 2,
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between"
//           }}
//         >
//           <Box>
//             <Typography fontWeight={700} mb={1}>
//               Selected Report
//             </Typography>

//             <Typography color="primary" fontWeight={700} fontSize={16}>
//               {selectedReport}
//             </Typography>

//             <Divider sx={{ my: 2 }} />

//             <Typography color="text.secondary" fontSize={14}>
//               Filters and preview area will appear here.
//             </Typography>
//           </Box>

//           {/* CLOSE BUTTON CENTER-RIGHT */}
//           <Box textAlign="right">
//             <Button
//               variant="contained"
//               color="error"
//               size="small"
//               startIcon={<CloseIcon />}
//               onClick={() => navigate(-1)}
//               sx={{ px: 3, borderRadius: 2, fontWeight: 700 }}
//             >
//               Close
//             </Button>
//           </Box>
//         </Paper>

//       </Paper>
//     </Box>
//   );
// }













































import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Button,
  Stack,
  Divider
} from "@mui/material";

import MenuBookIcon from "@mui/icons-material/MenuBook";
import CategoryIcon from "@mui/icons-material/Category";
import AssessmentIcon from "@mui/icons-material/Assessment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";
import TagIcon from "@mui/icons-material/Tag";
import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

import CloseIcon from "@mui/icons-material/Close";

/* ================= REPORT COMPONENTS ================= */

import SalesPublicationSummary from "./SalesPublicationSummary";
import SalesBookwisePartywise from "./SalesBookwisePartywise";
import PartywiseSalesReceipt from "./PartywiseSalesReceipt";
import BooksDetails from "./BooksDetails";

/* ================= REPORT TYPES ================= */

const reportTypes = [
  "MIS Reports",
  "Sales Publicationwise Summary",
  "Sales Bookwise Partywise",
  "Partywise Sales & Receipt",
  "Books Details"
];

export default function MISReport() {

  const [activeReport, setActiveReport] =
    useState("MIS Reports");

  /* ================= FILTER BUTTONS DYNAMIC ================= */

  const getFilters = () => {

    if (activeReport === "Sales Publicationwise Summary")
      return [
        { label: "Publication", icon: <MenuBookIcon /> },
        { label: "Period", icon: <EventIcon /> }
      ];

    if (activeReport === "Sales Bookwise Partywise")
      return [
        { label: "Publication", icon: <MenuBookIcon /> },
        { label: "Period", icon: <EventIcon /> },
        { label: "Book Code", icon: <TagIcon /> }
      ];

    if (activeReport === "Partywise Sales & Receipt")
      return [
        { label: "Period", icon: <EventIcon /> },
        { label: "City/District", icon: <BusinessIcon /> }
      ];

    if (activeReport === "Books Details")
      return [
        { label: "Period", icon: <EventIcon /> },
        { label: "Book Code", icon: <TagIcon /> }
      ];

    return [];
  };

  /* ================= RENDER RIGHT PANEL ================= */

  const renderReport = () => {

    if (activeReport === "Sales Publicationwise Summary")
      return <SalesPublicationSummary />;

    if (activeReport === "Sales Bookwise Partywise")
      return <SalesBookwisePartywise />;

    if (activeReport === "Partywise Sales & Receipt")
      return <PartywiseSalesReceipt />;

    if (activeReport === "Books Details")
      return <BooksDetails />;

    return (
      <Typography color="text.secondary">
        Select a report to begin.
      </Typography>
    );
  };

  return (
    <Box sx={{ p: 3, background: "#f4f6f8", minHeight: "100vh" }}>

      <Typography variant="h5" fontWeight={600} mb={2}>
        MIS Report Panel
      </Typography>

      <Paper
        elevation={4}
        sx={{
          p: 2,
          borderRadius: 3,
          display: "grid",
          gridTemplateColumns: "240px 1fr",
          gap: 2,
          minHeight: 500
        }}
      >

        {/* LEFT PANEL */}
        <Box>

          <Paper variant="outlined" sx={{ p: 1.5, mb: 2 }}>
            <Typography fontWeight={600} mb={1} fontSize={14}>
              Type of Report
            </Typography>

            <List dense>
              {reportTypes.map((r) => (
                <ListItemButton
                  key={r}
                  selected={activeReport === r}
                  onClick={() => setActiveReport(r)}
                  sx={{ borderRadius: 1 }}
                >
                  <ListItemText
                    primary={r}
                    primaryTypographyProps={{ fontSize: 13 }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Paper>

          {/* FILTER BUTTONS */}
          <Stack spacing={1}>
            {getFilters().map((btn) => (
              <Button
                key={btn.label}
                variant="outlined"
                size="small"
                startIcon={btn.icon}
                fullWidth
                sx={{
                  justifyContent: "flex-start",
                  fontWeight: 600,
                  fontSize: 13
                }}
              >
                {btn.label}
              </Button>
            ))}
          </Stack>

        </Box>

        {/* RIGHT PANEL */}
        <Paper
          variant="outlined"
          sx={{
            p: 3,
            borderRadius: 2,
            overflow: "auto"
          }}
        >
          {renderReport()}
        </Paper>

      </Paper>
    </Box>
  );
}

































// import { useState } from "react";
// import {
//   Box,
//   Paper,
//   Typography,
//   List,
//   ListItemButton,
//   ListItemText
// } from "@mui/material";

// /* REPORT COMPONENTS */
// import SalesPublicationSummary from "./SalesPublicationSummary";
// import SalesBookwisePartywise from "./SalesBookwisePartywise";
// import PartywiseSalesReceipt from "./PartywiseSalesReceipt";
// import BooksDetails from "./BooksDetails";

// const reportTypes = [
//   "MIS Reports",
//   "Sales Publicationwise Summary",
//   "Sales Bookwise Partywise",
//   "Partywise Sales & Receipt",
//   "Books Details"
// ];

// export default function MISReport() {

//   const [activeReport, setActiveReport] =
//     useState("MIS Reports");

//   const renderReport = () => {

//     if (activeReport === "Sales Publicationwise Summary")
//       return <SalesPublicationSummary />;

//     if (activeReport === "Sales Bookwise Partywise")
//       return <SalesBookwisePartywise />;

//     if (activeReport === "Partywise Sales & Receipt")
//       return <PartywiseSalesReceipt />;

//     if (activeReport === "Books Details")
//       return <BooksDetails />;

//     return (
//       <Typography fontSize={14} color="text.secondary">
//         Select a report to begin.
//       </Typography>
//     );
//   };

//   return (
//     <Box sx={{ p: 3, background: "#f4f6f8", minHeight: "100vh" }}>

//       <Typography variant="h5" fontWeight={600} mb={2}>
//         MIS Report Panel
//       </Typography>

//       <Paper
//         elevation={4}
//         sx={{
//           p: 2,
//           borderRadius: 3,
//           display: "grid",
//           gridTemplateColumns: "240px 1fr",
//           gap: 2,
//           minHeight: 500
//         }}
//       >

//         {/* LEFT PANEL */}
//         <Box>

//           <Paper variant="outlined" sx={{ p: 1.5 }}>
//             <Typography fontWeight={600} mb={1} fontSize={14}>
//               Type of Report
//             </Typography>

//             <List dense>
//               {reportTypes.map((r) => (
//                 <ListItemButton
//                   key={r}
//                   selected={activeReport === r}
//                   onClick={() => setActiveReport(r)}
//                   sx={{ borderRadius: 1 }}
//                 >
//                   <ListItemText
//                     primary={r}
//                     primaryTypographyProps={{ fontSize: 13 }}
//                   />
//                 </ListItemButton>
//               ))}
//             </List>
//           </Paper>

//         </Box>

//         {/* RIGHT PANEL */}
//         <Paper
//           variant="outlined"
//           sx={{
//             p: 2,
//             borderRadius: 2,
//             overflow: "auto"
//           }}
//         >
//           {renderReport()}
//         </Paper>

//       </Paper>
//     </Box>
//   );
// }
