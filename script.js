
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;

    function showSlide(index) {
        images.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    function changeSlide(direction) {
        currentIndex = (currentIndex + direction + totalImages) % totalImages;
        showSlide(currentIndex);
    }

    function autoSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        showSlide(currentIndex);
    }

    setInterval(autoSlide, 3000); // Change image every 3 seconds
    showSlide(currentIndex);
