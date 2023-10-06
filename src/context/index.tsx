import React, { createContext, useContext, useState } from "react";
import { defaultTheme } from "../theme";
import { TabType } from "../types";

type StateType = {
  selectedTab: TabType;
  setSelectedTab: React.Dispatch<React.SetStateAction<TabType>>;
  userTheme: object;
  setUserTheme: React.Dispatch<React.SetStateAction<object>>;
  tempTheme: string;
  setTempTheme: React.Dispatch<React.SetStateAction<string>>;
  mode: "light" | "dark";
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};

const AppContext = createContext<StateType | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [selectedTab, setSelectedTab] = useState<TabType>("theme");
  const [userTheme, setUserTheme] = useState<object>(defaultTheme);
  const [tempTheme, setTempTheme] = useState<string>("");
  const [mode, setMode] = useState<"light" | "dark">("light");

  const values = {
    selectedTab,
    setSelectedTab,
    userTheme,
    setUserTheme,
    tempTheme,
    setTempTheme,
    mode,
    setMode,
  };

  return (
    <AppContext.Provider value={{ ...values }}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext) as StateType;
