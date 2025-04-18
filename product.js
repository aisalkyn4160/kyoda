document.querySelectorAll('.swiper-slide').forEach(slide =>{
    const magnifier = slide.querySelector('.magnifier');

    const img = slide.querySelector('img');

    slide.addEventListener('mousemove', (e) =>{
        const rect = slide.getBoundingClientRect()
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const zoomLevel = 2;

        magnifier.style.display = 'block';

        const bgX = (x/rect.width)*100;
        const bgY = (y/rect.height) *100;



        magnifier.style.backgroundImage = `url(${img.src})`;
        magnifier.style.backgroundSize = `${zoomLevel*100}%`
        magnifier.style.backgroundPosition = `${bgX}% ${bgY}%`;
    });

    slide.addEventListener('mouseleave', () => {
        magnifier.style.display = 'none';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('#product-video');
    const playBtn = document.querySelector('.play-btn');

    playBtn.addEventListener('click', togglePlay);
    video.addEventListener('click', togglePlay);
    function togglePlay() {
        if (video.paused) {
            video.play();
            playBtn.innerHTML = `
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
                                                <rect x="0" y="0" width="5" height="17" fill="white"/>
                                                <rect x="7" y="0" width="5" height="17" fill="white"/>
                                            </svg>`;
        } else {
            video.pause();
            playBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
                                           <path d="M13.1367 7.634C13.8034 8.0189 13.8034 8.98115 13.1367 9.36605L1.84127 15.8875C1.1746 16.2724 0.341265 15.7913 0.341265 15.0215V1.9786C0.341265 1.2088 1.1746 0.72767 1.84126 1.11257L13.1367 7.634Z" fill="white"/>
                                       </svg>`;
        }
    }
});