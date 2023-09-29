import MuiButton from '../../components/mui-button'
import MuiButtonGroup from '../../components/mui-button-group'
import MuiCheckbox from '../../components/mui-checkbox'
import MuiFloatingActionButton from '../../components/mui-floating-action-button'
import MuiRadio from '../../components/mui-radio'
import MuiRating from '../../components/mui-rating'
import MuiSelect from '../../components/mui-select'
import MuiSlider from '../../components/mui-slider'
import MuiSwitch from '../../components/mui-switch'

const ComponentsPreview = () => {
  return (
    <div className="components-preview-wrapper">
      <MuiButton />
      <MuiButtonGroup />
      <MuiCheckbox />
      <MuiFloatingActionButton />
      <MuiRadio />
      <MuiRating />
      <MuiSelect />
      <MuiSlider />
      <MuiSwitch />
    </div>
  )
}

export default ComponentsPreview
