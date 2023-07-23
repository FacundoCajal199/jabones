const Video = () => {
  const embedCode =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/t9pBaLaIE5o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

  return (
    <>
      <section className="d-flex justify-content-center pt-5">
        <div className="video-container">
          <div dangerouslySetInnerHTML={{ __html: embedCode }} />
        </div>
      </section>

      <article className="container">
        <p className="h2 my-4">
          Tu familia es lo más importante en tu vida, y sé que quieres lo mejor
          para ellos
        </p>
        <p className="h3 my-4">
          Sueñas con brindarles un hogar cálido y seguro, donde puedan crecer y
          prosperar. Anhelas la tranquilidad de saber que tus seres queridos
          tienen acceso a una atención médica de primera clase y a todas las
          necesidades básicas cubiertas. Deseas que tu familia tenga una vida
          llena de oportunidades, sin limitaciones financieras.
        </p>
        <p className="h3 my-4">
          Ofrecerles la libertad de elegir su propio camino, sin preocuparse por
          las dificultades económicas.
        </p>
        <p className="h2 mt-4 m6">
          Quiero ayudarte a que lleves tu vida a otro nivel o
          <b className="text-info">
            como minimo tengas una fuente de ingresos extra trabajando con
            Cosmetica Artesanal
          </b>
        </p>
      </article>
    </>
  );
};

export default Video;
