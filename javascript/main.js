import {Player} from './playerClass.js';
import {Item} from './itemClass.js';

//initiate player -- player will be of warrior class
let player1 = new Player(16, 6, 6);

//create items
let SoK = new Item('Spirit of King Hassan', 8, 4, 0);
let Tiamat = new Item('Tiamat', 3, 2, 2 );
let Ce = new Item('Challengers Ego', 2, 3, 2);
let SgB = new Item('Storm Guards Brace', 3, 1, 0);
let SoG = new Item('Sword of Gewain', 2, 3, 1);

//setting up game Screen
let gameWindow = document.getElementById('gameScreen');
let ctx = gameWindow.getContext('2d');
//console.log(player1.health);

//console.log(SoA.attack);

//player1.equipItem(SoA);
//console.log(player1.attack);
//var paragraph = document.getElementById('paragraph');
//paragraph.innerHTML = player1.attack;
//document.write(player1.attack);



/*
game will need:
main function to run game
battle function to simulate battles
    this will need to deal damage to player and enemy
    to do this, we need to take in enemy and player
    it will also need to update the stats of the player and the monsters
move function to move the player from one place to another
    it CAN have a visual effect (like a map) for the player to see where they are currently(before and after moving)
    the map should be in a grid layout -- simple like checkers or chess. Black and white will suffice
    Player block will be blue
    danger areas will be red*/
//take in player
//take in monster
function main(){


}
function battle(player, monster){

}

function move(gameWindow){

}
