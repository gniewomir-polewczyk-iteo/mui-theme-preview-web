import React, { createContext, useContext, useState } from 'react'
import { theme } from '../theme'

type TabType = 'components' | 'theme'

type StateType = {
  userTheme: typeof theme
  setUserTheme: React.Dispatch<React.SetStateAction<typeof theme>>
  tempTheme: string
  setTempTheme: React.Dispatch<React.SetStateAction<string>>
  selectedTab: TabType
  setSelectedTab: React.Dispatch<React.SetStateAction<TabType>>
}

const AppContext = createContext<StateType | undefined>(undefined)

export const AppContextProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [userTheme, setUserTheme] = useState<typeof theme>(theme)
  const [tempTheme, setTempTheme] = useState<string>('')
  const [selectedTab, setSelectedTab] = useState<TabType>('components')

  const values = {
    userTheme,
    setUserTheme,
    tempTheme,
    setTempTheme,
    selectedTab,
    setSelectedTab,
  }

  return (
    <AppContext.Provider value={{ ...values }}>{children}</AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext) as StateType
