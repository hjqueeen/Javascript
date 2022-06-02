// const title1 = document.getElementById("idtitle");
// const title2 = document.getElementsByClassName("classNametitle");
// const title3 = document.getElementsByTagName(h1);
// const title4 = document.querySelector(".classNametitle h1"); // class
// const title5 = document.querySelector("#idtitle h") // id
// const title6 = document.querySelectorAll(h1)
const title = document.querySelector("div.hello:first-child h1"); // id

function handleTitleClick() {
  title.classList.toggle("active");
}

// function handleTitleClick() {
//   const currentColor = title.style.color;
//   let newColor;
//   if (currentColor === "blue") {
//     newColor = "red";
//   } else {
//     newColor = "blue";
//   }
//   title.style.color = newColor;
// }

// //"mouseleave"
// //"mouseenter"="mouseover"
// function handlemouseover() {
//   title.style.color = "blue";
// }

// function handleMousleave() {
//   title.style.color = "black";
// }

// function handleWindowResize() {
//   document.body.style.backgroundColor = "yellow";
// }

// function handleWindowOffline() {
//   alert("SOS no Wifi");
// }

// function handleWindowOnline() {
//   alert("Wifi Gooood!");
// }

title.onclick = handleTitleClick; // 이렇게 사용해도 됨
// title.addEventListener("mouseover", handlemouseover);
// title.addEventListener("mouseleave", handleMousleave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);
