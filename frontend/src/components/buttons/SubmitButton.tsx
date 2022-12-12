import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import { ReactNode } from 'react'

type Props = {
  isUploading: boolean
  isDisabled?: boolean
  handleClick?: (
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
  variant?: 'text' | 'outlined' | 'contained'
  testId?: string
  children: ReactNode
}

export const SubmitButton = ({
  isUploading,
  isDisabled,
  children,
  handleClick,
  variant,
  testId,
}: Props) => {
  const variantValue = variant ? variant : 'contained'

  return (
    <Button
      onClick={handleClick}
      color="primary"
      variant={variantValue}
      disabled={isDisabled || isUploading}
      startIcon={isUploading ? <CircularProgress size={20} /> : undefined}
      data-cy={testId}
    >
      {children}
    </Button>
  )
}
