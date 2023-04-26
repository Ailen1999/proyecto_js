class Producto {
    constructor(id, nombre, valor, descripcion, urlImagen) {
        this.id = id;
        this.nombre = nombre;
        this.valor = valor;
        this.descripcion = descripcion;
        this.urlImagen = urlImagen;

    }
}
class Carrito {
    constructor(productos) {
        this.productos = productos;

    }
    //agrego productos al carrito
    agregarProductoAlCarrito(producto) {
        this.productos.push(producto);
        localStorage.setItem("carrito", JSON.stringify(this.productos));
    }

    calcularValorFinal() {
        for (const producto of this.productos) {
            total = total + producto.valor;
        }

    }
    buscarProductoPorId(id) {
        for (const producto of listaProductos) {
            if (producto.id == id) {
                this.agregarProductoAlCarrito(producto);
            }
        }
    }

}

const productoUno = new Producto(1, "Alfombra para baños", 950, "Alfombra Suave", "../imagenes/alfombra_limpieza.jpg")
const productoDos = new Producto(2, "Balde", 700, "Balde de 5 lts", "../imagenes/balde_limpieza.jpg")
const productoTres = new Producto(3, "Jabon Dove", 300, "Jabon corporal", "../imagenes/jabon_limpieza.jpg")
const productoCuatro = new Producto(4, "Cepillo", 1200, "Cepillo corporal para ducha", "../imagenes/cepillo_espalda_limpieza.jpg")
const productoCinco = new Producto(5, "Toallas femeninas", 450, "Toallas nocturnas", "../imagenes/toallitas_limpieza.jpg")
const productoSeis = new Producto(6, "Desodorante Pinol", 550, "Desodorante para pisos", "../imagenes/desodorante_pisos.jpg")
const productoSiete = new Producto(7, "Desodorante Dove", 890, "Desodorante para mujer", "../imagenes/desodorante_limpieza.jpg")
const productoOcho = new Producto(8, "Esponja corporal", 620, "Esponja de baño", "../imagenes/esponja_cuerpo_limpieza.png")
const carrito = new Carrito([])
let listaProductos = [productoUno, productoDos, productoTres, productoCuatro, productoCinco, productoSeis, productoSiete, productoOcho]
let total = 0


function cargarProductosPorFila(desde, hasta, fila) {
    let productosACargar = listaProductos.slice(desde, hasta);
    console.log(productosACargar);
    for (const producto of productosACargar) {
        let row = document.getElementById(fila);
        let col = document.createElement("div");
        col.setAttribute("class", "col-12 col-sm-3");
        col.innerHTML = "<div class=\"card\">\
  <img src="+ producto.urlImagen + " class=\"card-img-top img-thumbnail\" alt=\"...\">\
  <div class=\"card-body\">\
    <h5 class=\"card-title\">"+ producto.nombre + "</h5>\
    <p class=\"card-text\">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, laborum.\
    </p>\
    <button type=\"button\" class=\"btn btn-primary btn-sm\" id="+ producto.id + ">Agregar al carrito</button>\
  </div>\
</div>"
        row.appendChild(col)

    }
}


function cargarEventos() {
    let botones = document.getElementsByClassName("btn-primary");
    for (const boton of botones) {
        boton.onclick = (e) => {
            e.preventDefault();
            carrito.buscarProductoPorId(boton.id);
            Swal.fire({
                position: 'top-half',
                icon: 'success',
                title: 'Tu producto fue agregado con exito!',
                showConfirmButton: false,
                timer: 1500
              })
        }

    }
}
cargarProductosPorFila(0, 4, "fila-uno");
cargarProductosPorFila(4, 8, "fila-dos")
cargarEventos();
