import imagen from"../assets/garantia.webp"
const Dudas = () => {
    return(
<>
<p className="container h2 mt-5">Creo firmemente en nuestra capacidad para ayudarte y respaldamos esa confianza con una garantía de devolución del dinero del 100%</p>
<section className="d-flex justify-content-center mt-5">
<div className="container dudas">
<img src={imagen} alt="FGarantia del 100% del dinero" width={200} />
<h4 className="h2 text-warning">Garantia de Satisfaccion</h4>
<p className="h4 container text-center">Si por alguna razón no te sentís cómodo ni satisfecho con el contenido, podés cancelar tu compra en cualquier momento,
y te devolveremos el 100% de tu dinero.</p>
</div>
</section>

</>
    );
};

export default Dudas;
