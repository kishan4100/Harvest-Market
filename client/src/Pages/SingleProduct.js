import { Add, Remove } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/NewsLetter";
import { publicRequest } from "../Request";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../Redux/cartRedux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contain;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding-top: 10%;
  padding-left: 50px;
`;

const Title = styled.h1`
  font-weight: 200;
  font-size: 3rem;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-size: 1.5rem;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 3.5rem;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 2rem;
  font-weight: 200;
`;
const FilterContent = styled.span`
  font-size: 2rem;
  font-weight: 300;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.5rem;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [type, setType] = useState();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const handleQuantity = (type) => {
    if (type === "dec") {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    if (currentUser) {
      dispatch(
        addProduct({
          ...product,
          quantity,
          type,
        })
      );
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      const response = await publicRequest.get("products/find/" + productId);
      setProduct(response.data);
    };
    getProduct();
  }, [productId]);

  const unit = ["kg", "lbs"];
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer iner>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>₹{product.price}/kg</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Category:</FilterTitle>
              <FilterContent> {product.category}</FilterContent>
            </Filter>
            <Filter>
              <FilterTitle>Unit</FilterTitle>
              <FilterSize>
                {unit?.map((size) => (
                  <FilterSizeOption key={size}>{size}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove fontSize="large" onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add fontSize="large" onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
//onChange={(e) => setSize(e.target.value)}
