const sectionSelectAttack = document.getElementById('select-attack');
const sectionSelectPet = document.getElementById('select-pets');
const sectionReset = document.getElementById('reset');
const ButtonPetPlayer = document.getElementById('buttonPet');
const buttonReset = document.getElementById('button-reset');
const spanPlayersPet = document.getElementById('playersPet');
const spanEnemysPet = document.getElementById('enemysPet');
const sectionShowMap = document.getElementById('show-map');
const canvasMap = document.getElementById('map');

let canvas = canvasMap.getContext('2d')
let interval
let mokepones = [];
let petPlayer = "";
let petPlayerObject
let blockMovement = false;
let enemyPet = '';
let playerWins = 0;
let enemyWins = 0;
let playerLifesCount = 3;
let enemyLifesCount = 3;
let playerAttack = [];
let enemyAttack = [];
let mokeponOption
let attackMokeponEnemy = []
let indexAttackPlayer
let indexAttackEnemy
let mapBackground = new Image();
map.width = 640;
map.height = 360;
mapBackground.src = '/assets/mokemap.webp'
let mapSpot = []
mapSpot.push(
  { x: 208, y: 8 },
  { x: 584, y: 268 },
  { x: 589, y: 18 },
  { x: 419, y: 13 },
  { x: 230, y: 266 },
  { x: 8, y: 284 },
  { x: 141, y: 169 },
  { x: 400, y: 216 },
)
const cardsContainer = document.getElementById('cardsContainer');
const attacksContainer = document.getElementById('attacksContainer');

const spanEnemyLifes = document.getElementById('enemysLifes');
const spanPlayerLifes = document.getElementById('playersLifes');

const messagesSection = document.getElementById('resultDiv');
const playerAttacksDiv = document.getElementById('playerAttacksDiv');
const enemyAttacksDiv = document.getElementById('enemyAttacksDiv');

class Mokepon {
  constructor(name, img, life, type, onlyHeadImg, x = 10, y = 10,) {
    this.name = name;
    this.img = img;
    this.life = life;
    this.type = type;
    this.attacks = [];
    this.x = mapSpot[random(0, mapSpot.length - 1)].x
    this.y = mapSpot[random(0, mapSpot.length - 1)].y
    this.width = 50
    this.height = 50
    this.imgMap = new Image()
    this.imgMap.src = onlyHeadImg
    this.speedX = 0
    this.speedY = 0
  }
  drawMokepon() {
    canvas.drawImage(this.imgMap,
      this.x,
      this.y,
      this.width,
      this.height)
  }
  get radioElement() {
    return document.getElementById(this.name);
  }

  createButton() {
    return `
      <input type="radio" name="pet" id="${this.name}" />
      <label for="${this.name}" class="petCards"
        ><p> ${this.name} </p>
        <img src= ${this.img} alt="${this.name}" />
    </label>
    `
  }

}
let hipodoge = new Mokepon('Hipodoge', '/assets/hipodoge.webp', 5, 'Water', '/assets/hipodogeMap.webp');

let capipepo = new Mokepon('Capipepo', '/assets/capipepo.webp', 5, 'Earth', '/assets/capipepoMap.webp');

let ratigueya = new Mokepon('Ratigueya', '/assets/ratigueya.webp', 5, 'Fire', '/assets/ratigueyaMap.webp');

let langostelvis = new Mokepon('Langostelvis', '/assets/langostelvis.webp', 5, 'Fire', '/assets/langostelvisMap.webp');

let tucapalma = new Mokepon('Tucapalma', '/assets/tucapalma.webp', 5, 'Earth', '/assets/tucapalmaMap.webp');

let pydos = new Mokepon('Pydos', '/assets/pydos.webp', 5, 'Water', '/assets/pydosMap.webp');

hipodoge.attacks.push(
  { name: '💧', id: `button-water-${random(0, 1000)}`, type: 'water' },
  { name: '💧', id: `button-water-${random(0, 1000)}`, type: 'water' },
  { name: '💧', id: `button-water-${random(0, 1000)}`, type: 'water' },
  { name: '🔥', id: `button-fire-${random(0, 1000)}`, type: 'fire' },
  { name: '🌱', id: `button-earth-${random(0, 1000)}`, type: 'earth' },
)

capipepo.attacks.push(
  { name: '🌱', id: `button-earth-${random(0, 1000)}`, type: 'earth' },
  { name: '🌱', id: `button-earth-${random(0, 1000)}`, type: 'earth' },
  { name: '🌱', id: `button-earth-${random(0, 1000)}`, type: 'earth' },
  { name: '💧', id: `button-water-${random(0, 1000)}`, type: 'water' },
  { name: '🔥', id: `button-fire-${random(0, 1000)}`, type: 'fire' },
)

