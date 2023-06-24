import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import Layout from "./component/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        portfolio/src/styles/style.scss{" "}
      </Route>
    </Routes>
  );
}

export default App;
