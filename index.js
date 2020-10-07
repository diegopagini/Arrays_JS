let myArrayDeObjetos = [
  {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
    maxSpeed: 190
  },
  {
    make: 'Chevrolet',
    model: 'Cruzie',
    year: 2015,
    maxSpeed: 170
  },
  {
    make: 'Fiat',
    model: 'Uno',
    year: 1999,
    maxSpeed: 100
  },
  {
    make: 'Honda',
    model: 'Fit',
    year: 2012,
    maxSpeed: 110
  },
  {
    make: 'Nissan',
    model: 'Zeta',
    year: 2007,
    maxSpeed: 170
  },
    {
    make: 'Ferrari',
    model: '250 GT',
    year: 2002,
    maxSpeed: 300
  },
  {
    make: 'Ford',
    model: 'Focus',
    year: 1999,
    maxSpeed: 90
  },
  {
    make: 'Peugeot',
    model: '208',
    year: 2020,
    maxSpeed: 160
  },
  {
    make: 'Lamborgini',
    model: 'Murcielago',
    year: 2001,
    maxSpeed: 290
  },
  {
    make: 'BMW',
    model: '220i',
    year: 2005,
    maxSpeed: 220
  },
]

// 1 Saber la velocidad promedio de los autos
// 2 La marca que mas aparece
// 3 Mostrar solo los que tengan mayor velocidad que 150

function mostrarTodosLosAutos(){
  auto = '';
  myArrayDeObjetos.forEach(el => {
    auto += `
    <div class="container">
      <h3>${el.make}</h3>
      <h3>${el.model}</h3>
      <h3>${el.year}</h3>
      <h3>${el.maxSpeed}</h3>
    </div>
    `
  })
  document.getElementById('body').innerHTML = auto;
}
mostrarTodosLosAutos();