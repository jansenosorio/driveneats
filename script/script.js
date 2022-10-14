var pratoPrincipal
var bebidaPrincipal
var sobremesa

function selecionarPrato(selecao) {
  pratoPrincipal = document.querySelector('.borda-prato')

  if (pratoPrincipal !== null) {
    pratoPrincipal.classList.remove('borda-prato')
  }

  selecao.classList.toggle('borda-prato')

  ativarBotao()
}

function selecionarBebida(selecao) {
  bebidaPrincipal = document.querySelector('.borda-bebidas')

  if (bebidaPrincipal !== null) {
    bebidaPrincipal.classList.remove('borda-bebidas')
  }

  selecao.classList.toggle('borda-bebidas')

  ativarBotao()
}

function selecionarSobremesa(selecao) {
  sobremesa = document.querySelector('.borda-sobremesa')

  if (sobremesa !== null) {
    sobremesa.classList.remove('borda-sobremesa')
  }

  selecao.classList.toggle('borda-sobremesa')

  ativarBotao()
}

// Liberar botão pedido

function ativarBotao() {
  const botaoCaixa = document.querySelector('.button-rodape-disable')
  const botao = document.querySelector('button')

  if (
    pratoPrincipal !== undefined &&
    bebidaPrincipal !== undefined &&
    sobremesa !== undefined
  ) {
    botaoCaixa.classList.remove('button-rodape-disable')
    botaoCaixa.classList.add('button-rodape-enable')
    botao.disabled = false
    botao.textContent = 'Fechar Pedido'
  }
}

function checkout() {
  const caixaCheckout = document.querySelector('.container-checkout-hidden')

  caixaCheckout.classList = 'container-checkout-show'
}

function cancelar() {
  const caixaCheckout = document.querySelector('.container-checkout-show')

  caixaCheckout.classList = 'container-checkout-hidden'
}
