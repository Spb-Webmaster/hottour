// init Swiper:
import Swiper from "swiper";
import {Navigation, Pagination} from "swiper/modules";

new Swiper('.mainswiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// init swiper_researches:
new Swiper('.swiper_hottours', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next-swiper_hottours",
        prevEl: ".swiper-button-prev-swiper_hottours",
    },
    breakpoints: {
        // mobile + tablet - 320-990
        320: {
            slidesPerView: 1
        },
        568: {
            slidesPerView: 2
        },
        742: {
            slidesPerView: 3
        },
        // desktop >= 991
        991: {
            slidesPerView: "auto",
            loop: true,

        }
    }
});

// init swiper_expertise:
new Swiper('.swiper_populars', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next-swiper_populars",
        prevEl: ".swiper-button-prev-swiper_populars",
    },
    breakpoints: {
        // mobile + tablet - 320-990
        320: {
            slidesPerView: 1
        },
        568: {
            slidesPerView: 2
        },
        742: {
            slidesPerView: 3
        },
        // desktop >= 991
        991: {
            slidesPerView: 4,
            loop: true,

        }
    }
});





// init swiper_researches:
new Swiper('.swiper_responce', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next-swiper_responce",
        prevEl: ".swiper-button-prev-swiper_responce",
    },
    breakpoints: {
        // mobile + tablet - 320-990
        320: {
            slidesPerView: 1
        },
        568: {
            slidesPerView: 2
        },
        742: {
            slidesPerView: 3
        },
        // desktop >= 991
        991: {
            slidesPerView: "auto",
            loop: true,

        }
    }
});


//
new Swiper('.swiper_banner', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next-swiper_banner",
        prevEl: ".swiper-button-prev-swiper_banner",
    },
    breakpoints: {
        // mobile + tablet - 320-990
        320: {
            slidesPerView: 1
        },
        568: {
            slidesPerView: 1
        },
        742: {
            slidesPerView: 1,

        },
        // desktop >= 991
        991: {

            slidesPerView: 1,
            loop: true,

        }
    }
});