ratigueya.attacks.push(
  { name: '🔥', id: `button-fire-${random(0, 1000)}`, type: 'fire' },
  { name: '🔥', id: `button-fire-${random(0, 1000)}`, type: 'fire' },
  { name: '🔥', id: `button-fire-${random(0, 1000)}`, type: 'fire' },
  { name: '💧', id: `button-water-${random(0, 1000)}`, type: 'water' },
  { name: '🌱', id: `button-earth-${random(0, 1000)}`, type: 'earth' },
)
langostelvis.attacks.push(
  { name: '💧', id: `button-water-${random(0, 1000)}`, type: 'water' },
  { name: '💧', id: `button-water-${random(0, 1000)}`, type: 'water' },
  { name: '🔥', id: `button-fire-${random(0, 1000)}`, type: 'fire' },
  { name: '🔥', id: `button-fire-${random(0, 1000)}`, type: 'fire' },
  { name: '🌱', id: `button-earth-${random(0, 1000)}`, type: 'earth' },
)
tucapalma.attacks.push(
  { name: '💧', id: `button-water-${random(0, 1000)}`, type: 'water' },
  { name: '💧', id: `button-water-${random(0, 1000)}`, type: 'water' },
  { name: '🌱', id: `button-earth-${random(0, 1000)}`, type: 'earth' },
  { name: '🌱', id: `button-earth-${random(0, 1000)}`, type: 'earth' },
  { name: '🔥', id: `button-fire-${random(0, 1000)}`, type: 'fire' },
)
pydos.attacks.push(
  { name: '🌱', id: `button-earth-${random(0, 1000)}`, type: 'earth' },
  { name: '🌱', id: `button-earth-${random(0, 1000)}`, type: 'earth' },
  { name: '🔥', id: `button-fire-${random(0, 1000)}`, type: 'fire' },
  { name: '🔥', id: `button-fire-${random(0, 1000)}`, type: 'fire' },
  { name: '💧', id: `button-water-${random(0, 1000)}`, type: 'water' },
)
mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, tucapalma, pydos)
function startGame() {

  mokepones.forEach((Mokepon) => {

    cardsContainer.innerHTML += Mokepon.createButton();


    Mokepon.radioElement
  })

  sectionSelectAttack.style.display = 'none';
  sectionShowMap.style.display = 'none'
  sectionReset.style.display = 'none';
  ButtonPetPlayer.addEventListener('click', SelectPetPlayer);
  buttonReset.addEventListener('click', reset);

}



function selectPetEnemy() {
  let randomPet = random(0, mokepones.length - 1);
  enemyPet = mokepones[randomPet].name
  attackMokeponEnemy = mokepones[randomPet].attacks
  spanEnemysPet.textContent = enemyPet;
  spanEnemysPet.appendChild(
    getPetImageFromName(enemyPet)
  );

}
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function SelectPetPlayer() {
  playerChoice = document.querySelector('input[name="pet"]:checked')
  petPlayer = playerChoice ? playerChoice.id : "";
  if (!petPlayer) {
    alert("You haven't selected any pet");
    return;
  }

  spanPlayersPet.textContent = petPlayer;
  spanPlayersPet.appendChild(
    getPetImageFromName(petPlayer)
  );
  selectPetEnemy();
  typeAdvantage(petPlayer, enemyPet, mokepones)
  extractAttacks(petPlayer, mokepones)
  displayMode('map');
  startMap();
}

function fireAttack() {
  playerAttack.push('Fire');
  randomAttack();
}
function waterAttack() {
  playerAttack.push('Water');
  randomAttack();
}
function earthAttack() {
  playerAttack.push('Earth');
  randomAttack();
}

function randomAttack() {

  randomEnemyAttack = random(0, attackMokeponEnemy.length - 1);
  if (attackMokeponEnemy[randomEnemyAttack].name == '🔥') {
    enemyAttack.push('Fire');
  } else if (attackMokeponEnemy[randomEnemyAttack].name == '💧') {
    enemyAttack.push('Water');
  } else if (attackMokeponEnemy[randomEnemyAttack].name == '🌱') {
    enemyAttack.push('Earth');
  }

  attackMokeponEnemy.splice(randomEnemyAttack, 1)

  startFight(playerAttack.length);
}
function indexBothOpponets(player, enemy) {
  indexAttackPlayer = playerAttack[player]
  indexAttackEnemy = enemyAttack[enemy]
}

function startFight(arraylength) {
  if (arraylength === 5) {
    fight();
  }

}

