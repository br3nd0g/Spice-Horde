import k from "./kRun";

const spriteLoader = () => {

  k.loadSound("whoosh", "sounds/whoosh.mp3");
  k.loadSound("hit", "sounds/hit.mp3");
  k.loadSound("enemyDeath", "sounds/enemyDeath.mp3");
  k.loadSound("mainMenuMusic", "sounds/mainMenuMusic.mp3");
  k.loadSound("gameMusic", "sounds/gameMusic.mp3");

  k.loadFont("shojumaru", "sprites/shojumaruFont.png", 21, 30)

  k.loadSprite("mainMenuBG", "sprites/mainMenuBG.png");
  k.loadSprite("modeSelectBG", "sprites/modeSelect.png");
  k.loadSprite("hordeMemberHD", "sprites/enemyHD.png");
  k.loadSprite("chili", "sprites/chili.png");
  k.loadSprite("chili2", "sprites/chili2.png");
  k.loadSprite("chili3", "sprites/chili3.png");
  k.loadSprite("particles", "sprites/particles.png");
  k.loadSprite("table", "sprites/table.png");
  k.loadSprite("gameBG", "sprites/gameBG.png");
  k.loadSprite("knife", "sprites/knife.png");
  k.loadSprite("spoon", "sprites/spoon.png");
  k.loadSprite("whisk", "sprites/whisk.png");
  k.loadSprite("pan", "sprites/pan.png");

  k.loadSprite("cs1", "sprites/cs1.png");
  k.loadSprite("cs2", "sprites/cs2.png");
  k.loadSprite("cs3", "sprites/cs3.png");
  k.loadSprite("cs4", "sprites/cs4.png");
  k.loadSprite("cs5", "sprites/cs5.png");

  k.loadSprite("playerArm", "sprites/armAnimTest.png", {
    sliceX: 2,
    sliceY: 2,
    anims: {
      idle: {from: 0, to: 3, speed: 3, loop: true}
    },
  })

  k.loadSprite("topLeftDoor", "sprites/topLeftDoor.png", {
    sliceX: 6,
    sliceY: 4,
    anims: {
      idle: 0,
      open: {from: 1, to: 20, speed: 60}
    },
  })

  k.loadSprite("topRightDoor", "sprites/topRightDoor.png", {
    sliceX: 8,
    sliceY: 4,
    anims: {
      idle: 0,
      open: {from: 1, to: 30, speed: 38}
    },
  })

  k.loadSprite("bottomLeftDoor", "sprites/bottomLeftDoor.png", {
    sliceX: 3,
    sliceY: 7,
    anims: {
      idle: 0,
      open: {from: 1, to: 19, speed: 16}
    },
  })

  k.loadSprite("bottomRightDoor", "sprites/bottomRightDoor.png", {
    sliceX: 8,
    sliceY: 4,
    anims: {
      idle: 0,
      open: {from: 1, to: 29, speed: 57}
    },
  })

  k.loadSprite("player", "sprites/player.png", {
    sliceX: 2,
    sliceY: 2,
    anims: {
      idle: {from: 0, to: 3, speed: 3, loop: true}
    },
  })

  k.loadSprite("enemy1", "sprites/enemyBsprsh.png", {
    sliceX: 4,
    sliceY: 2,
    anims: {
      normal: {from: 0, to: 7, speed: 6, loop: true}
    },
  })

  k.loadSprite("enemy2", "sprites/enemyWsprsh.png", {
    sliceX: 4,
    sliceY: 2,
    anims: {
      normal: {from: 0, to: 7, speed: 6, loop: true}
    },
  })

  k.loadSprite("enemy1bw", "sprites/enemyBbwsprsh.png", {
    sliceX: 4,
    sliceY: 2,
    anims: {
      normal: {from: 0, to: 7, speed: 6, loop: true}
    },
  })

  k.loadSprite("enemy2bw", "sprites/enemyWbwsprsh.png", {
    sliceX: 4,
    sliceY: 2,
    anims: {
      normal: {from: 0, to: 7, speed: 6, loop: true}
    },
  })

  k.loadSprite("enemyDeath", "sprites/enemyDeath.png", {
    sliceX: 3,
    sliceY: 2,
    anims: {
      normal: {from: 0, to: 4, speed: 9}
    },
  })
}

export default spriteLoader;