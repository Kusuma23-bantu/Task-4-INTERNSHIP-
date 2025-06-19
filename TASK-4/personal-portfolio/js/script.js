document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thanks for reaching out!');
  this.reset();
});
