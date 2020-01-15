//this code works around a bug in FireFox that was preventing the buttons to turn white when they had focus.
//more info here: https://zellwk.com/blog/inconsistent-button-behavior/
document.addEventListener('click', function (event) {
  if (event.target.matches('button')) {
    event.target.focus()
  }
})


// Initial Animation Test
// gsap.to(".green", {duration:3, x:600, ease:"linear"})

// Now we need to save this into a variable so I can call stuff on it.
let tween = gsap.to(".green", {duration:3, x:600, ease:"linear", paused:true});
// used the "paused" property to make it so the animation doesn't automatically start until you want it to (by calling the .play() on the tween)

// This is selecting the buttons that are over in index.html
document.getElementById("play").onclick = ()=> tween.play();
document.getElementById("pause").onclick = ()=> tween.pause();
document.getElementById("reverse").onclick = ()=> tween.reverse();
document.getElementById("restart").onclick = ()=> tween.restart();

// Above notice the 4 basic methods for running the tween:
// play, pause, reverse, restart

// Law of GSAP - tweens will NOT automatically restart after they finish playing

// GSAP Docs for Tweens:
// https://greensock.com/docs/v3/GSAP/Tween?ref=6234