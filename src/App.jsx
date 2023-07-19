import Menu from "./components/Menu"
import Footer from "./components/Footer"
import "./App.css";
import Titular from "./components/Titular";
import "bootstrap/dist/css/bootstrap.min.css";
import Video from "./components/video";
function App() {
  return (
    <>
      <Menu></Menu>
      <section className="mainSection">
      <Titular>
      </Titular>
      <Video/>
      </section>
      
      <Footer></Footer>
    </>
  );
}
export default App;
