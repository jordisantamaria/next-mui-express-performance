import { forwardRef, useState } from 'react'
import { IconButton, InputAdornment } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import TextField from './TextField'

type Props = {
  id: string
  label?: string | JSX.Element
  defaultValue?: string
  value?: string
  name?: string
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  readOnly?: boolean
  type?: 'password' | 'text'
  multiline?: boolean
  testId?: string
}
const PasswordInput = forwardRef<HTMLInputElement, Props>(
  ({ id, label, name, placeholder, testId }, ref) => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const handleToogleShowPassword = (e: any) => {
      e.preventDefault()
      setIsShowPassword(!isShowPassword)
    }
    return (
      <TextField
        testId={testId}
        id={id}
        name={name}
        label={label}
        placeholder={placeholder}
        type={isShowPassword ? 'text' : 'password'}
        ref={ref}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onMouseDown={handleToogleShowPassword}
              edge="end"
            >
              {isShowPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    )
  }
)
export default PasswordInput

