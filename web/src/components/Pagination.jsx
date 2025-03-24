
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../redux/productSlice';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const PageButton = styled.button`
  padding: 8px 15px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: ${props => props.active ? '#3498db' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  cursor: pointer;
  &:hover:not(:disabled) {
    background: #3498db;
    color: white;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

const Pagination = ({ totalItems }) => {
  const dispatch = useDispatch();
  const { currentPage, itemsPerPage } = useSelector((state) => state.products);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      {pageNumbers.map((number) => (
        <PageButton
          key={number}
          active={currentPage === number}
          onClick={() => dispatch(setPage(number))}
          disabled={currentPage === number}
        >
          {number}
        </PageButton>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;