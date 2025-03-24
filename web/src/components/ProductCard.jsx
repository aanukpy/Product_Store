
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 15px; 
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.img`
  height: 180px; 
  object-fit: contain;
  width: 100%;
`;

const Title = styled.h3`
  font-size: 1.1rem; 
  margin: 10px 0;
  color: #333;
`;

const Price = styled.p`
  color: #2ecc71;
  font-weight: bold;
  font-size: 1rem;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 8px;
  padding: 6px 12px;
  background: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 0.9rem;
  &:hover {
    background: #2980b9;
  }
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <ProductImage src={product.image} alt={product.title} />
      <Title>{product.title.substring(0, 20)}...</Title>
      <Price>${product.price}</Price>
      <StyledLink to={`/product/${product.id}`}>View Details</StyledLink>
    </Card>
  );
};

export default ProductCard;