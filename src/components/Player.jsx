const Player = () => {
  const embedCode =
    '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/846493116?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="0505"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>';

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

export default Player;
