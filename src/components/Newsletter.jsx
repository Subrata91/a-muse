import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-botton: 20px;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
`;

const Description = styled.div`
  font-size: 24px;
  font-weight: 300px;
  margin-bottom: 20px;
  font-family: "Source Sans Pro", sans-serif;
  ${mobile({ textAlign: "center" })};
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })};
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #edb525;
  color: black;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates on your favourite products!</Description>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;