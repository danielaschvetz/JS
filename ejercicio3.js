

class Carrito {
  montoTotal=0;
  productos=[];


agregarProducto(producto,cantidad,precio){
  let incluyeproducto = this.productos.includes(producto);

  if (incluyeproducto) {
    console.log("ya existe producto " + producto);
  } else {
    this.productos.push(producto);
    this.montoTotal = this.montoTotal + cantidad * precio;
  }
}

}
let carritoAzul = new Carrito()
let carritoRojo=new Carrito()

carritoAzul.agregarProducto('harina',4,20)
console.log (carritoAzul.montoTotal)
console.log(carritoAzul.productos)

carritoAzul.agregarProducto('harina',4,20)

carritoRojo.agregarProducto('yerba',3,30)
console.log(carritoRojo.montoTotal)
console.log(carritoRojo.productos)

