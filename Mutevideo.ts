window.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("video") as HTMLVideoElement;
  const muteButton = document.getElementById("muteButton") as HTMLAnchorElement;

  if (video && muteButton) {
      muteButton.addEventListener("click", () => {
          video.muted = !video.muted; 
          muteButton.textContent = video.muted ? "Reproducir" : "Silenciar";
      });
  }
});


