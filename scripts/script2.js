
let currentIndex = 0;


const images = document.querySelectorAll('#pro-al .product');


function hideImages() {
    images.forEach(image => {
        image.style.display = 'none';
    });
}


function showImages() {
    hideImages();
    for (let i = currentIndex; i < currentIndex + 3; i++) {
        if (images[i]) {
            images[i].style.display = 'block';

            
        }
    }
}


function next() {
    currentIndex += 3;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImages();
}


function previous() {
    currentIndex -= 3;
    if (currentIndex < 0) {
        currentIndex = Math.floor((images.length - 1) / 3) * 3;
    }
    showImages();
}


showImages();