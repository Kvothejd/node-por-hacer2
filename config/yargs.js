/*

comando crear 'Crear un elemento por hacer'
    --descripcion -d

comando actualizar 'Actualiza el estado completado de una tarea'
    --descripcion -d
    --completado -c true (default)

--help

*/

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado: {
            demand: false,
            alias: 'c',
            default: true,
            desc: 'Si esta completa o no: true/false'
        }
    })
    .command('borrar', 'Borrar un elemento por hacer', {
        descripcion
    })
    .command('borrar2', 'Borrar un elemento por hacer (del curso)', {
        descripcion
    })
    .help()
    .argv;

    // .help para la ayuda
    // .argv es obligatorio


// Ahora debemos exportarlo para que sea visible en los clientes del modulo
module.exports = {
    argv
}








// const argv = require('yargs')
//     .command('crear', 'Crear un elemento por hacer', {
//         descripcion: {
//             demand: true,
//             alias: 'd',
//             desc: 'Descripcion de la tarea que queremos crear'
//         }
//     })
//     .command('actualizar', 'Actualiza el estado completado de una tarea', {
//         descripcion: {
//             demand: true,
//             alias: 'd',
//             desc: 'Descripcion de la tarea que queremos crear'
//         },
//         completado: {
//             demand: false,
//             alias: 'c',
//             default: true,
//             desc: 'Si esta completa o no: true/false'
//         }
//     })
//     .command('borrar', 'Borrar un elemento por hacer', {
//         descripcion: {
//             demand: true,
//             alias: 'd',
//             desc: 'Descripcion de la tarea que queremos borrar'
//         }
//     })
//     .command('borrar2', 'Borrar un elemento por hacer (del curso)', {
//         descripcion: {
//             demand: true,
//             alias: 'd',
//             desc: 'Descripcion de la tarea que queremos borrar'
//         }
//     })
//     .help()
//     .argv;

//     // .help para la ayuda
//     // .argv es obligatorio


// // Ahora debemos exportarlo para que sea visible en los clientes del modulo
// module.exports = {
//     argv
// }
