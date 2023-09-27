import { ThemeProvider as Provider } from '@mui/material'
import { theme } from '../../theme'

type ComponentProps = {
  children: JSX.Element
}

const ThemeProvider = ({ children }: ComponentProps) => {
  return <Provider theme={theme}>{children}</Provider>
}

export default ThemeProvider
