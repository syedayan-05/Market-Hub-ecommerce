import { Link } from "react-router-dom";
import { ShoppingCart, Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-dark text-white px-6 py-3 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold text-primary">MarketHub</Link>

      <div className="flex items-center bg-white text-black rounded-full px-3 py-1 w-1/2">
        <input
          type="text"
          placeholder="Search for products..."
          className="flex-1 outline-none px-2"
        />
        <Search size={18} />
      </div>

      <div className="flex gap-4 items-center">
        <Link to="/login" className="hover:text-accent">Login</Link>
        <Link to="/cart" className="relative hover:text-accent">
          <ShoppingCart size={22} />
          <span className="absolute -top-2 -right-2 bg-accent text-dark text-xs px-1 rounded-full">3</span>
        </Link>
      </div>
    </nav>
  );
}
