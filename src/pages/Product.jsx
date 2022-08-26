import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection:"column" })};
`;

const ImageContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })};
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })};
`;

const Title = styled.h1`
    font-weight: 400;
    font-family: "Bebas Neue", sans-serif;
    letter-spacing: 1px;
`;

const Description = styled.p`
    margin: 20px 0px;
    font-family: "Source Sans Pro", sans-serif;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
    font-family: "Source Sans Pro", sans-serif;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })};
`;

const Filter = styled.div`
    display: flex;
    align-items: center;

`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
    font-family: "Source Sans Pro", sans-serif;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterType = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterTypeOption = styled.div`
    font-family: "Source Sans Pro", sans-serif;
`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })};
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
    font-family: "Source Sans Pro", sans-serif;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    font-family: "Source Sans Pro", sans-serif;
    &:hover {
        background-color: teal;
        border: none;
        color: white;
    }
`;

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
                <Image src="https://m.media-amazon.com/images/I/31sTtFTnCSL._SL500_.jpg"/>
            </ImageContainer>
            <InfoContainer>
                <Title>Vault Electro-Acoustic Guitar</Title>
                <Description>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni id, veniam culpa dolor quos est ratione mollitia ipsa sint debitis incidunt qui quis libero atque obcaecati, repellat distinctio ex suscipit.</Description>
                <Price>Rs. 8,500</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="000"/>
                        <FilterColor color="b74b28"/>
                        <FilterColor color="964B00"/>
                        <FilterColor color="E8BEAC"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Type</FilterTitle>
                        <FilterType>
                            <FilterTypeOption>Single</FilterTypeOption>
                            <FilterTypeOption>Bundle</FilterTypeOption>
                        </FilterType>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                   <AmountContainer>
                        <RemoveIcon />
                        <Amount>1</Amount>
                        <AddIcon />
                   </AmountContainer>
                   <Button>
                        ADD TO CART
                   </Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product