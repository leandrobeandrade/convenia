const tituloApp = 'Acompanhamento de mesas';
const jumbotron = 'Selecione uma mesa para ver seu consumo e descontar um valor caso pago em separado.';

														/* TOPO */
Vue.component('topo', {
	template: 
	`<div>	
		<div id="titulo">	
			<h1>{{ tituloApp }}</h1>
		</div>
	</div>`
})

														/* JUMBOTRON */
Vue.component('sem-mesa', {
	template: 
	`<div id="sem-mesa">
		<h1 id="jumb">{{ jumbotron }}</h1>
	</div>`  
})

														/* MESAS 01 - 02 - 03 */
Vue.component('mesa1', {
	template: 	
	`<div class="mesa">
		<div class="mesa-content"><p>{{ produtos }}<i class="fas fa-arrows-alt-v" v-on:click="dados = !dados"></i></p>
			<transition name="fade"><ul v-show="dados"><li v-for="nomes in mesa1.consumo">{{ nomes.nome }}</li></ul></transition>
		</div>
		<div class="mesa-content"><p>{{ quantidade }}</p>
			<transition name="fade"><ul v-show="dados"><li v-for="quantidades in mesa1.consumo">{{ quantidades.quant }}</li></ul></transition>
		</div>
		<div class="mesa-content"><p>{{ vlrUnit }}</p>
			<transition name="fade"><ul v-show="dados"><li v-for="valores in mesa1.consumo">{{ valores.valor.toFixed(2) }}</li></ul></transition>
		</div>
		<div class="mesa-content"><p>{{ vlrParcial }}</p><p>{{ valor_Parcial }}</p>
			<div id="mesa-content-desconto">
				<p><input type="checkbox" id="check" v-model="mostrar"><label id="label-check" for="check" v-model="mostrar"> &nbsp; {{ mostrarTotal }}</label></p>
				<p v-if="mostrar">{{ desconto }} &nbsp; <input type="number" @keyup.enter="descontar" @focus="selecao"></p>
				<p class="mesa-content-totais" v-if="mostrar">{{ vlrDesconto }} <span>{{ totalDesc }}</span></p>
				<p class="mesa-content-totais" v-if="mostrar">{{ vlrTotal }} <span>{{ valor_Parcial - totalDesc }}<span></p>
			<div>
		</div>
	</div>`,

	data: () => {
		return mesa1;
	},

	computed: {
		valor_Parcial: () => {
			let valor1 = mesa1.consumo[0].valor;
			let valor2 = mesa1.consumo[1].valor; 
			let valor3 = mesa1.consumo[2].valor;

			let quant1 = mesa1.consumo[0].quant;
			let quant2 = mesa1.consumo[1].quant;
			let quant3 = mesa1.consumo[2].quant;

			let total1 = valor1 * quant1;
			let total2 = valor2 * quant2;
			let total3 = valor3 * quant3;

			let valorTotal= (total1 + total2 + total3).toFixed(2);

			return valorTotal;
		}
	},

	methods: {
		selecao: (event) => {
			setTimeout (() => {
				event.target.select()
			}, 0)
		},
		descontar: (event) => {
			mesa1.totalDesc += parseFloat(event.target.value);
			event.target.value = '';
		},
		dados: () => {

		}
	}
})

