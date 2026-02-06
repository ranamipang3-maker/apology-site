const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mainVideo = document.getElementById("mainVideo");

function moveNoButton() {
  const padding = 20;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}


noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);


yesBtn.addEventListener("click", () => {

  mainVideo.src = "happy.mp4";
  mainVideo.load();
  mainVideo.play();


  // Optional: disable No after Yes
  noBtn.style.display = "none";
});
