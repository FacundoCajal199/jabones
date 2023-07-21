import imagen1 from "../assets/1.png"
import imagen3 from "../assets/variedad.png"
import imagen4 from "../assets/costos.png"
import imagen5 from "../assets/ultima.png"
import imagen2 from "../assets/2.png"

const Item =()=>{
return(
<>
<div className="d-flex flex-column align-items-center">
   
<img src={imagen1} alt="logo1" width={150}/>
<span>Mercado en crecimiento</span>
<p className="container">Los jabones son un producto esencial en la vida cotidiana de las personas, y la demanda de productos de cuidado personal y limpieza ha aumentado exponencialmente en los últimos tiempos. La necesidad de productos de cuidado personal y limpieza es constante y no se ve afectada por las condiciones económicas o las tendencias de consumo.Son un producto básico en el hogar lo convierte en un negocio estable y rentable.</p>
</div>
<div className="d-flex flex-column align-items-center ">
   
<img src={imagen2} alt="logo1" width={150}/>
<span>Tendencia hacia lo natural</span>
<p className="container">Cada vez más personas buscan productos naturales y orgánicos para el cuidado de su piel y su salud en general. Los jabones artesanales y naturales son una opción popular, ya que ofrecen ingredientes de calidad, suaves con la piel y libres de químicos nocivos. Si ofreces jabones naturales, puedes capitalizar esta tendencia en aumento y atraer a un mercado cada vez más consciente de la salud y el medio ambiente.</p>
</div>
<div className="d-flex flex-column align-items-center ">
   
<img src={imagen3} alt="logo1" width={150}/>
<span>Diversidad de productos</span>
<p className="container">Los jabones no se limitan a un solo tipo o variedad. Puedes ofrecer una amplia gama de opciones para satisfacer las necesidades y preferencias de diferentes clientes.
Puedes ofrecer jabones para el cuerpo, el rostro, para bebés, para pieles sensibles, acne,en fin cualquiera que satisfaga las necesidades del cliente . Además, puedes experimentar con diferentes aromas, colores y texturas para crear productos únicos y atractivos.</p>
</div>
<div className="d-flex flex-column align-items-center ">
   
<img src={imagen4} alt="logo1" width={150}/>
<span>Bajo costo de producción</span>
<p className="container">El proceso de fabricación de jabones es relativamente sencillo y no requiere una gran inversión inicial. Los ingredientes son accesibles y fáciles de obtener, lo que te permite acceder a márgenes de beneficio mucho mas grandes.</p>
</div>
<div className="d-flex flex-column align-items-center ">
   
<img src={imagen5} alt="logo1" width={150}/>
<span>Canales de venta versátiles</span>
<p className="container">se pueden vender en una amplia variedad de canales, desde tu propia tienda en línea, hasta mercados locales, ferias artesanales, tiendas de productos naturales, spas, hoteles, entre otros. Esto te brinda la flexibilidad de adaptar tu estrategia de ventas y llegar a diferentes audiencias para maximizar tus oportunidades de venta.

</p>
</div>

</>
);
}
export default Item;