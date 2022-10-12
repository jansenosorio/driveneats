function selecionarPrato(item) {
  const pratoPrincipal = document.querySelector('.borda')

  if (pratoPrincipal !== null) {
    pratoPrincipal.classList.remove('borda')
  }

  item.classList.toggle('borda')
}
