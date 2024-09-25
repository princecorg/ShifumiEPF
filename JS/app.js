const buttons = document.querySelectorAll('button')
let resultat = document.getElementById('result')
let joueur = ''
let robot = ''
let victory = ''

for (let i = 0; i <= buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    joueur = buttons[i].textContent
    robot = buttons[Math.floor(Math.random() * 3)].textContent
    if (joueur === robot) {
      victory = 'égalité'
    } else if (
      (joueur === 'Pierre' && robot === 'Ciseaux') ||
      (joueur === 'Ciseaux' && robot === 'Feuille') ||
      (joueur === 'Feuille' && robot === 'Pierre')
    ) {
      victory = 'victoire'
    } else {
      victory = 'défaite'
    }
    resultat.innerHTML = `J'ai joué : ${joueur} <br> Le robot a joué : ${robot} <br> c'est une <strong>${victory}</strong>`
  })
}
