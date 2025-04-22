
for(let index=0; index <10; index++)
    console.log (index);

// Camila está revisando una lista de nombres, (por ejemplo: ['Pedro', 'Ana', 'Luis', 'Elena', 'Sofía']). Debe imprimir cada nombre en mayúsculas, uno por línea.
// Usa un bucle for para recorrer la lista y mostrar los nombres.
//start, condition, steps

let nombres = ['Pedro', 'Ana', 'Luis', 'Elena', 'Sofía'];
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i].toUpperCase());
}

//Bego tiene un array con precios. Debe sumar todos los precios usando un bucle for y mostrar el total.

let total=0;
let precios = [23, 78, 45];

for(let i=0; i< precios.length; i++) {total+=precios[i];}
console.log (total);


//Macarena quiere generar tres códigos de seguridad y almacenarlos en un array. Cada código debe ser un número aleatorio entre 1000 y 9999. Usa un bucle for para generar los códigos y luego mostrarlos.


let code = []; // مصفوفة

for (let i = 0; i < 3; i++) {
  let oneCode = Math.floor(Math.random() * 9000) + 1000;
  code.push(oneCode); 
}
console.log(code);

//Abby encontró una lista de suministros en un refugio: ['Agua', 'Munición', 'Botiquín', 'Czst']. Debe comprobar si todos los elementos contienen al menos una vocal.
let suministros = ['Agua', 'Munición', 'Botiquín', 'Czst'];
let vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú']; // también incluimos acentos

for (let item of suministros) {
    let tieneVocal = false;
    let palabra = item.toLowerCase(); // para comparar sin importar mayúsculas

    for (let letra of palabra) {
        if (vocales.includes(letra)) {
            tieneVocal = true;
            break; // ya encontramos una vocal, no hace falta seguir
        }
    }

    if (tieneVocal) {
        console.log(`${item} contiene vocales.`);
    } else {
        console.log(`${item} no contiene vocales.`);
    }
}

    
//Bego está calculando precios con descuento. Tiene un array con precios, (por ejemplo [150, 300, 50]). Si el precio es mayor a 100, aplica un 20% de descuento, si no, un 10%. Usa un bucle para mostrar cada precio original, descuento aplicado y precio final.
let precio=[150, 300, 50]; 
let dicount=0;
for (let i=0; i<precio.length; i++){
    if (precio[i]>100){
        dicount=precio[i]*0.2;
    }else{
        dicount=precio[i]*0.1;
    }
    console.log(`Precio original: ${precio[i]}, Descuento aplicado: ${dicount}, Precio final: ${precio[i]-dicount}`);
}



//Sabrina quiere verificar cuántos números aleatorios generados entre 1 y 100 son múltiplos de 3. Haz una función que haga esta comprobación con 10 números.


//Macarena tiene un array con tres nombres y debe crear un array nuevo con las iniciales de cada nombre en mayúsculas usando un bucle.


//Abby está revisando mensajes cifrados. Tiene un array con palabras (cantidad y palabras a tu elección) que deben invertirse y mostrarse en minúsculas. Usa un bucle para procesarlas todas. Investiga sobre las funciones split(), reverse() y join()


//Camila quiere generar un código de acceso combinando letras aleatorias y números. Usa un bucle para crear un string aleatorio de 6 caracteres sacados de 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.


//Macarena quiere crear un sistema que genere combinaciones de nombres y apellidos. Tiene dos arrays: ['Juan', 'Ana', 'Luis'] y ['Pérez', 'Martínez', 'García']. Debe generar todos los nombres posibles combinando uno de cada array.


//Abby quiere comprobar si al menos uno de los números generados aleatoriamente entre 1 y 100 es divisible por 5. Genera 5 números y muestra si se cumple la condición.


//Camila tiene un array con nombres y quiere mostrar sólo aquellos que tienen más de 4 letras.


//Bego tiene un array con tres palabras y quiere mostrar todas las combinaciones posibles de esas palabras usando dos palabras a la vez y cuyas combinaciones no repitan la palabra.


//Sabrina quiere generar un nombre de usuario aleatorio combinando una consonante, una vocal y un número aleatorio entre 1 y 99. Debe hacerlo 5 veces y mostrar los resultados.

//Abby tiene problemas con las tablas de multiplicar, quiere hacer 2 funciones que reciban un número y le impriman la tabla de multiplicar de ese número desde hasta el 10 una en orden descendente y otra en orden ascendente.


for (let i=0; i<21; i++) {if (i %3 ===0) {console.log (i+"fuzz");}
else if (i %5 ===0) {console.log (i+"buzz");}

else {console.log (i);}}



let i=10;
while (i>0) {console.log (i); i--;}


let totaly =0;

for (let i=0; i<=50; i++){
totaly= totaly + i;
console.log (totaly);}


for (let i=0; i<=5; i++) { if (i==1) {console.log (i+"هذةالجملة ستكون رقم"
    
);}
else if (i==2) {console.log (i+"هذةالجملة ستكون رقم"
    
);}
}


let fruits = ['apple', 'banana', 'orange', 'grape'];


for (let i=0; i<=4; i++) {if (fruits[i]== 'orange') {console.log ("you got orange");}
    
    else {console.log (fruits[i]);}}


    let frotas = ['apple', 'banana', 'cherry', 'orange']
    for (let i=0; i < frotas.length; i++) { if (frotas[i]== 'cherry') break;} 
    console.log (frotas[i]);

    let randomNumber = Math.random(); // حرف M كبير
console.log(randomNumber);
