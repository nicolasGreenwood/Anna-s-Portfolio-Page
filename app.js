/*---------------------------------------Lenis Smooth Scroll Config--------------------------------------------------*/

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

let lenisContainers = document.querySelectorAll(".lenis-containers");

lenisContainers.forEach((container) => {
  const lenisCont = new Lenis({
    autoRaf: true,
    wrapper: container,
    overscroll: true,
  })
});

/*-------------------------------------Random Sound Play Script-------------------------------------------------------------*/

const randomNotes = document.querySelectorAll(".random-notes");
const playButton = document.getElementById("play-sound");

window.addEventListener("mousemove", (e) => {
	playButton.style.top = `${e.clientY}px`;
	playButton.style.left = `${e.clientX}px`;
})

playButton.addEventListener("click", () => {
	const randomNoteIndex = Math.round(
	Math.random() * (randomNotes.length - 0) + 0
);
	randomNotes[randomNoteIndex].play();
	playButton.style.display = "none";
})

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

document.addEventListener("mousemove", (e) => {
  let mouseVert;
  mouseVert = e.clientY;
  
  if (mouseVert < 10) {
    topNav.style.transform = "translateY(0%)";
  }
});

window.addEventListener('scroll', function (e) {
  let currentScrollPosition = window.scrollY;
  
  if (oldScrollPosition - currentScrollPosition <= -5) {
    topNav.style.transform = "translateY(-100%)";
    } else if (oldScrollPosition - currentScrollPosition >= 5) {
      topNav.style.transform = "translateY(0%)";
    };
  oldScrollPosition = window.scrollY;
});

/*-------------------------------Performance Slideshow Script------------------------------------------------*/

const upButton = document.getElementById("yt-slide-up");
const downButton = document.getElementById("yt-slide-down");
const slides = document.querySelectorAll(".yt-slide");
const slideshowContainer = document.querySelector(".slideshow-container");

let slideIndex = 1;

upButton.style.opacity = "0.5";
upButton.style.pointerEvents = "none";

upButton.addEventListener("click", () => {
	slideIndex--;
	slides.forEach((slide) => {
		slide.style.transform += "translateY(100%)";
	});
	if (slideIndex === 1) {
		upButton.style.opacity = "0.5";
		upButton.style.pointerEvents = "none";
	} else {
		upButton.style.opacity = "1";
		upButton.style.pointerEvents = "auto";
		downButton.style.opacity = "1";
		downButton.style.pointerEvents = "auto";
	}
});

downButton.addEventListener("click", () => {
	slideIndex++;
	slides.forEach((slide) => {
		slide.style.transform += "translateY(-100%)";
	});	
	if (slideIndex === slides.length) {
		downButton.style.opacity = "0.5";
		downButton.style.pointerEvents = "none";
	} else {
		downButton.style.opacity = "1";
		downButton.style.pointerEvents = "auto";
		upButton.style.opacity = "1";
		upButton.style.pointerEvents = "auto";
	}
});

/*-------------------------GSAP "Live Performances" Text Animation Timeline---------------------------------*/

gsap.registerPlugin(ScrollTrigger);

let livePerformTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#about-section",
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

/*----------------------------------------Album Slideshow Script---------------------------------------------------*/

const leftButton = document.querySelector(".album-slide-left");
const rightButton = document.querySelector(".album-slide-right");
const albumSlides = document.querySelectorAll(".album-slide");
const albumSlideshowContainer = document.querySelector(".albums-container");

let albumSlideIndex = 1;

leftButton.style.opacity = "0.5";
leftButton.style.pointerEvents = "none";

leftButton.addEventListener("click", () => {
	albumSlideIndex--;
	albumSlides.forEach((slide) => {
		slide.style.transform += "translateX(100%)";
	});
	if (albumSlideIndex === 1) {
		leftButton.style.opacity = "0.5";
		leftButton.style.pointerEvents = "none";
	} else {
		leftButton.style.opacity = "1";
		leftButton.style.pointerEvents = "auto";
		rightButton.style.opacity = "1";
		rightButton.style.pointerEvents = "auto";
	}
});

rightButton.addEventListener("click", () => {
	albumSlideIndex++;
	albumSlides.forEach((slide) => {
		slide.style.transform += "translateX(-100%)";
	});	
	if (albumSlideIndex === albumSlides.length) {
		rightButton.style.opacity = "0.5";
		rightButton.style.pointerEvents = "none";
	} else {
		rightButton.style.opacity = "1";
		rightButton.style.pointerEvents = "auto";
		leftButton.style.opacity = "1";
		leftButton.style.pointerEvents = "auto";
	}
});


/*------------------------------------GSAP Scroll Image Gallery----------------------------------------------------*/

const images = document.querySelectorAll(".gallery-section > img");

images.forEach((item) => {
  item.style.transform = `rotate(${Math.random() * (15 + 15) - 15}deg)`;
})

let imageQuantity = document.querySelector(".gallery-section").children.length;
let scrollTriggerEndValue = imageQuantity * window.innerHeight;
let xTransformValue = window.innerWidth;
let yTransformValue = window.innerHeight * -1;

gsap.to(".gallery-section > img", {
  scrollTrigger: {
    trigger: ".gallery-section",
    start: "top top",
    end: `+=${scrollTriggerEndValue}`,
    scrub: 1,
    pin: true,
  },
  x: xTransformValue,
  y: yTransformValue,
  rotation: 45,
  scale: 2,
  duration: 1,
  ease: "none",
  yoyo: true,
  stagger: {
    each: 1,
    from: "end"
  }
});
