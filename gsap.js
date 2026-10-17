// gsap.to(".box", {
//     x: 500,
//     duration: 2,
//     scale: 1.5,
//     opacity: 0.2,
//     delay: 2,
//     repeat: -1,
//     yoyo: true,
//     ease: "power1.inOut",

// })
gsap.fromTo("h1", {
    y: -118,
    opacity: 0,
}, {
    y: 0,
    opacity: 1,
    duration: 2,
    ease: "power1.inOut"
})
gsap.fromTo("p", {
    y: 50,
    opacity: 0,
}, {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.5,
    ease: "power1.inOut"
})
gsap.fromTo("li", {
    y: -30,
    opacity: 0,
}, {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 1,
    ease: "power1.inOut",
    stagger: 0.2
})