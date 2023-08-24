const iconomenu = document.querySelector('#icono-menu'),
    menu = document.querySelector('#menu');

iconomenu.addEventListener('click', (e) => {

    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    const rutaactual = e.target.getAttribute('src');

    if (rutaactual == 'images/pngwing.com.png') {
        e.target.setAttribute('src', 'images/pngwing.com.png');
    } else {
        e.target.setAttribute('src', 'images/pngwing.com.png');
    }

});
