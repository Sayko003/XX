const fixedBuy = function(){
    if(window.innerWidth > 768){
        window.onscroll = () => {
            const div = document.querySelector(`.buy--ticket`);
            if (window.scrollY >= 1200) {
                div.classList.add('fixed');
            } else {
                div.classList.remove('fixed');
            }
        };
    }
    
}

export default fixedBuy;
