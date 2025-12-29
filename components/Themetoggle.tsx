"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // 🔥 CRITICAL

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="dropdown-item d-flex align-items-center gap-2"
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

