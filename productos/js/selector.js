

const main_img = document.querySelector('.main_img')
const thumbnails = document.querySelectorAll('.thumbnail')

let p1 = document.getElementById("polo-01")
let p2 = document.getElementById("polo-02")
let p3 = document.getElementById("polo-03")
let p4 = document.getElementById("polo-04")
let p5 = document.getElementById("polo-04")
let p6 = document.getElementById("polo-04")






thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function(){
        const active = document.querySelector('.active')
        active.classList.remove('active')
        thumb.classList.add('active')
        main_img.src = thumb.src

        console.log(main_img)
        
    })
})



const contador = document.querySelector('.contar')
const sumar = document.querySelector('.incr')
const restar = document.querySelector('.decr')

let numero = 0;

sumar.addEventListener("click", ()=>{
    if (numero>=30) {

    }
    else {
        numero++
        contador.value++;
        console.log(numero)
    }

    
});

restar.addEventListener("click", ()=>{
    if(numero==0){}
    else{
        numero--
        contador.value--;
        console.log(numero)
    } 
})

const comprar = document.querySelector(".venta__info--carrito")
let cantidad=0;

comprar.addEventListener('click', ()=>{
    cantidad = parseInt(contador.value)
    console.log(cantidad)
    
})


var c1,c2,c3,c4,c5,c6

const carritoBtn = document.querySelector('.venta__info--carrito');
const activeImg = document.querySelector('.active');
const cantidadInput = document.querySelector('.venta__info--cantidad');

// carritoBtn.addEventListener('click', function() {
//   if (activeImg) {
//     c1 = cantidad
//     console.log(c1);
//     // Puedes almacenar el valor en una variable adicional o realizar otras acciones con él aquí.
//   } else {
//     console.log('No se ha seleccionado ninguna imagen activa');
//   }
// });

let eleccion;

thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function(){

        if (thumb.id == "polo-04") {
            p4 = thumb.id
            eleccion = 4
            carritoBtn.id = thumb.id;
            console.log(carritoBtn.id)
        }
        else if (thumb.id == "polo-03") {
            p3 = thumb.id
            eleccion = 3
            carritoBtn.id = thumb.id;
            console.log(carritoBtn.id)
        }

        else if (thumb.id == "polo-02") {
            p2 = thumb.id
            eleccion = 2
            carritoBtn.id = thumb.id;
            console.log(carritoBtn.id)
        }

        else if (thumb.id == "polo-01") {
            eleccion = 1
            carritoBtn.id = thumb.id;
            console.log(carritoBtn.id)
            p1 = thumb.id
        }

        ////////////////////////
        else if (thumb.id == "polo2-01") {
            p1 = thumb.id
            eleccion = 1
            carritoBtn.id = thumb.id;
            console.log(carritoBtn.id)
        }

        else if (thumb.id == "polo2-02") {
            p2 = thumb.id
            eleccion = 2
            carritoBtn.id = thumb.id;
            console.log(carritoBtn.id)
        }

        else if (thumb.id == "polo2-03") {
            p3 = thumb.id
            eleccion = 3
            carritoBtn.id = thumb.id;
            console.log(carritoBtn.id)
        }

        else if (thumb.id == "polo2-04") {
            p4 = thumb.id
            eleccion = 4
            carritoBtn.id = thumb.id;
            console.log(carritoBtn.id)
        }


        ////////////////////

        else if (thumb.id == "poster-01") {
            p1 = thumb.id
            eleccion = 1
            carritoBtn.id = thumb.id;
            console.log(carritoBtn.id)
        }

        else if (thumb.id == "poster-02") {
            p2 = thumb.id
            eleccion = 2
            carritoBtn.id = thumb.id;
            console.log(carritoBtn.id)
        }

        ///////////////
        else if (thumb.id == "calend-01") {
            p1 = thumb.id
            eleccion = 1
            carritoBtn.id = thumb.id;
            console.log(carritoBtn.id)
        }

        else if (thumb.id == "calend-02") {
            p2 = thumb.id
            eleccion = 2
            carritoBtn.id = thumb.id;
            console.log(carritoBtn.id)
        }

        else if (thumb.id == "calend-03") {
            p3 = thumb.id
            eleccion = 3
            carritoBtn.id = thumb.id;
            console.log(carritoBtn.id)
        }

        ////////////////////
        else if (thumb.id == "comic-01") {
            p1 = thumb.id
            eleccion = 1
            carritoBtn.id = thumb.id;
            console.log(carritoBtn.id)
        }



        /////////////////////

        else if (thumb.id == "pin-01") {
            p1 = thumb.id
            eleccion = 1
            carritoBtn.id = thumb.id;
            console.log(carritoBtn.id)
        }

        else if (thumb.id == "pin-02") {
            p2 = thumb.id
            eleccion = 2
            carritoBtn.id = thumb.id;
            console.log(carritoBtn.id)
        }

        else if (thumb.id == "pin-03") {
            p3 = thumb.id
            eleccion = 3
            carritoBtn.id = thumb.id;
            console.log(carritoBtn.id)
        }

        else if (thumb.id == "pin-04") {
            eleccion = 4
            p4 = thumb.id
            carritoBtn.id = thumb.id;
            console.log(carritoBtn.id)
        }

        else if (thumb.id == "pin-05") {
            p5 = thumb.id
            eleccion = 5
            carritoBtn.id = thumb.id;
            console.log(carritoBtn.id)
        }

        else if (thumb.id == "pin-06") {
            p6 = thumb.id
            eleccion = 6
            carritoBtn.id = thumb.id;
            console.log(carritoBtn.id)
        }

        



        
    })
})

