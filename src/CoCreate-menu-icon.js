// Menu Toggle
var navToggles = document.querySelectorAll('.nav-toggle');
for (var i=0; i < navToggles.length; i++) {
  var navToggle = navToggles[i];
  navToggle.addEventListener('click', function() {
    this.classList.toggle('open')
  })
}