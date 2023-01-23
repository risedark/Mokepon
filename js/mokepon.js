function startGame (){
    const sectionSelectAttack = document.getElementById('select-attack')
    sectionSelectAttack.style.display='none'
    const sectionReset = document.getElementById('reset')
    sectionReset.style.display='none'

    const ButtonPetPlayer = document.getElementById('buttonPet')
    ButtonPetPlayer.addEventListener('click',SelectPetPlayer)
    const buttonFire = document.getElementById('button-fire')
    buttonFire.addEventListener('click',fireAttack)
    const buttonWater = document.getElementById('button-water')
    buttonWater.addEventListener('click',waterAttack)
    const buttonEarth = document.getElementById('button-earth')
    buttonEarth.addEventListener('click',earthAttack)
    const buttonReset = document.getElementById('button-reset')
    buttonReset.addEventListener('click',reset)

    
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

function selectPetEnemy(){
 let randomPet = random(1,6)

 if (randomPet == 1){
     spanEnemysPet.textContent = "Hipodoge"
 } else if (randomPet == 2){
    spanEnemysPet.textContent = "Capipepo"
 } else if (randomPet == 3){
    spanEnemysPet.textContent = "Ratigueya"
 } else if (randomPet == 4){
    spanEnemysPet.textContent = "Langostelvis"
 } else if (randomPet == 5){
    spanEnemysPet.textContent = "Tucapalma"
 } else {
    spanEnemysPet.textContent = "Pydos"
 }
 
}
function random (min,max){
    return Math.floor(Math.random() * (max-min+1)+min)
}


function SelectPetPlayer(){
    
    if (radioHipodoge.checked){
        petPlayer="Hipodoge"
    } else if (radioCapipepo.checked) {
        petPlayer="Capipepo"
    } else if (radioRatigueya.checked) {
        petPlayer="Ratigueya"
    } else if (radioLangostelvis.checked) {
        petPlayer="Langostelvis"
    } else if (radioTucapalma.checked == true) {
        petPlayer="Tucapalma"
    } else if (radioPydos.checked == true) {
        petPlayer="Pydos"
    } else{
        alert("You haven't selected any pet")
    }   
    if (!petPlayer == false){ 
    spanPlayersPet.textContent = petPlayer
    const sectionSelectAttack = document.getElementById('select-attack')
    sectionSelectAttack.style.display='block'
    const sectionSelectPet = document.getElementById('select-pets')
    sectionSelectPet.style.display='none'
    }
    
     selectPetEnemy()
}

function fireAttack(){
    playerAttack = "Fire"
    randomAttack ()
}
function waterAttack(){
    playerAttack = "Water"
    randomAttack ()
}
function earthAttack(){
    playerAttack = "Earth" 
    randomAttack()
}

function randomAttack(){
    enemyAttack = random(1,3)
    if (enemyAttack == 1){
        enemyAttack='Fire'  
    } else if (enemyAttack == 2){
        enemyAttack='Water'
    } else{
        enemyAttack='Earth'
    }
    fight()
}

function fight(){
    if (playerAttack == enemyAttack){
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

function checkLifes(){
    if (playerLifesCount == 0){
        finalMessage("Sorry, you lost, try again😖")
    } else if(enemyLifesCount ==0){
        finalMessage("CONGRATULATIONS 🎉🎊, you've Won the Combat")
    }
}

function message (result){
    const paragraph = document.createElement('p')
    paragraph.textContent = `Your pet attacked with ${playerAttack}, enemy's pet attacked with ${enemyAttack} - ${result}`
     const messagesSection= document.getElementById('messages')
     messagesSection.appendChild(paragraph)
}

function finalMessage (finalResult){
    const paragraph = document.createElement('p')
    paragraph.textContent = finalResult
     const messagesSection= document.getElementById('messages')
     messagesSection.appendChild(paragraph)
     disableAttacks()
     const sectionReset = document.getElementById('reset')
    sectionReset.style.display='block'
}
function  disableAttacks(){
    const attackButtons = document.getElementsByClassName('attackButton')
    for (i = 0; i < attackButtons.length ; i++){
        let button = attackButtons[i]
        button.disabled=true

    }
}

function reset (){
    location.reload()
}
window.addEventListener('DOMContentLoaded', startGame)