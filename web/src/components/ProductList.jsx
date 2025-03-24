
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 25px;
  margin: 20px 0;

  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); 
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr; 
  }
`;

const ProductList = () => {
  const dispatch = useDispatch();
  const { filteredProducts, loading, currentPage, itemsPerPage } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Grid>
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Pagination totalItems={filteredProducts.length} />
    </div>
  );
};

export default ProductList;