//1.
function soma(a, b) {
    return a + b
}
console.log(`o resultado é :${soma(2, 3)}`);


//2.
function subtrair(a, b) {
    return a - b
}
console.log(`o resuldado é :${subtrair(20, 3)}`);


//3.
function multiplicar(a, b) {
    return a * b
}
console.log(`o resuldado é :${multiplicar(20, 3)}`);


//4.
function dividir(a, b) {

    if (b % 2 == 0) {
        console.log(a / b)

    }
    else {
        console.log(`b = ${b}`)
    }
    console.log(`o resuldado é :${dividir(20, 4)}`);
}



//5.
function potencia(a, b) {
    return a ** b

}
console.log(`o resuldado é :${potencia(2, 7)}`);


//6.

const numero = 25;
const raizQuadrada = Math.sqrt(numero);
console.log(`A raiz quadrada de ${numero} é ${raizQuadrada}.`);

//7.

function areaCirculo(raio){
   return 3,16 * raio^2.
}
console.log(`A àrea do circulo é ${areaCirculo(4)}.`)


//8.

function perimetroCirculo(raio) {
    return 2 * 3,16 * raio
}
console.log(`O perímetro do circulo é ${perimetroCirculo(4)}.`)

//9.X
/*
Math.hypot(3,4)

console.log(hypot())*/

//10.

console.log (`o numero maximo e o minimo respectivamente ${Math.max(6,1,8)} e ${Math.min(6,1,8)}`)


//11.
