import Menu from "./components/Menu"
import Footer from "./components/Footer"
import "./App.css";
import Titular from "./components/Titular";
import "bootstrap/dist/css/bootstrap.min.css";
import Video from "./components/video";
import Card from "./components/Cards";
import BotonAcceder from "./components/BotonAcceder";
import CardTwo from "./components/CardTwo";
import SubTitular from "./components/SubTitular";
import CardBeneficios from "./components/CardBeneficios";
import Oferta from "./components/oferta";
function App() {
  return (
    <>
      <Menu></Menu>
      <section className="mainSection">
      <Titular>
      </Titular>
      <Video/>
      <Card></Card>
      </section>
      <BotonAcceder></BotonAcceder>
      <CardTwo></CardTwo>
      <SubTitular></SubTitular>
      <CardBeneficios></CardBeneficios>
      <Oferta></Oferta>
      <Footer></Footer>
    </>
  );
}
export default App;
