import * as rls from 'readline-sync';

function menuVisual() {
    console.log("Bienvenido");
    console.log("----------------------------------------")
    console.log("1 Clientes");
    console.log("2 Proveedores");
    console.log("3 Sucursales")
    console.log("4 Salir")
    console.log("----------------------------------------")

}

function menuClientes(){
    console.log("----------------------------------------")
    console.log("1 Ver lista Clientes");
    console.log("2 Modificar Clientes");
    console.log("3 Eliminar Clientes");
    console.log("4 Volver");
    console.log("----------------------------------------")

}
function menuProveedores(){
    console.log("----------------------------------------")
    console.log("1 Ver lista Proveedores");
    console.log("2 Modificar Proveedores");
    console.log("3 Eliminar Proveedores");
    console.log("4 Volver")
    console.log("----------------------------------------")

}


menuVisual()
let opcionMenu: number = rls.questionInt("Ingrese 1 para ver clientes, 2 para ver proveedores, 3 para salir, cualquier otra tecla para salir: ");

function resultadoMenu(opcionMenu:number) {
    
    
    /*
        if (opcionMenu==1){
            menuClientes();
            let opcionMenu: number = rls.questionInt("Ingrese 1 para ver clientes, 2 para ver proveedores, 3 para salir, cualquier otra tecla para salir: ");
            console.log("Lista clientes")
             
          

        }else if (opcionMenu == 2){

            console.log("Proveedores")
        }else if (opcionMenu == 3){
            menuVisual()
        }
*/
    while (opcionMenu!=3) {

        if (opcionMenu==1){
            menuClientes();
     //       console.log("Lista clientes")
            let opcionMenu: number = rls.questionInt("Ingrese 1 para ver clientes, 2 para modificar cliente, 3 eliminar cliente, 4 para salir: ");
            
            
            if (opcionMenu==4) {
                menuVisual()
                let opcionMenu: number = rls.questionInt("Ingrese 1 para ver clientes, 2 para ver proveedores, 3 para salir, cualquier otra tecla para salir: ");
                 resultadoMenu(opcionMenu);
            }

        }else if (opcionMenu == 2){

            console.log("Proveedores")
        }else if (opcionMenu == 3){
            menuVisual()
        } {
            break
        }
    }
}



console.log("----------------------------------------")
resultadoMenu(opcionMenu);