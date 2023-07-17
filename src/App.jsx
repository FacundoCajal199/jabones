import Menu from "./components/Menu"
import "./App.css";
import Titular from "./components/Titular";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer";
import { Container } from "react-bootstrap";
import VideoPlayer from "./components/video";
function App() {
  return (
    <>
      <Menu></Menu>
      <Container className="mainSection d-flex flex-column align-items-center">
      <Titular></Titular>
      </Container>
    <VideoPlayer></VideoPlayer>
      <Footer></Footer>
    </>
  );
}
export default App;
