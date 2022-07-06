import k from "./kRun"
import "./sceneLoader"

scene("cutscene", (difficulty, menusMusic) => {

  k.layers([
      "cs5",
      "cs4",
      "cs3",
      "cs2",
      "cs1",
      "ui",
  ], "ui")

  var currentSlide = 1

  const cs1 = k.add([
    sprite("cs1"),
    pos(0,0),
    layer("cs1"),
  ])

  const cs2 = k.add([
    sprite("cs2"),
    pos(0,0),
    layer("cs2"),
  ])

  const cs3 = k.add([
    sprite("cs3"),
    pos(0,0),
    layer("cs3"),
  ])

  const cs4 = k.add([
    sprite("cs4"),
    pos(0,0),
    layer("cs4"),
  ])

  const cs5 = k.add([
    sprite("cs5"),
    pos(0,0),
    layer("cs5"),
  ])

  const startButton = k.add([
    text("Press S to skip", {size: 25}),
    pos(40,20),
    color(255, 255, 255),
    layer("ui"),
  ])

  onClick(() => {
    currentSlide += 1
    if(currentSlide === 2){
      destroy(cs1)
    }
    else if(currentSlide === 3){
      destroy(cs2)
    }
    else if(currentSlide === 4){
      destroy(cs3)
    }
    else if(currentSlide === 5){
      destroy(cs4)
    }
    else if(currentSlide === 6){
      menusMusic.stop()
      go("game", difficulty)
    }
  })

  onKeyPress("s", () => {
    menusMusic.stop()
    go("game", difficulty)
  })
  
  
  
})