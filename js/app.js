new Vue({
	el: '#app',
	data: {
		query: '',
		drugs: [],
		isLoading: true,
	},
	methods:{
		search: function() {
			this.isLoading = false;
			axios.get('http://htools-tz-msd-drug-tool-api.dokku-1.codefortanzania.org/api/drugs', {
			    params: {
			      name: this.query
			    }
			  })
			  .then(function (response) {
			  	this.isLoading = true;
			  	this.drugs = response.data.drugs;
			  }.bind(this))
			  .catch(function (error) {
			    console.log(error);
			  });
		}
	},
	mounted() {
		console.log('Vue mounted');
	}
})