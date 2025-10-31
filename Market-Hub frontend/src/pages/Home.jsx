import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const products = [
    { id: 1, name: "Wireless Earbuds", price: 1299, image: "/images/earbuds.jpg" },
    { id: 2, name: "Smart Watch", price: 2499, image: "/images/smartwatch.jpg" },
    { id: 3, name: "Gaming Mouse", price: 799, image: "/images/mouse.jpg" },
  ];

  return (
    <div className="p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-semibold mb-6 text-dark"
      >
        Featured Products
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
