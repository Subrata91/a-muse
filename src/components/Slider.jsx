import { useState } from "react";
import styled from "styled-components";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { sliderItems } from "../data.js";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })};
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.3;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #${(props) => props.bg};
`;

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 40px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 70px;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  color: #${(props) => props.color};
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 300;
  font-family: "Source Sans Pro", sans-serif;
  color: #${(props) => props.color};
  `;

const Button = styled.button`
  padding: 10px;
  font-size: 12px;
  background-color: #edb525;
  cursor: pointer;
  border-radius: 50px;
  border: 0px solid #000;
  font-family: "Montserrat", sans-serif;
  color: #${(props) => props.color};
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if(direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    }
    else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title color={item.color}>{item.title}</Title>
              <Description color={item.color}>{item.description}</Description>
              <Button>EXPLORE NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
