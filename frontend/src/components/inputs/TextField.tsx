import FormControl from '@mui/material/FormControl'
import InputBase from '@mui/material/InputBase'
import InputLabel from '@mui/material/InputLabel'
import { styled } from '@mui/styles'
import { forwardRef } from 'react'
import { css } from '@emotion/react'
import { Colors } from '../../theme/Colors'

const StyledInputBase = styled(InputBase)(() => ({
  root: {
    'label + &': {
      marginTop: '8px',
    },
  },
}))


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
  testId?: string
  multiline?: boolean
  endAdornment?: React.ReactNode
  direction?: 'vertical' | 'horizontal'
  labelWidth?: string // horizontal textfields requires label width to fit all column same width
  variant?: 'outlined' | 'filled'
}
const TextField = forwardRef<HTMLInputElement, Props>(
  (
    {
      id,
      label,
      defaultValue,
      value,
      name,
      handleChange,
      placeholder,
      readOnly,
      type,
      testId,
      multiline,
      endAdornment,
      direction = 'vertical',
      labelWidth = '200px',
      variant = 'outlined'
    },
    ref,
  ) => {
    return (
      <FormControl css={css`
        width: 100%;
      `}>
        <div
          css={direction === 'horizontal' && css`
            display: grid;
            grid-template-columns: ${labelWidth} 1fr;
            align-items: center;
          `}
        >
          {label && (
            <div
              css={css`
                margin: 10px 0 15px;
                left: -15px;
                position: relative;
              `}
            >
              <InputLabel shrink htmlFor={id}>
                {label}
              </InputLabel>
            </div>
          )}
          <StyledInputBase
            defaultValue={defaultValue}
            id={id}
            fullWidth
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            name={name}
            readOnly={readOnly}
            endAdornment={endAdornment}
            inputRef={ref}
            css={css`
              height: 40px;
              fontSize: 14;
              letterSpacing: 0.01;
              padding: 10px 12px;
              ${variant === 'outlined' && `
                border: 1px solid #707070;
                background: ${Colors.white};
              `}
              ${variant === 'filled' && `
                background: #f3f3f3;
              `}

              input:-internal-autofill-selected {
                background: none !important;
                box-shadow: none !important;
              }

              input:-webkit-autofill,
              input:-webkit-autofill:hover,
              input:-webkit-autofill:focus,
              input:-webkit-autofill:active {
                box-shadow: none !important;
                background: transparent !important;
                transition-delay: 3600s;
              }
            `}
            type={type}
            multiline={multiline}
            rows={multiline ? 5 : undefined}
            data-cy={testId}
          />
        </div>
      </FormControl>
    )
  },
)
export default TextField

