const Video = () => {
  const embedCode =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/t9pBaLaIE5o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'; // Coloca aquí el código de incrustación

  return (
    <section className="d-flex justify-content-center">
      <div className="video-container">
        <div dangerouslySetInnerHTML={{ __html: embedCode }} />
      </div>
    </section>
  );
};

export default Video;
