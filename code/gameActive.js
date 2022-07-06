import k from "./kRun"
import "./sceneLoader"
import addEnemy from "./enemySpawn"
import throwUtensil from "./playerAttack"
import loadScreenshot from "./loadScreenshot"

k.scene("game", (mode) => {


  const xMove = 70.4
  const yMove = 44.8
  var leftFired = false
  var rightFired = false
  var canThrow = true
  var waitingToThrowAgain = false
  var handPos = []
  var startTimer = 5
  var failed = false
  var readyToStart = false
  var doorsClosed = true

  //normal mode - default (hence it's normal lol???)
  var timeLeft = 180
  var doubleSpawn = false
  var chillis = 3
  var enemyHealth = 3
  var aCooldown = 0.75
  var enemySpeed = 50
  var spawnCooldown = 5

  if (mode === "easy") {
    timeLeft = 100
    aCooldown = 1
    enemySpeed = 55
    spawnCooldown = 4
    enemyHealth = 2
  }
  else if (mode === "hard") {
    timeLeft = 270
    enemyHealth = 4
    aCooldown = 0.6
    enemySpeed = 70
    spawnCooldown = 6
  }
  else if (mode === "crazy") {
    doubleSpawn = true
    chillis = 1
    timeLeft = 80
    aCooldown = 0.1
    enemySpeed = 115
    spawnCooldown = 2
    enemyHealth = 2
  }

  k.layers([
    "bg",
    "doorshadows",
    "game",
    "particles",
    "player",
    "ui",
  ], "game")

  const gameMusic = k.play("gameMusic", {
    volume: 0.6,
    loop: true
  })

  const enemyAttractionPoint = k.add([
    opacity(0),
    rect(1, 1),
    outline(0),
    pos(354, 224),
    area(),
  ])

  const enemyCollider = k.add([
    pos(285, 185),
    opacity(0),
    rect(135, 44),
    area(),
    "eCollider",
  ])

  const tlDoor = k.add([
    sprite("topLeftDoor", { anim: "idle" }),
    pos(20, 0),
    layer("game"),
  ])

  const tlDoorShadow = k.add([
    pos(30, 0),
    rect(53, 115),
    outline(0),
    color(0, 0, 0),
    layer("doorshadows"),
  ])

  const trDoor = k.add([
    sprite("topRightDoor", { anim: "idle" }),
    pos(570, 0),
    layer("game"),
  ])

  const trDoorShadow = k.add([
    pos(636, 0),
    rect(53, 115),
    outline(0),
    color(0, 0, 0),
    layer("doorshadows"),
  ])

  const blDoor = k.add([
    sprite("bottomLeftDoor", { anim: "idle" }),
    pos(-64, 353),
    scale(1.5),
    layer("game"),
  ])

  const brDoor = k.add([
    sprite("bottomRightDoor", { anim: "idle" }),
    pos(570, 192),
    layer("game"),
  ])

  const table = k.add([
    sprite("table"),
    pos(224, 160),
    layer("game"),
    scale(2),
  ])

  const background = k.add([
    sprite("gameBG"),
    pos(0, 0),
    layer("bg"),
  ])

  const player = k.add([
    pos(290, 105),
    sprite("player", { anim: "idle" }),
  ])

  const arm = k.add([
    pos(331, 138),
    sprite("playerArm", { anim: "idle" })
  ])

  const chili1 = k.add([
    sprite("chili"),
    pos(300, 168),
    layer("particles"),
    scale(0.5),
    rotate(45)
  ])

  const chili2 = k.add([
    sprite("chili2"),
    pos(390, 210),
    layer("particles"),
    scale(0.5),
    rotate(-30)
  ])

  const chili3 = k.add([
    sprite("chili3"),
    pos(332, 210),
    layer("particles"),
    scale(0.45),
    rotate(65)
  ])

  if(mode === "crazy"){
    destroy(chili1)
    destroy(chili2)
  }


  const startTimerUI = add([
    text(startTimer, { size: 75 }),
    pos(327, 140),
    color(32, 120, 18),
    layer("ui")
  ])

  const timeLeftUI = add([
    text(timeLeft, { size: 25 }),
    pos(172, 15),
    color(32, 120, 18),
    layer("ui")
  ])

  loop(spawnCooldown, () => {
    if (readyToStart === true) {
      addEnemy(enemyHealth, 0)
      if (doubleSpawn === true) {
        addEnemy(enemyHealth, -15)
      }
    }
  })

  onCollide("eCollider", "enemy", (a, b) => {
    b.destroy()
    chillis -= 1
    if (chillis === 2) {
      shake(10)
      destroy(chili1)
    }
    else if (chillis === 1) {
      shake(10)
      destroy(chili2)
    }
    else if (chillis === 0) {
      gameMusic.stop()
      failed = true
      destroy(chili3)
      endGameScreen = k.screenshot()
      loadScreenshot(endGameScreen)
      go("gameOver", timeLeft, failed)
    }
  })

  onCollide("utensil", "enemy", (a, b) => {
    a.destroy()
    b.hurt(1)
    b.use(color(200, 0, 0))
    wait(0.2, () => {
      b.use(color(255, 255, 255))
    })
    play("hit", {volume: 0.6})

    if (b.hp() === 0) {
      play("enemyDeath", {volume: 1})
      var deathPos = b.pos
      destroy(b)
      add([
        sprite("enemyDeath", { anim: "normal", }),
        lifespan(0.8),
        pos(deathPos)
      ])
    }
  })

  onClick(() => {
    if (canThrow === true) {
      play("whoosh", {volume: 0.8})
      canThrow = false
      throwUtensil(handPos[0], handPos[1])
    }
    else if (waitingToThrowAgain === false) {
      waitingToThrowAgain = true
      wait(aCooldown, () => {
        canThrow = true
        waitingToThrowAgain = false
      })
    }
  })


  onUpdate(() => {

    startTimer -= 1 * dt()
    if (readyToStart === true) {
      timeLeft -= 1 * dt()
    }

    if (Math.trunc(startTimer) > 0) {
      var timerToShowHuh = Math.trunc(startTimer)
      startTimerUI.use(text(timerToShowHuh, { size: 75 }))
    }
    else {
      destroy(startTimerUI)
      readyToStart = true
    }

    if (readyToStart === true && doorsClosed === true) {
      doorsClosed = false
      tlDoor.use(sprite("topLeftDoor", { anim: "open" }))
      trDoor.use(sprite("topRightDoor", { anim: "open" }))
      blDoor.use(sprite("bottomLeftDoor", { anim: "open" }))
      brDoor.use(sprite("bottomRightDoor", { anim: "open" }))
    }


    if (timeLeft > 0) {
      var minutes = Math.trunc(timeLeft / 60)
      var seconds = Math.trunc(timeLeft % 60)

      if (seconds < 10) {
        timeLeftUI.use(text(`Time left: ${minutes}:0${seconds}`, { size: 25 }))
      }
      else {
        timeLeftUI.use(text(`Time left: ${minutes}:${seconds}`, { size: 25 }))
      }

    }
    else if (timeLeft <= 0) {
      gameMusic.stop()
      endGameScreen = k.screenshot()
      loadScreenshot(endGameScreen)
      go("gameOver", "none", failed)
    }

    every("enemy", (enemy) => {
      enemy.moveTo(enemyAttractionPoint.pos, enemySpeed)
    })

    if (mousePos().x < 352 && leftFired === false) {
      leftFired = true
      rightFired = false
      player.use(sprite("player", { anim: "idle", flipX: true }))
      arm.use(sprite("playerArm", { anim: "idle", flipX: true }))
      arm.use(pos(314, 137))
      handPos = [343, 157]
    } else if (mousePos().x > 351 && rightFired === false) {
      leftFired = false
      rightFired = true
      player.use(sprite("player", { anim: "idle" }))
      arm.use(sprite("playerArm", { anim: "idle" }))
      arm.use(pos(331, 138))
      handPos = [360, 157]
    }



  })

})