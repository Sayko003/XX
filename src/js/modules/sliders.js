// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';
import 'swiper/css/bundle';


const sliders = function(){
    const support = new Swiper('.slider-support', {
        spaceBetween: 21,
        slidesPerView: `auto`,
        direction: 'horizontal',
        loop: true,
        
        centeredSlides: true,
        modules: [Navigation],
        navigation: {
            nextEl: '.arrow-support-next',
            prevEl: '.arrow-support-prev',
        },
        breakpoints: {
            360:{
                centeredSlides: true,
            },
            768:{
                centeredSlides: false,
            }
        }
    }); 

    const organizer = new Swiper('.slider-organizer', {
        spaceBetween: 21,
        slidesPerView: `auto`,
        direction: 'horizontal',
        loop: true,
        
        centeredSlides: true,
        modules: [Navigation],
        navigation: {
            nextEl: '.arrow-organizer-next',
            prevEl: '.arrow-organizer-prev',
        },
        breakpoints: {
            360:{
                centeredSlides: true,
            },
            768:{
                centeredSlides: false,
            }
        }
    });
    
    const howWas = new Swiper('.slider-how-was', {
        spaceBetween: 21,
        slidesPerView: `auto`,
        direction: 'horizontal',
        loop: true,
        
        centeredSlides: true,
        modules: [Navigation],
        navigation: {
            nextEl: '.arrow-how-was-next',
            prevEl: '.arrow-how-was-prev',
        },
        breakpoints: {
            360:{
                centeredSlides: true,
            },
            768:{
                centeredSlides: false,
            }
        }
    }); 
    document.querySelector(`.arrow-support-next`).click();
    document.querySelector(`.arrow-organizer-next`).click();
    document.querySelector(`.arrow-how-was-next`).click();
}

export default sliders;