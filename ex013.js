//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento == "credito") {
    const desconto = valorDoProduto * 5 / 100;
    let valorFinal = valorDoProduto - desconto;
    valorFinal = valorFinal / 100
    console.log(`Valor a ser pago: R$ ${valorFinal.toFixed(2)}`)
}