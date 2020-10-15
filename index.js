let autosArray = [
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
];

// 1 Saber la velocidad promedio de los autos
// 2 La marca que mas aparece
// 3 Mostrar solo los que tengan mayor velocidad que 150

function mostrarTodosLosAutos() {
  auto = "";
  autosArray.forEach((el) => {
    auto += `
    <div class="container">
      <h3>${el.make}</h3>
      <h3>${el.model}</h3>
      <h3>${el.year}</h3>
      <h3>${el.maxSpeed}</h3>
    </div>
    `;
  });
  document.getElementById("body").innerHTML = auto;
}
mostrarTodosLosAutos();

// Calcuar el promedio de velocidades
// 1° sumar todas las velocidades
// 2° dividirlas por el total

let promedio = "";
function calcularPromedioVelocidad() {
  acumuladorVelocidad = 0;
  autosArray.forEach((auto) => {
    acumuladorVelocidad += auto.maxSpeed;
  });

  promedio = acumuladorVelocidad / autosArray.length;

  console.log("la velocidad promedio de todos los autos es", promedio);
}

calcularPromedioVelocidad();

document.getElementById(
  "mostrarPromedio"
).innerHTML = `la velocidad promedio de todos los autos es ${promedio}`;

// otra manera
let promedioDos =
  autosArray.reduce((acumulador, auto) => acumulador + auto.maxSpeed, 0) /
  autosArray.length;
console.log("la velocidad promedio, utiizando reduce es", promedioDos);

// El auto mas lento
function elMasLento() {
  min = autosArray[0].maxSpeed;
  autosArray.forEach((auto) => {
    if (auto.maxSpeed < min) {
      min = auto.maxSpeed;
    }
  });

  console.log('1° el mas lento es ', min);
}

elMasLento();
document.getElementById(
  "masLento"
).innerHTML = `El auto mas lento va a ${min}`;
// Ahora funca


function elMasLentoDos() {
  /*arrayDeVelocidades = [];
  autosArray.forEach((auto) => {
    arrayDeVelocidades.push(auto.maxSpeed);
  });*/

  /*const arrayDeVelocidades = autosArray.map((auto) => {
    return auto.maxSpeed;
  });*/

  masLento = Math.min(...autosArray.map((auto) => {
    return auto.maxSpeed;
  }));


  //masLento = Math.min(...arrayDeVelocidades);
  console.log('mas lento 2 ' ,masLento);
}
elMasLentoDos();
// Anda bien

// 2 La marca que mas aparece
function apareceMasVeces() {
  //Separo los no repetidos
  maximo = -1;
  resultsString = [];
  autosArray.forEach((auto) => {
    if (resultsString.length === 0) {
      //Si resultsString esta vacio, le hago push del array con las marcas
      resultsString.push(auto.make);
      // console.log('en este momento el array esta asi', resultsString) // Solo va a mostrar "Ford" porque hizo el bucle una sola vez
    } else {
      //Si no esta vacio creamos una variable que guarde solo las marcas que no se repiten
      esta = resultsString.some((autoOk) => autoOk === auto.make); //Me devuelve true o false, si la comaparacion se realiza
      if (!esta) {
        //Solo sumo a resultsString lo que aparece una vez
        resultsString.push(auto.make);
        cantidad = autosArray.filter((auto) => {
          return auto.make === resultsString;
        });
        if (cantidad.length > maximo) {
          /*siempre va a ser mayor*/ maximo = cantidad.length;
          console.log("La marca que aparece mas es:", resultsString[maximo]);
        }
      }
    }
  });
  // console.log("En este momento el array esta asi:", resultsString);
  // max = -99999;
  // resultsString.forEach((autoString, index) => {
  //   //Con el array con los datos sin repetir
  //   cant = autosArray.filter((auto) => {
  //     return auto.make === autoString; //comparo el array original con el nuevo
  //   });
  //   if (cant.length > max) {
  //     max = cant.length;
  //     masRepetido = index;
  //   }
  // });
  // console.log("La marca que aparece mas es:", resultsString[masRepetido]);
}
apareceMasVeces();
document.getElementById(
  "apareceMas"
).innerHTML = `la marca que aparece mas es ${resultsString[maximo]}`;

obtenerAutosPorVelocidad(150);
obtenerAutosPorVelocidad(190);
obtenerAutosPorVelocidad(220);
obtenerAutosPorVelocidad(100);

function obtenerAutosPorVelocidad(velocidad){
  // Mostrar los mas rapidos
  let autosRapidos = autosArray.filter((auto) => auto.maxSpeed > velocidad);
  console.log("Los autos mas rapidos son:", autosRapidos);
  mostrar = "";
  autosRapidos.forEach((auto) => {
    mostrar += `
    <div class="mini-container">
      <h3 class="big-size">${auto.make}</h3>
      <h3>${auto.model}</h3>
    </div>
    `;
  });

  document.getElementById(
    "masRapidos"
  ).innerHTML += `Los autos que pueden ir a mas velocidad que ${velocidad} son: ${mostrar}`;
} 


/* */
function obtenerAutosPorKilometraje(km, xArray){ // Mostramos los que tengan < de km kilometros
  let autosMostrados = xArray.filter((auto) => auto.kilometros < km);
  console.log(`los autos que tienen menos de ${km} kilometros son:`, autosMostrados);
}
obtenerAutosPorKilometraje(5000, autosArray);
obtenerAutosPorKilometraje(10000, autosArray);
obtenerAutosPorKilometraje(1000, autosArray);



function obtenerAutosPorPrecio(precio, xArray){ //Mostramos los que tengan < de precio 
  let autosMostrados = xArray.filter((auto) => auto.precio < precio);
  console.log(`los autos que tienen menos de ${precio} precio  son:`, autosMostrados);
}
obtenerAutosPorPrecio(20000, autosArray);
obtenerAutosPorPrecio(10000, autosArray);
obtenerAutosPorPrecio(5000, autosArray);


