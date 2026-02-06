const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const bgVideo = document.getElementById("bgVideo");
const bgImage = document.getElementById("bgImage");

const mainText = document.getElementById("mainText");
const questionText = document.getElementById("questionText");
const introTexts = document.querySelectorAll(".introText");

const sadMusic = document.getElementById("sadMusic");
const happyMusic = document.getElementById("happyMusic");

let musicStarted = false;
let accepted = false;


document.body.addEventListener(
  "click",
  () => {
    if (!musicStarted && !accepted) {
      sadMusic.play().catch(() => {});
      musicStarted = true;
    }
  },
  { once: true }
);

/* Move NO button randomly */
function moveNoButton() {
  const padding = 20;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

noBtn.addEventListener("click", moveNoButton);

/* YES button logic */
yesBtn.addEventListener("click", () => {
  accepted = true; // 👈 IMPORTANT

  // Stop sad music safely
  sadMusic.pause();
  sadMusic.currentTime = 0;

  // Start happy music
  happyMusic.play().catch(() => {});

  // Change background
  bgVideo.style.display = "none";
  bgImage.style.display = "block";

  // Change text
  mainText.textContent = "Wallah!!!";
  questionText.textContent = "";

  // Hide paragraphs
  document.querySelectorAll(".introText").forEach(p => {
    p.style.display = "none";
  });

  // Hide buttons
  document.querySelector(".buttons").style.display = "none";
});
