
document.querySelector('.nav_icon').addEventListener('click', ()=> {
    const navIcon = document.querySelectorAll('.nav_icon .fas');
    const navLink = document.querySelector('.nav_link');
    navIcon.forEach(el => {
        el.classList.toggle ('active');
    })
    navLink.classList.toggle('nav_active');
})



window.addEventListener('load', e => {
    const pathname = e.currentTarget.location.pathname;
    const navitem = document.querySelectorAll('.nav_item');
    navitem.forEach(cur => {
        cur.classList.remove('select_nav');
    })
    if(pathname ==='/'){
        document.querySelector('#home_nav').classList.add('select_nav');
    }
    else if(pathname ==='/about'){
        document.querySelector('#about_nav').classList.add('select_nav');
    }
    else if(pathname ==='/contact'){
        document.querySelector('#contact_nav').classList.add('select_nav');
    }
    else if(pathname ==='/joinus'){
        document.querySelector('#join_nav').classList.add('select_nav');
    }

})
