function startGame() {
    const sectionSelectAttack = document.getElementById('select-attack')
    sectionSelectAttack.style.display = 'none'
    const sectionReset = document.getElementById('reset')
    sectionReset.style.display = 'none'

    const ButtonPetPlayer = document.getElementById('buttonPet')
    ButtonPetPlayer.addEventListener('click', SelectPetPlayer)
    const buttonFire = document.getElementById('button-fire')
    buttonFire.addEventListener('click', fireAttack)
    const buttonWater = document.getElementById('button-water')
    buttonWater.addEventListener('click', waterAttack)
    const buttonEarth = document.getElementById('button-earth')
    buttonEarth.addEventListener('click', earthAttack)
    const buttonReset = document.getElementById('button-reset')
    buttonReset.addEventListener('click', reset)
    const buttonBack = document.getElementById('back')
    buttonBack.addEventListener('click', () => {
        displayMode('select')
    })


}
let petPlayer = ""
const radioHipodoge = document.getElementById('hipodoge')
const radioCapipepo = document.getElementById('capipepo')
const radioRatigueya = document.getElementById('ratigueya')
const radioLangostelvis = document.getElementById('langostelvis')
const radioTucapalma = document.getElementById('tucapalma')
const radioPydos = document.getElementById('pydos')
const spanPlayersPet = document.getElementById('playersPet')
const spanEnemysPet = document.getElementById('enemysPet')
let playerLifesCount = 3
let enemyLifesCount = 3
let playerAttack = ""
let enemyAttack


function selectPetEnemy() {
    let randomPet = random(1, 6)

    let enemyPet = '';

    if (randomPet == 1) {
        enemyPet = 'Hipodoge'
    } else if (randomPet == 2) {
        enemyPet = "Capipepo"
    } else if (randomPet == 3) {
        enemyPet = "Ratigueya"
    } else if (randomPet == 4) {
        enemyPet = "Langostelvis"
    } else if (randomPet == 5) {
        enemyPet = "Tucapalma"
    } else {
        enemyPet = "Pydos"
    }

    spanEnemysPet.textContent = enemyPet;
    spanEnemysPet.appendChild(
        getPetImageFromName(enemyPet)
    )

}
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


function SelectPetPlayer() {


    if (radioHipodoge.checked) {
        petPlayer = "Hipodoge"
    } else if (radioCapipepo.checked) {
        petPlayer = "Capipepo"
    } else if (radioRatigueya.checked) {
        petPlayer = "Ratigueya"
    } else if (radioLangostelvis.checked) {
        petPlayer = "Langostelvis"
    } else if (radioTucapalma.checked == true) {
        petPlayer = "Tucapalma"
    } else if (radioPydos.checked == true) {
        petPlayer = "Pydos"
    } else {
        alert("You haven't selected any pet")
        return;
    }

    spanPlayersPet.textContent = petPlayer;
    spanPlayersPet.appendChild(
        getPetImageFromName(petPlayer)
    )

    selectPetEnemy()
    displayMode('attack')



}

function fireAttack() {
    playerAttack = "Fire"
    randomAttack()
}
function waterAttack() {
    playerAttack = "Water"
    randomAttack()
}
function earthAttack() {
    playerAttack = "Earth"
    randomAttack()
}

function randomAttack() {
    enemyAttack = random(1, 3)
    if (enemyAttack == 1) {
        enemyAttack = 'Fire'
    } else if (enemyAttack == 2) {
        enemyAttack = 'Water'
    } else {
        enemyAttack = 'Earth'
    }
    fight()
}

function fight() {
    if (playerAttack == enemyAttack) {
        message("Tie")
    } else if (playerAttack == "Fire" && enemyAttack == "Earth" || playerAttack == "Water" && enemyAttack == "Fire" || playerAttack == "Earth" && enemyAttack == "Water") {
        message("You Win 🎉")
        enemyLifesCount--
        const spanEnemyLifes = document.getElementById('enemysLifes')
        spanEnemyLifes.textContent = enemyLifesCount
    } else {
        message("You Lose 😢")
        playerLifesCount--
        const spanPlayerLifes = document.getElementById('playersLifes')
        spanPlayerLifes.textContent = playerLifesCount
    }
    checkLifes()

}

function checkLifes() {
    if (playerLifesCount == 0) {
        finalMessage("Sorry, you lost, try again😖")
    } else if (enemyLifesCount == 0) {
        finalMessage("CONGRATULATIONS 🎉🎊, you've Won the Combat")
    }
}

function message(result) {
    const messagesSection = document.getElementById('resultDiv')
    const playerAttacksDiv = document.getElementById('playerAttacksDiv')
    const enemyAttacksDiv = document.getElementById('enemyAttacksDiv')

    // const notification = document.createElement('p')
    const newPlayerAttack = document.createElement('p')
    const newEnemyAttack = document.createElement('p')

    messagesSection.textContent = result
    newPlayerAttack.textContent = playerAttack
    newEnemyAttack.textContent = enemyAttack

    // messagesSection.appendChild(notification)
    playerAttacksDiv.appendChild(newPlayerAttack)
    enemyAttacksDiv.appendChild(newEnemyAttack)
    // const paragraph = document.createElement('p')
    // paragraph.textContent = `Your pet attacked with ${playerAttack}, enemy's pet attacked with ${enemyAttack} - ${result}`
    // messagesSection.appendChild(paragraph)
}

function finalMessage(finalResult) {
    // const paragraph = document.createElement('p')
    // paragraph.textContent = finalResult
    const messagesSection = document.getElementById('resultDiv')
    messagesSection.textContent = finalResult
    disableAttacks()
    const sectionReset = document.getElementById('reset')
    sectionReset.style.display = 'flex'
}
function disableAttacks() {
    const attackButtons = document.getElementsByClassName('attackButton')
    for (i = 0; i < attackButtons.length; i++) {
        let button = attackButtons[i]
        button.disabled = true

    }
}

function getPetImageFromName(petName) {

    const img = document.createElement('img');

    if (petName == "Hipodoge") {
        img.src = "/assets/hipodoge.webp"
    } else if (petName == "Capipepo") {
        img.src = "/assets/capipepo.webp"
    } else if (petName == "Ratigueya") {
        img.src = "/assets/ratigueya.webp"
    } else if (petName == "Langostelvis") {
        img.src = "/assets/langostelvis.webp"
    } else if (petName == "Tucapalma") {
        img.src = "/assets/tucapalma.webp"
    } else if (petName == "Pydos") {
        img.src = "/assets/pydos.webp"
    }

    return img;
}



function reset() {
    location.reload()
}
function displayMode(mode = 'select') {
    const sectionSelectAttack = document.getElementById('select-attack')
    const sectionSelectPet = document.getElementById('select-pets')
    let showAttack = false
    let showSelect = false
    if (mode === "attack") {
        showAttack = true
    } else if (mode === "select") {
        removeChildren(spanPlayersPet)
        removeChildren(spanEnemysPet)
        showSelect = true

    }

    sectionSelectAttack.style.display = showAttack ? 'flex' : 'none'
    sectionSelectPet.style.display = showSelect ? 'flex' : 'none'
}
function removeChildren(element) {
    for (let i = 0; i < element.childNodes.length; i++) {
        element.childNodes[i].remove()
    }
}
window.addEventListener('DOMContentLoaded', startGame)