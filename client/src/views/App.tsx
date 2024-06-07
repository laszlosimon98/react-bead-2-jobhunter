import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./home/Home";
import Profile from "./profile/Profile";
import CreateAdvertisement from "./profile/Company/CreateAdvertisement";
import ModifyAdvertisement from "./profile/Company/ModifyAdvertisement";
import Login from "./auth/Login";
import Register from "./auth/Register";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />

        <Route path="jobs">
          <Route path=":jobId" element={<Home />} />
        </Route>

        <Route path="profile" element={<Profile />}>
          <Route path="jobs">
            <Route path=":jobId" element={<Profile />} />
          </Route>
        </Route>

        <Route path="create" element={<CreateAdvertisement />} />

        <Route path="modify">
          <Route path=":advertisementId" element={<ModifyAdvertisement />} />
        </Route>

        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
