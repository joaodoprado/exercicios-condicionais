// Isenção de impostos
const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; 

if (aposentada == true) {
    console.log('ISENTA')
} else if (portadoraDeDoenca == true) {
    console.log('ISENTA')
}else if (totalDeRendimentos < 2855970) {
    console.log('VAZA LEÃO! JA TA DIFICIL SEM VOCE')
}else {
    console.log('PEGA LEÃO')
}