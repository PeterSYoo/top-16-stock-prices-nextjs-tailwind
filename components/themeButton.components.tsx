import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsSun, BsMoonStars } from "react-icons/bs";

export const ThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  if (currentTheme === "dark") {
    return (
      <>
        <button onClick={() => setTheme("light")} type="button">
          <BsSun />
        </button>
        <button onClick={() => setTheme("light")} type="button">
          <h6 className="text-sm">Light Mode</h6>
        </button>
      </>
    );
  } else {
    return (
      <>
        <button onClick={() => setTheme("dark")} type="button">
          <BsMoonStars />
        </button>
        <button onClick={() => setTheme("dark")} type="button">
          <h6 className="text-sm">Dark Mode</h6>
        </button>
      </>
    );
  }
};
