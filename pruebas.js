//imprimir mi mensaje..
//process.stdout.write("\n\Dime tu nombre\n");

//obtener datos de usuario(data es que me escuche una funcion)
/*
let nombre;
process.stdout.write("Dime tu nombre: ");

process.stdin.on('data', function(data){
    nombre = data.toString();
    process.stdout.write(`Hola ${nombre}`);
    process.exit();
})
*/

let salarioM=3500000, comisiones=1500000, licenc, resultadoD,salarioT, deducciones;

process.stdout.write("\n\Número de licencias de software vendidas: ");

process.stdin.on('data', function(data){
   licenc = data.toString();
   resultadoD = licenc * comisiones;
   deducciones = resultadoD * 0.05;
   resultadoD = resultadoD - deducciones;
   process.stdout.write(`El valor total de las licencias vendidas con comisiones es de: ${resultadoD}\n`);
   salarioT = resultadoD + salarioM;
   process.stdout.write(`El salario total del vendedor es de: ${salarioT}\n`);
   process.exit();
})