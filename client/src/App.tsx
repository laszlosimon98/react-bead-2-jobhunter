import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./home/Home";
import Register from "./auth/Register";
import Login from "./auth/Login";
import JobDetail from "./jobs/JobDetail";
import Profile from "./profile/Profile";
import CreateAdvertisement from "./profile/Company/CreateAdvertisement";
import ModifyAdvertisement from "./profile/Company/ModifyAdvertisement";

function App() {
  return (
    <div className="h-screen">
      <Layout>
        <Routes>
          <Route index element={<Home />} />

          <Route path="jobs">
            <Route path=":jobId" element={<JobDetail />} />
          </Route>

          <Route path="profile" element={<Profile />} />

          <Route path="create" element={<CreateAdvertisement />} />

          <Route path="modify">
            <Route path=":advertisementId" element={<ModifyAdvertisement />} />
          </Route>

          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
