const menu = function(){
    const burgerLinks = document.querySelectorAll(`.header--burger`),
        menuBlock = document.querySelector(`.nav`),
        closeLink = document.querySelector(`.nav--close`),
        overlayBlock = document.querySelector(`.overlay`),
        menuList = document.querySelector(`.nav--wrapper`),
        body = document.querySelector(`body`),
        linksMenu = document.querySelectorAll(`.nav--link`);


    burgerLinks.forEach(item =>{
        item.addEventListener(`click`, (e) =>{
        e.preventDefault();
        
        menuList.classList.add(`nav--wrapper-active`);
        menuBlock.classList.add(`nav-active`);
        body.classList.add(`no-scroll`);
        });
    })
    
    
    closeLink.addEventListener(`click`, (e) =>{
        e.preventDefault();

        menuList.classList.remove(`nav--wrapper-active`);
        menuBlock.classList.remove(`nav-active`);
        body.classList.remove(`no-scroll`);
    });

    overlayBlock.addEventListener(`click`, (e) =>{
        e.preventDefault();

        menuList.classList.remove(`nav--wrapper-active`);
        menuBlock.classList.remove(`nav-active`);
        body.classList.remove(`no-scroll`);
    });

    linksMenu.forEach(item =>{
        item.addEventListener(`click`, () =>{
        menuList.classList.remove(`nav--wrapper-active`);
        menuBlock.classList.remove(`nav-active`);
        body.classList.remove(`no-scroll`);
        });
    })
}

export default menu;