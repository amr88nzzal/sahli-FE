import Login from "./component/Login";
import { ColorModeContext, useMode } from "./component/context/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./view/global/Topbar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Topbar/>
          <Login />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
