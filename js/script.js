console.log("test")

let app = new Vue({
    el: '#app',
    data: {
        search: '',
        message: 'App Meteo',

        cities: [
            { name: 'Paris' },
            { name: 'Athene' },
            { name: 'Tokyo' },
            { name: 'Osaka' },
            { name: 'Moscow' },
            { name: 'Los Santos' }
        ],

        showCities: false,
    },
    computed: {
        filteredCities: function() {
            var self = this;
            return this.cities.filter(function(cust) { return cust.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0; });
            //return this.customers;
        }
    }

})

// sert a rien pour l'instant`
Vue.component('button-counter', {
    data: function() {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">Vous m\'avez cliqué {{ count }} fois.</button>'
})

//new Vue({ el: '#components-demo' })