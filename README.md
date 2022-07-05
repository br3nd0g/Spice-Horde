# Spice-Horde
A game made for Replit's 2022 Kajam using Kaboom.js. Based on the theme "spice".

The game entails four modes, ranging from *easy* to *spice crazed*. The aim of the game is to stop the "spice horde" from stealing chilis from your kitchen. You click to throw a kitchen utensil in the direction of your cursor. You must keep at least one chili once a timer ends to win.

There was the constraint of having only a week to make it, due to the rules of the game jam. I also spent a lot of time not actually coding due to the fact all visual assets were drawn by myself, and I also had school during the week of the competition. I am pleased with the end product although I feel there is not much special programming wise. Things i would've wished to add if time permitted would have been an endless mode with a leaderboard, and perhaps a few more *types of enemies*.

Try it out [here](https://replit.com/@brendawg/Spice-Horde?v=1).

## What I learnt
Before when playing around with game engines, I have struggled with understanding vectors. When i learnt them at school it made sense but applying it to games never stuck with me, although during this project I learnt how to apply them, although i do feel i need to deepen my understanding of them more. I also learnt how to use deltaTime effectively, which I also did not manage to understand when previously using game engines.

## Next Steps
I don't think i will continue to work on this game, but I do want to make some more small game projects in the future. I have a lot of things planned though, so it may take a while before i do.

## Bugs

There is one bug i could find that I did not fix before submission of my game. The enemies spawn from four different corners, and if they are spawned from the top they use a front facing sprite, and if they space from the bottom they use a back facing sprite.

In the spice crazed mode, some enemies which spawn at the bottom use a front facing sprite. This is due to the fact I made it so two enemies spawn simultaneously in spice crazed mode. I added an offset on the y-axis so that the player could see there are two *if they spawn in the same corner*.
Stupidly, the code i added to give the player the correct sprite was to check if the y axis of the enemy spawn was the same location as the y spawn location for enemies in the bottom. When the y offset for spawning is applied if they are in the same corner, it means it does not mean the requirement to get the correct sprite, therefore defaults to the sprite meant for enemies spawning at the top.
