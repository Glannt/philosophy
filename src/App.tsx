import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import Auth from "@/pages/auth";
import Section1 from "@/pages/section1";
import Section2 from "@/pages/section2";
import Section3 from "@/pages/section3";
import Quiz from "@/pages/quiz";
import { ProtectedRoute } from "@/route/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<Auth />} path="/auth" />
      <Route element={<Section1 />} path="/section1" />
      <Route element={<Section2 />} path="/section2" />
      <Route element={<Section3 />} path="/section3" />
      <Route
        element={
          <ProtectedRoute>
            <Quiz />
          </ProtectedRoute>
        }
        path="/quiz"
      />
    </Routes>
  );
}

export default App;
