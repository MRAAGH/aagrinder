/*
Player actions.

May modify player inventory and position directly.
Because we are not synching those between clients.

*/

require('./public/js/sharedGameLogic.js');

class PlayerActions {

  constructor(map, syncher, subscribe, spawn){
    this.map = map;
    this.syncher = syncher;
    this.subscribe = subscribe;
    this.spawn = spawn;
    this.actionFunctions = sharedActionFunctions;
    console.log(this.actionFunctions);
  }

  login(player) {

    const spawnSpot = this.spawn.choosePlayerSpawnSpot(player);

    console.log(spawnSpot);

    // we assume this is a good spot and no checks need to be performed.

    player.x = spawnSpot.x;
    player.y = spawnSpot.y;

    // verify that player color is ok ... if it is not, this'll break everything
    if(!/^[0-9abcdef]{6}$/.test(player.color)){
      player.color = 'ffffff';
    }

    this.syncher.playerChangeBlock(player, player.x, player.y, player.playerBlock());

    this.subscribe.resubscribe(player);

    // send player state to the client, becaue this is missing in terrain updates
    player.socket.emit('p', {
      x: player.x,
      y: player.y,
      reach: player.reach,
    });
  }

  logout(player){
    this.syncher.playerChangeBlock(player, player.x, player.y, ' ');

    this.subscribe.unsubscribeAll(player);
  }

  teleport(playerName, x, y){
    const player = this.playerByName(playerName);
    player.x = x;
    player.y = y;
    subscribe.resubscribe(player);
  }

  action(player, actionName, data){
    if(this.actionFunctions[actionName]){
      const view = this.syncher.createView(player)
      this.actionFunctions[actionName](view, data);
      const success = view.apply();
      this.subscribe.resubscribe(player);
      return success;
    }
    return false;
  }
}

exports.PlayerActions = PlayerActions;
