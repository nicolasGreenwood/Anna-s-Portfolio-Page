/*-----------------------Lenis Smooth Scrolling Configuration--------------------------------------------*/

const lenis = new Lenis({
  
});

lenis.on('scroll', (e) => {
  /*console.log(e);*/
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

if (window.innerWidth < 1000) {
  document.querySelector(".concerts-column").removeAttribute("data-lenis-prevent");
  document.querySelector(".releases-column").removeAttribute("data-lenis-prevent");
  document.querySelector(".special-events-column").removeAttribute("data-lenis-prevent");
};

/*--------------------------------Reveal-on-Scroll Animation via IntersectionObserver API-----------------------------*/

const scrollRevealTargets = document.querySelectorAll(".reveal-on-scroll");

const options = {
  threshold: 0.25
};

const observer = new IntersectionObserver(ioCallback, options);
scrollRevealTargets.forEach(target => {
  observer.observe(target);
});

function ioCallback (entries) {
  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      console.log("is intersecting!");
    }
  });
}

/*------------------------------Dynamic Navigation Bar-----------------------------------------------*/

const topNav = document.querySelector(".topnav");
let oldScrollPosition = 0;

window.addEventListener('scroll', function (e) {
  let currentScrollPosition = window.pageYOffset;
  
  if (oldScrollPosition - currentScrollPosition <= -5) {
    topNav.style.transform = "translateY(-100%)";
    } else if (oldScrollPosition - currentScrollPosition >= 5) {
      topNav.style.transform = "translateY(0%)";
    }
  oldScrollPosition = window.pageYOffset;
});

/*-------------------------GSAP "Live Performances" Text Animation Timeline---------------------------------*/

let livePerformTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".live-performances-container",
    start: "top center",
    end: "bottom center"
  }
});

livePerformTimeline.timeScale(1.5);

livePerformTimeline.to("#liv-of-live", {
  strokeDashoffset: 0,
  duration: 2
});
livePerformTimeline.to("#e-of-live", {
  strokeDashoffset: 0,
  duration: 0.5
});
livePerformTimeline.to("#i-dot-of-live", {
  strokeDashoffset: 0,
  duration: 1
});
livePerformTimeline.to("#p1-of-perform", {
  strokeDashoffset: 0,
  duration: 1
});
livePerformTimeline.to("#p2-of-perform", {
  strokeDashoffset: 0,
  duration: 1.5
});
livePerformTimeline.to("#er-of-perform", {
  strokeDashoffset: 0,
  duration: 1.5
});
livePerformTimeline.to("#fo-of-perform", {
  strokeDashoffset: 0,
  duration: 1.5
});
livePerformTimeline.to("#r-of-perform", {
  strokeDashoffset: 0,
  duration: 1
});
livePerformTimeline.to("#ma-of-perform", {
  strokeDashoffset: 0,
  duration: 1
});
livePerformTimeline.to("#n-of-perform", {
  strokeDashoffset: 0,
  duration: 1
});
livePerformTimeline.to("#ces-of-perform", {
  strokeDashoffset: 0,
  duration: 2
});

/*----------------------GSAP Scroll Animations for Albums and Singles--------------------------------------------*/

gsap.registerPlugin(ScrollTrigger);

const albumSlides = gsap.utils.toArray('.album-slide');

gsap.to(albumSlides, {
  xPercent: -100 * (albumSlides.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: '.albums-container',
    pin: true,
    scrub: 0.5,
    snap: {
      snapTo: 1/(albumSlides.length - 1),
      duration: { min: 0.5, max: 1 },
      delay: 0,
      directional: false
    },
    end: () => "+=" + document.querySelector('.albums-container').offsetWidth
  }
});

gsap.to('.single-slide', {
  scrollTrigger: {
    trigger: '.singles-container',
    start: 'top bottom',
    end: 'bottom top',
    snap: {
      snapTo: 1/6,
      duration: {min: 0.1, max: 1},
      delay: 0
    }
  }
});

/*------------------------------------GSAP Scroll Image Gallery----------------------------------------------------*/

const images = document.querySelectorAll(".gallery-section > img");

images.forEach((item) => {
  item.style.transform = `rotate(${Math.random() * (15 + 15) - 15}deg)`;
})

let imageQuantity = document.querySelector(".gallery-section").children.length;
let scrollTriggerEndValue = imageQuantity * window.innerHeight * 2;
let xTransformValue = window.innerWidth;
let yTransformValue = window.innerHeight * -1;

gsap.to(".gallery-section > img", {
  scrollTrigger: {
    trigger: ".gallery-section",
    pin: true,
    start: "top top",
    end: `+=${scrollTriggerEndValue}`,
    scrub: 2
  },
  x: xTransformValue,
  y: yTransformValue,
  rotation: 45,
  scale: 2,
  duration: 1,
  ease: "none",
  stagger: {
    each: 1,
    from: "end"
  }
});