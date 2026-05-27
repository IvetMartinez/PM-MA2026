let pedidos = [];
let totalAcumulado = 0;
function agregarPedido(cliente, producto, precio) {

    const pedido = {
        cliente,
        producto,
        precio
    };

    pedidos.push(pedido);
    totalAcumulado += precio;
    console.log("Pedido agregado");
}

function mostrarPedidos() {

    console.log("=== PEDIDOS REALIZADOS ===");

    pedidos.forEach((pedido, index) => {

        console.log(`
Pedido #${index + 1}
Cliente: ${pedido.cliente}
Producto: ${pedido.producto}
Precio: $${pedido.precio}
`);

    });

    console.log(`
TOTAL ACUMULADO: $${totalAcumulado}
`);
}

module.exports = {
    pedidos,
    agregarPedido,
    mostrarPedidos
};