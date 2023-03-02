import "./App.css";
import HeaderExam from "./components/HeaderExam";
import { Link, Routes, Route } from "react-router-dom";
import Developer from "./pages/Developer";
import TaxiCal from "./pages/TaxiCal";
import FooterExam from "./components/FooterExam";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <HeaderExam />
      <Link to="/developer" style={{ padding: 10 }}>
        <span className="foot2">ผู้พัฒนา</span>
      </Link>
      <Link to="/taxical" style={{ padding: 10 }}>
      <span className="foot2">คำนวณค่าแท็กซี่</span>
      </Link>
      <hr/>
      <Routes>
        <Route path="/developer" element={<Developer />} />
        <Route path="/taxical" element={<TaxiCal />} />
      </Routes>
      <hr/>
      <FooterExam/>
    </div>
  );
}

export default App;
