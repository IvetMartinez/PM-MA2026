
const cocina = require("./cocina");
const cliente = require("./cliente");
const caja = require("./caja");

const readline = require("readline-sync");

let opcion;
do {

    console.log(`
MINI ERP RESTAURANTE
1. Cocina
2. Cliente
3. Caja
4. Salir
`);

    opcion = readline.question("Seleccione una opcion: ");

    switch (opcion) {


        case "1":

            let opcionCocina;

            do {

                console.log(`
COCINA 
1. Listar productos
2. Agregar producto
3. Editar producto
4. Eliminar producto
5. Regresar
`);

                opcionCocina = readline.question("Seleccione: ");
                switch (opcionCocina) {
                    case "1":
                        cocina.listarProductos();
                        break;
                    case "2":
                        let nombreCliente = readline.question(
                            "Nombre del cliente: "
                        );

                        cliente.mostrarBienvenida(nombreCliente);
                        cliente.mostrarMenu(cocina.productos);

                        let idProducto = Number(
                            readline.question(
                                "Seleccione el ID del producto: "
                            )
                        );

                        let productoSeleccionado = cocina.productos.find(
                            p => p.id === idProducto
                        );

                        if (productoSeleccionado) {

                            console.log(`
                                Producto seleccionado:
                                ${productoSeleccionado.nombre}
                                Precio: $${productoSeleccionado.precio}
        `);
                            caja.agregarPedido(
                                nombreCliente,
                                productoSeleccionado.nombre,
                                productoSeleccionado.precio
                            );

                            cliente.mostrarPedido(
                                nombreCliente,
                                productoSeleccionado.nombre,
                                productoSeleccionado.precio
                            );
                        } else {

                            console.log("Producto no encontrado");

                        }

                        break;

                    case "3":

                        let idEditar = Number(
                            readline.question("ID producto: ")
                        );

                        let nuevoNombre = readline.question(
                            "Nuevo nombre: "
                        );

                        let nuevoPrecio = Number(
                            readline.question("Nuevo precio: ")
                        );

                        cocina.editarProducto(
                            idEditar,
                            nuevoNombre,
                            nuevoPrecio
                        );

                        break;

                    case "4":
3
                        let idEliminar = Number(
                            readline.question("ID eliminar: ")
                        );

                        cocina.eliminarProducto(idEliminar);

                        break;

                }

            } while (opcionCocina !== "5");

            break;

        case "2":

            let nombreCliente = readline.question(
                "Nombre del cliente: "
            );

            cliente.mostrarBienvenida(nombreCliente);

            cliente.mostrarMenu(cocina.productos);

            break;


        case "3":

            let clientePedido = readline.question(
                "Cliente: "
            );

            let productoPedido = readline.question(
                "Producto: "
            );

            let precioPedido = Number(
                readline.question("Precio: ")
            );

            caja.agregarPedido(
                clientePedido,
                productoPedido,
                precioPedido
            );

            caja.mostrarPedidos();

            break;

        case "4":
            console.log("Saliendo del sistema...");
            break;

        default:
            console.log("Opcion invalida");

    }

} while (opcion !== "4");