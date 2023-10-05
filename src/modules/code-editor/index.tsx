import debounce from "lodash.debounce";
import { LiveEditor, LiveProvider } from "react-live";
import { useCallback, useEffect } from "react";
import { useAppContext } from "../../context";

const CodeEditor = () => {
  const { userTheme, tempTheme, setTempTheme } = useAppContext();

  const handleSetTempTheme = (e: string) => {
    setTempTheme(e);
  };

  const debouncedChangeHandler = useCallback(
    debounce(handleSetTempTheme, 500),
    []
  );

  useEffect(() => {
    setTempTheme(JSON.stringify(userTheme, undefined, 2));
  }, [userTheme]);

  return (
    <div className="code-editor-wrapper">
      <LiveProvider>
        <LiveEditor code={tempTheme} onChange={debouncedChangeHandler} />
      </LiveProvider>
    </div>
  );
};

export default CodeEditor;
