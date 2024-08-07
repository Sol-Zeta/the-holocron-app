import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import useDebounce from '@/hooks/useDebounce';
import { setFilterTerm } from '@/store/slices/characters';
import {
  SearchContainer,
  SmallIconContainer,
  StyledInput,
} from './SearchInput.module';

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedValue = useDebounce(searchTerm);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  const handleDeleteTerm = () => setSearchTerm('');

  useEffect(() => {
    dispatch(setFilterTerm(debouncedValue));
  }, [debouncedValue]);

  return (
    <SearchContainer data-testid='SearchInput'>
      <StyledInput
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        endAdornment={
          searchTerm && (
            <SmallIconContainer position="end" onClick={handleDeleteTerm}>
              <CloseIcon />
            </SmallIconContainer>
          )
        }
        value={searchTerm}
        onChange={handleChange}
        placeholder="Enter a value to filter"
      />
    </SearchContainer>
  );
};

export default SearchInput;
