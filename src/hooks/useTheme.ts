"use client";

import { useEffect, useState } from "react";

type ThemeValue = "dark" | "light" | "system";

export default function useTheme() {
  const [currentTheme, setCurrentTheme] = useState<ThemeValue>();

  const handleThemeChange = (theme: ThemeValue) => {
    if (theme === "system") {
      localStorage.removeItem("theme");
    }

    if (theme !== "system") {
      setCurrentTheme(theme);
    }
  };

  const handleThemeToggle = () => {
    if (currentTheme === "dark") {
      setCurrentTheme("light");
    } else {
      setCurrentTheme("dark");
    }
  };

  useEffect(() => {
    if (currentTheme !== undefined) {
      if (currentTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        document.documentElement.classList.add("dark");
        window.localStorage.setItem("theme", "dark");
      }

      if (currentTheme === "light") {
        document.documentElement.removeAttribute("data-theme");
        document.documentElement.classList.remove("dark");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [currentTheme]);

  useEffect(() => {
    const theme = window.document.documentElement.getAttribute("data-theme");

    setCurrentTheme(theme === "dark" ? "dark" : "light");
  }, []);

  return {
    currentTheme: currentTheme,
    onChange: handleThemeChange,
    onToggle: handleThemeToggle,
  };
}
