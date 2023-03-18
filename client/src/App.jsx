import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "./layouts";
import { Success } from "./layouts/success";
import { Upload } from "./widgets/images/upload";

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/images/*" element={<Upload />} />
      <Route path="/success/*" element={<Success />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  );
}

export default App;
