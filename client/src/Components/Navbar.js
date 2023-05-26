import React from "react";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/userRedux";

const Container = styled.div`
  width: 100wh;
`;
const Wrapper = styled.div`
  display: flex;
  padding: 10px 20px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-weight: bold;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 300;
`;
const SearchContainer = styled.div`
  background-color: white;
  border: 1px solid lightgrey;
  display: flex;
  margin-left: 20px;
  width: 50%;
  max-height: 40px;
  align-items: center;
`;
const Input = styled.input`
  border: none;
  height: 100%;
  width: 100%;
  padding: 10px;
  font-size: 15px;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  justify-content: flex-end;
`;
const MenuItem = styled.div`
  cursor: pointer;
  padding-left: 30px;
  margin-left: 10px;
  font-size: 1.5rem;
`;
const AccessContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Navbar() {
  const { currentUser } = useSelector((state) => state.user);
  const { quantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClick = () => {
    setTimeout(() => {
      dispatch(logout());
      window.location.reload(true);
    }, 400);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon
              style={{ color: "grey", fontSize: "30px" }}
              fontSize="small"
            />
          </SearchContainer>
        </Left>
        <Center>
          <Link to={`/`} style={{ color: "#000000", textDecoration: "none" }}>
            <Logo>HARVEST MARKET</Logo>
          </Link>
        </Center>
        <Right>
          {!currentUser ? (
            <AccessContainer>
              <Link
                style={{ color: "#000000", textDecoration: "none" }}
                to={`/register`}
              >
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link
                style={{ color: "#000000", textDecoration: "none" }}
                to={`/login`}
              >
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            </AccessContainer>
          ) : (
            <div>
              <MenuItem onClick={handleClick}>Logout</MenuItem>
            </div>
          )}

          {currentUser && quantity ? (
            <Link
              to={`/cart`}
              style={{ color: "#000000", textDecoration: "none" }}
            >
              <MenuItem>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartIcon fontSize="large" />
                </Badge>
              </MenuItem>
            </Link>
          ) : (
            <div></div>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
}
export default Navbar;
