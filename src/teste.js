function currencyFormat(values) {
	var valorFormatado = values.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  return valorFormatado
}

const test = currencyFormat(8976.98)
console.log(test)