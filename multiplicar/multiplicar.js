//requires
const fs = require('fs');
const colors = require('colors');

const metodos = {}

metodos.listar = (base,limite)=>{
    return new Promise((resolve, reject) => {
        
        if(!Number(base)){
            reject(`La base ${base} no es un numero`.red)
            return
        }

        if(!Number(limite)){
            reject(`El limite ${limite} no es un numero`.red)
            return
        }
        
        let salida = ''

        for (let i = 1; i <= limite; i++) {
            salida += `${base} * ${i} = ${base * i}\n`
        }

        resolve(salida.green);
    })
};

metodos.crearArchivo = (base,limite) => {
    return new Promise((resolve, reject) => {
        
        if(!Number(base)){
            reject(`La base ${base.red} no es un numero`)
            return
        }

        if(!Number(limite)){
            reject(`El limite ${limite.red} no es un numero`)
            return
        }
        
        let salida = ''

        for (let i = 1; i <= limite; i++) {
            salida += `${base} * ${i} = ${base * i}\n`
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, salida, (err) => {
            if (err) throw err
            else
                resolve(`tablas/tabla-${base}.txt`.green);
        });
    })
}

module.exports = metodos;