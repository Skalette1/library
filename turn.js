const body = document.body;
const sun = document.getElementById('sun');
const header = document.getElementById('head');

sun.addEventListener('click', () => {
    if(body.style.background === 'rgb(255, 255, 255)') {
    body.style.cssText = 'background: #000; color: #fff';
    modalWindow.style.cssText = 'color: black; text-shadow: 0 0 20px #fff'
    sun.innerHTML = '<img src="moon_stars_night_midnight_sky_icon_194278.png" alt="" height="30" width="30">'
    header.style.cssText = 'box-shadow: 0 0 15px #fff;'
    library.style.color = '#000'
    }
    else {
    body.style.cssText = 'background: #fff; color: #000'
    modalWindow.style.cssText = 'color: black; box-shadow: 1px 1px 20px #fff'
    sun.innerHTML = '<img src="sun_sunny_summer_icon-icons.com_62700 (1).png" alt="" height="30" width="30">'
        header.style.cssText = 'box-shadow: 0 0 15px #000;'
    }
})

