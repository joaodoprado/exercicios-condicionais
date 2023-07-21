const rendaMensalEmCentavos = 150000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

/* 
Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). 
Se for igual a 18 mil reais, o aluno não deve pagar mais nada,
pois já quitou a dívida.
*/
const totalJaPagoPeloAluno = 1000000;
if (mesesDecorridos > 60) {
    console.log('O valor da parcela esse mês é R$0,00 reais. Nenhum valor é pois o prazo para cobrança ja expirou.')
}else if (totalJaPagoPeloAluno / 100 > 18000) {
    console.log('O valor da parcela esse mês é R$0,00 reais. Nenhum valor é devido o aluno ja ter pago o valor total do curso R$18000,00 reais.')
}else if (rendaMensalEmCentavos / 100 > 2000) {
    console.log(`O valor da parcela esse mês é R$${(rendaMensalEmCentavos / 100) * (18 / 100)} reais`)
} else {
    console.log('O valor da parcela esse mês é R$0,00 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$2000,00 reais.')
}