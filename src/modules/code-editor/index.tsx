import { useEffect } from "react";
import { useAppContext } from "../../context";

import AceEditor from "react-ace";

import darkMode from "../../themes/dark-mode";
import lightMode from "../../themes/light-mode";

import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

const CodeEditor = () => {
  const { tempTheme, setTempTheme, mode } = useAppContext();

  const handleSetTempTheme = (e: string) => {
    setTempTheme(e);
  };

  useEffect(() => {
    if (mode === "light") setTempTheme(JSON.stringify(lightMode, null, 2));
    if (mode === "dark") setTempTheme(JSON.stringify(darkMode, null, 2));
  }, [mode]);

  return (
    <div className="code-editor-wrapper">
      <AceEditor
        value={tempTheme}
        mode="javascript"
        theme="monokai"
        fontSize="12px"
        onChange={handleSetTempTheme}
        highlightActiveLine={true}
        setOptions={{
          enableLiveAutocompletion: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </div>
  );
};

export default CodeEditor;
