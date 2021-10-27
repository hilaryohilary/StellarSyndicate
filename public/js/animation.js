const up = document.querySelector('#up');
const jstshow = document.querySelector('#jstshow');


function animate() {
    up.classList.add('active');
    jstshow.classList.add('active');
}

setTimeout(() => {
    animate();
}, 4200);