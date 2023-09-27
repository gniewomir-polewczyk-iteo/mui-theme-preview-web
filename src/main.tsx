import ReactDOM from 'react-dom/client'
import App from './modules/app'
import ThemeProvider from './components/theme-provider'

import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
