import styled from "styled-components";
import { categories } from "../data.js";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem.jsx";

const Container = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
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

const Categories = () => {
  return (
    <>
      <Title>Our Categories</Title>
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Categories;
