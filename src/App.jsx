import Menu from "./components/Menu"
import Footer from "./components/Footer"
import "./App.css";
import Titular from "./components/Titular";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Video from "./components/video";
function App() {
  return (
    <>
      <Menu></Menu>
      <Container className="mainSection d-flex flex-column align-items-center">
      <Titular></Titular>
    
      </Container>
      <Video></Video>
      <Footer></Footer>
    </>
  );
}
export default App;
