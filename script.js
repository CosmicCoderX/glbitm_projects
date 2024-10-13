// Navbar Background Change on Scroll
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Function to play the video when the "Start Workout" button is clicked
function playVideo(videoId) {
  const videoContainer = document.getElementById(videoId);
  videoContainer.style.display = 'block'; // Display the video container
  const video = videoContainer.querySelector('video');
  video.play(); // Play the video
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


// Smooth Scroll for Footer Links
document.querySelectorAll('.footer-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
