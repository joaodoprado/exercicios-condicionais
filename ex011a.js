const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

/* 
Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). 
Se for igual a 18 mil reais, o aluno não deve pagar mais nada,
pois já quitou a dívida.
*/
const totalJaPagoPeloAluno = 1000000;
if (mesesDecorridos > 60) {
    console.log('Prazo para cobrança esgotado')
}else if (totalJaPagoPeloAluno / 100 > 18000) {
    console.log('Já quitou a dívida')
}else if (rendaMensalEmCentavos / 100 > 2000) {
    console.log(`O valor da parcela esse mês é R$${(rendaMensalEmCentavos / 100) * (18 / 100)} reais`)
}
