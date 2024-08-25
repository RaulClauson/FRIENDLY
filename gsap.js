ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load" // notice "resize" isn't in the list
  });
gsap.to(".funcionalidades_pin", {
    scrollTrigger:{
        trigger: ".funcionalidades_pin",
        start: "0% top",
        end: "400% 0",
        pin:true,
        scrub: 1,
    },
    ease:"none",
    opacity:1,
    smooth: true,
    duration: 0.3
});

gsap.to(".funcionalidades_pin_dentro", {
    scrollTrigger:{
        trigger: ".funcionalidades_pin_dentro",
        start: "0% top",
        end: "400% 0",
        scrub: 1,
    },
    right:"0",
    ease:"none",
    opacity:1,
    smooth: true,
    duration: 0.3
});
ScrollTrigger.refresh()