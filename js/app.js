new Vue({
	el: '#app',
	data: {
		query: ''
	},
	methods:{
		search: function() {
			console.log(this.query);
		}
	},
	mounted() {
		console.log('Vue mounted');
	}
})