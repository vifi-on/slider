const $slider = document.getElementById('slider')
const $btnLeft = document.getElementById('sliderLeft')
const $btnRight = document.getElementById('sliderRight')
const tracker = $slider.querySelector('#tracker')
const colImg = tracker.querySelectorAll('.slider__img')
const imgWidth = 291
let position = 0

$btnLeft.onclick = sliderLeft
$btnRight.onclick = sliderRight

function sliderRight () {
  position += imgWidth
  if (position >= (colImg.length - 4) * imgWidth) {
    position = (colImg.length - 4) * imgWidth
  }
  tracker.style.right = position + 'px'
}

function sliderLeft () {
  position -= imgWidth
  if (position <= 0) {
    position = 0
  }
  tracker.style.right = position + 'px'
}



