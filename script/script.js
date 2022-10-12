function selecionarPrato(item) {
  var pratoPrincipal = document.querySelector('.prato-P-conteudo .borda')

  if (pratoPrincipal !== null) {
    pratoPrincipal.classList.remove('borda')
  }

  item.classList.add('borda')
  pratoPrincipal = item
}
