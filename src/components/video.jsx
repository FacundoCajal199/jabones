const VideoPlayer = () => {
  const embedCode =
    '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/845778096?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="0505"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'; // Coloca aquí el código de incrustación

  return (
    <section className="d-flex justify-content-center">
      <div className="video-container">
        <div dangerouslySetInnerHTML={{ __html: embedCode }} />
      </div>
    </section>
  );
};

export default VideoPlayer;
