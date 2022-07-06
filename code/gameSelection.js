import k from "./kRun"
import "./sceneLoader"

k.scene("gameModeSelection", () => {

  k.layers([
      "bg",
      "game",
      "player",
      "ui",
  ], "game")

  const menusMusic = k.play("mainMenuMusic", {
    volume: 0.6,
    loop: true
  })
  

  const background = k.add([
    sprite("modeSelectBG"),
    pos(0,0),
    layer("bg"),
  ])

  const backgroundGuy = k.add([
    sprite("hordeMemberHD"),
    pos(382,0),
    layer("game"),
  ])

  const expText = k.add([
    text("Choose Your\n\t\t\tMode", {size: 37}),
    pos(60,35),
    color(0, 0, 0),
    layer("ui"),
  ])

  const easyButton = k.add([
    text("Easy", {size: 40}),
    pos(40,140),
    color(109, 9, 9),
    area(),
    layer("ui"),
    "button",
    {
        difficulty: 'easy'
    },
  ])

  const normalButton = k.add([
    text("Normal", {size: 40}),
    pos(40,190),
    color(109, 9, 9),
    area(),
    layer("ui"),
    "button",
    {
        difficulty: 'normal'
    },
  ])

  const hardButton = k.add([
    text("Hard", {size: 40}),
    pos(40,250),
    color(109, 9, 9),
    area(),
    layer("ui"),
    "button",
    {
        difficulty: 'hard'
    },
  ])

  const crazyButton = k.add([
    text("Spice Crazed", {size: 40}),
    pos(40,310),
    color(109, 9, 9),
    area(),
    layer("ui"),
    "button",
    {
        difficulty: 'crazy'
    },
  ])


  k.onHover("button", (a) => {
    a.use(color(75, 7, 7));
  }, (a) => {
    a.use(color(109, 9, 9))
  })

  k.onClick("button", (a) =>{
    k.go("cutscene", a.difficulty, menusMusic)
  })
  
})