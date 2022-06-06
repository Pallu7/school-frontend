import { Route, Routes } from "react-router-dom";
import CompanyProfilePage from "../CompanyProfilePage";


const CompanyProfileRoutes = () => (
  <Routes>
    <Route path="/" element={<CompanyProfilePage />} />
  </Routes>
);

export default CompanyProfileRoutes;

