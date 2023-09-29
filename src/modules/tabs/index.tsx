import { useAppContext } from '../../context'
import ComponentsPreview from '../components-preview'
import ThemePreview from '../theme-preview'

const Tabs = () => {
  const { selectedTab } = useAppContext()

  return (
    <div className="tabs-module">
      {selectedTab === 'components' && <ComponentsPreview />}
      {selectedTab === 'tabs' && <ThemePreview />}
    </div>
  )
}

export default Tabs
