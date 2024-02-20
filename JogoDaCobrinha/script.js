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
    .bottom.replace("px" + "");
  console.log(pipePosition);

  if ((pipePosition = 120 && pipePosition > 0 && marioPosition < 80)) {
    pipe.Style.animation = "none";
    pipe.Style.animation = "${pipePosition}px";

    mario.Style.animation = "none";
    mario.Style.animation = "${marioPosition}px";

    mario.src = "./game-over.png";
    mario.Style.width = "75px";
    mario.Style.marginLeft = "50px";

    clearInterval("loop")
  }
}, 10);

document.addEventListener("keydown", jump);
