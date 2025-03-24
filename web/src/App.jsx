
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import CategoryFilter from './components/CatogoryFilter';
import SearchBar from './components/SreachBar';


import styled from 'styled-components';

const Container = styled.div`
  max-width: 1400px; 
  margin: 0 auto;
  padding: 20px;
  background: #f5f6fa;
  min-height: 100vh;
`;

const Header = styled.h1`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header>Product Store</Header>
        <FilterContainer>
          <SearchBar />
          <CategoryFilter />
        </FilterContainer>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;