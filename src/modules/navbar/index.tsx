import { useAppContext } from '../../context'

const Navbar = () => {
  const { selectedTab, setSelectedTab } = useAppContext()

  const handleSetComponents = () => {
    setSelectedTab('components')
  }
  const handleSetTheme = () => {
    setSelectedTab('tabs')
  }

  return (
    <div className="navbar-wrapper">
      <button
        className="navbar-button"
        data-state={selectedTab === 'components' ? 'active' : 'inactive'}
        onClick={handleSetComponents}
      >
        Components
      </button>
      <button
        className="navbar-button"
        data-state={selectedTab === 'tabs' ? 'active' : 'inactive'}
        onClick={handleSetTheme}
      >
        Theme
      </button>
    </div>
  )
}

export default Navbar
