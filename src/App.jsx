import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "./App.css";
import Titular from "./components/Titular";
import "bootstrap/dist/css/bootstrap.min.css";
import Video from "./components/Video";
import Card from "./components/Card";
import BotonAcceder from "./components/BotonAcceder";
import CardTwo from "./components/CardTwo";
import SubTitular from "./components/SubTitular";
import CardBeneficios from "./components/CardBeneficios";
import Oferta from "./components/Oferta";
import BotonWsp from "./components/BotonWsp";
import Dudas from "./components/Dudas";
import Preguntas from "./components/Preguntas";
import CierreVenta from "./components/CierreVenta";
import Precio from "./components/Precio";
function App() {
  return (
    <>
      <Menu></Menu>
      <section className="mainSection">
        <Titular></Titular>
        <Video />
        <Card></Card>

        <BotonAcceder></BotonAcceder>
        <CardTwo></CardTwo>
        <SubTitular></SubTitular>
        <CardBeneficios></CardBeneficios>
        <BotonAcceder></BotonAcceder>
        <Oferta></Oferta>
        <Preguntas></Preguntas>
        <BotonWsp></BotonWsp>
        <CierreVenta></CierreVenta>
        <Precio></Precio>
        <Dudas></Dudas>
      </section>
      <Footer></Footer>
    </>
  );
}
export default App;
