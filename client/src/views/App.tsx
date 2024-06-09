import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./home/Home";
import Profile from "./profile/Profile";
import Login from "./auth/Login";
import Register from "./auth/Register";
import CreateAdvertisement from "./profile/Company/components/CreateAdvertisement";
import ModifyAdvertisement from "./profile/Company/components/ModifyAdvertisement";
import CompanyProfile from "./profile/Company/CompanyProfile";
import ProtectedRoute from "./auth/components/ProtectedRoute";
import OnlyCompanyRoute from "./auth/components/OnlyCompanyRoute";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />

        <Route path="jobs">
          <Route path=":jobId" element={<Home />} />
        </Route>

        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path="jobs">
            <Route
              path=":jobId"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route
            path=":jobId"
            element={
              <ProtectedRoute>
                <OnlyCompanyRoute>
                  <CompanyProfile />
                </OnlyCompanyRoute>
              </ProtectedRoute>
            }
          />
        </Route>

        <Route
          path="create"
          element={
            <ProtectedRoute>
              <OnlyCompanyRoute>
                <CreateAdvertisement />
              </OnlyCompanyRoute>
            </ProtectedRoute>
          }
        />

        <Route path="modify">
          <Route
            path=":advertisementId"
            element={
              <ProtectedRoute>
                <OnlyCompanyRoute>
                  <ModifyAdvertisement />
                </OnlyCompanyRoute>
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
