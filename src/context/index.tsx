import React, { createContext, useContext, useState } from 'react'
import { theme } from '../theme'

type StateType = {
  userTheme: typeof theme
  setUserTheme: React.Dispatch<React.SetStateAction<typeof theme>>
}

const AppContext = createContext<StateType | undefined>(undefined)

export const AppContextProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [userTheme, setUserTheme] = useState<typeof theme>(theme)

  const values = {
    userTheme,
    setUserTheme,
  }

  return (
    <AppContext.Provider value={{ ...values }}>{children}</AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext) as StateType
