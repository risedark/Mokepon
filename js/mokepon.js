const sectionSelectAttack = document.getElementById('select-attack');
const sectionSelectPet = document.getElementById('select-pets');
const sectionReset = document.getElementById('reset');
const ButtonPetPlayer = document.getElementById('buttonPet');
const buttonReset = document.getElementById('button-reset');
const spanPlayersPet = document.getElementById('playersPet');
const spanEnemysPet = document.getElementById('enemysPet');

let mokepones = []
let petPlayer = "";
let enemyPet = '';
let playerLifesCount = 3;
let enemyLifesCount = 3;
let playerAttack = [];
let enemyAttack = [];
let mokeponOption
let attackMokeponEnemy
const cardsContainer = document.getElementById('cardsContainer')
const attacksContainer = document.getElementById('attacksContainer')

const spanEnemyLifes = document.getElementById('enemysLifes');
const spanPlayerLifes = document.getElementById('playersLifes');

const messagesSection = document.getElementById('resultDiv');
const playerAttacksDiv = document.getElementById('playerAttacksDiv');
const enemyAttacksDiv = document.getElementById('enemyAttacksDiv');

class Mokepon {
  constructor(name, img, life) {
    this.name = name;
    this.img = img;
    this.life = life;
    this.attacks = []
  }

  get radioElement() {
    return document.getElementById(this.name)
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
let hipodoge = new Mokepon('Hipodoge', '/assets/hipodoge.webp', 5);

let capipepo = new Mokepon('Capipepo', '/assets/capipepo.webp', 5);

let ratigueya = new Mokepon('Ratigueya', '/assets/ratigueya.webp', 5);

let langostelvis = new Mokepon('Langostelvis', '/assets/langostelvis.webp', 5);

let tucapalma = new Mokepon('Tucapalma', '/assets/tucapalma.webp', 5);

let pydos = new Mokepon('Pydos', '/assets/pydos.webp', 5);

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
mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, tucapalma, pydos);

function startGame() {

  mokepones.forEach((Mokepon) => {

    cardsContainer.innerHTML += Mokepon.createButton();


    Mokepon.radioElement
  })

  sectionSelectAttack.style.display = 'none';
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
  extractAttacks(petPlayer, mokepones)
  spanPlayersPet.textContent = petPlayer;
  spanPlayersPet.appendChild(
    getPetImageFromName(petPlayer)
  );
  selectPetEnemy();
  displayMode('attack');
}

function fireAttack() {
  playerAttack.push('Fire');

  console.log(playerAttack);

  randomAttack(playerAttack.length);
}
function waterAttack() {
  playerAttack.push('Water');
  console.log(playerAttack);
  randomAttack(playerAttack.length);
}
function earthAttack() {
  playerAttack.push('Earth');
  console.log(playerAttack);
  randomAttack(playerAttack.length);
}

function randomAttack(arraylength) {
  // if (arraylength == 5) {
  randomEnemyAttack = random(0, attackMokeponEnemy.length - 1);
  if (randomEnemyAttack == 1) {
    enemyAttack.push('Fire');
  } else if (randomEnemyAttack == 2) {
    enemyAttack.push('Water');
  } else {
    enemyAttack.push('Earth');
  }
  console.log(enemyAttack)
  fight();

  // } else {
  // return;

  // }

}

function fight() {
  if (playerAttack == enemyAttack) {
    message("Tie");
    // TODO: move this into a separated function
  } else if (playerAttack == "Fire" && enemyAttack == "Earth" || playerAttack == "Water" && enemyAttack == "Fire" || playerAttack == "Earth" && enemyAttack == "Water") {
    message("You Win 🎉");
    enemyLifesCount--;
    spanEnemyLifes.textContent = enemyLifesCount;
  } else {
    message("You Lose 😢");
    playerLifesCount--;
    spanPlayerLifes.textContent = playerLifesCount;
  }
  checkLifes();

}

function checkLifes() {
  if (playerLifesCount == 0) {
    finalMessage("Sorry, you lost, try again😖");
  } else if (enemyLifesCount == 0) {
    finalMessage("CONGRATULATIONS 🎉🎊, you've Won the Combat");
  }
}

function message(result) {


  const newPlayerAttack = document.createElement('p');
  const newEnemyAttack = document.createElement('p');

  messagesSection.textContent = result;
  newPlayerAttack.textContent = playerAttack;
  newEnemyAttack.textContent = enemyAttack;

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
  let showSelect = false;
  if (mode === "attack") {
    showAttack = true;
  } else if (mode === "select") {
    removeChildren(spanPlayersPet);
    removeChildren(spanEnemysPet);
    showSelect = true;

  }

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
window.addEventListener('DOMContentLoaded', startGame)