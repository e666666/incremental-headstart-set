var getDefaultPlayer = () => ({
  lastUpdate: new Date().getTime()
})
var player = getDefaultPlayer()
var diff = 0
var diffMultiplier = 1
let gameLoopIntervalId = 0

function updateDisplay() {
  // read title
}

function gameLoop(diff) {
  // 1 diff = 0.001 seconds
  var thisUpdate = new Date().getTime()
  diff = (diff || Math.min(thisUpdate - player.lastUpdate, 21600000)) * diffMultiplier
  //if (diffMultiplier > 1) console.log("SHAME")
  //else if (diffMultiplier < 1) console.log("SLOWMOTION")

  updateDisplay()
  player.lastUpdate = thisUpdate
}

function startGame() {
  // Some init job
  startInterval()
}

function startInterval() {
  gameLoopIntervalId = setInterval(gameLoop, 33)
}
