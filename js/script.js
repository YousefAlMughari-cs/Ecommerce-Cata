const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

const MainImg = document.getElementById("MainImg");
const smallimg = document.getElementsByClassName("small-img");

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


for (let i = 0; i < smallimg.length; i++) {
    smallimg[i].onclick = function() {
        MainImg.src = smallimg[i].src;
    };
}

