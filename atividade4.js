document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const fullImageSrc = thumbnail.getAttribute('data-full');
            mainImage.src = fullImageSrc;
        });
    });
});