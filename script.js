function setRandomAnimationDuration() {
    const duration = (Math.random() * 5 + 10).toFixed(2);
    document.body.style.animationDuration = duration + 's';
    setTimeout(setRandomAnimationDuration, duration * 1000);
}
setRandomAnimationDuration();