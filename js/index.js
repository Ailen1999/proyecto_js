const card = document.querySelector("#cards")
console.log(card)
class Producto {
    constructor(id, nombre, valor, descripcion, urlImagen) {
        this.id = id
        this.nombre = nombre
        this.valor = valor
        this.descripcion = descripcion
        this.urlImagen = urlImagen

    }
}
class Carrito {
    constructor(productos) {
        this.productos = productos

    }
    //agrego productos al carrito
    agregarProductoAlCarrito(producto) {
        this.productos.push(producto)
        localStorage.setItem("carrito", JSON.stringify(this.productos))
    }

    calcularValorFinal() {
        for (const producto of this.productos) {
            total = total + producto.valor
        }

    }
    buscarProductoPorId(id) {
        for (const producto of productosCargados) {
            if (producto.id == id) {
                this.agregarProductoAlCarrito(producto)
            }
        }
    }

}

const carrito = new Carrito([])
let productosCargados = []
let total = 0

async function cargarProductos() {
    try {
        const dataAPI = await fetch("./js/productos.json")
        const productosJSON = await dataAPI.json()
        if (productosJSON != null) {
            productosJSON.forEach(producto => {
                productosCargados.push(new Producto(producto.id, producto.nombre,
                    producto.precio, producto.descripcion, producto.imagen))
                let cardElemento = document.createElement("div");
                cardElemento.setAttribute("class", "col-12 col-sm-3")
                cardElemento.innerHTML = `<div class="cardProducto card">
                    <img src="${producto.imagen}" class="card-img-top">
                    <div class="card-body";">
                        <h5>${producto.nombre}</h5>
                        <p>${producto.precio}</p>
                        <p>${producto.descripcion}</p>
                        <button type="button" class="btn btn-primary btn-sm" id="${producto.id}">Agregar al carrito</button>
                    </div>
                </div>`
                card.appendChild(cardElemento)

            });
        }
        cargarEventos()
    } catch (error) {
        console.log(error)
    }
}

console.log(productosCargados)

cargarProductos();

function cargarEventos() {
    let botones = Array.from(document.querySelectorAll(".btn-primary"))


    botones.forEach((boton) => {
        console.log(boton)
        boton.onclick = (e) => {
            e.preventDefault()
            carrito.buscarProductoPorId(boton.id)
            Swal.fire({
                position: 'top-half',
                icon: 'success',
                title: 'Tu producto fue agregado con exito!',
                showConfirmButton: false,
                timer: 1000
            })
        }
    });
}