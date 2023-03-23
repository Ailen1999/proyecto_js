
class Producto {
    constructor(id, nombre, valor, descripcion, urlImagen) {
        this.id = id;
        this.nombre = nombre;
        this.valor = valor;
        this.descripcion = descripcion;
        this.urlImagen = urlImagen;

    }
}
class Carrito{
    constructor(productos){
        this.productos = productos;

    }
    //agrego productos al carrito
    agregarProductoAlCarrito(producto){
        this.productos.push(producto);
    }

    calcularValorFinal(){
        for (const producto of this.productos){
            total=total+producto.valor;
        }
        alert("El total de su compra es: "+total+" ¡Gracias por su compra!");
    
    }

}


let idDeProducto = prompt("Ingrese el id del producto que quiere comprar. (Valores del 1 al 8)");
const productoUno= new Producto(1,"Alfombra para baños", 950, "Alfombra Suave", "https://www.google.com/imgres?imgurl=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_784101-MLA49988293008_052022-O.webp&tbnid=5PAdxHM71ARfCM&vet=12ahUKEwiX_9nc0PD9AhWKUbgEHZCaBdoQMygFegUIARCxAg..i&imgrefurl=https%3A%2F%2Fwww.dmbazar.com.ar%2FMLA-1137826435-alfombra-bano-antideslizante-shaggy-pelo-suave-dm-bazar-_JM&docid=1i-rjnZhK-AhIM&w=495&h=500&q=alfombra%20de%20ba%C3%B1o&ved=2ahUKEwiX_9nc0PD9AhWKUbgEHZCaBdoQMygFegUIARCxAg")
const productoDos = new Producto( 2 , "Balde", 700, "Balde de 5 lts","https://www.google.com/url?sa=i&url=https%3A%2F%2Fpucara.com.ar%2Fproduct%2Fbalde-plastico-mediano-colores-varios%2F&psig=AOvVaw3tyPqdrOt80wVSKUFDKFAw&ust=1679612138710000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMiSkvnQ8P0CFQAAAAAdAAAAABAE" )
const productoTres = new Producto (3 ,"Jabon Dove",300, "Jabon corporal", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdiaonline.supermercadosdia.com.ar%2Fjabon-de-tocador-dove-original-individual-90-grr-83011%2Fp&psig=AOvVaw3utufEuOC27k326Kocsji5&ust=1679612275125000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMDP_rnR8P0CFQAAAAAdAAAAABAE" )
const productoCuatro = new Producto( 4 ,"Cepillo", 1200, "Cepillo corporal para ducha", "https://www.google.com/url?sa=i&url=https%3A%2F%2Farticulo.mercadolibre.com.ar%2FMLA-925981053-cepillo-corporal-para-bano-ducha-calidad-reforzada-banera-_JM&psig=AOvVaw1vzD_Wtq4Uzr5cHXltAsA7&ust=1679612368928000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOD97-bR8P0CFQAAAAAdAAAAABAE" )
const productoCinco = new Producto( 5 , "Toallas femeninas",450, "Toallas nocturnas","https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.farmaciastkl.com%2Ftoallas-femeninas-seca-nocturna-con-alas-8-unidades%2Fp&psig=AOvVaw2-A0gAiMqOxhDQP5ueaNSm&ust=1679612423777000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPjPgYHS8P0CFQAAAAAdAAAAABAE" )
const productoSeis = new Producto (6 , "Desodorante Pinol", 550, "Desodorante para pisos", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.youtube.com%2Fchannel%2FUCfm7K5kidtBCP6VuBEIXGCw&psig=AOvVaw2TWs_xrhPxEQisXHbb9Nfg&ust=1679612541787000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNCEq7nS8P0CFQAAAAAdAAAAABAE" )
const productoSiete = new Producto (7 , "Desodorante Dove", 890, "Desodorante para mujer", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.farmalife.com.ar%2Fdove-deo-aer-ap-original-12x87g-150ml--3002125796%2Fp&psig=AOvVaw3RgXX176Q7HX_342ylhf2z&ust=1679612607399000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjb0NjS8P0CFQAAAAAdAAAAABAE" )
const productoOcho = new Producto( 8 , "Esponja corporal", 620, "Esponja de baño", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcomercioelsol.cl%2Fproduct%2Fespuma-de-bano%2F&psig=AOvVaw0thYf5kkWOlaoEDWtG9Mvf&ust=1679612684709000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNDztP3S8P0CFQAAAAAdAAAAABAE" )
const carrito = new Carrito([])
let listaProductos = [productoUno,productoDos,productoTres,productoCuatro,productoCinco,productoSeis,productoSiete,productoOcho]
let total=0

buscarProductoPorId(idDeProducto);


let agregarOtroProducto =  prompt("Desea agregar otro producto? (si o no)");

if(agregarOtroProducto == "si"){
    idDeProducto = prompt("Ingrese el id del producto que quiere comprar. (Valores del 1 al 8)");
    buscarProductoPorId(idDeProducto);
    alert("Ha seleccionado el maximo de productos, sera redirigido al carrito de compras");
    verCarrito();
}
 if(agregarOtroProducto == "no"){
    verCarrito();

 }
//Se muestra en pantalla el listado de producto dentro del carrito
function verCarrito(){
    alert("Mi carrito")
    for (const producto of carrito.productos){
        alert("Producto: "+producto.nombre+" valor: "+producto.valor);
    }
    carrito.calcularValorFinal()
}

//Se busca un producto por id
function buscarProductoPorId(id){
    for(const producto of listaProductos){
        if (producto.id == id){
            alert ("El producto seleccionado es: "+producto.nombre+" valor: "+producto.valor);
            carrito.agregarProductoAlCarrito(producto);

        }
    }
}




