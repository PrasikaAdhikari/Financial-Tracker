import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import Login from "./pages/Login";
import DefaultLayout from "./components/layout/DefaultLayout";
import { ToastContainer } from "react-toastify";
import Auth from "./auth/Auth";
import { getUserDetail } from "./utils/axiosHelper";
import { useUser } from "./context/userContext";
import VerifyEmail from "./pages/VerifyEmail";

function App() {
  const [count, setCount] = useState(0);
  const { setUser, autoLogin } = useUser();

  useEffect(() => {
    autoLogin();
  }, []);

  return (
    <>
      {/* Define the routes */}
      <div className="wrapper">
        <Routes>
          <Route path="*" element={<DefaultLayout />}>
            {/* Public */}
            <Route path="" element={<Login />} />
            {/* Login */}
            <Route path="login" element={<Login />} />
            {/* signup */}
            <Route path="signup" element={<Signup />} />

            {/* Private  */}
            {/* dashboard */}
            <Route
              path="dashboard"
              element={
                <Auth>
                  <Dashboard />
                </Auth>
              }
            />
            {/* transaction */}
            <Route
              path="transaction"
              element={
                <Auth>
                  <Transaction />
                </Auth>
              }
            />
            <Route path="verifyemail" element={<VerifyEmail />} />
          </Route>
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
