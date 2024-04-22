let nombreProducto = "Labial de Maybelline"
let precioUnitario = 5300
let cantidad 

alert('Estás por comprar un prducto: ' + nombreProducto + ' y su precio es de $' + precioUnitario)
let cantidadDeseada = prompt('Ingrese la cantidad de productos que desea comprar: ')

const costoTotal = precioUnitario * cantidadDeseada


alert("Usted compró: "+ cantidadDeseada +" "+nombreProducto+". "+"El costo total es de: $" + costoTotal)