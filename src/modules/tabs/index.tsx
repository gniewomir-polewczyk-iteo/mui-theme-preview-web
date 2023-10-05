import { useAppContext } from "../../context";
import ComponentsPreview from "../components-preview";
import ThemePreview from "../theme-preview";

const Tabs = () => {
  const { selectedTab } = useAppContext();

  return (
    <div className="tabs-wrapper">
      {selectedTab === "components" && <ComponentsPreview />}
      {selectedTab === "theme" && <ThemePreview />}
    </div>
  );
};

export default Tabs;
