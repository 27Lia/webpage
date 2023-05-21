const backtotop = document.getElementById('backtotop');

function checkScroll() {
    let pageYOffset = window.pageYOffset; // 스크롤이 얼마나 되었는지 확인하는 값 pageYOffset사용 스크롤 값이 들어감.
    if(pageYOffset !== 0){
        backtotop.classList.add('show');
    }
    else {
        backtotop.classList.remove('show');
    }
}

function moveBackToTop() {
    if(window.pageYOffset > 0) {
        window.scrollTo({top:0 ,behavior: "smooth"})
    }
}

window.addEventListener('scroll', checkScroll); // Scroll할 때 checkScroll함수 호출
backtotop.addEventListener('click', moveBackToTop); // click할 때 moveBackToTop함수 호출

