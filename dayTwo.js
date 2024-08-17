const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const preguntas = ['Cual es tu nombre?: ', 'Cuantos años tienes?: ' , 'Que lenguaje de programacion estas estudiando?: '];
let respuestas = [];

const hacerPregunta = (indice) => {
   
  if (indice < preguntas.length) {
    rl.question(preguntas[indice], (respuesta) => {
      respuestas.push(respuesta);
      hacerPregunta(indice + 1);
    });
  } else {
    
    console.log(`Hola, ${respuestas[0]}! Tienes ${respuestas[1]} años y ya estas aprendiendo ${respuestas[2]}`);
    preguntas.push(`Te gusta estudiar ${respuestas[2]}? Responde con el numero 1 para SI, o 2 para NO: `)
    preguntaFinal()
    
  }
};
function preguntaFinal(){
    rl.question(preguntas[3], (respuesta) => {
        respuestas.push(respuesta);
        //hacerPregunta(indice);
        if(respuestas[3] == 1){
            console.log("¡Muy bien! Sigue estudiando y tendrás mucho éxito.")
            rl.close();
            
        }else if (respuestas[3] == 2){
            console.log(" Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?")
            rl.close();
        }else{
            console.log("No existe esa opcion, intente de nuevo")
            respuestas.splice(3)
            preguntaFinal();
            
        }
        
    });
    
}
hacerPregunta(0);