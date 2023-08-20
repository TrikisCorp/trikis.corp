const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"))
const contenedorCarritoProductos = document.querySelector("#info");
let n1 = 0;
const fechaNow = new Date();
const day = fechaNow.getDate();
const month = fechaNow.getMonth() + 1; // Los meses en JavaScript van de 0 a 11
const año = fechaNow.getFullYear();

const fechaActualizada = `${day}-${month}-${año}`;
const fecha = document.getElementById('datos_boleta')

fecha.innerHTML = "<span>Nro. de pedido: 00001</span><span>fecha: "+fechaActualizada+"</span>"

    document.addEventListener("DOMContentLoaded", function() {
    
        contenedorCarritoProductos.innerHTML = "";

        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
        <ul class="ul_info">
            <li class="carrito-elemento index">${n1}</li>
            <li class="carrito-producto-item carrito-elemento">
            <div class="elemento"><span>Producto ID</span>
            <span>${producto.titulo}</span>
            </div>
            <div class="elemento">
            <span>Cantidad</span>
            <span>${producto.cantidad}</span>
            </div>
            <div class="elemento">
            <span>Subtotal</span>
            <span>$${producto.precio * producto.cantidad}</span>
            <div>
        </li>
        </ul>
            `;
    
            contenedorCarritoProductos.append(div);
            n1++
            console.log(n1)
        })
    
    })

    
function actualizarTotal(){
    const totalCalculado = productosEnCarrito.reduce((acc,producto) => acc + (producto.precio * producto.cantidad),0)
    total.innerText = `IMPORTE FINAL $${totalCalculado}`
}

actualizarTotal()


function vaciarCarrito() {
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
    cargarProductoCarrito()
}



