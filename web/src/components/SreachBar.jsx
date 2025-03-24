
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/productSlice';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 25px;
  font-size: 1rem;
  margin: 10px 0;
  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.3);
  }
`;

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <StyledInput
      type="text"
      placeholder="Search products..."
      onChange={(e) => dispatch(setSearchQuery(e.target.value))}
    />
  );
};

export default SearchBar;
