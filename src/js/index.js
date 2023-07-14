const branchWrapperEl = document.querySelector(".branch-wrapper");
const branchElements = document.querySelectorAll(".branch");
const scrollRightBtn = document.querySelector(".scroll-right");
const scrollLeftBtn = document.querySelector(".scroll-left");
const reveaElements = document.querySelectorAll(".reveal")
const arrowElements = document.querySelectorAll(".arrow")

//Scroll horizontally
let indexCounter = 0;
function scroll(index) {
  console.log(index);
  console.table(branchElements);
  branchElements[index].scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
  console.log(index, branchElements[index]);
}

function countUp() {
  // indexCounter++;
  scroll(++indexCounter);
  console.log(indexCounter);
}

function countDown() {
  // indexCounter--;
  scroll(--indexCounter);
  console.log(indexCounter);
}

scrollRightBtn.addEventListener("click", countUp);

scrollLeftBtn.addEventListener("click", countDown);

//window.scroll(0,findPos(document.getElementById("myDiv")));
//href-#id
//element. scrollIntoView()


//Reveal elements

console.log(reveaElements)

reveaElements.forEach((reveal) => {
  reveal.addEventListener("mouseover", ()=> {
    reveal.style.transition = "color 0.2s, border, 0.2s" 
    reveal.style.color = "var(--color-dark-cyan)"
    reveal.style.border = "1px solid var(--color-baby-blue)"
  })
})
