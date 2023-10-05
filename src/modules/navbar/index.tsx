import { useAppContext } from "../../context";

const Navbar = () => {
  const { tempTheme, setUserTheme, selectedTab, setSelectedTab } =
    useAppContext();

  const handleSetUserTheme = () => {
    setUserTheme(JSON.parse(tempTheme));
  };

  const handleSetPalette = () => {
    const theme = JSON.parse(tempTheme);
    const mode = theme.palette.mode;
    const updatedTheme = {
      ...theme,
      palette: { mode: mode === "light" ? "dark" : "light" },
    };

    setUserTheme(updatedTheme);
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
        Toggle mode
      </button>
      <div style={{ flexGrow: 1 }} />
      <button
        className="navbar-button"
        data-state={selectedTab === "components" ? "active" : "inactive"}
        onClick={handleSetComponents}
      >
        Components view
      </button>
      <button
        className="navbar-button"
        data-state={selectedTab === "theme" ? "active" : "inactive"}
        onClick={handleSetTheme}
      >
        Theme view
      </button>
    </div>
  );
};

export default Navbar;
