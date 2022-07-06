import k from "./kRun"

const spawnPoints = [[20,0], [20,348], [635,0], [635,348]]
const spriteNames = [["enemy1", "enemy2"], ["enemy1bw", "enemy2bw"]]

const fadeIn = (duration = 1) => {
  let maxTimer = duration
  let curTimer = 0
  const opacityStep = 1 / duration
  return {
  id: "fadeIn",
  require: ["opacity"],

  add() {
    this.opacity = 0
  },

  update() {
    if (curTimer < maxTimer) {
      this.opacity += opacityStep * dt()
      curTimer += dt()
    }
  },
  }
}

function addEnemy(enemyHealth, spawnOffset) {

  var randNum = randi(0, 4)
  var randSprite = randi(0,2)
  var xPoint = spawnPoints[randNum] [0]
  var yPoint = spawnPoints[randNum] [1]
  var spriteName;
  if (yPoint > 0){
    spawnOffset = Math.abs(spawnOffset)
  }
  yPoint += spawnOffset

  if (yPoint === 348){
    spriteName = spriteNames[1][randSprite]
  }
  else{
    spriteName = spriteNames[0][randSprite]
  }
  
  const enemy = k.add([
    pos(xPoint, yPoint),
    sprite(spriteName, {anim: "normal"}),
    area(),
    health(enemyHealth),
    "enemy",
    opacity(0),
    fadeIn(1),
  ])
}

export default addEnemy;