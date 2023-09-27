import { ThemeProvider as Provider } from '@mui/material'
import { useAppContext } from '../../context'

type ComponentProps = {
  children: JSX.Element
}

const ThemeProvider = ({ children }: ComponentProps) => {
  const { userTheme } = useAppContext()

  return <Provider theme={userTheme}>{children}</Provider>
}

export default ThemeProvider
