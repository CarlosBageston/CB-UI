import { useEffect, useState } from "react";

// useTheme.ts
export function useTheme(forcedTheme?: "light" | "dark") {
  const [theme, setTheme] = useState<"light" | "dark">(
    forcedTheme ??
      (document.documentElement.classList.contains("dark") ? "dark" : "light"),
  );

  useEffect(() => {
    if (forcedTheme) {
      setTheme(forcedTheme);
      return;
    }

    const observer = new MutationObserver(() => {
      setTheme(
        document.documentElement.classList.contains("dark") ? "dark" : "light",
      );
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, [forcedTheme]);
  console.log("theme", theme);

  return theme;
}
