const produtos = 'PRODUTOS';
const quantidade = 'QUANTIDADE';
const vlrUnit = 'VALOR UNITÁRIO';
const vlrParcial = 'CONSUMO DA MESA';
const desconto = 'VALOR ANTECIPADO';
const vlrDesconto = 'TOTAL ANTECIPADO :';
const vlrTotal = 'VALOR À PAGAR :';
const mostrarTotal = 'Descontar valor separadamente';

let mesa1 = {
	numMesa: 1,
	consumo: [
		{
			nome: 'suco maracujá',
			quant: 1,
			valor: 5.50
		},
		{
			nome: 'guaraná coca-cola',
			quant: 2,
			valor: 3.00
		},
		{
			nome: 'feijoada',
			quant: 2,
			valor: 12.00
		}
	],
	totalDesc: 0.0,
	dados: true,
	mostrar: false
}

let mesa2 = {
	numMesa: 2,
	consumo: [
		{
			nome: 'água',
			quant: 2,
			valor: 2.50
		},
		{
			nome: 'guaraná fanta-uva',
			quant: 2,
			valor: 3.00
		},
		{
			nome: 'porção de frios',
			quant: 2,
			valor: 23.50
		}
	],
	totalDesc: 0,
	dados: true,
	mostrar: false
}

let mesa3 = {
	numMesa: 3,
	consumo: [
		{
			nome: 'cerveja brahma',
			quant: 2,
			valor: 2.50
		},
		{
			nome: 'fanta',
			quant: 2,
			valor: 3.00
		},
		{
			nome: 'pizza mussarela',
			quant: 1,
			valor: 23.50
		}
	],
	totalDesc: 0,
	dados: true,
	mostrar: false
}
