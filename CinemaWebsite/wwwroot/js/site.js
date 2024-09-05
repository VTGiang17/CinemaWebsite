// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll(".nav-link");
    var currentLocation = window.location.href;

    links.forEach(function (link) {
        if (link.href === currentLocation) {
            link.classList.add("active");
        }
        else {
            link.classList.remove("active");
        }
    });
});

document.addEventListener("scroll", function () {
    const header = document.querySelector('header');
    if (window.scrollY > 20) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.slider-hero', {
        // Các tùy chọn của Swiper
        direction: 'horizontal', // 'horizontal' hoặc 'vertical'
        loop: true, // Bật vòng lặp
        slidesPerView: 4, // Số lượng slide hiển thị cùng lúc
        spaceBetween: 4, // Khoảng cách giữa các slide

        autoplay: {
            delay: 3000, // Thời gian chuyển đổi giữa các slide (tính bằng ms)
            disableOnInteraction: false, // Cho phép autoplay tiếp tục sau khi người dùng tương tác
        },
        // Nếu bạn muốn thêm pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Nếu bạn muốn thêm nút điều khiển
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.detail-swiper', {
        // Các tùy chọn của Swiper
        direction: 'horizontal', // 'horizontal' hoặc 'vertical'
        slidesPerView: 1, // Số lượng slide hiển thị cùng lúc
        spaceBetween: 1, // Khoảng cách giữa các slide

        // Nếu bạn muốn thêm pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Nếu bạn muốn thêm nút điều khiển
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });
});

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-showing-movie', {
        // Các tùy chọn của Swiper
        direction: 'horizontal', // 'horizontal' hoặc 'vertical'
        slidesPerView: 4, // Số lượng slide hiển thị cùng lúc
        spaceBetween: 1, // Khoảng cách giữa các slide
        autoplay: false,
        loop: true,

     
        // Nếu bạn muốn thêm nút điều khiển
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-comingsoon-movie', {
        // Các tùy chọn của Swiper
        direction: 'horizontal', // 'horizontal' hoặc 'vertical'
        slidesPerView: 4, // Số lượng slide hiển thị cùng lúc
        spaceBetween: 1, // Khoảng cách giữa các slide
        autoplay: false,
        loop: true,

      
        // Nếu bạn muốn thêm nút điều khiển
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });
});

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.movie-cast', {
        // Các tùy chọn của Swiper
        direction: 'horizontal', // 'horizontal' hoặc 'vertical'
        slidesPerView: 4, // Số lượng slide hiển thị cùng lúc
        spaceBetween: 0, // Khoảng cách giữa các slide

        // Nếu bạn muốn thêm nút điều khiển
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});


const movie_navbar_showing = document.querySelector(".showing-movie-btn");
console.log(movie_navbar_showing);
const movie_navbar_coming = document.querySelector(".coming-movie-btn");
console.log(movie_navbar_coming);
const showing_movie = document.querySelector(".swiper-showing-movie");
console.log(showing_movie);
const coming_movie = document.querySelector(".swiper-comingsoon-movie");
console.log(coming_movie);

window.addEventListener('DOMContentLoaded', () => {
    showing_movie.style.display = "block";
    coming_movie.style.display = "none";
    movie_navbar_showing.classList.add("active");
});

movie_navbar_showing.addEventListener("click", () => {
   
        showing_movie.style.display = "block";
        coming_movie.style.display = "none";


        movie_navbar_showing.classList.add("active");
        movie_navbar_coming.classList.remove("active");

    
});


movie_navbar_coming.addEventListener("click", () => {
   
        showing_movie.style.display = "none";
        coming_movie.style.display = "block";


        movie_navbar_showing.classList.remove("active");
        movie_navbar_coming.classList.add("active");
 

});


const hero_Content = document.querySelectorAll("main .hero .hero-item");
console.log(hero_Content);
const prev = document.querySelector("main .hero .prev");
const next = document.querySelector("main .hero .next");
const thumbnail = document.querySelectorAll("main .hero .hot-movie-item");

let countItem = thumbnail.length;
let activeItem = 0;

next.onclick = function () {
    stopAutoSwitch();
    activeItem = activeItem + 1;
    if (activeItem >= countItem) {
        activeItem = 0;
    }
    showContent();
    autoSwitch();
}
prev.onclick = function () {
    stopAutoSwitch();
    activeItem = activeItem - 1;
    if (activeItem < 0) {
        activeItem = countItem - 1;
    }
    showContent();
    autoSwitch();
}
function showContent() {
    const hero_Content_Old = document.querySelector("main .hero .hero-item.active");
    const thumbnail_Old = document.querySelector("main .hero .hot-movie-item.active");
    hero_Content_Old.classList.remove("active");
    thumbnail_Old.classList.remove("active");

    hero_Content[activeItem].classList.add("active");
    thumbnail[activeItem].classList.add("active");
}

thumbnail.forEach((thumbnailItem, index) => {
    thumbnailItem.addEventListener("click", () => {
        stopAutoSwitch();
        activeItem = index;
        showContent();
        autoSwitch();
    })
})

let interval;
function autoSwitch() {
    interval = setInterval(function () {
        activeItem = activeItem + 1;
        if (activeItem >= countItem) {
            activeItem = 0;
        }
        showContent();
    }, 3000);
}
function stopAutoSwitch() {
    clearInterval(interval);
}

autoSwitch();


//login
const loginWrapper = document.querySelector(".login-wrapper");
console.log(loginWrapper);
const loginBtn = document.querySelector(".user-login");
console.log(loginBtn);
const loginForm = document.querySelector(".login-wrapper .login-form");
console.log(loginForm);
const loginQuit = document.querySelector(".login-wrapper .login-form .quit-btn ");


loginBtn.onclick = function() {
    loginWrapper.classList.add("active");
    loginForm.classList.add("active");
}
loginQuit.onclick = function () {
    loginWrapper.classList.remove("active");
    loginForm.classList.remove("active");
}
