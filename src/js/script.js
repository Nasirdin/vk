// Swiper slider initiation

new Swiper('.image-slider',{
    slidesPerView: 4.5,
    slidesPerGroup: 1,
    pagination : {
        el: '.swiper-pagination',
        clickable: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
    },
    centeredSlides: true,
});

new Swiper('.who-slider',{
    slidesPerView: 1,
    loop: true,
    pagination : {
        el: '.swiper-pagination',
        clickable: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
    },
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        waitForTransition: false,
    },
});

new Swiper('.less-slider',{
    slidesPerView: 4,
    slidesPerGroup: 4,
    loop: true,
    pagination : {
        el: '.swiper-pagination',
        clickable: true,
        // type: 'fraction',
        // renderFraction: function(currentClass, totalClass) {
        //     return '0<span class="'+ currentClass +'"></span>'
        // }
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
    },
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // }
});

new Swiper('.mistake-slider',{
    slidesPerView: 3,
    slidesPerGroup: 3,
    loop: true,
    pagination : {
        el: '.swiper-pagination',
        clickable: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
    },
});