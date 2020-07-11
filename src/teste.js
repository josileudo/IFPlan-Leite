function currencyFormat(values) {
  var valorFormatado = values.toLocaleString()
  var removeVirgula = valorFormatado.replace(',', ' ')
  var adicionaVirgula = removeVirgula.replace('.', ',')
  var adicionaPonto = adicionaVirgula.replace(' ', '.')
  return adicionaPonto
}

const test = currencyFormat(-0.98)
console.log(test)