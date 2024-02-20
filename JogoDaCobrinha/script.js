const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  console.log("loop");

  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", ""); // Remove "px" from the bottom value

  console.log(pipePosition);

  if (pipePosition == 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.animation = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.animation = `${marioPosition}px`;

    mario.src = "./game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    clearInterval(loop); // Correct reference to the interval variable
  }
}, 10);

document.addEventListener("keydown", jump);
