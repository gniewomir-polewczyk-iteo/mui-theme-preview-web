import { useAppContext } from "../../context";

import darkMode from "../../themes/dark-mode";
import lightMode from "../../themes/light-mode";

const Navbar = () => {
  const {
    tempTheme,
    setUserTheme,
    selectedTab,
    setSelectedTab,
    mode,
    setMode,
  } = useAppContext();

  const handleSetUserTheme = () => {
    setUserTheme(JSON.parse(tempTheme));
  };

  const handleSetMode = () => {
    if (mode === "light") {
      setMode("dark");
      setUserTheme(darkMode);
    }
    if (mode === "dark") {
      setMode("light");
      setUserTheme(lightMode);
    }
  };

  const handleSetComponents = () => {
    setSelectedTab("components");
  };

  const handleSetTheme = () => {
    setSelectedTab("theme");
  };

  return (
    <div className="navbar-wrapper">
      <button
        className="navbar-button"
        data-state="active"
        onClick={handleSetUserTheme}
      >
        Apply theme
      </button>
      <button
        className="navbar-button"
        data-state="active"
        onClick={handleSetMode}
      >
        Toggle theme
      </button>
      <div style={{ flexGrow: 1 }} />
      <button
        className="navbar-button"
        data-state={selectedTab === "components" ? "active" : "inactive"}
        onClick={handleSetComponents}
      >
        Show components
      </button>
      <button
        className="navbar-button"
        data-state={selectedTab === "theme" ? "active" : "inactive"}
        onClick={handleSetTheme}
      >
        Show theme
      </button>
    </div>
  );
};

export default Navbar;