function fight() {

  for (let index = 0; index < playerAttack.length; index++) {
    if (playerAttack[index] === enemyAttack[index]) {
      indexBothOpponets(index, index)
      message("Tie", "🟡", "🟡")

    } else if (checkIfWon(playerAttack[index], enemyAttack[index]) == true) {
      indexBothOpponets(index, index);
      message("You Win 🎉", "✅", "❌");
      playerWins++;
      spanPlayerLifes.textContent = playerWins;
    } else {
      indexBothOpponets(index, index);
      message("You Lose 😢", "❌", "✅");
      enemyWins++;
      spanEnemyLifes.textContent = enemyWins;

    }
  }

  checkWinner();

}
function checkIfWon(player, enemy) {
  if (player == "Fire" && enemy == "Earth") {
    return true;
  } else if (player == "Water" && enemy == "Fire") {
    return true;
  } else if (player == "Earth" && enemy == "Water") {
    return true;
  } else {
    return false;
  }
}
function checkWinner() {
  if (playerWins === enemyWins) {
    finalMessage("Tie");
  } else if (playerWins > enemyWins) {
    finalMessage("CONGRATULATIONS 🎉🎊, you've Won the Combat");
  } else if (playerWins < enemyWins) {
    finalMessage("Sorry, you lost, try again😖");
  }

}

function message(result, playerResult, enemyResult) {


  const newPlayerAttack = document.createElement('p');
  const newEnemyAttack = document.createElement('p');

  messagesSection.textContent = result;
  newPlayerAttack.textContent = `${indexAttackPlayer} ${playerResult}`;
  newEnemyAttack.textContent = `${indexAttackEnemy} ${enemyResult}`;

  playerAttacksDiv.appendChild(newPlayerAttack);
  enemyAttacksDiv.appendChild(newEnemyAttack);

}
function finalMessage(finalResult) {
  messagesSection.textContent = finalResult;
  disableAttacks();
  sectionReset.style.display = 'flex';
}
function disableAttacks() {
  const attackButtons = document.getElementsByClassName('attackButton');
  for (i = 0; i < attackButtons.length; i++) {
    let button = attackButtons[i];
    button.disabled = true;

  }
}

function getPetImageFromName(petName) {

  const img = document.createElement('img');

  if (petName == "Hipodoge") {
    img.src = "/assets/hipodoge.webp";
  } else if (petName == "Capipepo") {
    img.src = "/assets/capipepo.webp";
  } else if (petName == "Ratigueya") {
    img.src = "/assets/ratigueya.webp";
  } else if (petName == "Langostelvis") {
    img.src = "/assets/langostelvis.webp";
  } else if (petName == "Tucapalma") {
    img.src = "/assets/tucapalma.webp";
  } else if (petName == "Pydos") {
    img.src = "/assets/pydos.webp";
  }

  return img;
}



function reset() {
  location.reload();
}
function displayMode(mode = 'select') {

  let showAttack = false;
  let showMap = false
  let showSelect = false;
  if (mode === "attack") {
    showAttack = true;
  } else if (mode === "select") {
    removeChildren(spanPlayersPet);
    removeChildren(spanEnemysPet);
    showSelect = true;
  } else if (mode === "map") {
    showMap = true;
  }
  sectionShowMap.style.display = showMap ? 'flex' : "none";
  sectionSelectAttack.style.display = showAttack ? 'flex' : 'none';
  sectionSelectPet.style.display = showSelect ? 'flex' : 'none';
}
function removeChildren(element) {
  for (let i = 0; i < element.childNodes.length; i++) {
    element.childNodes[i].remove()
  }
}
function extractAttacks(PetName, array) {
  let attacks
  for (let i = 0; i < array.length; i++) {
    if (PetName === mokepones[i].name) {
      attacks = mokepones[i].attacks

    }

  }
  showAttacks(attacks)
}
/**
 * 
 * @param {{ id: string; name: string; type:string; }[]} attacksArray 
 */
function showAttacks(attacksArray) {
  attacksArray.forEach((attack) => {

    const button = document.createElement('button')
    button.id = attack.id
    button.className = `attackButton ${attack.type}`
    button.innerText = attack.name
    button.addEventListener('click', () => attackAction(attack.type))
    button.addEventListener('click', () => disableButton(button))
    attacksContainer.appendChild(button)
  })

}

function attackAction(type) {
  if (type === 'water') {
    waterAttack()
  } else if (type === 'earth') {
    earthAttack()
  } else if (type === 'fire') {
    fireAttack()
  } else
    console.error('attack type not defined')
  return;
}

