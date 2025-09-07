import { getThemeTable } from "../theme/themeTable";
import { useEffect, useState } from "react";

export const useAGGridTheme = (forcedTheme?: "light" | "dark") => {
  const [theme, setTheme] = useState(
    getThemeTable(forcedTheme === "dark" ? true : false)
  );

  useEffect(() => {
    if (forcedTheme) {
      setTheme(getThemeTable(forcedTheme === "dark"));
      return;
    }

    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(getThemeTable(isDark));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [forcedTheme]);

  return theme;
};
