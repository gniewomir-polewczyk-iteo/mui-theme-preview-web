import { useAppContext } from "../../context";
import PreviewComponents from "../preview-components";
import PreviewTheme from "../preview-theme";

const Tabs = () => {
  const { selectedTab } = useAppContext();

  return (
    <div className="tabs-wrapper">
      {selectedTab === "components" && <PreviewComponents />}
      {selectedTab === "theme" && <PreviewTheme />}
    </div>
  );
};

export default Tabs;
