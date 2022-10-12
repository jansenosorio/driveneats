function selecionarPrato(selecao) {
  const pratoPrincipal = document.querySelector('.borda-prato')

  if (pratoPrincipal !== null) {
    pratoPrincipal.classList.remove('borda-prato')
  }

  selecao.classList.toggle('borda-prato')
}

function selecionarBebida(selecao) {
  const bebidaPrincipal = document.querySelector('.borda-bebidas')
  if (bebidaPrincipal !== null) {
    bebidaPrincipal.classList.remove('borda-bebidas')
  }

  selecao.classList.toggle('borda-bebidas')
}

function selecionarSobremesa(selecao) {
  const sobremesa = document.querySelector('.borda-sobremesa')
  if (sobremesa !== null) {
    sobremesa.classList.remove('borda-sobremesa')
  }

  selecao.classList.toggle('borda-sobremesa')
}
