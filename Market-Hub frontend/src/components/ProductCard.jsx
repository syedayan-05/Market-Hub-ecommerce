import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-2xl shadow-card p-4 cursor-pointer hover:shadow-lg"
    >
      <img src={product.image} alt={product.name} className="rounded-xl h-40 w-full object-cover" />
      <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
      <p className="text-primary font-bold text-xl mt-1">₹{product.price}</p>
      <button className="mt-3 bg-primary text-white w-full py-2 rounded-lg hover:bg-accent">
        Add to Cart
      </button>
    </motion.div>
  );
}
