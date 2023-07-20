// Pedra papel ou tesoura
const jogada1 = "papel"
const jogada2 = "papel"

if (jogada1 == "pedra" && jogada2 == "tesoura" || jogada1 == "tesoura" && jogada2 == "pedra") {
    console.log('Pedra venceu!')
} else if (jogada1 == "papel" && jogada2 == "tesoura" || jogada1 == "tesoura" && jogada2 == "papel"){
    console.log('Tesoura venceu!')
}else if (jogada1 == "pedra" && jogada2 == "papel" || jogada1 == "papel" && jogada2 == "pedra") {
    console.log("Papel venceu!")
} else {
    console.log("EMPATE!")
}