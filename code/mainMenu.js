import k from "./kRun"
import "./sceneLoader"

k.scene("mainMenu", () => {

  k.layers([
      "bg",
      "game",
      "particles",
      "player",
      "ui",
  ], "game")

  const menuMusic = k.play("mainMenuMusic", {
    volume: 0.6,
    loop: true
  })

  const startButton = k.add([
    text("Play Game", {size: 37}),
    pos(450,160),
    color(109, 9, 9),
    area(),
    layer("ui"),
  ])
  
  const background = k.add([
    sprite("mainMenuBG"),
    pos(0,0),
    layer("bg"),
  ])

  startButton.onHover(
    () => {startButton.use(color(75, 7, 7));}, 
    ()=> {startButton.use(color(109,9,9));});

  startButton.onClick(
    () => {
      menuMusic.stop()
      go("gameModeSelection")  
    }) 
})