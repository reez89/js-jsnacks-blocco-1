/*Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla Peso = 10, Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla. */


// var oggetto = {
//      name : "palla",
//      peso : 10
//  }

//  oggetto.peso = Number(prompt("Inserisci un valore di peso"));
//  console.log(oggetto);


/*Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.*/


// var biciDaCorsa = [
//     {
//         nome : "bici rossa",
//         peso : 10
//     },
//     {
//         nome : "bici fucsia",
//         peso: 8
//     },
//     {
//         nome : "bici blu",
//         peso: 15
//     },
//     {
//         nome : "bici arancione",
//         peso: 25
//     }
// ]

// console.log(biciDaCorsa);

//     var x ;
//     var pesoLow = biciDaCorsa[0].peso;
//      for (var i=0; i<biciDaCorsa.length; i++){
//          if(biciDaCorsa[i].peso> pesoLow){
//             minPeso = biciDaCorsa[i].peso;
//             x=i;
//          };
//      }

//      console.log(biciDaCorsa[x]);


/*Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza. Calcolare perimetro e area*/

         
// var teorema = {
//     base : 5,
//     altezza : 3
// }

// var area = (teorema.base * teorema.altezza) /2;
// console.log(area);

// var  baseQuadrato = Math.pow(teorema.base, 2);
// var  altezzaQuadrato = Math.pow(teorema.altezza,2);
// var  ipotenusa = Math.floor(Math.sqrt(baseQuadrato + altezzaQuadrato ));
// var  perimetro = ipotenusa + teorema.base + teorema.altezza;
// triangolo.area = area;
// triangolo.perimetro = perimetro;

// console.log(baseQuadrato, altezzaQuadrato, ipotenusa,perimetro );

// Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: 
// nome, punti fatti, falli subiti.

// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.


// var squadreCalcio = [
//      {
//         nome : "Juvents",
//         punti_fatti: 0,
//         falli_subiti: 0
//     },
//     {
//          nome : "Milan",
//                 punti_fatti: 0,
//        falli_subiti: 0
//     },
//     {
//          nome : "Sampdoria",
//          punti_fatti: 0,
//          falli_subiti: 0
//     },
//      {
//          nome : "Inter",
//          punti_fatti: 0,
//          falli_subiti: 0
//      },
//      {
//          nome : "Catania",
//         punti_fatti: 0,
//          falli_subiti: 0
//      }
//  ]


/*Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti */


//  squadreCalcio.forEach(function(item){
//      item.punti_fatti = Math.floor(Math.random() * 10);
//      item.falli_subiti = Math.floor(Math.random() * 10);
     
//  });

//  console.log(squadreCalcio);


/* BLOCCO JSNACK 5 */

/* Crea 10 oggetti che rappresentano una zucchina,
indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine */

// var zucchine =[ 
//     {
//         varietà : "Zucchino tondo di Nizza" ,
//         peso: 35,
//         lunchezza: 12
//     },
//     {
//         varietà : "Zucchino tondo di Nizza" ,
//         peso: 35,
//         lunchezza: 12
//     },
//     {
//         varietà : "Zucchino tondo di Nizza" ,
//         peso: 35,
//         lunchezza: 12
//     },
//     {
//         varietà : "Zucchino tondo di Nizza" ,
//         peso: 35,
//         lunchezza: 12
//     },
//     {
//         varietà : "Zucchino tondo di Nizza" ,
//         peso: 35,
//         lunchezza: 12
//     },
//     {
//         varietà : "Zucchino tondo di Nizza" ,
//         peso: 35,
//         lunchezza: 12
//     },
//     {
//         varietà : "Zucchino tondo di Nizza" ,
//         peso: 35,
//         lunchezza: 12
//     },
//     {
//         varietà : "Zucchino tondo di Nizza" ,
//         peso: 35,
//         lunchezza: 12
//     },
//     {
//         varietà : "Zucchino tondo di Nizza" ,
//         peso: 35,
//         lunchezza: 12
//     },
//     {
//         varietà : "Zucchino tondo di Nizza" ,
//         peso: 35,
//         lunchezza: 12
//     }
    
// ];

// somma = 0;
// zucchine.forEach(item => {
//     somma += item.peso
// });

// console.log(somma);

/* Scrivi una funzione che accetti una stringa come
argomento e la ritorni girata (es. Ciao -> oaiC)  */

// var stringa = prompt("Inserisci la parola che vuoi capovolgere")

// function capovolgi(str) {
//     var newString = str.split("").reverse().join("");
//     return newString
// }

// console.log(capovolgi(stringa));

/* Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano
meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi
di zucchine */

// var zucchinaUno = [

//     {
//         varieta: "Zucchino nero di Milano",
//         peso: 20,
//         lunchezza: 55
//     },

//     {
//         varieta: "Zucchino romanesco",
//         peso: 25,
//         lunchezza: 13 
//     },

//     {
//         varieta: "Zucchino ortolano di Faenza",
//         peso: 35,
//         lunchezza: 22
//     },

//     {
//         varieta: "Zucchina lunga fiorentina",
//         peso: 10,
//         lunchezza:37
//     },


//     {
//         varieta: "Zucchino siciliano",
//         peso: 12,
//         lunchezza: 23
//     },

//     {
//         varieta: "Zucchina striata di Napoli",
//         peso: 63, 
//         lunchezza: 15
//     },

//     {
//         varieta: "Zucchina bianca triestina",
//         peso: 5,
//         lunchezza: 33
//     },

//     {
//         varieta: "Zucchina rigata pugliese",
//         peso: 7,
//         lunchezza: 84
//     },

//     {
//         varieta: "Zucchino tondo di Piacenza",
//         peso: 98,
//         lunchezza: 22
//     },

//     {
//         varieta: "Zucchino tondo di Nizza",
//         peso: 35,
//         lunchezza: 12
//     }
// ]



// var zucchinePiccole = [];
// var zucchineGrandi = [];
// function find() {  

//     zucchinaUno.forEach(item => {
//         if(item.peso>=15){
//             zucchineGrandi.push(item.varieta, item.peso, item.lunchezza);
//         }else {
//             zucchinePiccole.push(item.varieta, item.peso, item.lunchezza);
//         }
//     });
// }

    
// find();
// console.log(zucchinePiccole);
// console.log(zucchineGrandi);
    



/* Scrivi una funzione che fonda due array (con lo stesso
numero di elementi) prendendo alternativamente gli
elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */

// var letters = ["d","f","g","h","l"];
// var numbers = [1,2,3,4,5];

// var fusion = [];

// function combination(a,b){
//     var x=0;
//     while(fusion.length != (letters.length + numbers.length)){
//         fusion.push(a[x],b[x]);
//         x++;
//     }
// }

// combination(letters,numbers);
// console.log(fusion);


/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al
massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che
hanno la posizione compresa tra “a” e “b” */

// var arguments = ["cars", "bike",2,"mobile","websites","calendar", "days"];
// var newArray = [];
// function assignValues(array,a,b){
//   if (a < b && b <= array.length){
//       console.log("Hello there, THIS IS YOUR NEW ARRAY");
//       for(var x=a ; x<b; x++){
//           newArray.push(array[x]);
//         }
//     } else {
//         console.log("CONDITIONS ARE NOT VALID");
//     }
// }

// assignValues(arguments,1,5);
// console.log(newArray);

