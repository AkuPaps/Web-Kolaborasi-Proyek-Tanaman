/*=========================================
        WEBSITE HASIL OBSERVASI
        SCRIPT.JS
=========================================*/


//=========================================
// TAHUN OTOMATIS FOOTER
//=========================================

const year = document.getElementById("year");

if(year){

    year.textContent = new Date().getFullYear();

}



//=========================================
// ANIMASI SAAT SCROLL
//=========================================


const revealElements = document.querySelectorAll(
    ".card, .member-card, .equipment-card, .benefit-card, .gallery-item, .timeline-content, .status-card"
);


function reveal(){

    const windowHeight = window.innerHeight;


    revealElements.forEach(element => {


        const position = element.getBoundingClientRect().top;


        if(position < windowHeight - 100){

            element.classList.add("show");

        }


    });

}


window.addEventListener("scroll", reveal);

reveal();



//=========================================
// SMOOTH SCROLL BUTTON
//=========================================


const scrollButton = document.querySelector(".scroll-down");


if(scrollButton){

    scrollButton.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector("#preview")
        .scrollIntoView({

            behavior:"smooth"

        });

    });

}

/*=========================================
              QUOTE ACAK
=========================================*/


const quoteText = document.getElementById("quote-text");

const quotes = [

    "Menanam hari ini, memanen harapan di masa depan.",

    "Tanaman yang dirawat dengan sabar akan memberikan hasil terbaik.",

    "Kecil langkahnya, besar manfaatnya bagi lingkungan.",

    "Belajar dari alam, tumbuh bersama pengalaman.",

    "Kerja sama membuat proyek sederhana menjadi luar biasa."

];


const quoteButton = document.getElementById("quote-button");


if(quoteText && quoteButton){


    quoteButton.addEventListener("click", function(){


        const randomQuote = 
        quotes[Math.floor(Math.random()*quotes.length)];


        quoteText.textContent = randomQuote;


    });


}




//=========================================
// NAVBAR SAAT SCROLL
//=========================================


const header = document.querySelector("header");


window.addEventListener("scroll", function(){


    if(header){


        if(window.scrollY > 50){


            header.classList.add("sticky");


        }

        else{


            header.classList.remove("sticky");


        }


    }


});




//=========================================
// COUNTER STATISTIK
//=========================================


const counters = document.querySelectorAll(".counter");


counters.forEach(counter => {


    counter.innerText = "0";


    const updateCounter = () => {


        const target = +counter.getAttribute("data-target");


        const current = +counter.innerText;


        const increment = target / 100;



        if(current < target){


            counter.innerText = Math.ceil(
                current + increment
            );


            setTimeout(updateCounter,20);


        }


        else{


            counter.innerText = target;


        }


    };


    updateCounter();


});

/*=========================================
            LOADING SCREEN
=========================================*/


const loader = document.querySelector(".loader");


window.addEventListener("load", function(){


    if(loader){


        setTimeout(()=>{


            loader.classList.add("hide");


        },1000);


    }


});




//=========================================
// TANGGAL OTOMATIS
//=========================================


const dateElement = document.getElementById("date");


if(dateElement){


    const today = new Date();


    const options = {

        weekday:"long",

        year:"numeric",

        month:"long",

        day:"numeric"

    };


    dateElement.textContent = 

    today.toLocaleDateString(
        "id-ID",
        options
    );


}




//=========================================
// EFEK BUTTON CLICK
//=========================================


const buttons = document.querySelectorAll("a, button");


buttons.forEach(button=>{


    button.addEventListener("click",()=>{


        button.style.transform="scale(.95)";


        setTimeout(()=>{


            button.style.transform="";


        },150);


    });


});




//=========================================
// WELCOME MESSAGE
//=========================================


console.log(

"🌱 Website Hasil Observasi Proyek Kolaborasi Muncang X TE 3"

);


console.log(

"SMK Negeri 2 Purwokerto"

);

/*=========================================
          MOBILE MENU
=========================================*/


const menuButton = document.querySelector(".menu-toggle");

const navMenu = document.querySelector("nav");


if(menuButton && navMenu){


    menuButton.addEventListener("click",()=>{


        navMenu.classList.toggle("active");


        menuButton.classList.toggle("open");


    });


}



//=========================================
// MENU CLOSE SAAT KLIK LINK
//=========================================


const navLinks = document.querySelectorAll("nav a");


navLinks.forEach(link=>{


    link.addEventListener("click",()=>{


        if(navMenu){


            navMenu.classList.remove("active");


        }


    });


});




//=========================================
// ACTIVE PAGE MENU
//=========================================


const currentPage = 
window.location.pathname.split("/").pop();



navLinks.forEach(link=>{


    const linkPage =
    link.getAttribute("href");



    if(linkPage === currentPage){


        link.classList.add("active");


    }


});




//=========================================
// GAMBAR ERROR HANDLER
//=========================================


const images = document.querySelectorAll("img");


images.forEach(img=>{


    img.addEventListener("error",()=>{


        img.src="assets/default.jpg";


    });


});




//=========================================
// WEBSITE READY
//=========================================


document.addEventListener(
"DOMContentLoaded",
()=>{


console.log(
"🌱 Website Observasi Muncang berhasil dimuat"
);


});