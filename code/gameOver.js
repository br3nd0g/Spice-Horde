import k from "./kRun"
import "./sceneLoader"

k.scene("gameOver", (timeLeft, winOrLose) => {

  const secondsRemaining = timeLeft

  k.layers([
      "bg",
      "game",
      "player",
      "ui",
  ], "game")

  var winlose;

  if(winOrLose === true){
    winLose = "lost!"
  }
  else{
    winLose = "won!"
  }

  const background = k.add([
    sprite("modeSelectBG"),
    pos(0,0),
    layer("bg"),
  ])

  wait(0.125, () => {
    const screenshotDisplayed = k.add([
      sprite("screenshot"),
      pos(431,36),
      rotate(9.75),
      scale(0.15),
      layer("game"),
    ])
  })

  const backgroundGuy = k.add([
    sprite("hordeMemberHD"),
    pos(125,224),
    scale(0.5),
    layer("game"),
  ])

  const continueButton = k.add([
    text("Continue", {size: 40}),
    pos(421,300),
    color(109, 9, 9),
    area(),
    layer("ui"),
    "button",
  ])

  const gameMessage = k.add([
    text(`You ${winLose}`, {size: 50}),
    pos(55, 80.),
    color(109, 9, 9),
    layer("ui"),
  ])

  
  if(secondsRemaining !== "none"){

    var minutes = Math.trunc(secondsRemaining / 60)
    var seconds = Math.trunc(secondsRemaining % 60)

    if(seconds < 10){
        const timeLeft = k.add([
        text(`You had ${minutes}:0${seconds} left`, {size: 26}),
        pos(55,170),
        color(109, 9, 9),
        layer("ui"),
      ])
      }
    else{
      const timeLeft = k.add([
        text(`You had ${minutes}:${seconds} left`, {size: 26}),
        pos(55,170),
        color(109, 9, 9),
        layer("ui"),
      ])
    }
  }

  k.onHover("button", (a) => {
    a.use(color(75, 7, 7));
  }, (a) => {
    a.use(color(109, 9, 9))
  })

  k.onClick("button", () =>{
    k.go("gameModeSelection")
  })

  
})