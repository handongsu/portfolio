import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Catlendar from "./page/Catlendar";
import Fitbuddy from "./page/Fitbuddy";

function RouterComponent() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/Catlendar" element={<Catlendar />} />
      <Route path="/Fitbuddy" element={<Fitbuddy />} />
    </Routes>
  );
}

export default RouterComponent;
