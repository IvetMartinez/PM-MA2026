
let productos = [
    {
        id: 1,
        nombre: "Hamburguesa",
        precio: 85
    },
    {
        id: 2,
        nombre: "Pizza",
        precio: 120
    }
];


function listarProductos() {
    console.log("=== PRODUCTOS DISPONIBLES ===");
    productos.forEach(producto => {
        console.log(
            `ID: ${producto.id} | ${producto.nombre} | $${producto.precio}`
        );
    });
}

function agregarProducto(id, nombre, precio) {
    productos.push({
        id,
        nombre,
        precio
    });
    console.log(`Producto ${nombre} agregado`);
}


function editarProducto(id, nuevoNombre, nuevoPrecio) {
    let producto = productos.find(p => p.id === id);
    if (producto) {
        producto.nombre = nuevoNombre;
        producto.precio = nuevoPrecio;
        console.log("Producto actualizado");
    } else {
        console.log("Producto no encontrado");
    }
}

function eliminarProducto(id) {
    productos = productos.filter(p => p.id !== id);
    console.log("Producto eliminado");

}

module.exports = {
    productos,
    listarProductos,
    agregarProducto,
    editarProducto,
    eliminarProducto
};