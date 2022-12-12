import { css } from '@emotion/react'
import { useRef } from 'react'
import { TextField, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'
import { Colors } from '../../theme/Colors'
import SearchIcon from '@mui/icons-material/Search';

/**
 * 検索窓共通
 */
type Props = {
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleClickCancel: () => void
  handleFocusInput?: () => void
  searchWord: string
  placeholder?: string
  className?: string
}
const SearchForm: React.FC<any> = ({
  handleChangeInput,
  handleClickCancel,
  handleFocusInput,
  searchWord,
  placeholder,
  className,
}) => {
  const inputEl = useRef<HTMLInputElement | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    inputEl.current?.blur()
  }

  return (
    <form
      className={className}
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: ${Colors.white};
        height: 50px;
        width: 100%;
        position: sticky;
        top: 0;
        z-index: 1;
      `}
      onSubmit={handleSubmit}
    >
      <SearchField
        type="search"
        inputMode="search"
        value={searchWord}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          searchWord = e.target.value
          handleChangeInput(e)
        }}
        onFocus={handleFocusInput}
        ref={inputEl}
        placeholder={placeholder}
        variant="outlined"
        InputProps={{
          startAdornment: (
            <IconButton>
              <SearchIcon
                css={css`
                  filter: opacity(0.5);
                `}
              />
            </IconButton>
          ),
          endAdornment: searchWord && (
            <IconButton>
              <CloseIcon
                onClick={() => {
                  searchWord = ''
                  handleClickCancel()
                }}
              />
            </IconButton>
          ),
        }}
      />
    </form>
  )
}

// 検索窓にCSS付与
const SearchField = styled(TextField)(() => ({
  flex: 1,
  '& .MuiOutlinedInput-root': {
    height: 36,
    margin: '0 10px',
    padding: '0 10px',
    '& fieldset': {
      height: 36,
      // borderColor: Colors.LIGHT_GRAY_2,
      borderWidth: 2,
      borderRadius: 20,
      webkitAppearance: 'none',
    },
    '&:focus fieldset': {
      outline: 'none',
    },
  },
}))
export default SearchForm

