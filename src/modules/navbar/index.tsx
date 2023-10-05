import { Theme } from "@mui/material";
import { useAppContext } from "../../context";
import { defaultTheme } from "../../theme";

const Navbar = () => {
  const { tempTheme, setUserTheme, selectedTab, setSelectedTab } =
    useAppContext();

  const handleSetUserTheme = () => {
    const theme = JSON.parse(tempTheme);
    const updatedTheme = {
      ...defaultTheme,
      ...theme,
    };

    setUserTheme(updatedTheme);
  };

  const handleSetPalette = () => {
    const theme = JSON.parse(tempTheme);
    const updatedTheme = {
      ...defaultTheme,
      palette: { mode: theme.palette.mode === "light" ? "dark" : "light" },
    };

    setUserTheme(updatedTheme as Theme);
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
        onClick={handleSetPalette}
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
