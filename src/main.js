window.PIXI = require('phaser/build/custom/pixi')
window.p2 = require('phaser/build/custom/p2')
window.Phaser = require('phaser/build/custom/phaser-split')


var platforms;
var player;
var cursors;
var jumpButton;
function preload() {

    game.stage._bgColor.rgba = '#3498db';

    game.load.crossOrigin = 'anonymous';

    game.load.image('player', './images/Megaman_retro_3D_by_cezkid.png');
    game.load.image('platform', 'sprites/platform.png');

}
function update () {

game.physics.arcade.collide(player, platforms);

player.body.velocity.x = 0;

if (cursors.left.isDown)
{
     player.body.velocity.x = -500;
}
else if (cursors.right.isDown)
{
     player.body.velocity.x = 500;
}

if (cursors.up.isDown && (player.body.onFloor() || player.body.touching.down) ||jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))
{
     player.body.velocity.y = -500;
}
if(cursors.down.isDown){
   player.body.velocity.y = 500;
}
}
function create() {

    player = game.add.sprite(200, 10, 'player');
    game.world.setBounds(0, 0, 1920, 1920);

   // console.log(game)
   game.camera.follow(player);

    game.physics.arcade.enable(player);

    player.body.collideWorldBounds = true;
    player.body.gravity.y = 1000;
    player.height = 60;
    player.width = 100;
    platforms = game.add.physicsGroup();

    platforms.create(500, 150, 'platform');
   //  platforms.create(-200, 300, 'platform');
   //  platforms.create(400, 450, 'platform');
    platforms.create(100, 200, 'platform');


    platforms.setAll('body.immovable', true);

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

}
const game = new Phaser.Game(800, 600, Phaser.CANVAS, 'app-container', { create: create, preload, update});
