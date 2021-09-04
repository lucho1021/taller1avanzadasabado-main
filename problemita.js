/*let salarioM=3500000, comisiones=1500000, licenc, resultadoD,salarioT, deducciones;

function calcularSalario()
{
    process.stdout.write("\n\Número de licencias de software vendidas: ");
}*/
function calcularSalario()
{
console.log("Escribe tu nombre");
var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    console.log("Tu nombre es: " + 
        d.toString().trim());
        process.exit();
  });
}
console.log(calcularSalario(stdin))