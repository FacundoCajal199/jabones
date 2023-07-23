import img from "../assets/100usd.png"
const Precio = ()=>{
return(
<>
<div className="d-flex flex-column align-items-center mt-5" id="venta">
    <img src={img} alt="precios" className="ajustarPrecio"/>
    <a href="https://go.hotmart.com/J80241420J?ap=26df" className="boton">Acceder al entrenamiento </a>
</div>
</>
);
}
export default Precio