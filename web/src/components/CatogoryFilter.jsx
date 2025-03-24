
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/productSlice';
import styled from 'styled-components';

const StyledSelect = styled.select`
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  background: white;
  cursor: pointer;
  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const categories = ['All', ...new Set(products.map(product => product.category))];

  return (
    <StyledSelect onChange={(e) => dispatch(setCategory(e.target.value === 'All' ? '' : e.target.value))}>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </StyledSelect>
  );
};

export default CategoryFilter;