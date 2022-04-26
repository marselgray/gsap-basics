console.log(gsap);

const img1 = document.querySelector('.img1');

gsap.to(`.img${2}`, {x: 100, y:100, rotation: '45deg', backgroundColor: '#fff', duration: 2})