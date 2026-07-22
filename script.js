// ===========================
// OBSERVASI PENANAMAN TANAMAN
// script.js
// ===========================

const slides = document.querySelectorAll(".slide");
const progressBar = document.getElementById("progressBar");
const pageNumber = document.getElementById("pageNumber");

let currentSlide = 0;

// Menampilkan slide
function showSlide(index){

    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

    // Update nomor halaman
    pageNumber.innerHTML = `${index + 1} / ${slides.length}`;

    // Update progress bar
    let progress = ((index + 1) / slides.length) * 100;
    progressBar.style.width = progress + "%";
}

// Tombol selanjutnya
function nextSlide(){

    if(currentSlide < slides.length - 1){
        currentSlide++;
        showSlide(currentSlide);
    }

}

// Tombol sebelumnya
function prevSlide(){

    if(currentSlide > 0){
        currentSlide--;
        showSlide(currentSlide);
    }

}

// Keyboard Laptop
document.addEventListener("keydown",(e)=>{

    if(e.key === "ArrowRight"){
        nextSlide();
    }

    if(e.key === "ArrowLeft"){
        prevSlide();
    }

});

// Swipe HP
let startX = 0;

document.addEventListener("touchstart",(e)=>{
    startX = e.touches[0].clientX;
});

document.addEventListener("touchend",(e)=>{

    let endX = e.changedTouches[0].clientX;

    if(startX - endX > 80){
        nextSlide();
    }

    if(endX - startX > 80){
        prevSlide();
    }

});

// Tampilkan slide pertama
showSlide(currentSlide);