// Add imports above this line
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
galleryRef.insertAdjacentHTML('beforeend', createGallery(galleryItems));
// galleryRef.addEventListener('click', getOriginalImg);

function createGallery(galleryItems) {
    const galleryUp = galleryItems.map(({ preview, original, description }) => {
    return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    `
    }).join('');
    
    return galleryUp;
}
var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: '250ms' });
// var gallery = $('.gallery a').simpleLightbox();

// gallery.next(); // Next Image