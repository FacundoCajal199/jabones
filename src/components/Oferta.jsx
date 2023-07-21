import icono from "../assets/check.png";
const Oferta = () => {
  return (
    <>
      <h3 className="container my-5">
        Aprenderás los secretos para obtener productos de calidad profesional.
        Además, explorarás diversas opciones de fragancias, colores y
        presentaciones, permitiéndote desarrollar tu propia marca y estilo.
        ¡Desata tu creatividad y aprende a crear productos de belleza únicos que
        cautiven a tus clientes!
      </h3>
      <article className="grid container">
        <div className="h5">
          <img src={icono} alt="" width={50} /> Podrás elaborar tus propios
          jabones artesanales en casa desde cero.
        </div>
        <div className="h5">
          <img src={icono} alt="" width={50} />
          Lograrás personalizar tus jabones con aromas y colorantes respetuosos
          para el medio ambiente.
        </div>
        <div className="h5">
          <img src={icono} alt="" width={50} /> Conocerás los tipos de aceites
          que debes usar en la elaboración de tus jabones y sus propiedades
        </div>
        <div className="h5">
          <img src={icono} alt="" width={50} /> aprenderas cómo utilizar
          correctamente la calculadora de saponificación y así elaborar tus
          propias fórmulas.
        </div>
        <div className="h5">
          <img src={icono} alt="" width={50} />
          Medir el PH en tus jabones.
        </div>
        <div className="h5">
          <img src={icono} alt="" width={50} />
          Elaborar tus propios aceites en casa.
        </div>
        <div className="h5">
          <img src={icono} alt="" width={50} /> no sólo aprenderás a elaborar
          jabones con la técnica de saponificación en frío sino que también
          hemos desarrollado módulos completos de Jabones con Glicerina que te
          brindarán todas las herramientas para convertirte en un experto en
          Jabones Artesanales.
        </div>
      </article>
    </>
  );
};
export default Oferta;
