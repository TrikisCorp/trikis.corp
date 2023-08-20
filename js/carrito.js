
const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"))

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
const botonComprar = document.querySelector("#carrito-acciones-comprar")


let botonesEliminar = document.querySelectorAll("#carrito-producto-eliminar")
const botonVaciar = document.querySelector("#carrito-acciones-vaciar")
const contenedorTotal = document.querySelector("#total")


function cargarProductoCarrito() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
        contenedorCarritoProductos.innerHTML = "";
    
        productosEnCarrito.forEach(producto => {
    
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="carrito-producto-titulo carrito-elemento">
                    <small>Producto ID</small>
                    <span>${producto.titulo}</span>
                </div>
                <div class="carrito-producto-cantidad carrito-elemento">
                    <small>Cantidad</small>
                    <span>${producto.cantidad}</span>
                </div>
                <div class="carrito-producto-precio carrito-elemento">
                    <small>Precio</small>
                    <span>$${producto.precio}</span>
                </div>
                <div class="carrito-producto-subtotal carrito-elemento">
                    <small>Subtotal</small>
                    <span>$${producto.precio * producto.cantidad}</span>
                </div>
                <button class="carrito-producto-eliminar" id="${producto.id}"><img class="trash_can" src="/img/trash.svg"class="bi bi-trash-fill"></button>
            `;
    
            contenedorCarritoProductos.append(div);
        })
    

    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }

    actualizarBotonesEliminar()
}

cargarProductoCarrito()
actualizarTotal()


    

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar")
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito)
    })
}



function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
    console.log(productosEnCarrito)
    productosEnCarrito.splice(index,1)
    cargarProductoCarrito()
    console.log(productosEnCarrito)

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
}

botonVaciar.addEventListener("click", vaciarCarrito)

function vaciarCarrito() {
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
    cargarProductoCarrito()
}


function actualizarTotal(){
    const totalCalculado = productosEnCarrito.reduce((acc,producto) => acc + (producto.precio * producto.cantidad),0)
    total.innerText = `$${totalCalculado}`
}

// botonComprar.addEventListener("click", comprarCarrito)

// function comprarCarrito(){

//     contenedorCarritoVacio.classList.add("disabled");
//     contenedorCarritoProductos.classList.add("disabled");
//     contenedorCarritoAcciones.classList.add("disabled");
//     contenedorCarritoComprado.classList.remove("disabled");
//     console.log("a")
// }