function disableButton(button) {
  button.disabled = true
}
function typeAdvantage(player, enemy, array) {
  let playerType
  let indexPlayer
  let enemyType
  for (let i = 0; i < array.length; i++) {
    if (player === array[i].name) {
      playerType = array[i].type
      indexPlayer = i
    }
    for (let index = 0; index < array.length; index++) {
      if (enemy === array[index].name) {
        enemyType = array[index].type
      }

    }
  }

  if (playerType == 'Water' && enemyType == 'Fire') {
    advantageMessage('Water')
    return array[indexPlayer].attacks.push({ name: '💧', id: `button-water-${random(0, 1000)}`, type: 'water' });
  } else if (playerType == 'Earth' && enemyType == 'Water') {
    advantageMessage('Earth')
    return array[indexPlayer].attacks.push({ name: '🌱', id: `button-earth-${random(0, 1000)}`, type: 'earth' });
  } else if (playerType == 'Fire' && enemyType == 'Earth') {
    advantageMessage('Fire')
    return array[indexPlayer].attacks.push({ name: '🔥', id: `button-fire-${random(0, 1000)}`, type: 'fire' });
  } else {
    return;
  }

}
function advantageMessage(type) {
  const advantage = document.createElement('p')
  advantage.textContent = `You've got the advantage +1 ${type} attack`
  const messageAdvantage = document.getElementById('messages')
  messageAdvantage.appendChild(advantage)
}
function drawCanvas() {
  if (!blockMovement) {
    petPlayerObject.x += petPlayerObject.speedX
    petPlayerObject.y += petPlayerObject.speedY
    console.log({ x: petPlayerObject.x }, { y: petPlayerObject.y })
  }

  canvas.clearRect(0, 0, map.width, map.height)
  canvas.drawImage(mapBackground,
    0,
    0,
    map.width,
    map.height,)
  petPlayerObject.drawMokepon();
  mokepones.forEach((Mokepon) => {

    Mokepon.drawMokepon();

    if (Mokepon.name === petPlayerObject.name) {
      return;
    }

    const isColliding = checkCollision(Mokepon)

    if (isColliding && !blockMovement) {
      stopMovement(true)
    }
  })

}
function moveUp() {
  petPlayerObject.speedY = -5
}
function moveDown() {
  petPlayerObject.speedY = 5
}
function moveRight() {
  petPlayerObject.speedX = 5
}
function moveLeft() {
  petPlayerObject.speedX = -5
}
function stopMovement(block = false) {
  petPlayerObject.speedX = 0
  petPlayerObject.speedY = 0

  blockMovement = block;
}

let pressKeyTimeout = null;

function pressKey(event) {

  if (pressKeyTimeout) clearTimeout(pressKeyTimeout)
  switch (event.key) {
    case 'ArrowUp':
    case 'w':
      moveUp();
      break;
    case 'ArrowDown':
    case 's':
      moveDown();
      break;
    case 'ArrowLeft':
    case 'a':
      moveLeft();
      break;
    case 'ArrowRight':
    case "d":
      moveRight();
      break;
    default:
      break;
  }

  pressKeyTimeout = setTimeout(() => {
    stopMovement()
  }, 60);

}
function startMap() {

  interval = setInterval(drawCanvas, 50);
  petPlayerObject = obtainPet(petPlayer)
  window.addEventListener('keydown', pressKey);
  // window.addEventListener('keyup', stopMovement);
}
//TODO:make this function global to every time looking up for the petPlayer
function obtainPet() {
  for (let i = 0; i < mokepones.length; i++) {
    if (petPlayer === mokepones[i].name) {
      return mokepones[i]

    }

  }
}

function checkCollision(userA, userB = petPlayerObject) {
  const RADIUS = 5
  const upEnemy = userA.y - RADIUS
  const downEnemy = userA.y + userA.height + RADIUS
  const leftEnemy = userA.x - RADIUS
  const rightEnemy = userA.x + userA.width + RADIUS


  const upPlayer = userB.y
  const downPlayer = userB.y + userB.height
  const leftPlayer = userB.x
  const rightPlayer = userB.x + userB.width




  const topSide = downPlayer >= upEnemy && downEnemy >= downPlayer;
  const bottomSide = upPlayer <= downEnemy && upEnemy <= upPlayer;


  const leftSide = rightPlayer >= leftEnemy && rightEnemy >= rightPlayer;
  const rightSide = leftPlayer <= rightEnemy && leftEnemy <= leftPlayer;

  const isCenter = bottomSide && topSide || leftSide && rightSide

  const posX = leftSide || rightSide;
  const posY = topSide || bottomSide;

  return posX && posY;
}
window.addEventListener('DOMContentLoaded', startGame);