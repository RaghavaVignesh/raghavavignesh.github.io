const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const rag1 = document.querySelector(".rag1");
const rag2 = document.querySelector(".rag2");
const rag3 = document.querySelector(".rag3");
const loveMessage = document.querySelector(".love-message");
const dressDetails = document.querySelector(".dress-details");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const nolovebtn = document.querySelector(".no-love-btn");
const yeslovebtn = document.querySelector(".yes-love-btn");
const nextdressbtn = document.querySelector(".next-dress-btn");

let clickCount = 0;

yeslovebtn.addEventListener("click", () => {
 if (clickCount === 0) {
    rag1.innerHTML = "Since u accepted im ur dudu here u go A Special Gift for You";
    rag2.innerHTML = "Inside this package is a dress that I handpicked for you with all the love in my heart. It might not be the only dress I considered, but it's the one I thought you'd love instantly. Some others were amazing too, but they wouldn't have made it in time for our special day.If it's not exactly what you had in mind or if the size isn't perfect, please don't hesitate to tell me. I'd be more than happy to help you exchange it for something that suits you better. I just can't wait to see how beautiful youll look in it on our date Much love. ❤️";
    rag3.innerHTML = "";
    gif.src =
    "https://media.giphy.com/media/g65pXJI2VRI1yXI3H7/giphy.gif";
    yeslovebtn.innerHTML = "Next";
    nolovebtn.innerHTML = "U cant touch me bubu hehehe";
    clickCount++;
 } else if (clickCount === 1) {
    rag1.innerHTML = "So Will you go out with me on a date bubu?";
    rag2.innerHTML = ""
    gif.src =
    "https://media.giphy.com/media/FTGah7Mx3ss04PcasF/giphy.gif";
    yeslovebtn.innerHTML = "YES";
    nolovebtn.innerHTML = "NO";
    clickCount++;
 } else {
    rag1.innerHTML = "Yay, see you on the 2nd of Dec,wear the outfit thats inside the package i gave you!";
    rag2.innerHTML = ""
    gif.src =
    "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
    yeslovebtn.innerHTML = "";
    nolovebtn.innerHTML = "";
 }
});


nolovebtn.addEventListener("mouseover", () => {
  const nolovebtnRect = nolovebtn.getBoundingClientRect();
  const maxX = window.innerWidth - nolovebtnRect.width;
  const maxY = window.innerHeight - nolovebtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  nolovebtn.style.left = randomX + "px";
  nolovebtn.style.top = randomY + "px";
});



