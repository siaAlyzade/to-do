import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainApp from "./MainApp/MainApp";
import Sidebar from "./Sidebar/Sidebar";

function Primary() {
  return (
    <main className="Primary">
      <BrowserRouter basename="/to-do">
        <Sidebar />
        <div className=""></div>
        <Routes>
          <Route index path="/" element={<MainApp />}></Route>
          <Route path="mytasks" element={<MainApp />}></Route>
        </Routes>
        <div className=""></div>
      </BrowserRouter>
    </main>
  );
}

export default Primary;
