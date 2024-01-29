//estos signos se usan para notas que no interfieren al ejecutar la pagina
//alert('Hola Roberto, estas empezando en el mundo de la programación. Sigue así!!');
alert('A continuación empezaremos con un juego, donde deveras adivinar un número.');
//variables. El codigo = sirve para asignar
let numeroSecreto = Math.floor(Math.random()*1000)+1;
let numeroUsuario = 0;
let intentos = 1;
let palabraIntentos = 'intento';
let maximoIntentos = 3;
console.log(numeroSecreto);
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 1000 por favor:"));
    console.log(typeof(numeroUsuario));
    //Este codigo == realiza la comparación
    if (numeroUsuario == numeroSecreto) { 
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo lograste con ${intentos} ${palabraIntentos}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        intentos = intentos + 1;
        palabraVeces = 'veces';
        if (intentos > maximoIntentos) {
            alert(`llegaste al número máximo de ${maximoIntentos} intentos`);
            break;
        }
        palabraIntentos = 'intentos';
        //alert('Lo siento, no acertaste el número. Intenta de nuevo.')
    }
}