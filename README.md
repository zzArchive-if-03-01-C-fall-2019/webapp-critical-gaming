# webapp-critical-gaming

TUMBLE RUMBLE

Game Idea
Tumble Rumble is a javascript-based 2 player brawling web game.
Before the game starts each player choose one of 4 playable characters, that all have different traits and abilities. 
Each character is based one of the four Austrian politicians: Kurz, Rendi-Wagner, Kogler, Hofer. All satire of course
Each player starts on a side platform. For better visualisation:

https://docs.google.com/document/d/1FQhNz0PCeNYhcVlcg3zj_-GNFy8ZRM7rbI1mvWfFZTk/edit

The players then can use different abilities and attacks to fight their opponent.
More on that in the gameplay section. Each round their goal is to kick their opponent off the platform.
After every round the player can upgrade their character (e. g. higher movement speed or more attack damage).
Best of 5 rounds format.

Gameplay
Choose characters -> Choose stage ->
-> while(no player has won 3 rounds) { play round, upgrade abilities}

Characters
General
Every character can move left and right and crouch, which dodges hits but immobilizes them
Every character can jump twice to create a better platforming experience
Jumps recharge when touching the floor
Every character has a basic attack, it has a 1,5 second cooldown meaning it cannot be spammed
A hit applies a certain amount of percentage as damage and additionally a certain amount of
knockback based on high the percentage already is. The percentage however does not kill the opponent.
Only falling of the platforms does

Specific Character Traits
Every character has unique traits
Passive
An ability which is either active throughout the game or gets activated when a certain event occurs
Active
An ability which the player can activate via key press throughout the game, longer cooldown before it can be used again
Ultimate
A very strong ability
Every character has an ultimate-meter, which can be filled by e. g. attacking the enemy
Once full the player can activate it via key press
