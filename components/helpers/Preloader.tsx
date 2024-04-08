'use client'

import imagesLoaded from 'imagesloaded';

const preloader = () => {
    const body = document.body;
    const imgwrap = document.createElement('div');
    imgwrap.style.visibility = 'hidden';
    body.appendChild(imgwrap);

    const imagesToPreload = document.querySelectorAll('img.preload, .content__bg');

    const imageLoad = imagesLoaded(imagesToPreload, { background: true });

    return new Promise<void>((resolve) => {
        imageLoad.on('done', () => {
            imgwrap.parentNode.removeChild(imgwrap);
            body.classList.remove('loading');
            resolve();
        });
    });
};

export default preloader;
