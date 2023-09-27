import ReactDOM from 'react-dom/client'
import App from './modules/app'
import ThemeProvider from './components/theme-provider'

import { AppContextProvider } from './context'

import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppContextProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </AppContextProvider>
)
