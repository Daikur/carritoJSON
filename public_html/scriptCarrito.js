micarrito = new Carrito("28/10/2016","David");

function f1() {
    id = prompt("Dime el id");
    nombre = prompt("Dime el nombre");
    descripcion = prompt("Dime la descripcion");
    precio = prompt("Dime el precio");

    articulo = new Articulo(id, nombre, descripcion, precio);
    
    micarrito.anyade(articulo);
}

function f2(){
    micarrito.mostrar();
}