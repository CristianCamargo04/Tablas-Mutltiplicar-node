const { crearArchivo ,listar } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
            .then(lista => console.log(lista))
            .catch(e => console.log(e))
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e))
        break;

    default:
        console.log('comando no reconocido');
}







