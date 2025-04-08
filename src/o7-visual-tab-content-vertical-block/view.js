let blocks = document.querySelectorAll('.wp-block-create-block-o7-visual-tab-content-vertical-block');


blocks.forEach((block) => {
    let cards = block.querySelectorAll('.o7__visual-tab-content-single-item-link');
    let images = block.querySelectorAll('.o7__visual-tab-content-item-image');
    
    let activeCardIndex = 0;
    
    if (cards.length > 0) {
        cards[0].classList.add('active');
    }
    if (images.length > 0) {
        images[0].classList.add('active');
    }
    
    cards.forEach((card, index) => {
    
        card.addEventListener('mouseenter', () => {
            activeCardIndex = index;
            cards.forEach((c) => {
                c.classList.remove('active');
            });
            card.classList.add('active');
            images.forEach((img) => {
                img.classList.remove('active');
            });
            images[index].classList.add('active');
        });
    });
});
