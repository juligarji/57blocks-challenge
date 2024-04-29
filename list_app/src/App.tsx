import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import DetailsPage from "./components/pages/details";
import LoginPage from "./components/pages/login";
import ProtectedComponent from "./components/hoc/ProtectedComponent";
import ListPage from "./components/pages/list";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedComponent>
              <ListPage />
            </ProtectedComponent>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/details/:id"
          element={
            <ProtectedComponent>
              <DetailsPage />
            </ProtectedComponent>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
