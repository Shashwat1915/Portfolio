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

typeText('name', "My name is Shashwat Tiwari", 60);
typeText('intro', "Passionate developer constantly learning and evolving with technology.", 40);
