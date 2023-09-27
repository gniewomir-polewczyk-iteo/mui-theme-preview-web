import { LiveEditor, LiveProvider } from 'react-live'
import { useCallback, useEffect, useState } from 'react'
import { useAppContext } from '../../context'
import debounce from 'lodash.debounce'

const CodeEditor = () => {
  const [tempTheme, setTempTheme] = useState('')
  const { userTheme, setUserTheme } = useAppContext()

  const handleSetTempTheme = (e: string) => {
    setTempTheme(e)
  }

  const handleSetUserTheme = () => {
    setUserTheme(JSON.parse(tempTheme))
  }

  const debouncedChangeHandler = useCallback(
    debounce(handleSetTempTheme, 500),
    []
  )

  useEffect(() => {
    setTempTheme(JSON.stringify(userTheme, undefined, 2))
  }, [userTheme])

  return (
    <div className="code-editor-module">
      <button onClick={handleSetUserTheme}>Save theme</button>
      <LiveProvider>
        <LiveEditor code={tempTheme} onChange={debouncedChangeHandler} />
      </LiveProvider>
    </div>
  )
}

export default CodeEditor
