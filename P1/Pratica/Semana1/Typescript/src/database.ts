import {AppDataSource} from './data-source'
import 'reflect-metadata'
export const iniciar= async() => {
    try{
        await AppDataSource.initialize()
        console.log("base de datos iniciada.. :D")
        return AppDataSource;
    }
    catch(ex){
        console.log("Inicio fallido :(")
        throw(ex)
    }
}