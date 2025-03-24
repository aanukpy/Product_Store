
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../redux/productSlice';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const ProductContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const Image = styled.img`
  max-width: 350px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Details = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  color: #2c3e50;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const Price = styled.p`
  color: #e74c3c;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Category = styled.p`
  background: #ecf0f1;
  padding: 8px 15px;
  border-radius: 20px;
  display: inline-block;
  color: #7f8c8d;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const AddToCartButton = styled.button`
  padding: 12px 25px;
  background: #f1c40f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background 0.3s ease;
  &:hover {
    background: #e67e22;
  }
`;

const BuyNowButton = styled.button`
  padding: 12px 25px;
  background: #2ecc71;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background 0.3s ease;
  &:hover {
    background: #27ae60;
  }
`;

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  const product = products.find((p) => p.id === parseInt(id));

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <Container>
      <ProductContainer>
        <Image src={product.image} alt={product.title} />
        <Details>
          <Title>{product.title}</Title>
          <Price>${product.price}</Price>
          <Description>{product.description}</Description>
          <Category>Category: {product.category}</Category>
          <ButtonContainer>
            <AddToCartButton>Add to Cart</AddToCartButton>
            <BuyNowButton>Buy Now</BuyNowButton>
          </ButtonContainer>
        </Details>
      </ProductContainer>
    </Container>
  );
};

export default ProductDetail;