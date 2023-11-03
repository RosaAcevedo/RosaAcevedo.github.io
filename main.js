let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #ffa7bf;">Soy estudiante de Sistemas Computacionales y fanatica de los videojuegos.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