const productos = [
    {
        "id": "polo-01",
        "titulo": "polo 01",
        "imagen": "./img/product/producto1/1.png",
        "categoria": {
            "nombre": "Polos",
            "id": "polos"
        },
        "precio": 40
    },
    {
        "id": "polo-02",
        "titulo":"polo 02",
        "imagen": "./img/product/producto1/2.png",
        "categoria": {
            "nombre": "Polos",
            "id": "polos"
        },
        "precio": 40
    },
    {
        "id": "polo-03",
        "titulo": "polo 03",
        "imagen": "./img/product/producto1/3.png",
        "categoria": {
            "nombre": "Polos",
            "id": "polos"
        },
        "precio": 40
    },
    {
        "id": "polo-04",
        "titulo": "polo 04",
        "imagen": "./img/product/producto1/4.png",
        "categoria": {
            "nombre": "Polos",
            "id": "polos"
        },
        "precio": 40
    },
  
  
    {
        "id": "polo2-01",
        "titulo": "polo2 01",
        "imagen": "./img/product/producto2/1.png",
        "categoria": {
            "nombre": "Polos",
            "id": "polos"
        },
        "precio": 40
    },
    {
        "id": "polo2-02",
        "titulo":"polo2 02",
        "imagen": "./img/product/producto2/2.png",
        "categoria": {
            "nombre": "Polos",
            "id": "polos"
        },
        "precio": 40
    },
    {
        "id": "polo2-03",
        "titulo": "polo2 03",
        "imagen": "./img/product/producto2/3.png",
        "categoria": {
            "nombre": "Polos",
            "id": "polos"
        },
        "precio": 40
    },
    {
        "id": "polo2-04",
        "titulo": "polo2 04",
        "imagen": "./img/product/producto2/4.png",
        "categoria": {
            "nombre": "Polos",
            "id": "polos"
        },
        "precio": 40
    },

    {
        "id": "poster-01",
        "titulo": "poster 01",
        "imagen": "./img/product/producto3/1.png",
        "categoria": {
            "nombre": "poster",
            "id": "poster"
        },
        "precio": 3
    },
    {
        "id": "poster-02",
        "titulo": "poster 02",
        "imagen": "./img/product/producto3/2.png",
        "categoria": {
            "nombre": "poster",
            "id": "poster"
        },
        "precio": 3
    },


    {
        "id": "calend-01",
        "titulo": "calend 01",
        "imagen": "./img/product/producto4/1.png",
        "categoria": {
            "nombre": "calendario",
            "id": "calendario"
        },
        "precio": 8
    },

    {
        "id": "calend-02",
        "titulo": "calend 02",
        "imagen": "./img/product/producto4/2.png",
        "categoria": {
            "nombre": "calendario",
            "id": "calendario"
        },
        "precio": 8
    },

    {
        "id": "calend-03",
        "titulo": "calend-03",
        "imagen": "./img/product/producto4/3.png",
        "categoria": {
            "nombre": "calendario",
            "id": "calendario"
        },
        "precio": 8
    },

    {
        "id": "comic-01",
        "titulo": "comic 01",
        "imagen": "./img/product/producto5/1.png",
        "categoria": {
            "nombre": "comic",
            "id": "comic"
        },
        "precio": 5
    },

    {
        "id": "pin-01",
        "titulo": "pin 01",
        "imagen": "./img/product/producto6/1.png",
        "categoria": {
            "nombre": "pin",
            "id": "pin"
        },
        "precio": 3
    },

    {
        "id": "pin-02",
        "titulo": "pin 02",
        "imagen": "./img/product/producto6/2.png",
        "categoria": {
            "nombre": "pin",
            "id": "pin"
        },
        "precio": 3
    },

    {
        "id": "pin-03",
        "titulo": "pin 03",
        "imagen": "./img/product/producto6/3.png",
        "categoria": {
            "nombre": "pin",
            "id": "pin"
        },
        "precio": 3
    },

    {
        "id": "pin-04",
        "titulo": "pin 04",
        "imagen": "./img/product/producto6/4.png",
        "categoria": {
            "nombre": "pin",
            "id": "pin"
        },
        "precio": 3
    },

    {
        "id": "pin-05",
        "titulo": "pin 05",
        "imagen": "./img/product/producto6/5.png",
        "categoria": {
            "nombre": "pin",
            "id": "pin"
        },
        "precio": 3
    },

    {
        "id": "pin-06",
        "titulo": "pin 06",
        "imagen": "./img/product/producto6/6.png",
        "categoria": {
            "nombre": "pin",
            "id": "pin"
        },
        "precio": 3
    },
    

]
let productosEnCarrito

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS)

} else {
    productosEnCarrito = [];
}



