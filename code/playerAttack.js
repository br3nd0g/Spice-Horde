import k from "./kRun"

const utensils = ["spoon", "whisk", "knife", "pan"]

function throwUtensil(originX, originY) {

  linex = mousePos().x - 350
  liney = mousePos().y - 155
  line = k.vec2(linex, liney)
  
  var utensilString = randi(0,4)
  utensilString = utensils[utensilString]

  var angle = k.vec2(originX, originY).angle(mousePos())

  
  const utensil = k.add([
    sprite(utensilString),
    area(),
    "utensil",
    pos(originX, originY),
    move(line, 350),
    rotate(angle-90),
    cleanup(3),
    layer("game")
  ])
}

export default throwUtensil;