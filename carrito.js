let productos = JSON.parse(localStorage.getItem("carrito"));
function cargarCarrito() {
	for (const element of productos) {


		let container = document.getElementById("items");

		let itemEnLaTabla = document.createElement("tr");
		// Insertar HTML interno
		itemEnLaTabla.innerHTML = "<th scope=\"row\">" + element.id + "</th>\
		<td>"+ element.nombre + "</td>\
		<td>1</td>\
		<td>$ <span>"+ element.valor + "</span></td>";

		container.append(itemEnLaTabla);
		console.log(element)
	}
}

function calcularTotal() {
	let total = 0
	productos.forEach(producto => {
		total = producto.valor + total

	})

	let container = document.getElementById("footer")

	container.innerHTML = "<th scope=\"row\" colspan=\"2\">Total productos</th>\
	<td>"+ productos.length + "</td>\
	<td class=\"font-weight-bold\">$ <span>"+ total + "</span></td>";


}
cargarCarrito();
calcularTotal();