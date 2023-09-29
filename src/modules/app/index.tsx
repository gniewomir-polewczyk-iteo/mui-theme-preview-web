import CodeEditor from '../code-editor'
import Navbar from '../navbar'
import Tabs from '../tabs'

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="app-sidebar">
        <CodeEditor />
      </div>
      <div className="app-main">
        <Navbar />
        <Tabs />
      </div>
    </div>
  )
}

export default App
