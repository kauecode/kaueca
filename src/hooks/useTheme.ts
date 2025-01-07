import { useEffect, useState } from "react";

type useThemeTypes = {
  theme: "light" | "dark",
  toggleTheme: () => void
}

export const useTheme = ():useThemeTypes => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    return localStorage.getItem("theme") as "light" | "dark" || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}