import React, { createContext, useContext, useState } from "react";
import { defaultTheme } from "../theme";
import { TabType } from "../types";
import { Theme } from "@mui/material";

type StateType = {
  selectedTab: TabType;
  setSelectedTab: React.Dispatch<React.SetStateAction<TabType>>;
  userTheme: Theme;
  setUserTheme: React.Dispatch<React.SetStateAction<Theme>>;
  tempTheme: string;
  setTempTheme: React.Dispatch<React.SetStateAction<string>>;
};

const AppContext = createContext<StateType | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [selectedTab, setSelectedTab] = useState<TabType>("theme");
  const [userTheme, setUserTheme] = useState<Theme>(defaultTheme);
  const [tempTheme, setTempTheme] = useState<string>("");

  const values = {
    selectedTab,
    setSelectedTab,
    userTheme,
    setUserTheme,
    tempTheme,
    setTempTheme,
  };

  return (
    <AppContext.Provider value={{ ...values }}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext) as StateType;
