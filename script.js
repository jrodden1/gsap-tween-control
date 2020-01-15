//this code works around a bug in FireFox that was preventing the buttons to turn white when they had focus.
//more info here: https://zellwk.com/blog/inconsistent-button-behavior/
document.addEventListener('click', function (event) {
  if (event.target.matches('button')) {
    event.target.focus()
  }
})


var tween = gsap.to(".green", {duration:3, x:600, ease:"linear", paused:true});


document.getElementById("play").onclick = ()=> tween.play();
document.getElementById("pause").onclick = ()=> tween.pause();
document.getElementById("reverse").onclick = ()=> tween.reverse();
document.getElementById("restart").onclick = ()=> tween.restart();