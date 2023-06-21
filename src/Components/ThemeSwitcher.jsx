import { useState } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("Light");

  function handleThemeToggle() {
    setTheme(theme === "Light" ? "Dark" : "Light");
  }
  return (
    <div>
      <button onClick={handleThemeToggle}>Toggle Theme</button>
      <h1>THEME : {theme}</h1>
    </div>
  );
}
