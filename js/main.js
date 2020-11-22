// <<<<<<<<<<<<<<<<hero typing>>>>>>>>>>

const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = [
  'Strength.',
  'Power.',
  'Control.',
  'Results.',
  'Peace.',
  'Motivation.',
  'Dedication.',
  'Your Goals.',
  'Everything.',
  'With Us.',
];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains('typing'))
      cursorSpan.classList.add('typing');
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains('typing'))
      cursorSpan.classList.add('typing');
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

window.addEventListener('load', function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// <<<<<<<<<<Hero Typing End>>>>>>>>
// ScrollTrigger
const reveal = gsap.utils.toArray('.reveal');
reveal.forEach((text, i) => {
  ScrollTrigger.create({
    trigger: text,
    toggleClass: 'active',
    start: 'top 90%',
    end: 'top 0%',
    // markers: true,
  });
});
const img = gsap.utils.toArray('.facilities-img');
img.forEach((img, i) => {
  ScrollTrigger.create({
    trigger: img,
    toggleClass: 'active',
    start: 'top 90%',
    end: 'top 0%',
    // markers: true,
  });
});
const icon = gsap.utils.toArray('.detail-icon');
icon.forEach((img, i) => {
  ScrollTrigger.create({
    trigger: img,
    toggleClass: 'active',
    start: 'top 90%',
    end: 'top 20%',
    // markers: true,
  });
});

// <<<<<<<<<<<<<<<<<<<Navbar/Scroll Functionality>>>>>>>>>>>>>>>>>>

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.nav-links');

navToggle.addEventListener('click', function () {
  // linksContainer.classList.toggle('show-links');
  const containerHeight = linksContainer.getBoundingClientRect().height;
  console.log(containerHeight);
  const linksHeight = links.getBoundingClientRect().height;
  console.log(linksHeight);

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset;
  const navbarHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navbarHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }
  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

// ********** smooth scroll ************
// select links
// const scrollLinks = document.querySelectorAll('.scroll-link');

// scrollLinks.forEach(function (link) {
//   link.addEventListener('click', function (e) {
//     //preventdefault
//     e.preventDefault();
//     //navigate to specific spot
//     const id = e.currentTarget.getAttribute('href').slice(1);
//     const element = document.getElementById(id);
//     //Calculate the Heights
//     const navHeight = navbar.getBoundingClientRect().height;
//     const containerHeight = linksContainer.getBoundingClientRect().height;
//     const fixedNav = navbar.classList.contains('fixed-nav');

//     let position = element.offsetTop - navHeight;
//     if (!fixedNav) {
//       position = position - navHeight;
//     }

//     if (navHeight > 82) {
//       position = position + containerHeight;
//     }

//     window.scrollTo({
//       left: 0,
//       top: position,
//     });
//     linksContainer.style.height = 0;
//   });
// });
