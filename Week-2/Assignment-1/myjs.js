const title = document.querySelector("#title-box");
const btn = document.querySelector(".btn-click");
const box = document.querySelector("#btn-box");

title.addEventListener('click' , () => {
    title.textContent = "Have a Good Time!"
})

btn.addEventListener('click' , () => {
    box.style.display = "flex";
})