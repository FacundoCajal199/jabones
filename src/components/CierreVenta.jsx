import imagen from "../assets/acceso.png"
import { CiLocationArrow1 } from "react-icons/ci";
const CierreVenta = () => {
  return(
    <> 
    <article className="d-flex justify-content-center mt-5">
    <div className=" color">
   <img src={imagen} alt="mockup"  className="imagen"/>
    </div>
    </article>
    <article className="d-flex justify-content-center mt-5">
    <div className="row container">
<div className="col-md-6 container mt-3">
    <p className="h5"> <CiLocationArrow1></CiLocationArrow1> Descubre el poder de nuestra exclusiva lista de proveedores</p>
    <p></p>
</div>
<div className="col-md-6 container mt-3">
    <p className="h5"> <CiLocationArrow1></CiLocationArrow1> Simplifica tus cálculos de costos y se mas eficiente, obten: Precisión, exactitud y un análisis detallado</p>
</div>
<div className="col-md-6 container mt-3">
    <p className="h5"> <CiLocationArrow1></CiLocationArrow1> Ebook +30 recetas
Descubre una exquisita colección de recetas detalladas, cuidadosamente seleccionadas por nuestros expertos en jabonería artesanal</p>
    
</div>
<div className="col-md-6 container mt-3">
    <p className="h5"><CiLocationArrow1></CiLocationArrow1> Accede a un grupo de soporte por Facebook exclusivo para nuestros valiosos alumnos</p>
    
</div>
   </div>
    </article>
    </>
  );
};
export default CierreVenta;
