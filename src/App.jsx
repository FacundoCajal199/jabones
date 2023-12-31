import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "./App.css";
import Titular from "./components/Titular";
import Player from "./components/Player"
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
import CarouselFadeExample from "./components/Dibulgacion";
import Final from "./components/Final";
function App() {
  return (
    <>
      <Menu></Menu>
      <section className="mainSection">
        <Titular></Titular>
        <Player></Player>
        <Card></Card>
        <BotonAcceder></BotonAcceder>
        <CarouselFadeExample></CarouselFadeExample>
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
        <Final></Final>
      </section>
      <Footer></Footer>
    </>
  );
}
export default App;
