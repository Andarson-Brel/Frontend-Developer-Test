import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import DashBoard from "./pages/dashboard/DashBoard";
import ChartPage from "./pages/chartPage/ChartPage";

import NotificationPage from "./pages/notificationPage/NotificationPage";
import WalletPage from "./pages/walletPage/WalletPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="/chart" element={<ChartPage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/notification" element={<NotificationPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
