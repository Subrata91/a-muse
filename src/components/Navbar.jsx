import React from "react";
import styled from "styled-components";
import {mobile} from '../responsive';
import SearchIcon from "@mui/icons-material/Search";
import logo from "../assets/images/favicon-32x32.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })};
`;

const Left = styled.div`
  font-family: "Rockwell Nova", sans-serif;
  font-size: calc(10px + 2vmin);
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  font-family: "Bebas Neue", sans-serif;
  font-weight: 500;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid #d3d3d3;
  display: flex;
  align-items: center;
  margin-right: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  letter-spacing: 1px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Center = styled.div`
  font-family: "Bebas Neue", sans-serif;
  font-size: calc(5px + 2vmin);
  font-weight: 500;
  flex: 1;
  text-align: center;
  display: flex;
  letter-spacing: 1px;
  text-decoration: bold;
  align-items: center;
  justify-content: center;
`;

const NavItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 13px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <img src={logo} alt="a-muse" style={{ padding: "0 10px" }} />
          a-muse
        </Left>
        <Center>
          <NavItem><Link to="/" style={{textDecoration: "none", color: "black"}}>Home</Link></NavItem>
          <NavItem><Link to="/product" style={{textDecoration: "none", color: "black"}}>Product</Link></NavItem>
          <NavItem><Link to="/productlist" style={{textDecoration: "none", color: "black"}}>Product List</Link></NavItem>
        </Center>
        <Right>
          <SearchContainer>
            <Input />
            <SearchIcon />
          </SearchContainer>
          <MenuItem><Link to="/signup" style={{textDecoration: "none", color: "black"}}>Sign Up</Link></MenuItem>
          <MenuItem><Link to="/login" style={{textDecoration: "none", color: "black"}}>Log In</Link></MenuItem>
          <MenuItem>
            <Badge badgeContent={1} color="primary">
            <Link to="/cart" style={{textDecoration: "none", color: "black"}}>
              <ShoppingCartIcon />
            </Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
