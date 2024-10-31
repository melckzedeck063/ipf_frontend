import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Dashboard2 from "./pages/Dashboard2";
import { AuthProvider } from "./context/AuthContext";


function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <LandingPage /> } />
      <Route path="/dashboard2" element={ <Dashboard2 /> } />
      <Route path="/login" element={ <LoginPage /> } />
      {/* <Route path="/signup" element={Signup} /> */}
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
