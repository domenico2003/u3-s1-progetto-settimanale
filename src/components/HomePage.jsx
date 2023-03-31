import { Container } from "react-bootstrap";
import HomeMain from "./secondaryComponents/main/HomeMain";
import MyFooter from "./secondaryComponents/MyFooter";
import MyNav from "./secondaryComponents/MyNav";

let HomePage = (props) => {
  return (
    <>
      <MyNav netflixLogo={props.netflixLogo} />
      <Container fluid className="bg-prova text-white px-5">
        <HomeMain />
        <MyFooter />
      </Container>
    </>
  );
};

export default HomePage;
