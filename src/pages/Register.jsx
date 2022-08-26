import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://c4.wallpaperflare.com/wallpaper/458/277/191/eminem-screensavers-and-backgrounds-wallpaper-preview.jpg")
      center;

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-family: "Bebas Neue", sans-serif;
  letter-spacing: 1px;
  font-size: 24px;
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  font-family: "Source Sans Pro", sans-serif;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #edb525;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="first-name" />
          <Input placeholder="last-name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating my a-muse account, I hereby give consent to the brand to
            process my personal data in accordance with the{" "}
            <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE ACCOUNT</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
