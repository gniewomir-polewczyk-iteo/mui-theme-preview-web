import { LiveEditor, LiveProvider } from 'react-live'
import { useCallback, useEffect, useState } from 'react'
import { useAppContext } from '../../context'
import debounce from 'lodash.debounce'
import IconSync from '../../icons/icon-sync'

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
      <button className="code-sync-button" onClick={handleSetUserTheme}>
        <IconSync height="32px" width="32px" />
      </button>
      <LiveProvider>
        <LiveEditor code={tempTheme} onChange={debouncedChangeHandler} />
      </LiveProvider>
    </div>
  )
}

export default CodeEditor
