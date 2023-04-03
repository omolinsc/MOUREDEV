// # Reto #7: El sombrero seleccionador
// #### Dificultad: Media | Publicación: 13/02/23 | Corrección: 20/02/23

// ## Enunciado

// ```
/*
 * Crea un programa que simule el comportamiento del sombrero selccionador del
 * universo mágico de Harry Potter.
 * - De ser posible realizará 5 preguntas (como mínimo) a través de la terminal.
 * - Cada pregunta tendrá 4 respuestas posibles (también a selecciona una a través de terminal).
 * - En función de las respuestas a las 5 preguntas deberás diseñar un algoritmo que
 *   coloque al alumno en una de las 4 casas de Hogwarts (Gryffindor, Slytherin , Hufflepuff y Ravenclaw)
 * - Ten en cuenta los rasgos de cada casa para hacer las preguntas y crear el algoritmo seleccionador.
 *   Por ejemplo, en Slytherin se premia la ambición y la astucia.
 */
// ```
// #### Tienes toda la información extendida sobre los retos de programación semanales en **[retosdeprogramacion.com/semanales2023](https://retosdeprogramacion.com/semanales2023)**.

// Sigue las **[instrucciones](../../README.md)**, consulta las correcciones y aporta la tuya propia utilizando el lenguaje de programación que quieras.

// > Recuerda que cada semana se publica un nuevo ejercicio y se corrige el de la semana anterior en directo desde **[Twitch](https://twitch.tv/mouredev)**. Tienes el horario en la sección "eventos" del servidor de **[Discord](https://discord.gg/mouredev)**.

var prompt = require('prompt-sync')();

const validate = (answer) => {
    if (![1,2,3,4].includes(parseInt(answer))) return false; 
    return true;
}

let houses = {
    1: 'Gryffindor',
    2: 'Ravenclaw',
    3: 'Hufflepuff',
    4: 'Slytherin'
}

let questions = {
    1: '¿Cuál de las siguientes opciones odiaría más que la gente lo llamara?',
    2: '¿Después de su muerte ¿qué es lo que más le gustaría que hiciera la gentecuando escuche su nombre?',
    3: 'Dada la opción, preferirías inventar una poción que garantizara:',
    4: '¿Cómo le gustaría ser conocido en la historia?',
    5: 'Entras en un jardín encantado. ¿Qué sería lo más curioso de examinar primero?'
}

let answers = {
    1: '1 - Ordinario, 2 - Ignorante, 3 - Cobarde, 4 - Egoista',
    2: '1 - Te extraña, pero sonrie, 2 - Pide más historias sobre tus aventuras, 3 - Piensa con admiración tus logros, 4 - No me importa lo que la gente piense de mí después de mi muerte, es lo que piensan de mi mientras estoy vivo lo que cuenta',
    3: '1 - Gloria, 2 - Sabiduría, 3 - Amor, 4 - Poder',
    4: '1 - El Sabio, 2 - El Bueno, 3 - El Gran, 4 - El Audaz',
    5: '1 - El árbol de hojas de plata con manzanas doradas, 2 - Las setas rojas gordas que parecen estar hablando entre sí, 3 - El estanque burbujeante en cuyas profundidades se arremolina algo luminoso, 4 - La estatua del viejo mago con un extraño centelleo en los ojos'
}

const choices = [];

const game = () => {
    let i = 1
    for(i; i <= Object.keys(questions).length; i++){

        console.log(`\n- - - PREGUNTA ${i} - - -`)
        console.log(questions[i]); console.log(answers[i]);
        let answer = prompt('Elige una opción [1, 2, 3 o 4] : ');
        let validation = validate(answer);
        if (!validation) return console.log('ERROR : Selecciona la respuesta mediante los números indicados');
        choices.push(parseInt(answer));
    }
    let media = 0;
    for (const choice of choices) media += choice;
    media = Math.round(media/i);
    console.log('\nEl sombrero te ha seleccionado la casa de..... ' + houses[media].toUpperCase() + ' !!!!!\n')
}

game();