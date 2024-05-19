import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./home/Home";
import Register from "./auth/Register";
import Login from "./auth/Login";
import JobDetail from "./jobs/JobDetail";
import Profile from "./profile/Profile";

function App() {
  return (
    <div className="bg-stone-50 h-screen">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Home />} />

            <Route path="jobs">
              <Route path=":jobId" element={<JobDetail />} />
            </Route>

            <Route path="profile" element={<Profile />} />

            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
