import { ReactNode } from "react";
import { motion } from "framer-motion";
import "../index.css";

import CSidebar from "@/components/sidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      className="flex h-screen"
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <CSidebar />

      <motion.div
        className="flex-1 overflow-auto scrollbar-hide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Layout;
