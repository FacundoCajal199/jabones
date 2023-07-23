import img from "../assets/100usd.png"
const Precio = ()=>{
return(
<>
<div className="d-flex flex-column align-items-center mt-5">
    <img src={img} alt="precios" className="ajustarPrecio"/>
    <button className="boton">Acceder al entrenamiento </button>
</div>
</>
);
}
export default Precio