Vue.component('mesa2', {
	template: 	
	`<div class="mesa">
		<div class="mesa-content"><p>{{ produtos }}<i class="fas fa-arrows-alt-v" v-on:click="dados = !dados"></i></p>
			<transition name="fade"><ul v-show="dados"><li v-for="nomes in mesa2.consumo">{{ nomes.nome }}</li></ul></transition>
		</div>
		<div class="mesa-content"><p>{{ quantidade }}</p>
			<transition name="fade"><ul v-show="dados"><li v-for="quantidades in mesa2.consumo">{{ quantidades.quant }}</li></ul></transition>
		</div>
		<div class="mesa-content"><p>{{ vlrUnit }}</p>
			<transition name="fade"><ul v-show="dados"><li v-for="valores in mesa2.consumo">{{ valores.valor.toFixed(2) }}</li></ul></transition>
		</div>
		<div class="mesa-content"><p>{{ vlrParcial }}</p><p>{{ valor_Parcial }}</p>
			<div id="mesa-content-desconto">
				<p><input type="checkbox" id="check" v-model="mostrar"><label id="label-check" for="check" v-model="mostrar"> &nbsp; {{ mostrarTotal }}</label></p>
				<p v-if="mostrar">{{ desconto }} &nbsp; <input type="number" @keyup.enter="descontar" @focus="selecao"></p>
				<p class="mesa-content-totais" v-if="mostrar">{{ vlrDesconto }} <span>{{ totalDesc }}</span></p>
				<p class="mesa-content-totais" v-if="mostrar">{{ vlrTotal }} <span>{{ valor_Parcial - totalDesc }}<span></p>
			<div>
		</div>
	</div>`,

	data: () => {
		return mesa2;
	},

	computed: {
		valor_Parcial: () => {
			let valor1 = mesa2.consumo[0].valor;
			let valor2 = mesa2.consumo[1].valor; 
			let valor3 = mesa2.consumo[2].valor;

			let quant1 = mesa2.consumo[0].quant;
			let quant2 = mesa2.consumo[1].quant;
			let quant3 = mesa2.consumo[2].quant;

			let total1 = valor1 * quant1;
			let total2 = valor2 * quant2;
			let total3 = valor3 * quant3;

			let valorTotal = (total1 + total2 + total3).toFixed(2);

			return valorTotal;
		}
	},

	methods: {
		selecao: (event) => {
			setTimeout (() => {
				event.target.select()
			}, 0)
		},
		descontar: (event) => {
			mesa2.totalDesc += parseFloat(event.target.value);
			event.target.value = '';
		}
	}
})

Vue.component('mesa3', {
	template: 	
	`<div class="mesa">
		<div class="mesa-content"><p>{{ produtos }}<i class="fas fa-arrows-alt-v" v-on:click="dados = !dados"></i></p> 
			<transition name="fade"><ul v-show="dados"><li v-for="nomes in mesa3.consumo">{{ nomes.nome }}</li></ul></transition>
		</div>
		<div class="mesa-content"><p>{{ quantidade }}</p>
			<transition name="fade"><ul v-show="dados"><li v-for="quantidades in mesa3.consumo">{{ quantidades.quant }}</li></ul></transition>
		</div>
		<div class="mesa-content"><p>{{ vlrUnit }}</p>
			<transition name="fade"><ul v-show="dados"><li v-for="valores in mesa3.consumo">{{ valores.valor.toFixed(2) }}</li></ul></transition>
		</div>
		<div class="mesa-content"><p>{{ vlrParcial }}</p><p>{{ valor_Parcial }}</p>
			<div id="mesa-content-desconto">
				<p><input type="checkbox" id="check" v-model="mostrar"><label id="label-check" for="check" v-model="mostrar"> &nbsp; {{ mostrarTotal }}</label></p>
				<p v-if="mostrar">{{ desconto }} &nbsp; <input type="number" @keyup.enter="descontar" @focus="selecao"></p>
				<p class="mesa-content-totais" v-if="mostrar">{{ vlrDesconto }} <span>{{ totalDesc }}</span></p>
				<p class="mesa-content-totais" v-if="mostrar">{{ vlrTotal }} <span>{{ valor_Parcial - totalDesc }}<span></p>
			<div>
		</div>	
	</div>`,

	data: () => {
		return mesa3;
	},

	computed: {
		valor_Parcial: () => {
			let valor1 = mesa3.consumo[0].valor;
			let valor2 = mesa3.consumo[1].valor; 
			let valor3 = mesa3.consumo[2].valor;

			let quant1 = mesa3.consumo[0].quant;
			let quant2 = mesa3.consumo[1].quant;
			let quant3 = mesa3.consumo[2].quant;

			let total1 = valor1 * quant1;
			let total2 = valor2 * quant2;
			let total3 = valor3 * quant3;

			let valorTotal = (total1 + total2 + total3).toFixed(2);

			return valorTotal;
		}	 
	},

	methods: {
		selecao: (event) => {
			setTimeout (() => {
				event.target.select()
			}, 0)
		},
		descontar: (event) => {
			mesa3.totalDesc += parseFloat(event.target.value);
			event.target.value = '';
		}
	}
})

														/* FOOTER */
Vue.component('rodape', {
	template: 	
	`<div id="rodape">
		<p>Todos os direitos resevados &#169; -  <a :href="url">Convenia<a/></p>
	</div>`,

	data: () => {
		return {
			url: 'https://www.convenia.com.br'
		}
	}
})

														/* APP */
let app = new Vue({
	el: '#app',
	data: {
		tituloApp: 'Acompanhamento de mesas',
		escolhaMesa: 'Escolher a mesa',
		opcoes: ['', '1', '2', '3'],
		numMesa: ''
	}	
})
