console.log(gsap);

const img1 = document.querySelector('.img1');

// gsap.from(img1, {autoAlpha: 0, duration: 2})

document.querySelector('.btn').addEventListener('click', () => {
    gsap.from(img1, {autoAlpha: 0, duration: 2})
})