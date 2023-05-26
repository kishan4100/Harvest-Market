import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const Wrapper = styled.div`
  position: relative;
  height: 70vh;
  display: flex;
  width: 100%;
  border-radius: 50px;
`;
const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 50px;
`;
const Image = styled.img`
  width: 30vw;
  height: 100%;
  border-radius: 50px;
  object-fit: fit;
`;
const InfoCategory = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;
const Title = styled.h1`
  color: black;
  font-weight: 900;
  margin: 20px 0px;
  font-size: 2.7rem;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 2rem;
  font-weight: 500;
  background-color: #18e615;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  color: black;
`;

function Category({ item }) {
  console.log(item.category);
  return (
    <Link to={`/products/${item.category}`}>
      <Container>
        <Wrapper id={item.id}>
          <ImageContainer>
            <Image src={item.img} />
          </ImageContainer>
          <InfoCategory>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
          </InfoCategory>
        </Wrapper>
      </Container>
    </Link>
  );
}

export default Category;
