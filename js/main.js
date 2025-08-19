// Typing effect
function typeText(elementId, text, delay = 75) {
  const el = document.getElementById(elementId);
  let i = 0;
  el.innerHTML = '';
  function type() {
    if (i < text.length) {
      el.innerHTML += text[i] === '\n' ? '<br>' : text[i];
      i++;
      setTimeout(type, delay);
    }
  }
  type();
}

typeText('name', "This is Shashwat Tiwari", 60);
typeText('intro', "Passionate developer constantly learning and evolving with technology.", 40);

// Particle background
particlesJS("particles-js", {
  particles: {
    number: { value: 90 },
    color: { value: "#4a90e2" },
    shape: { type: "circle" },
    opacity: { value: 0.7 },
    size: { value: 5, random: true },
    line_linked: {
      enable: true,
      distance: 130,
      color: "#4a90e2",
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      grab: { distance: 200, line_linked: { opacity: 1 } },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});
