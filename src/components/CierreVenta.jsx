import imagen from "../assets/acceso.png"
import Icon from "../assets/check.png"
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
    <p className="h5"> <img src={Icon} alt="icono" width={50} /> Descubre el poder de nuestra exclusiva lista de proveedores</p>
    <p></p>
</div>
<div className="col-md-6 container mt-3">
    <p className="h5"> <img src={Icon} alt="icono" width={50} /> Simplifica tus cálculos de costos y se mas eficiente, obten: Precisión, exactitud y un análisis detallado</p>
</div>
<div className="col-md-6 container mt-3">
    <p className="h5"> <img src={Icon} alt="icono" width={50} /> Ebook +30 recetas
Descubre una exquisita colección de recetas detalladas, cuidadosamente seleccionadas por nuestros expertos en jabonería artesanal</p>
    
</div>
<div className="col-md-6 container mt-3">
    <p className="h5"><img src={Icon} alt="icono" width={50} /> Accede a un grupo de soporte por Facebook exclusivo para nuestros valiosos alumnos</p>
    
</div>
   </div>
    </article>
    </>
  );
};
export default CierreVenta;
