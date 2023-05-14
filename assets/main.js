const filled = document.querySelector('.filled');

function UpdateTopProgressBar() {
    filled.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`;
    requestAnimationFrame(UpdateTopProgressBar);
}

UpdateTopProgressBar();