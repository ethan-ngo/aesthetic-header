let bg = document.getElementById("bg")
let bird = document.getElementById("bird")
let foliage = document.getElementById("foliage")
let forest = document.getElementById("forest")

let rates = {
  bg: 0.5,
  bird: 0.5,
  forest: 0.15,
  foliage: 0.15,
  text: 1,
};

const handleScroll = () => {
  let scrollDistance = window.scrollY

  bg.style.top = scrollDistance * rates.bg + 'px';

  bird.style.left = -scrollDistance * rates.bird + 'px';

  forest.style.top = -scrollDistance * rates.forest + 'px';

  foliage.style.top = scrollDistance * rates.foliage + 'px';
}

window.addEventListener('scroll', handleScroll)