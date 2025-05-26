import { isAwaitKeyword } from "typescript";
import { AppDataSource } from "./data-source";
import { user } from "./models/user";
import { view } from "./models/view";

export const insertaUser= async (nombre:string, email: string,) =>{
    const user1 = new user();
    user1.correo = email;
    user1.nombre = nombre;
    return await AppDataSource.manager.save(user1)
}

export const ConsulAll = async () => {

    return await AppDataSource.manager.find(user)
}

export const consult = async (id: number) => {

    return await AppDataSource.manager.findOne(user, {where: {id}})
}

export const update = async (id: number, nombre: string, correo: string, ) => {
    const user2 = await consult (id);
    if (user2){
        user2.correo = correo;
        user2.nombre = nombre;
    return await AppDataSource.manager.save((user2))
    }
    return null
}

export const userdelete = async (id: number) => {
    const user2 = await consult (id)
    if (user2){
        return await AppDataSource.manager.remove(user2);
    }
    return "Usuario no encontrado"
}

export const obtenerUsers = async () => {
    return await AppDataSource.manager.find(user);
}

export const obtenerUser = async (id:number) => {
    return await AppDataSource.manager.findOne(user,{where: {id}});
}

export const CrearVista = async (vista: string, userId: number) => {
    const user1 = await obtenerUser(userId);
    if (user1){
        const newview = new view();
        newview.vista = vista;
        newview.user = user1;
    return await AppDataSource.manager.save(newview);
    }
    return null
}

export const viewdelete = async (id: number) =>{
    const view1 = await AppDataSource.manager.findOne(view,{where:{id}})
    if (view1){
        return await AppDataSource.manager.remove(view1)
    }
    return null
}