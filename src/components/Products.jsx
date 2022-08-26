import styled from "styled-components";
import { popularProducts } from "../data.js";
import Product from "./Product.jsx";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Title = styled.h1`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
  font-size: 70px;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
`;

const Products = () => {
  return (
    <>
    <Title>Our Popular Brands</Title>
      <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
    </>
    
  );
};

export default Products;
