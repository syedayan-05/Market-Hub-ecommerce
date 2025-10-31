import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <h1 className="text-4xl font-bold text-blue-600 text-center mt-10">
  Tailwind is Working 🚀
</h1>

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/shop" element={<h1>Shop Page</h1>} />
      </Routes>
    </>
  );
}

export default App;
