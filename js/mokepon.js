function startGame (){
    let ButtonPetPlayer = document.getElementById('buttonPet')
    ButtonPetPlayer.addEventListener('click',SelectPetPlayer)
}

function selectPetEnemy(){
 let randomAttack = random(1,6)

 if (randomAttack == 1){
     spanEnemysPet.textContent = "Hipodoge"
 } else if (randomAttack == 2){
    spanEnemysPet.textContent = "Capipepo"
 } else if (randomAttack == 3){
    spanEnemysPet.textContent = "Ratigueya"
 } else if (randomAttack == 4){
    spanEnemysPet.textContent = "Langostelvis"
 } else if (randomAttack == 5){
    spanEnemysPet.textContent = "Tucapalma"
 } else {
    spanEnemysPet.textContent = "Pydos"
 }
 
}
function random (min,max){
    return Math.floor(Math.random() * (max-min+1)+min)
}
let petPlayer = "" 

let radioHipodoge = document.getElementById('hipodoge')
let radioCapipepo = document.getElementById('capipepo')
let radioRatigueya = document.getElementById('ratigueya')
let radioLangostelvis = document.getElementById('langostelvis')
let radioTucapalma = document.getElementById('tucapalma')
let radioPydos = document.getElementById('pydos')
let spanPlayersPet = document.getElementById('playersPet')
let spanEnemysPet = document.getElementById('enemysPet')

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
    }
     selectPetEnemy()
}



window.addEventListener('DOMContentLoaded', startGame)