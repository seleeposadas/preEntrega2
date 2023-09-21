//variables que va a usar el usuario
let sNombre;
let nHacer;
//variables de daño de ataque
let nDanioPoder1 = 50;
let nDanioPoder2 = 40;
let bDesconectar = false;
let pokemonElegido = [];
let pokemonRival = [];
let vidaRival = 100;
let vida = 100;
//arrays
const pokemones = [
    { id: 1, nombre: 'Bulbasaur', tipo: 'Planta', poder1: 'Placaje', poder2: 'Gruñido', danioPoder1: 50, danioPoder2: 40, visto: false },
    { id: 2, nombre: 'Charmander', tipo: 'Fuego', poder1: 'Arañazo', poder2: 'Gruñido', danioPoder1: 50, danioPoder2: 40, visto: false },
    { id: 3, nombre: 'Squirtle', tipo: 'Agua', poder1: 'Placaje', poder2: 'Gruñido', danioPoder1: 50, danioPoder2: 40, visto: false },
    { id: 4, nombre: 'Pidgeotto', tipo: 'Volador', poder1: 'Vista Lince', poder2: 'Tumbos', danioPoder1: 50, danioPoder2: 40, visto: false },
    { id: 5, nombre: 'Metapod', tipo: 'Bicho', poder1: 'Placaje', poder2: 'Picadura', danioPoder1: 50, danioPoder2: 40, visto: false },
    { id: 6, nombre: 'Rattata', tipo: 'Tierra', poder1: 'Placaje', poder2: 'Ataque Rapido', danioPoder1: 50, danioPoder2: 40, visto: false },
    { id: 7, nombre: 'Nidorina', tipo: 'Veneno', poder1: 'Mordisco', poder2: 'Picotazo Veneno', danioPoder1: 50, danioPoder2: 40, visto: false },
    { id: 8, nombre: 'Clefairy', tipo: 'Hada', poder1: 'Cabezazo Zen', poder2: 'Destructor', danioPoder1: 50, danioPoder2: 40, visto: false },
    { id: 9, nombre: 'Voltorb', tipo: 'Electrico', poder1: 'Placaje', poder2: 'Chispa', danioPoder1: 50, danioPoder2: 40, visto: false },
    { id: 10, nombre: 'Hypno', tipo: 'agua', poder1: 'Cabezazo Zen', poder2: 'Confunsion', danioPoder1: 50, danioPoder2: 40, visto: false }
];
//funciones
function elegirPokemon(array) {
    let id = Number(prompt("Seleccione pokemon por id\n" + mostrar(array, "id", "nombre", "tipo", "poder1", "poder2")));

    if (array.findIndex(pokemon => pokemon.id === id) === -1) {
        alert("El ID especificado no existe");
        return;
    }

    return array.find(pokemon => pokemon.id === id);
}
//funcion para mostrar informacion del pokemon
function mostrar(array, propiedad1, propiedad2, propiedad3, propiedad4, propiedad5) {
    if (propiedad5 != null) {
        return array.map(elemento => elemento[propiedad1] + " - " + elemento[propiedad2] + " - " + elemento[propiedad3] + " - " + elemento[propiedad4] + " - " + elemento[propiedad5]).join("\n");
    } else if (propiedad4) {
        return array.map(elemento => elemento[propiedad1] + " - " + elemento[propiedad2] + " - " + elemento[propiedad3] + " - " + elemento[propiedad4]).join("\n");
    } else if (propiedad3 != null) {
        return array.map(elemento => elemento[propiedad1] + " - " + elemento[propiedad2] + " - " + elemento[propiedad3]).join("\n");
    } else {
        return array.map(elemento => elemento[propiedad1] + " - " + elemento[propiedad2]).join("\n");
    }
}
//funcion para ordenar 
function ordenar(array, propiedad, formaAsc) {
    array.sort((a, b) => {
        if (a[propiedad] > b[propiedad]) {
            return 1;
        }
        if (a[propiedad] < b[propiedad]) {
            return -1;
        }
        return 0;
    })

    if (!formaAsc) {
        array.reverse();
    }
}
//funcion para ver los tipos de pokemon 
function mostrarTipoPokemon(array) {
    let resultado = [];
    array.forEach(elemento => {
        if (!resultado.includes(elemento.tipo)) {
            resultado.push(elemento.tipo);
        }
    })
    return resultado.join(", ");
}
//funcion pokemonRamdon
function randomPokemon(array) {
    return array[Math.floor(Math.random() * array.length)];
}
//Funcion de menu principal Pokedex
//Funcion, mostrar menu principal
function menuPrincipal(pokemones) {

    let opcion;
    let opcionOrdenar;
    do {
        opcion = Number(prompt("Ingrese opción:\n1 - Mostrar pokemones\n2 - Ver pokemon en detalle \n3 - Filtrar pokemon por tipo \n4 - Ordenar \n0 - para salir"));

        switch (opcion) {
            case 1:
                alert(mostrar(pokemones, "id", "nombre"));
                break
            case 2:
                let pokemonBuscado = elegirPokemon(pokemones);
                alert("ID: " + pokemonBuscado.id + " Nombre: " + pokemonBuscado.nombre + " Tipo: " + pokemonBuscado.tipo + " Poder1: " + pokemonBuscado.poder1 + " Poder2: " + pokemonBuscado.poder2);
                break
            case 3:
                let tipo = prompt("Ingrese tipo\n" + mostrarTipoPokemon(pokemones)).toLowerCase();
                pokemonesFiltrados = pokemones.filter(pokemon => pokemon.tipo === tipo);
                alert(mostrar(pokemonesFiltrados, "nombre", "tipo", "poder1", "poder2"));
                break
            case 4:
                opcionOrdenar = Number(prompt('1 - Ordenar por nombre asc\n2 - Ordenar por nombre desc\n3 - Ordenar por tipo asc\n4 - Ordenar por tipo desc\n 5 - Volver al menú'));
                do {
                    if (opcionOrdenar == 1) {
                        ordenar(pokemones, "nombre", true);
                    } else if (opcionOrdenar == 2) {
                        ordenar(pokemones, "nombre", false);
                    } else if (opcionOrdenar == 3) {
                        ordenar(pokemones, "tipo", true);
                    } else if (opcionOrdenar == 4) {
                        ordenar(pokemones, "tipo", false);
                    }
                    alert(mostrar(pokemones, "id", "nombre"));
                    break;
                } while (opcionOrdenar != 5);
                break
            default:
                break
        }
    } while (opcion != 0);
}
//funcion para agregar pokemon a mi pokebola(tal vez no la use)
function agregar(arrayPrincipal, array) {
    let id = Number(prompt("Seleccione el pokemon que desea agregar a su pokebola por su id:\n" + mostrar(arrayPrincipal, "id", "nombre", "tipo")));
    let pokemonElejido = arrayPrincipal.find(elemento => elemento.id === id);
    let pokemonEnPokebola = array.find(elemento => elemento.id === pokemonElejido.id);

    if (pokemonEnPokebola.cantidad > 0) {
        if (pokemonEnPokebola) {
            pokemonEnPokebola.cantidad++;
        } else {
            array.push({
                id: arrayPrincipal.id,
                nombre: arrayPrincipal.nombre,
                tipo: arrayPrincipal.tipo,
                poder1: arrayPrincipal.poder1,
                poder2: arrayPrincipal.poder2,
                visto: true
            })
        }
    }
}
// Función pokemon visto 
function pokemonVisto(array, id) {
    const index = array.indexOf(pokemon => pokemon.id === id);
    if (index !== -1) {
        array[index].visto = true;
    }
}
//pokedex
function menuPokedex() {
    for (let i = 0; i <= 3; i++) {
        let nOpcion = Number(prompt('Bienvenido a tu Pokedex!\n Esta pokedex te proporcionará informacion de los pokemones que encuentres, asi como su habilidad y su tipo. \n 1- Para ver los pokemones.\n 2-Para salir '));
        if ((nOpcion != null) && (nOpcion == 1) && (nOpcion != NaN) && (i < 3) && (nOpcion != '')) {
            menuPrincipal(pokemones);
            break;
        } else if ((nOpcion != null) && (nOpcion == 2) && (nOpcion != NaN) && (i < 3) && (nOpcion != '')) {
            alert('Muchas gracias por usar la pokedex! \nVuelva pronto!');
            break;
        } else if (((nOpcion == null) || (nOpcion == NaN) || (nOpcion == '')) && (i == 3)) {
            alert('Ha superado los intentos! Se cerrara la pokedex!');
            alert('Muchas gracias por usar la pokedex! \nVuelva pronto!');
            break;
        } else {
            alert('Opcion inválida! Ingrese una opcion correcta!');
            continue;
        }
    }
}
//BATALLA
function ataque(pokemon, poder, vida, pokemonRival, sPoder1, sPoder2) {
    if (poder == 1) {
        alert(pokemon + " usó " + sPoder1);
        vida = Math.trunc(vida * (1 - (nDanioPoder1 / 100)));
        alert(pokemonRival + " tiene " + vida + " de vida ahora!");
    } else if (poder == 2) {
        alert(pokemon + " usó " + sPoder2);
        vida = Math.trunc(vida * (1 - (nDanioPoder2 / 100)));
        alert(pokemon + " debilito la defensa de " + pokemonRival);
        alert(pokemonRival + " tiene " + vida + " de vida ahora!");
    } else {
        alert("Por favor, seleccione una opcion válida");
        //break;
    }
    return vida;
}
//Inicio
for (let i = 0; i <= 3; i++) {
    sNombre = prompt("Ingrese su nombre");
    if ((sNombre == undefined || sNombre == "") && i == 3) {
        alert("No ingresaste un nombre válido! Se cerrará el juego");
        break;
    } else if (sNombre == undefined || sNombre == "") {
        alert("Por favor, ingrese un nombre");
        continue;
    } else {
        alert("Bienvenido/a a esta pequeña demo de pokemón!");
        alert("¡Hola a todos! ¡Bienvenidos al mundo de POKÉMON! ¡Me llamo OAK! ¡Pero la gente me llama el PROFESOR POKÉMON! \n¡Este mundo está habitado por unas criaturas llamadas POKÉMON! Para algunos, los POKÉMON son mascotas. Pero otros los usan para pelear. \nEn cuanto a mí... Estudio a los POKÉMON como profesión.");
        alert("¡Bien! ¡Tu nombre es !" + sNombre + " \n Mi nieto y tu han sido rivales desde niños, se llama Bruce. \n¡Tu propia leyenda POKÉMON está a punto de comenzar! ¡Te espera un mundo de sueños y aventuras con los POKÉMON! ¡Adelante!");
        alert(sNombre + ", primero, para continuar tu aventura, elije uno de estos tres Pokemones. \n Puedes elegir a Bulbasaur: Es un Pokemón tipo planta/veneno. Los Bulbasaur son extraordinariamente fuertes y muy difíciles de capturar en libertad. \n Puedes elegir un Charmander: Es un Pokemón tipo fuego. Una flama arde en la punta de su cola desde su nacimiento. Se dice que el Charmander muere si su flama llega a apagarse. \n Squirtle: Es un Pokemón de tipo agua. Squirtle es una de las especies más difíciles de encontrar.Se protege con su caparazón y luego contraataca lanzando agua a presión cuando tiene oportunidad.");
        for (let j = 0; j <= 3; j++) {
            pokemonElegido = elegirPokemon(pokemones);
            if (j == 3 && (pokemonElegido.length < 0)) {
                bDesconectar = true;
                alert("No elegiste una opción válida! Se cerrará el juego");
                break;
            } else if (pokemonElegido.length < 0) {
                alert(sNombre + ", por favor elije una opción válida!");
                continue;
            } else {
                break;
            }
        }
        if (bDesconectar === true) {
            alert("Se finalizó el juego");
            break;
        } else {
            pokemonRival = randomPokemon(pokemones);
        }
        alert(sNombre + ", el pokemon elegido es " + pokemonElegido.nombre);
        alert("Excelente elección! Confio en que sabrás entrenarlo y cuidarlo muy bien!");
        alert("Bruce: \n Ya que mi abuelo te dio un Pokemón. \n Vamos a ver si sabes manejarlo! \n Te reto a una batalla! \n Pokemón yo te elijo!");
        alert(pokemonRival.nombre + " tiene " + vidaRival + " de vida ");
        do {
            nHacer = Number(prompt("Que deberia hacer " + pokemonElegido.nombre + "? \n1-Luchar. \n2-Huir. \n3-Ver Pokedex."));
            switch (nHacer) {
                case 1:
                    do {
                        nHacer = Number(prompt("Elige con que poder atacar a " + pokemonRival.nombre + " \n1- " + pokemonElegido.poder1 + "\n2- " + pokemonElegido.poder2));
                        if (pokemonRival.vida == 0) {
                            alert(pokemonRival.nombre + " tiene " + vidaRival + " de vida!");
                            break;
                        } else {
                            vidaRival = ataque(pokemonElegido.nombre, nHacer, vidaRival, pokemonRival.nombre, pokemonElegido.poder1, pokemonElegido.poder2);
                        }
                        if (vida == 0) {
                            alert(pokemonElegido.nombre + " tiene " + vida + " de vida!");
                            break;
                        } else {
                            nAtaqueRival = Math.floor((Math.random() * 2) + 1);
                            vida = ataque(pokemonRival.nombre, nAtaqueRival, vida, pokemonElegido.nombre, pokemonRival.poder1, pokemonRival.poder2);
                        }
                    } while ((vida > 0) && (vidaRival > 0));
                    break;
                case 2:
                    alert("Soldado que huye, sirve para otra batalla. \nNo tienes nada que demostrar, nos vemos!");
                    bDesconectar = true;
                    break;
                case 3:
                    menuPokedex();
                    break;
                default:
                    alert(sNombre + ", por favor elije una opción válida!");
            }
        } while (((vida > 0) && (vidaRival > 0)) && nHacer != 2);

        if (bDesconectar === true) {
            alert("Se finalizó el juego");
            break;
        } else {
            if (vida <= 0) {
                alert("Bruce y " + pokemonRival.nombre + " te han derrotado. Parece que te hace falta entrenamiento! Te recomiendo ir a un gimnasio Pokemón y alli entrenar!");
                alert("Haz finalizado el juego");
                break;
            } else if (vidaRival <= 0) {
                alert("Felicitaciones, " + sNombre + "! Vos y " + pokemonElegido.nombre + " han salido victoriosos! \n Bruce ya puede dejar de hacerte bullying!");
                alert("Haz completado el juego!");
                break;
            }
        }
    }
}


