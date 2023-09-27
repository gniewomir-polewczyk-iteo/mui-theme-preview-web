import { LiveEditor, LiveProvider } from 'react-live'
import { theme } from '../../theme'

const CodeEditor = () => {
  return (
    <div className="code-editor-module">
      <LiveProvider>
        <LiveEditor code={JSON.stringify(theme, undefined, 2)} />
      </LiveProvider>
    </div>
  )
}

export default CodeEditor
