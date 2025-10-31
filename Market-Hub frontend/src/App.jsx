import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/shop" element={<h1>Shop Page</h1>} />
      </Routes>
    </>
  );
}

export default App;
