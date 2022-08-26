import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })};
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
    font-family: "Rockwell Nova", sans-serif;
    font-weight: 300;
`;

const Description = styled.p`
    font-family: "Source Sans Pro", sans-serif;
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })};
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    font-family: "Source Sans Pro", sans-serif;
`;

const Payment = styled.img`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })};
`;

const Title = styled.h3`
    font-family: "Bebas Neue", sans-serif;
    letter-spacing: 1px;
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    font-family: "Source Sans Pro", sans-serif;
    width: 50%;
    margin-bottom: 10px;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>a-muse</Logo>
            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate fugiat autem provident earum, maiores omnis nulla voluptatem quam quisquam voluptates iusto architecto sapiente harum fuga iste beatae maxime magni. Accusamus.
            </Description>
            <SocialContainer>
                <SocialIcon color="4267B2">
                    <FacebookIcon />
                </SocialIcon>
                <SocialIcon color="833AB4">
                    <InstagramIcon />
                </SocialIcon>
                <SocialIcon color="ff4500">
                    <RedditIcon />
                </SocialIcon>
                <SocialIcon color="E60023">
                    <PinterestIcon />
                </SocialIcon>
            </SocialContainer>
            <p style={{fontFamily: "'Source Sans Pro', sans-serif"}}>Made with ❤️ by Subrata.</p>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Guitars</ListItem>
                <ListItem>Ukeleles</ListItem>
                <ListItem>Drums</ListItem>
                <ListItem>Keyboards</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms & Conditions</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <LocationOnIcon style={{marginRight:"10px"}}/>
                Shop No. 25, 3rd Floor, Axis Mall, New Town Rajarhat, Kolkata - 700156
            </ContactItem>
            <ContactItem>
                <CallIcon style={{marginRight:"10px"}} />
                Call us at +91 9748132338 or +91 8697229503
            </ContactItem>
            <ContactItem>
                <EmailIcon style={{marginRight:"10px"}} />
                Email us at shopping@amuse.com
            </ContactItem>
            <Payment src="https://t4.ftcdn.net/jpg/04/55/10/23/240_F_455102361_RsJAeKOVlrrbvLLRtrFQ3K6VAuDg0b4b.jpg" />
        </Right>
    </Container>
  )
}

export default Footer