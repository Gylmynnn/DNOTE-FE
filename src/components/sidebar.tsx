import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import MoonSvg from "@/assets/moon";
import SunSvg from "@/assets/sun";

export default function CSidebar() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem("dark-mode");
    return savedMode === "true";
  });

  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(isDarkMode));
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
  return (
    <div className="flex flex-col p-5 items-center h-full gap-4">
      <div className="" onClick={toggleDarkMode}>
        <motion.div
          initial={false}
          animate={{ rotate: isDarkMode ? 360 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isDarkMode ? <MoonSvg /> : <SunSvg />}
        </motion.div>
      </div>
      <div className="">
        <Button
          asChild
          className="hover:rounded-2xl duration-200 ease-in-out transition-all"
        >
          <Link to="/create">+</Link>
        </Button>
      </div>
    </div>
  );
}
