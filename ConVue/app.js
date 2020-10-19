new Vue({
  el: '#app',
  
  data() {
    return {
      autos: [
        {
          make: "Ford",
          model: "Mustang",
          year: 1969,
          maxSpeed: 190,
          kilometros: 50000,
          precio: 1000
        },
        {
          make: "Chevrolet",
          model: "Cruzie",
          year: 2015,
          maxSpeed: 170,
          kilometros: 4000,
          precio: 2000
        },
        {
          make: "Fiat",
          model: "Uno",
          year: 1999,
          maxSpeed: 100,
          kilometros: 30000,
          precio: 1500
        },
        {
          make: "Ford",
          model: "Falcon",
          year: 1964,
          maxSpeed: 110,
          kilometros: 6000,
          precio: 500
        },
        {
          make: "Nissan",
          model: "Zeta",
          year: 2007,
          maxSpeed: 170,
          kilometros: 2000,
          precio: 10000
        },
        {
          make: "Ferrari",
          model: "250 GT",
          year: 2002,
          maxSpeed: 300,
          kilometros: 2500,
          precio: 15000
        },
        {
          make: "Ford",
          model: "Focus",
          year: 1999,
          maxSpeed: 90,
          kilometros: 3000,
          precio: 5000
        },
        {
          make: "Peugeot",
          model: "208",
          year: 2020,
          maxSpeed: 160,
          kilometros: 600,
          precio: 100000
        },
        {
          make: "Lamborgini",
          model: "Murcielago",
          year: 2001,
          maxSpeed: 290,
          kilometros: 25300,
          precio: 90000
        },
        {
          make: "BMW",
          model: "220i",
          year: 2005,
          maxSpeed: 220,
          kilometros: 70000,
          precio: 350000
        },
      ]
    }
  },
    
    computed: {
      promedio: function(){
        acumuladorVelocidad = 0;
        this.autos.forEach((auto) => {
          acumuladorVelocidad += auto.maxSpeed;
        });
        return promedio = acumuladorVelocidad / this.autos.length;
      }
    },

      lento: function() {
        min = this.autos[0].maxSpeed;
        this.autos.forEach((auto) => {
          if(auto.maxSpeed < min) {
            min = auto.maxSpeed
          }
        })
        return min
      },
    
    methods: {
    }
})