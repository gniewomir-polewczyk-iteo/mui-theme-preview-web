import { useAppContext } from '../../context'

const Navbar = () => {
  const { tempTheme, setUserTheme, selectedTab, setSelectedTab } =
    useAppContext()

  const handleSetUserTheme = () => {
    setUserTheme(JSON.parse(tempTheme))
  }

  const handleSetComponents = () => {
    setSelectedTab('components')
  }

  const handleSetTheme = () => {
    setSelectedTab('theme')
  }

  return (
    <div className="navbar-wrapper">
      <button
        className="navbar-button"
        data-state="active"
        onClick={handleSetUserTheme}
      >
        Apply
      </button>
      <button
        className="navbar-button"
        data-state={selectedTab === 'components' ? 'active' : 'inactive'}
        onClick={handleSetComponents}
      >
        Components
      </button>
      <button
        className="navbar-button"
        data-state={selectedTab === 'theme' ? 'active' : 'inactive'}
        onClick={handleSetTheme}
      >
        Theme
      </button>
    </div>
  )
}

export default Navbar
