let productos = JSON.parse(localStorage.getItem("carrito"))
const btnFinalizar= document.querySelector("#btn-finalizar")
function cargarCarrito() {
	for (const element of productos) {


		let container = document.getElementById("items")

		let itemEnLaTabla = document.createElement("tr")
		itemEnLaTabla.innerHTML = "<th scope=\"row\">" + element.id + "</th>\
		<td>"+ element.nombre + "</td>\
		<td>1</td>\
		<td>$ <span>"+ element.valor + "</span></td>"

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
	<td class=\"font-weight-bold\">$ <span>"+ total + "</span></td>"


}

btnFinalizar.addEventListener("click", (e)=>{
e.preventDefault()
Swal.fire({
	title: 'Gracias por tu compra!',
	icon:'success',
	width: 600,
	padding: '3em',
	color: '#716add',
	background: '#fff url(/images/trees.png)',
	backdrop: `
	  rgba(0,0,123,0.4)
	  url("../imagenes/Cat.gif")
	  left top
	  no-repeat
	`
}).then((result) => {
	if (result.isConfirmed) {
		setTimeout(() => {
			window.location.href = "../index.html"
		},1000);
		localStorage.removeItem("carrito")
	}
  })

})

cargarCarrito();
calcularTotal();