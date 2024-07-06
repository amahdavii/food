import { Route, Routes } from "react-router-dom";
import LoginLayout from "../ui/layouts/LoginLayout";
import AuthPage from "../pages/AuthPage";

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route element={<LoginLayout />}>
        <Route path="/auth" element={<AuthPage />} />
      </Route>
    </Routes>
  );
};

export default ProjectRoutes;
