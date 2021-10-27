
const logoAnimation = document.querySelector('#logo-animation');
const app = document.querySelector('app');


setTimeout(() => {
logoAnimation.style.opacity  = 0;
logoAnimation.style.display = 'none';
app.style.display = 'block';
}, 4000);

