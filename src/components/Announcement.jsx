import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: #edb525;
    color: black;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free shipping on orders above Rs. 2000.
    </Container>
  )
}

export default Announcement;