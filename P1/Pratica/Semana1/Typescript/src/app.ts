import { ConnectionIsNotSetError } from "typeorm";
import {ConsulAll, consult, insertaUser, update, userdelete, viewdelete} from "./crud"
import {iniciar} from "./database"
import "reflect-metadata";
import { CrearVista } from './crud'
import { obtenerUser } from './crud'


async function main() {
    await iniciar()
    const newUser= await insertaUser("walter", "walterG@gmail.com")
    console.log ("usuario creado", newUser.id)

    const vista = await CrearVista("vista Reporte de Productos", newUser.id);
    console.log(vista);

    const vistadelet = await viewdelete(vista!.id)
    console.log(vistadelet)
    const users = await ConsulAll();
    console.log (users)
    const userOne = await consult(newUser.id)
    console.log(userOne)
    const userUpdated= await update(newUser.id, "fabiana", "valentina");
    console.log(userUpdated)
    const userDeleted = await userdelete(newUser.id);
    console.log(userDeleted)
}
main()