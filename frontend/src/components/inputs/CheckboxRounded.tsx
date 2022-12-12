import { Checkbox } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import { Colors } from '../../theme/Colors'

type Props = {
  checked?: boolean
  onChange?: () => void
}
const CheckboxRounded: React.FC<Props> = ({ checked, onChange }) => {
  return (
    <Checkbox
      checked={checked}
      onChange={onChange}
      sx={{
        '&.Mui-checked': {
          color: Colors.success,
        },
      }}
      icon={<RadioButtonUncheckedIcon />}
      checkedIcon={<CheckCircleIcon />}
    />
  )
}
export default CheckboxRounded
