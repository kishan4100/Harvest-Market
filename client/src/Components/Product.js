import { FavoriteBorder, Search, ShoppingCart } from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: rgb(0, 0, 0, 0.2);
  z-index: 3;
  transition: all 0.5s ease-in;
`;
const Container = styled.div`
  flex: 1;
  width: 50%;
  height: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 50px 100px;

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Image = styled.img`
  height: 100%;
  z-index: 2;
`;
const Icon = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

function Product({ product }) {
  return (
    <Container>
      <Image src={product.img} />
      <Info>
        <Icon>
          <ShoppingCart fontSize="large" />
        </Icon>
        <Link
          style={{ color: "#000000", textDecoration: "none" }}
          to={`/product/${product._id}`}
        >
          <Icon>
            <Search fontSize="large" />
          </Icon>
        </Link>
        <Icon>
          <FavoriteBorder fontSize="large" />
        </Icon>
      </Info>
    </Container>
  );
}

export default Product;
