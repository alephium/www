import React from 'react'
import { RiSearch2Line as SearchIcon } from 'react-icons/ri'
import styled from 'styled-components'

interface SearchProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

const Search: React.FC<SearchProps> = ({ value, onChange, placeholder = 'Search...' }) => (
  <SearchWrapper>
    <SearchIconStyled />
    <SearchInput type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
  </SearchWrapper>
)

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px 12px 40px;
  border: 1px solid ${({ theme }) => theme.borderPrimary};
  border-radius: 8px;
  background: ${({ theme }) => theme.surface2};
  color: ${({ theme }) => theme.textPrimary};
  font-size: 16px;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.link};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.link}33;
  }

  &::placeholder {
    color: ${({ theme }) => theme.textSecondary};
  }
`

const SearchIconStyled = styled(SearchIcon)`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  color: ${({ theme }) => theme.textSecondary};
`

export default Search
