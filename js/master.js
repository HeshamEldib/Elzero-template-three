// start open menu
let menu = document.querySelector(".mega-menu");
let clickMenu = document.querySelector("header .click-menu");

clickMenu.addEventListener("click", (e) => {
    menu.classList.toggle("open-menu");
});

menu.onclick = (e) => e.stopPropagation();
document.onclick = (e) => {
    if (e.target !== clickMenu && e.target !== menu) {
        if (menu.classList.contains("open-menu")) {
                menu.classList.toggle("open-menu");
        }
    }
};
// end open menu

// start open image
let clickImg = document.querySelectorAll(".gallery .box .image img").forEach((img) => {
    img.addEventListener("click", (e) => {
        let faliter = document.createElement("div");
        faliter.classList.add("faliter");

        let content = document.createElement("div");
        content.classList.add("content-img");
        
        let images = document.createElement("img");
        images.src = img.src;
        
        let close = document.createElement("i");
        close.classList.add("fas");
        close.classList.add("fa-times");
        close.classList.add("close");

        content.appendChild(images);
        content.appendChild(close);

        document.body.appendChild(content);
        document.body.appendChild(faliter);
    });
});

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("close")) {
        e.target.parentNode.remove();
        document.querySelector(".faliter").remove();
    }
});
// end open image

// start time
let timeDay = new Date("Feb 2, 2023 23:59:59").getTime();
let counterTime = setInterval(() => {
    let dayTimeNaw = new Date().getTime();
    let timeDiff = timeDay - dayTimeNaw;
    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    document.querySelector(".events .days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".events .hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".events .minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".events .seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (timeDiff == 0) {
        clearInterval(counterTime);
    }
}, 1000);
// end time

// start skills
let section = document.querySelector(".skills");
let bar = document.querySelectorAll(".skills .box .line span");
window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 400) {
        bar.forEach((e) => {
            e.style.width = e.dataset.width;
        });
    }
};
// end skills

// start up numbers
let sectionTwo = document.querySelector(".stats");
let numbers = document.querySelectorAll(".stats .boxs .box .info span");
let start = false;

window.onscroll = () => {
    if (window.scrollY >= sectionTwo.offsetTop - 100) {
        if (!start) {
            numbers.forEach((e) => {
                upNumber(e);
            });
        }
        start = true;
    }
};

function upNumber(e) {
    let goal = e.dataset.num;
    let counter = setInterval(() => {
        e.textContent++;
        if (e.textContent == goal) {
            clearInterval(counter);
        }
    }, 2000 / goal);;
};
// end up numbers



function c (element) {
    console.log(element);
};