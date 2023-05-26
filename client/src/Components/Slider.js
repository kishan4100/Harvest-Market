import React, { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import styled from "styled-components";
import sliderItems from "../Data/Data.js";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100wh;
  height: 90vh;
  position: relative;
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Arrow = styled.div`
  background-color: #5c8984;
  position: absolute;
  top: 0px;
  bottom: 0px;
  margin: auto;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  border-radius: 70%;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.7;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 90vh;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slide * -100}vw);
  z-index: 1;
`;
const Slide = styled.div`
  height: 80vh;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  position: relative;
  z-index: 2;
`;
const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  z-index: 1;
`;
const Image = styled.img`
  object-fit: fill;
  height: 100%;
  width: 100%;
  padding-top: 20px;
`;
const InfoContainer = styled.div`
  flex: 1;
  color: white;
  font-weight: 500;
  padding: 50px;
  position: absolute;
  left: ${(props) => props.left}%;
  right: ${(props) => props.right}%;
  bottom: ${(props) => props.bottom}%;
  z-index: 999;
`;
const Title = styled.h1`
  font-size: 4rem;
  color: white;
  color: #${(props) => props.color};
`;
const Desc = styled.p`
  color: #${(props) => props.color};
  margin-bottom: 40px;
  letter-spacing: 3px;
  font-size: 2rem;
  font-weight: 550;
`;
const Button = styled.button`
  color: white;
  color: ${(props) => props.color};
  margin-left: ${(props) => props.lmargin};
  padding: 15px;
  font-size: 2rem;
  font-weight: 300;
  background-color: transparent;
  border: 2px solid grey;
  cursor: pointer;
`;

const Slider = () => {
  const [slide, setSlide] = useState(0);
  const handleClick = function (direction) {
    if (direction === "right") {
      setSlide(slide >= 2 ? 0 : slide + 1);
    } else {
      setSlide(slide > 0 ? slide - 1 : 2);
    }
  };
  return (
    <Container>
      <Arrow
        fontSize="large"
        direction="left"
        onClick={() => handleClick("Left")}
      >
        <ArrowLeftIcon sx={{ fontSize: 40 }} />
      </Arrow>
      <Wrapper slide={slide}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer
              left={item.left}
              right={item.right}
              bottom={item.bottom}
            >
              {console.log(item.left)}
              <Title color={item.color}>{item.title}</Title>
              <Desc color={item.dcolor}>{item.desc}</Desc>
              <Link to={"/products/all"}>
                <Button lmargin={item.lmargin} color={item.bcolor}>
                  SHOP NOW
                </Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightIcon sx={{ fontSize: 40 }} />
      </Arrow>
    </Container>
  );
};

export default Slider;
