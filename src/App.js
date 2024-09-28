import Login from "./component/Login";
import { ColorModeContext, useMode } from "./component/context/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./view/global/Topbar";
import Sidebar from "./view/global/Sidebar";
import Dashboard from "./view/dashboard";
// import Team from "./view/team";
// import Invoices from "./view/invoices";
// import Contacts from "./view/contacts";
// import Bar from "./view/bar";
// import Form from "./view/form";
// import Line from "./view/line";
// import Pie from "./view/pie";
// import FAQ from "./view/faq";
// import Geography from "./view/geography";
// import Calendar from "./view/calendar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/team" element ={<Team/>}/> */}
            {/* <Route path="/contacts" element ={<Contacts/>}/> */}
            {/* <Route path="/invoices" element ={<Invoices/>}/> */}
            {/* <Route path="/form" element ={<Form/>}/> */}
            {/* <Route path="/bar" element ={<Bar/>}/> */}
            {/* <Route path="/line" element ={<Line/>}/> */}
            {/* <Route path="/pie" element ={<Pie/>}/> */}
            {/* <Route path="/faq" element ={<FAQ/>}/> */}
            {/* <Route path="/geography" element ={<Geography/>}/> */}
            {/* <Route path="/calendar" element ={<Geography/>}/> */}
            </Routes>
            <Login />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