const active = document.querySelector('.active')
carritoBtn.addEventListener('click', function() {
    

    if (eleccion == 1) {
            console.log("ES EL C1")
            c1 = cantidad
            console.log(c1)

    }
    else if (eleccion == 2) {
        console.log("ES EL C2")
            c2 = cantidad
            console.log(c2)
    }
    else if (eleccion == 3) {
        console.log("ES EL C3")
            c3 = cantidad
            console.log(c3)
    }
    else if (eleccion == 5) {
        console.log("ES EL C5")
            c5 = cantidad
            console.log(c5)
    }

    else if (eleccion == 6) {
        console.log("ES EL C6")
            c6 = cantidad
            console.log(c6)
    }

    agregarAlCarrito()
    window.alert("Se ha agregado al carro el producto!")



})



// p1.addEventListener('click', function() {
//     contador.value = c1;
//     console.log(c1)

// })


// p2.addEventListener('click', function() {
//     contador.value = c2;
//     console.log(c2)
// })


// p3.addEventListener('click', function() {
//     contador.value = c3;
//     console.log(c3)
// })


// p4.addEventListener('click', function() {
//     contador.value = c4;
//     console.log(c4)
// })

// p5.addEventListener('click', function() {
//     contador.value = c5;
// })

// p6.addEventListener('click', function() {
//     contador.value = c6;
// })




function agregarAlCarrito(e) {
    const idBoton = carritoBtn.id;
    const productoAgregado = productos.find(producto=> producto.id===idBoton)

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto=> producto.id === idBoton)
        productosEnCarrito[index].cantidad += cantidad
        console.log("hola")
        console.log(productoAgregado)

        
    }
    else{ 
        productoAgregado.cantidad = 0;
        productoAgregado.cantidad += cantidad
        productosEnCarrito.push(productoAgregado)
        console.log(productoAgregado)

    }

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))


}



