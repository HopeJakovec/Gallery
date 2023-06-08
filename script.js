const gallery = function(imgs) {
    let openedImg = document.querySelector('.openedImg');
    openedImg.src = imgs.src;
    openedImg.parentElement.style.display = 'block';
}

gallery(imgs);
