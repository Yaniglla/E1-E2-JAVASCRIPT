const menuPizzas = [];

class Pizzas {
  constructor(id, nombre, ingredientes, precio) {
    this.id = id;
    this.nombre = nombre;
    (this.ingredientes = ingredientes), (this.precio = precio);
  }
}

const Muzarella = new Pizzas(
  0,
  "Muzarella",
  ["salsa", "queso muzarella", "aceituna"],
  1200
);
const Napolitana = new Pizzas(
  1,
  "Napolitana",
  ["salsa", "queso muzarella", "tomate", "aceituna"],
  1500
);
const Calabresa = new Pizzas(
  2,
  "Calabresa",
  ["salsa", "queso muzarella", "longaniza calabresa cortada en rodajas"],
  1800
);
const Espinaca = new Pizzas(
  3,
  "Espinaca a la crema",
  ["salsa", "queso muzarella", "aceituna", "aceite de oliva", "espinaca"],
  1700
);
const Fugazzetton = new Pizzas(
  4,
  "Fugazzettón",
  [
    "cebolla en juliana",
    "queso cremoso",
    "jamón",
    "tomate al natural",
    "aceite de oliva",
    "parmesano",
  ],
  1800
);
const Primavera = new Pizzas(
  5,
  "Primavera",
  ["palmitos", "huevo duro", "morrones", "salsa golf"],
  2000
);

menuPizzas.push(
  Muzarella,
  Napolitana,
  Calabresa,
  Espinaca,
  Fugazzetton,
  Primavera
);

const btnS = document.getElementById("submit"),
  $hgroup = document.getElementById("render");

const buscarID = () => {
  while ($hgroup.firstChild) {
    $hgroup.removeChild($hgroup.firstChild);
  }

  let inputValue = document.getElementById("numberID").value;

  if(inputValue === "") {
    let inputError = document.getElementById("numberID");
    inputError.setAttribute('aria-invalid', 'true')
    let $error = document.createElement("h2");
    $error.style.color = "violet";
    $error.innerHTML = `<strong> Ingresar un Numero <strong>`;
    $hgroup.appendChild($error);
    
  } else {
    const mostrar = menuPizzas.find((pizza) => pizza.id == inputValue);

    if (mostrar) {
      let inputError = document.getElementById("numberID");
      inputError.setAttribute('aria-invalid', 'false')
      let $name = document.createElement("h2");
      let $price = document.createElement("h3");
      $name.innerHTML = `🍕 ${mostrar.nombre}`;
      $price.innerHTML = `💲 ${mostrar.precio}`;

      $hgroup.appendChild($name);
      $hgroup.appendChild($price);
    } else {
      let inputError = document.getElementById("numberID");
      inputError.setAttribute('aria-invalid', 'true');
      let $error = document.createElement("h2");
      $error.style.color = "violet";
      $error.innerHTML = `<strong> No existe Pizza con esa ID <strong>`;
      $hgroup.appendChild($error);
    }
  }
};

$hgroup.style.textAlign = "center";

const removeRender = () => {
  document.getElementById("numberID").value = "";
};

btnS.addEventListener("click", (e) => {
  buscarID();
  removeRender();
});