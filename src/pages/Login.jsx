import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ), url("https://wallpapercave.com/wp/wc27633.jpg");

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 25%;
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #edb525;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    font-family: "Source Sans Pro", sans-serif;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOG IN</Button>
          <Link>Have you forgotten your password?</Link>
          <Link>Don't have an account? Create One.</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login;