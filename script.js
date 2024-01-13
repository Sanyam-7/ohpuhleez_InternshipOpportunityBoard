
Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {
  videos: ["./0.mp4", "./4.mp4", "./3.mp4"],
});
t1 = gsap.timeline();
t1.from("#nav",{
  opacity:0,
  y:20,
  duration: 1
});
t1.from("#search", {
  opacity: 0,
  x: 20,
  duration: 1
});
t1.from("#homemain h1", {
  opacity:0,
  scale: 1.5,
  duration: 1
})

gsap.to(".felm", {
  scrollTrigger: { 
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: "#last",
    scrub: 1,
  },
  y: "-930%",
  ease: Power1,
});

gsap.from("#homelast p",{
  scrollTrigger: {
    trigger: "#homelast p",
    scroller: "body",
    start: "top 80%",
    end: "bottom 10%",
    scrub: 1,
    
  },
  opacity: 0,
  scale: 2
})
gsap.from(".fheading h1",{
  scrollTrigger: {
    trigger: ".fheading h1",
    scroller: "body",
    start: "top 80%",
    end: "bottom 10%",
    
  },
  opacity: 0,
  scale: 2
})








