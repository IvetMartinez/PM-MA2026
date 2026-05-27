function mostrarBienvenida(cliente) {

    console.log(`Bienvenido ${cliente} Gracias por comprar con nosotros
`);
}


function mostrarMenu(productos) {

    console.log("=== MENÚ DISPONIBLE ===");
    productos.forEach(producto => {
        console.log(`
${producto.nombre}
Precio: $${producto.precio}
`);
    });

}

function mostrarPedido(cliente, producto, total) {

    console.log(`
Cliente: ${cliente}
Producto: ${producto}
Total: $${total}
`);
}

module.exports = {
    mostrarBienvenida,
    mostrarMenu,
    mostrarPedido
};