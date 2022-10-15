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
  const descricaoUm = document.querySelector('.descricao-1')
  const descricaoDois = document.querySelector('.descricao-2')
  const descricaoTres = document.querySelector('.descricao-3')
  const valorUm = document.querySelector('.valor-1')
  const valorDois = document.querySelector('.valor-2')
  const ValorTres = document.querySelector('.valor-3')
  const total = document.querySelector('.valor-total')

  caixaCheckout.classList = 'container-checkout-show'

  const pratoPrincipalCheck = document.querySelector(
    '.borda-prato .nome-item'
  ).innerHTML
  const bebidaPrincipalCheck = document.querySelector(
    '.borda-bebidas .nome-item'
  ).innerHTML
  const sobremesaCheck = document.querySelector(
    '.borda-sobremesa .nome-item'
  ).innerHTML

  const pratoPrincipalCheckValue = Number(
    document.querySelector('.borda-prato .valor-item').innerHTML
  )
  const bebidaPrincipalCheckValue = Number(
    document.querySelector('.borda-bebidas .valor-item').innerHTML
  )
  const sobremesaCheckValue = Number(
    document.querySelector('.borda-sobremesa .valor-item').innerHTML
  )

  descricaoUm.textContent = pratoPrincipalCheck
  descricaoDois.textContent = bebidaPrincipalCheck
  descricaoTres.textContent = sobremesaCheck

  valorUm.textContent = pratoPrincipalCheckValue.toFixed(2)
  valorDois.textContent = bebidaPrincipalCheckValue.toFixed(2)
  ValorTres.textContent = sobremesaCheckValue.toFixed(2)

  const calculoTotal =
    pratoPrincipalCheckValue + bebidaPrincipalCheckValue + sobremesaCheckValue

  total.textContent = calculoTotal.toFixed(2)
}

function cancelar() {
  const caixaCheckout = document.querySelector('.container-checkout-show')

  caixaCheckout.classList = 'container-checkout-hidden'
}
