import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../assets/testimonios/1.jpeg";
import Dos from "../assets/testimonios/2.jpeg";
import Tres from "../assets/testimonios/3.jpeg";
import Cuatro from "../assets/testimonios/4.jpeg";
import Cinco from "../assets/testimonios/5.jpeg";
import Seis from "../assets/testimonios/6.jpeg";
import Siete from "../assets/testimonios/7.jpeg";
import Ocho from "../assets/testimonios/8.jpeg";
import Nueve from "../assets/testimonios/9.jpeg";
import Dies from "../assets/testimonios/10.jpeg";
import Once from "../assets/testimonios/11.jpeg";
import Doce from "../assets/testimonios/12.jpeg";

function CarouselFadeExample() {
  return (
    <>
    <section className="bg-dark">
        <p className="h1 text-center py-4">Algunos de nuestros alumnos</p>
    <div className="Ajustar d-flex justify-content-center container">
        <Carousel fade className="d-flex justify-content-center">
          <Carousel.Item  className="d-flex justify-content-center">
            <img src={ExampleCarouselImage} alt="testimonio" className="Ajustar" />
          </Carousel.Item>

          <Carousel.Item  className="d-flex justify-content-center pb-5">
            <img src={Dos} alt="testimonio dos"  className="Ajustar"/>
          </Carousel.Item>

          <Carousel.Item className="d-flex justify-content-center pb-3">
            <img src={Tres} alt="testimonio Tres"  className="Ajustar"/>
          </Carousel.Item>
          <Carousel.Item className="d-flex justify-content-center pb-3">
            <img src={Cuatro} alt="testimonio cuatro"  className="Ajustar"/>
          </Carousel.Item>
          <Carousel.Item className="d-flex justify-content-center pb-3">
            <img src={Cinco} alt="testimonio cinco"  className="Ajustar"/>
          </Carousel.Item>
          <Carousel.Item className="d-flex justify-content-center">
            <img src={Seis} alt="testimonio seis"  className="Ajustar"/>
          </Carousel.Item>
          <Carousel.Item className="d-flex justify-content-center">
            <img src={Siete} alt="testimonio seis"  className="Ajustar"/>
          </Carousel.Item>
          <Carousel.Item className="d-flex justify-content-center">
            <img src={Ocho} alt="testimonio seis"  className="Ajustar"/>
          </Carousel.Item>
          <Carousel.Item className="d-flex justify-content-center">
            <img src={Nueve} alt="testimonio seis"  className="Ajustar"/>
          </Carousel.Item>
          <Carousel.Item className="d-flex justify-content-center">
            <img src={Dies} alt="testimonio seis"  className="Ajustar"/>
          </Carousel.Item>
          <Carousel.Item className="d-flex justify-content-center">
            <img src={Once} alt="testimonio seis"  className="Ajustar"/>
          </Carousel.Item>
          <Carousel.Item className="d-flex justify-content-center">
            <img src={Doce} alt="testimonio seis"  className="Ajustar"/>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
     
    </>
  );
}

export default CarouselFadeExample;
