function animateTitle() {
  const heroTitle = document.querySelector(".hero-title");
  const words = heroTitle.textContent.split(" ");
  
  heroTitle.innerHTML = words
    .map(word => `<span>${word}</span>`)
    .join(" ");
}

animateTitle();

const tl = gsap.timeline({
  defaults: {
    duration: 1,
    ease: "power3.out"
  }
});

tl.from(".nav-logo, .btn-secondary, .btn-primary", {
  y: -40,
  opacity: 0,
  filter: "blur(10px)",
  stagger: 0.15
})
.from(".nav-links", {
  scaleX: 0.3,
  opacity: 0,
  filter: "blur(8px)"
}, "-=0.4")
.from(".nav-link", {
  y: 15,
  opacity: 0,
  stagger: 0.1
}, "-=0.6");

tl.from(".hero-title span", {
  y: 50,
  opacity: 0,
  filter: "blur(12px)",
  stagger: 0.15,
  duration: 1.2
}, "-=0.2");

tl.from(".hero-subtitle", {
  y: 30,
  opacity: 0,
  filter: "blur(8px)"
}, "-=0.8")
.from(".hero-cta", {
  scale: 0.5,
  opacity: 0,
  filter: "blur(10px)"
}, "-=0.6");

tl.from(".preorder-tag, .partner-card", {
  y: 40,
  opacity: 0,
  filter: "blur(6px)",
  stagger: 0.15
}, "-=0.4");