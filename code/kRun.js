import kaboom from "kaboom"

const windowWidth = document.documentElement.clientWidth
const windowHeight = document.documentElement.clientHeight
const trueWidth = 704;
const trueHeight = 448;
const scaleX = windowWidth / trueWidth
const scaleY = windowHeight / trueHeight 
const scaleGame = Math.min(scaleX, scaleY)

const k = kaboom({
    width: trueWidth,
    height: trueHeight,
    scale: scaleGame,
    background: [142, 68, 41],
    font: "shojumaru",
})

export default k;