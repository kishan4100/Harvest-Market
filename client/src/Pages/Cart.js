import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Redux/cartRedux";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { publicRequest } from "../Request";
import { useNavigate } from "react-router-dom";

const STRIPE_PUBLIC_KEY =
  "pk_test_51LC0y0SDji3luSc9uYbkjMSphOZzCaKsoICWUU5hy8rCn2czdwwZGMJWwyI9Tm8QdiTDIFBVfjqskxCvQc50WtDJ0092DHXkCS";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: 500;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  font-size: 1.2rem;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  font-size: 1.5rem;
  font-weight: 400;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  margin: 45px 10px;
  width: 35%;
  height: 70%;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
  font-weight: 500;
  font-size: 1.5rem;
`;

const ProductId = styled.span`
  font-weight: 500;
  font-size: 1.5rem;
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.br`
  background-color: #eee;
  border: none;
  min-height: 40px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 40vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 500;
  font-size: 1.5rem;
`;

const SummaryItem = styled.div`
  font-weight: 500;
  font-size: 1.5rem;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`
  font-weight: 500;
  font-size: 1.5rem;
`;

const SummaryItemPrice = styled.span`
  font-weight: 500;
  font-size: 1.5rem;
`;

const Button = styled.button`
  font-weight: 500;
  font-size: 1.5rem;
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const LoginText = styled.div`
  height: 40vh;
  font-size: 4rem;
  fpmt-weight: 900;
  margin-top: 10%;
  text-align: center;
`;

const Cart = () => {
  const cartData = useSelector((state) => state.cart);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [stripeToken, setStripeToken] = useState(null);
  const handleclick = () => {
    dispatch(clearCart());
  };

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const payRequest = async () => {
      try {
        const res = await publicRequest.post("checkout/payment", {
          tokenId: stripeToken.id,
          amount: cartData.total - 100 + 70,
        });
        setStripeToken(null);
        navigate("/success", {
          state: { stripeData: res.data, cart: cartData },
        });
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && cartData.total >= 1 && payRequest();
  }, [stripeToken, navigate, cartData.total, cartData]);

  return (
    <Container>
      <Navbar />
      <Announcement />
      {currentUser ? (
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
            <Link to={`/Products/all`}>
              <TopButton>CONTINUE SHOPPING</TopButton>
            </Link>
            <TopButton onClick={handleclick}>Clear Cart</TopButton>
            <TopTexts>
              <TopText>Shopping Bag({cartData.quantity})</TopText>

              <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              {cartData.products?.map((product) => (
                <Product key={product._id}>
                  <ProductDetail>
                    <Image src={product.img} />
                    <Details>
                      <ProductName>{product.title}</ProductName>
                      <ProductId>
                        <b>ID:</b> {product._id}
                      </ProductId>
                      <ProductColor color={product.color} />
                      <ProductSize>{product.size}</ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add onClick={() => (product.quantity += 1)} />
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>₹{product.price}/kg</ProductPrice>
                  </PriceDetail>
                  <br />
                  <br />
                </Product>
              ))}
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>₹ {cartData.total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>
                  ₹{cartData.total === 0 ? "0" : "70"}
                </SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>
                  ₹ {cartData.total > 200 ? "- 100" : "0"}
                </SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>
                  ₹{cartData.total === 0 ? "0" : cartData.total - 100 + 70}
                </SummaryItemPrice>
              </SummaryItem>
              <StripeCheckout
                name="kishan"
                image="https://i1.sndcdn.com/artworks-k9ZXRI4Cdf8Ts8h3-Prne8Q-t500x500.jpg"
                billingAddress
                shippingAddress
                description={`your total is ₹${cartData.total - 100 + 70}`}
                amount={cartData.total}
                token={onToken}
                stripeKey={STRIPE_PUBLIC_KEY}
                currency="USD"
              >
                <Button>CHECKOUT NOW</Button>
              </StripeCheckout>
            </Summary>
          </Bottom>
        </Wrapper>
      ) : (
        <Link to={"/login"}>
          <LoginText>Please login</LoginText>
        </Link>
      )}
      <Footer />
    </Container>
  );
};

export default Cart;
