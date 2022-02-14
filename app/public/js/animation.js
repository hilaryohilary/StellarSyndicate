const up = document.querySelector('#up');
const jstshow = document.querySelector('#jstshow');


function animate() {
    up.classList.add('active');
    jstshow.classList.add('active');
}



function disableImage() {
    const allImages = document.querySelectorAll('img');
    allImages.forEach((value) => {
    value.oncontextmenu = (e)=> {
        e.preventDefault();
    }
});
}

// function toolTip() {
//     var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
//     var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//       return new bootstrap.Tooltip(tooltipTriggerEl)
//     });
// }

const faqCard = document.querySelectorAll('#faq_card');


faqCard.forEach(card =>{
    let cardText = card.lastElementChild.lastElementChild;
    let cardTitle = card.lastElementChild.firstElementChild;
    card.addEventListener(('click'), () => {
        if(card.classList.contains('hidden-content')) {
            cardText.classList.remove('hidden');
            card.classList.remove('hidden-content');
        }
        else {
            cardText.classList.add('hidden');
            card.classList.add('hidden-content');
        }
    })

    cardTitle.addEventListener(('mouseenter'), () => {
        if(card.classList.contains('hidden-content')) {
            cardText.classList.remove('hidden');
            card.classList.remove('hidden-content');
        }
        else {
            cardText.classList.add('hidden');
            card.classList.add('hidden-content');
        }
    })
} );

const faqIcon = document.querySelectorAll('#faqicon');

faqCard.forEach(card => {
    card.addEventListener(('mouseover', 'mouseenter'),() => {
        faqCard.forEach(card => {
            let cardText = card.lastElementChild.lastElementChild;
                if(cardText.classList.contains('hidden')) {
                    card.classList.add('hidden-content');
                }
            else {
                card.classList.add('hidden-content');
                cardText.classList.add('hidden');
            }
        })
    });
})


window.addEventListener('load',() => {
   disableImage();
   setTimeout(() => {
    animate();
    }, 600);

});
