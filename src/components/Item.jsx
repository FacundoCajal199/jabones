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
<span className="h5">Mercado en crecimiento</span>
<p className="container h6">Los jabones son un producto esencial en la vida cotidiana de las personas, y la demanda de productos de cuidado personal y limpieza ha aumentado exponencialmente en los últimos tiempos. <b className="text-yelouw">La necesidad de productos de cuidado personal y limpieza es constante y no se ve afectada por las condiciones económicas.</b></p>
</div>
<div className="d-flex flex-column align-items-center ">
   
<img src={imagen2} alt="logo1" width={150}/>
<span className="h5">Tendencia hacia lo natural</span>
<p className="container h6">Cada vez más personas buscan productos naturales y orgánicos para el cuidado de su piel y su salud en general.<b className="text-green">Los jabones artesanales o naturales son una exelente opcion, ya que ofrecen ingredientes de calidad, suaves con la piel y libres de químicos nocivos.</b> </p>
</div>
<div className="d-flex flex-column align-items-center ">
   
<img src={imagen3} alt="logo1" width={150}/>
<span className="h5">Diversidad de productos</span>
<p className="container h6">Los jabones no se limitan a un solo tipo o variedad.<b className="text-yelouw">Puedes ofrecer una amplia gama de opciones para satisfacer las necesidades y preferencias de diferentes clientes.</b> 
Puedes ofrecer jabones para el cuerpo, el rostro, para bebés, para pieles sensibles, acne,en fin cualquiera que satisfaga las necesidades del cliente . Además, puedes experimentar con diferentes aromas, colores y texturas para crear productos únicos y atractivos.</p>
</div>
<div className="d-flex flex-column align-items-center ">
   
<img src={imagen4} alt="logo1" width={150}/>
<span className="h5">Bajo costo de producción</span>
<p className="container h6">El proceso de fabricación de jabones es relativamente sencillo y no requiere una gran inversión inicial. Los ingredientes son accesibles y fáciles de obtener, lo que te <b className="text-yelouw">permite acceder a márgenes de beneficio mucho mas grandes.</b></p>
</div>
<div className="d-flex flex-column align-items-center ">
   
<img src={imagen5} alt="logo1" width={150}/>
<span className="h5">Canales de venta versátiles</span>
<p className="container h6">se pueden vender en una amplia variedad de canales,<b className="text-green">desde tu propia tienda en línea, hasta mercados locales, ferias artesanales, tiendas de productos naturales, spas, hoteles, entre otros</b> Esto te brinda la flexibilidad de adaptar tu estrategia de ventas y <b className="text-green">llegar a diferentes audiencias para maximizar tus oportunidades de venta.
</b>
</p>
</div>

</>
);
}
export default Item;