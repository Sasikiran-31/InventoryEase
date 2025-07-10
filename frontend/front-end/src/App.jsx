import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/createPage.jsx";
import HomePage from "./pages/homePage.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
      <Box sx={{ height: "100vh" }}>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Box>
    </SnackbarProvider>
  );
}

export default App;
